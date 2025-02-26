# Database Setup and Migration Guide

This document provides instructions for setting up the database and running migrations for the Next Legend project.

## Prerequisites

- Docker and Docker Compose (for local development)
- Node.js v16.13.1 or higher
- npm v8.1.2 or higher

## Local Development Setup

### Using Docker (Recommended)

1. Start the PostgreSQL container:

```bash
docker-compose up -d postgres
```

This will start a PostgreSQL server on port 5432 with the following configuration:
- Username: postgres
- Password: postgres
- Database: next_legend

2. Verify the container is running:

```bash
docker ps
```

You should see the `next_legend_db` container running.

### Using a Local PostgreSQL Installation

If you prefer to use a local PostgreSQL installation:

1. Install PostgreSQL on your system
2. Create a database:

```bash
createdb next_legend
```

3. Update the `.env.local` file with your database credentials

## Environment Configuration

Ensure your `.env.local` file contains the following variables:

```
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/next_legend"
```

## Running Migrations

To run database migrations:

```bash
npm run db:migrate
```

## Generating Migrations

After making changes to the schema files, generate new migrations:

```bash
npm run db:generate
```

This will create new SQL migration files in the `drizzle/migrations` directory.

## Viewing the Database

You can use Drizzle Studio to view and manage your database:

```bash
npm run db:studio
```

This will start a web interface at http://localhost:4983 where you can browse your database schema and data.

## Troubleshooting

### Connection Refused

If you see a "Connection Refused" error:

1. Check if the PostgreSQL server is running
2. Verify the connection details in your `.env.local` file
3. Ensure the database exists

### Missing Environment Variables

If you see "Missing required environment variables":

1. Check your `.env.local` file
2. Make sure all required variables are set
3. Restart your development server

## Schema Structure

The database schema is defined in the following files:

- `src/lib/db/schema/users.ts` - User accounts
- `src/lib/db/schema/profiles.ts` - User profiles
- `src/lib/db/schema/posts.ts` - Blog posts
- `src/lib/db/schema/comments.ts` - Post comments
- `src/lib/db/schema/categories.ts` - Post categories
- `src/lib/db/schema/tags.ts` - Post tags 