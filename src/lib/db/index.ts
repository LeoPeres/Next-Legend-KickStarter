import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
import { DATABASE_URL } from "../env";

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

  await migrationClient.end();
}
