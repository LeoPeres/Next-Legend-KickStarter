/**
 * Environment Variables Management
 *
 * This module provides a centralized way to access environment variables
 * with proper validation and type safety.
 */
import * as dotenv from "dotenv";

// Load environment variables from .env.local file when not in browser
if (typeof window === "undefined") {
  dotenv.config({ path: ".env.local" });
}

// Define environment variable types
type EnvironmentVariable = {
  name: string;
  value: string;
  required: boolean;
  description: string;
};

// Determine if we're in development mode
const isDevelopment = process.env.NODE_ENV === "development";

// Supabase environment variables
export const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL || "";
export const SUPABASE_ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY || "";

// Application environment variables
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

// Database environment variables
export const DATABASE_URL = process.env.DATABASE_URL || "";

// Redis environment variables
export const REDIS_URL = process.env.REDIS_URL || "redis://localhost:6379";

// Define all environment variables with metadata
const environmentVariables: EnvironmentVariable[] = [
  {
    name: "SUPABASE_URL",
    value: SUPABASE_URL,
    required: !isDevelopment, // Only required in production
    description: "The URL of your Supabase project",
  },
  {
    name: "SUPABASE_ANON_KEY",
    value: SUPABASE_ANON_KEY,
    required: !isDevelopment, // Only required in production
    description: "The anonymous key for your Supabase project",
  },
  {
    name: "APP_URL",
    value: APP_URL,
    required: false,
    description: "The URL of your application (defaults to http://localhost:3000)",
  },
  {
    name: "DATABASE_URL",
    value: DATABASE_URL,
    required: true,
    description: "The PostgreSQL connection string for Drizzle ORM",
  },
  {
    name: "REDIS_URL",
    value: REDIS_URL,
    required: false,
    description: "The Redis connection string for caching (defaults to redis://localhost:6379)",
  },
];

/**
 * Validates all environment variables
 * @returns {boolean} True if all required environment variables are set, false otherwise
 */
export function validateEnv(): boolean {
  const missingEnvVars = environmentVariables.filter((envVar) => envVar.required && !envVar.value);

  if (missingEnvVars.length > 0) {
    const missingVarNames = missingEnvVars.map((envVar) => envVar.name).join(", ");
    if (typeof window === "undefined") {
      console.error(`Missing required environment variables: ${missingVarNames}`);
      console.error(
        "Please check your .env.local file and make sure all required variables are set."
      );
    }
    return false;
  }

  return true;
}

/**
 * Gets information about all environment variables
 * @returns {EnvironmentVariable[]} Array of environment variables with metadata
 */
export function getEnvInfo(): Omit<EnvironmentVariable, "value">[] {
  return environmentVariables.map(({ name, required, description }) => ({
    name,
    required,
    description,
  }));
}

// Validate environment variables on module import (server-side only)
if (typeof window === "undefined") {
  validateEnv();
}
