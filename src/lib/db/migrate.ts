import { runMigrations } from "./index";
import { validateEnv } from "../env";
import * as dotenv from "dotenv";

// Load environment variables from .env.local file
dotenv.config({ path: ".env.local" });

/**
 * Migration Script
 *
 * This script runs database migrations using Drizzle ORM.
 * It can be executed with `npm run db:migrate`.
 */
async function main() {
  console.log("Starting database migrations...");

  // Validate environment variables
  if (!validateEnv()) {
    console.error("Environment validation failed. Please check your .env.local file.");
    process.exit(1);
  }

  try {
    await runMigrations();
    console.log("Migrations completed successfully!");
    process.exit(0);
  } catch (error: any) {
    console.error("Error running migrations:", error);

    // Provide more helpful error messages based on error type
    if (error.code === "ECONNREFUSED") {
      console.error("\nDatabase connection refused. Please check that:");
      console.error("1. PostgreSQL is installed and running");
      console.error("2. The DATABASE_URL in .env.local is correct");
      console.error("3. The database specified in DATABASE_URL exists");
      console.error("\nTo create the database, you can run:");
      console.error("createdb next_legend");
    }

    process.exit(1);
  }
}

main();
