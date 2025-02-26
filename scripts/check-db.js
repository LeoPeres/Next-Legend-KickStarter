#!/usr/bin/env node

/**
 * Database Check Script
 *
 * This script checks if Docker is installed and if the PostgreSQL container is running.
 * It provides guidance on how to set up the database environment.
 */

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

// ANSI color codes for terminal output
const colors = {
  reset: "\x1b[0m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
  white: "\x1b[37m",
};

// Helper function to print colored messages
function print(color, message) {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

// Check if Docker is installed
function checkDocker() {
  try {
    execSync("docker --version", { stdio: "ignore" });
    print("green", "✓ Docker is installed");
    return true;
  } catch (error) {
    print("red", "✗ Docker is not installed or not in PATH");
    print("yellow", "Please install Docker from https://www.docker.com/get-started");
    return false;
  }
}

// Check if Docker Compose is installed
function checkDockerCompose() {
  try {
    execSync("docker-compose --version", { stdio: "ignore" });
    print("green", "✓ Docker Compose is installed");
    return true;
  } catch (error) {
    print("red", "✗ Docker Compose is not installed or not in PATH");
    print("yellow", "Please install Docker Compose from https://docs.docker.com/compose/install/");
    return false;
  }
}

// Check if PostgreSQL container is running
function checkPostgresContainer() {
  try {
    const output = execSync('docker ps --filter "name=next_legend_db" --format "{{.Status}}"')
      .toString()
      .trim();
    if (output) {
      print("green", `✓ PostgreSQL container is running: ${output}`);
      return true;
    } else {
      print("yellow", "! PostgreSQL container is not running");
      return false;
    }
  } catch (error) {
    print("red", "✗ Failed to check PostgreSQL container status");
    return false;
  }
}

// Start PostgreSQL container if it's not running
function startPostgresContainer() {
  try {
    print("cyan", "Starting PostgreSQL container...");
    execSync("docker-compose up -d postgres", { stdio: "inherit" });
    print("green", "✓ PostgreSQL container started successfully");
    return true;
  } catch (error) {
    print("red", "✗ Failed to start PostgreSQL container");
    print("red", error.message);
    return false;
  }
}

// Check if docker-compose.yml exists
function checkDockerComposeFile() {
  const filePath = path.join(process.cwd(), "docker-compose.yml");
  if (fs.existsSync(filePath)) {
    print("green", "✓ docker-compose.yml file exists");
    return true;
  } else {
    print("red", "✗ docker-compose.yml file not found");
    return false;
  }
}

// Main function
async function main() {
  print("blue", "=== Database Environment Check ===");

  const dockerInstalled = checkDocker();
  if (!dockerInstalled) {
    print("yellow", "You need to install Docker to run the PostgreSQL container.");
    print("yellow", "Alternatively, you can install PostgreSQL directly on your system.");
    print("yellow", "See DATABASE.md for more information.");
    process.exit(1);
  }

  const dockerComposeInstalled = checkDockerCompose();
  if (!dockerComposeInstalled) {
    print("yellow", "You need to install Docker Compose to run the PostgreSQL container.");
    process.exit(1);
  }

  const dockerComposeFileExists = checkDockerComposeFile();
  if (!dockerComposeFileExists) {
    print("yellow", "Please create a docker-compose.yml file in the project root.");
    process.exit(1);
  }

  const containerRunning = checkPostgresContainer();
  if (!containerRunning) {
    print("cyan", "Would you like to start the PostgreSQL container? (y/n)");
    process.stdout.write("> ");

    // Simple way to get user input in Node.js
    process.stdin.resume();
    process.stdin.setEncoding("utf8");

    process.stdin.on("data", (data) => {
      const input = data.toString().trim().toLowerCase();
      if (input === "y" || input === "yes") {
        startPostgresContainer();
      } else {
        print("yellow", "PostgreSQL container not started. You may need to start it manually.");
      }
      process.exit(0);
    });
  } else {
    print("blue", "=== Database is ready to use ===");
    print("cyan", "You can now run:");
    print("white", "  npm run db:migrate    # Run database migrations");
    print("white", "  npm run db:studio     # Open Drizzle Studio to view the database");
    process.exit(0);
  }
}

main().catch((error) => {
  print("red", "An error occurred:");
  print("red", error.message);
  process.exit(1);
});
