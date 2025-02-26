import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";

// Load environment variables from .env.local
dotenv.config({ path: ".env.local" });

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL environment variable is not set");
}

// Parse the DATABASE_URL to extract host, port, user, password, and database
const url = new URL(process.env.DATABASE_URL);
const host = url.hostname;
const port = parseInt(url.port || "5432");
const user = url.username;
const password = url.password;
const database = url.pathname.substring(1); // Remove the leading '/'

export default {
  schema: "./src/lib/db/schema/*",
  out: "./drizzle/migrations",
  dialect: "postgresql",
  dbCredentials: {
    host,
    port,
    user,
    password,
    database,
    ssl: false,
  },
  verbose: true,
  strict: true,
} satisfies Config;
