import { db } from ".";
import { SQL, sql } from "drizzle-orm";
import { QueryResult } from "pg";

/**
 * Query Optimization Utilities
 *
 * This file contains utilities for optimizing database queries.
 */

// Cache for prepared statements
const preparedStatements: Record<string, SQL> = {};

/**
 * Prepare a SQL query for repeated execution
 * @param name The name of the prepared statement
 * @param query The SQL query to prepare
 * @returns The prepared SQL query
 */
export function prepareQuery(name: string, query: SQL): SQL {
  if (!preparedStatements[name]) {
    preparedStatements[name] = query;
  }
  return preparedStatements[name];
}

/**
 * Execute a query with performance logging
 * @param query The SQL query to execute
 * @returns The query result
 */
export async function executeQuery<T>(query: SQL): Promise<T[]> {
  const startTime = performance.now();

  try {
    const result = await db.execute(query);

    const endTime = performance.now();
    const duration = endTime - startTime;

    // Log slow queries in development
    if (process.env.NODE_ENV === "development" && duration > 100) {
      console.warn(`Slow query detected (${duration.toFixed(2)}ms): ${query.toString()}`);
    }

    return result as T[];
  } catch (error) {
    console.error("Query execution error:", error);
    throw error;
  }
}

/**
 * Execute a paginated query with optimized performance
 * @param baseQuery The base SQL query
 * @param page The page number (1-indexed)
 * @param pageSize The number of items per page
 * @returns The paginated results
 */
export async function paginatedQuery<T>(
  baseQuery: SQL,
  page: number = 1,
  pageSize: number = 10
): Promise<{ data: T[]; total: number; pages: number }> {
  // Ensure valid pagination parameters
  const validPage = Math.max(1, page);
  const validPageSize = Math.max(1, Math.min(100, pageSize)); // Limit max page size to 100

  // Calculate offset
  const offset = (validPage - 1) * validPageSize;

  // Create count query
  const countQuery = sql`SELECT COUNT(*) FROM (${baseQuery}) AS count_query`;

  // Create paginated query
  const paginatedQuery = sql`${baseQuery} LIMIT ${validPageSize} OFFSET ${offset}`;

  // Execute both queries in parallel
  const [countResult, dataResult] = await Promise.all([
    executeQuery<{ count: string }>(countQuery),
    executeQuery<T>(paginatedQuery),
  ]);

  const total = parseInt(countResult[0]?.count || "0", 10);
  const pages = Math.ceil(total / validPageSize);

  return {
    data: dataResult,
    total,
    pages,
  };
}

/**
 * Create a query with optimized joins
 * @param mainTable The main table name
 * @param joins Array of join configurations
 * @returns The optimized SQL query
 */
export function optimizedJoinQuery(
  mainTable: string,
  joins: Array<{
    table: string;
    alias?: string;
    type?: "INNER" | "LEFT" | "RIGHT";
    on: SQL;
    select?: string[];
  }>,
  where?: SQL,
  orderBy?: SQL,
  groupBy?: SQL
): SQL {
  // Start with the main table
  let query = sql`SELECT ${mainTable}.*`;

  // Add join column selections
  joins.forEach((join) => {
    if (join.select && join.select.length > 0) {
      const alias = join.alias || join.table;
      join.select.forEach((column) => {
        query = sql`${query}, ${sql.raw(alias)}.${sql.raw(column)} AS ${sql.raw(`${alias}_${column}`)}`;
      });
    }
  });

  // Add FROM clause
  query = sql`${query} FROM ${sql.raw(mainTable)}`;

  // Add JOINs
  joins.forEach((join) => {
    const joinType = join.type || "INNER";
    const alias = join.alias || join.table;
    query = sql`${query} ${sql.raw(joinType)} JOIN ${sql.raw(join.table)} AS ${sql.raw(alias)} ON ${join.on}`;
  });

  // Add WHERE clause if provided
  if (where) {
    query = sql`${query} WHERE ${where}`;
  }

  // Add GROUP BY clause if provided
  if (groupBy) {
    query = sql`${query} GROUP BY ${groupBy}`;
  }

  // Add ORDER BY clause if provided
  if (orderBy) {
    query = sql`${query} ORDER BY ${orderBy}`;
  }

  return query;
}

/**
 * Execute a batch insert for better performance with large datasets
 * @param tableName The table to insert into
 * @param columns The columns to insert
 * @param values The values to insert
 * @param batchSize The size of each batch
 * @returns The number of rows inserted
 */
export async function batchInsert(
  tableName: string,
  columns: string[],
  values: any[][],
  batchSize: number = 1000
): Promise<number> {
  let insertedRows = 0;

  // Process in batches
  for (let i = 0; i < values.length; i += batchSize) {
    const batch = values.slice(i, i + batchSize);

    // Create values for the batch insert
    const valueSets: string[] = [];

    batch.forEach((row) => {
      // Convert each value to a SQL-safe string
      const sqlValues = row.map((value: any) => {
        if (value === null) return "NULL";
        if (typeof value === "string") return `'${value.replace(/'/g, "''")}'`;
        if (typeof value === "number") return value.toString();
        if (typeof value === "boolean") return value ? "TRUE" : "FALSE";
        if (value instanceof Date) return `'${value.toISOString()}'`;
        return `'${String(value).replace(/'/g, "''")}'`;
      });

      valueSets.push(`(${sqlValues.join(", ")})`);
    });

    // Construct the query
    const query = `
      INSERT INTO ${tableName} (${columns.join(", ")})
      VALUES ${valueSets.join(", ")}
    `;

    // Execute the query
    await db.execute(sql.raw(query));
    insertedRows += batch.length;
  }

  return insertedRows;
}
