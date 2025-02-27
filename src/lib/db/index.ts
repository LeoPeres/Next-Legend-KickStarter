import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
import { DATABASE_URL } from "../env";
import { addIndexes } from "./migrations/add-indexes";

// For migrations
const migrationClient = postgres(DATABASE_URL, { max: 1 });

// For query purposes
const queryClient = postgres(DATABASE_URL);

export const db = drizzle(queryClient);

// This function will run migrations on the database
// It's useful to call this function on app startup
export async function runMigrations() {
  const startTime = Date.now();
  console.log("Running migrations...");

  await migrate(drizzle(migrationClient), {
    migrationsFolder: "drizzle/migrations",
  });

  const endTime = Date.now();
  console.log(`Migrations completed in ${endTime - startTime}ms`);

  // Add performance optimization indexes
  console.log("Adding performance optimization indexes...");
  await addIndexes();

  await migrationClient.end();
}

// Function to optimize database connections
export function optimizeDatabaseConnections() {
  // Set connection pool configuration
  const poolConfig = {
    max: 20, // Maximum number of connections in the pool
    min: 5, // Minimum number of connections to keep idle
    idleTimeoutMillis: 30000, // How long a connection can be idle before being closed
    connectionTimeoutMillis: 2000, // How long to wait for a connection
  };

  // Return optimized postgres client
  return postgres(DATABASE_URL, poolConfig);
}

// Export the optimized client
export const optimizedDb = drizzle(optimizeDatabaseConnections());
