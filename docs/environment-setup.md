# Environment Setup Guide

This guide will help you set up your development environment for the Next-Legend-KickStarter project.

## Prerequisites

Before you begin, make sure you have the following installed:

- **Node.js** (v18.x or later)
- **npm** (v9.x or later)
- **Git** (v2.x or later)
- **Docker** (optional, for local database)
- **PostgreSQL** (if not using Docker)

## Step 1: Clone the Repository

```bash
git clone https://github.com/your-username/Next-Legend-KickStarter.git
cd Next-Legend-KickStarter
```

## Step 2: Install Dependencies

```bash
npm install
```

## Step 3: Set Up Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```
# Database
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/next_legend"

# Supabase
SUPABASE_URL="https://your-supabase-url.supabase.co"
SUPABASE_ANON_KEY="your-supabase-anon-key"

# Sentry (for error tracking)
SENTRY_DSN="your-sentry-dsn"
SENTRY_AUTH_TOKEN="your-sentry-auth-token"

# Analytics
NEXT_PUBLIC_ANALYTICS_ID="your-analytics-id"
```

### Environment Variables for Different Environments

- `.env.local` - Local development
- `.env.staging` - Staging environment
- `.env.production` - Production environment

## Step 4: Set Up the Database

### Option 1: Using Docker

The project includes a Docker Compose file for setting up PostgreSQL:

```bash
docker-compose up -d postgres
```

### Option 2: Using Local PostgreSQL

If you have PostgreSQL installed locally:

1. Create a new database:
   ```bash
   createdb next_legend
   ```

2. Update the `DATABASE_URL` in your `.env.local` file to point to your local PostgreSQL instance.

### Run Migrations

After setting up the database, run the migrations:

```bash
npm run db:migrate
```

## Step 5: Set Up Supabase (Optional)

If you're using Supabase for authentication and storage:

1. Create a new project on [Supabase](https://supabase.com/)
2. Get your project URL and anon key from the project settings
3. Update the Supabase environment variables in your `.env.local` file

## Step 6: Set Up Sentry (Optional)

If you're using Sentry for error tracking:

1. Create a new project on [Sentry](https://sentry.io/)
2. Get your DSN and auth token
3. Update the Sentry environment variables in your `.env.local` file

## Step 7: Start the Development Server

```bash
npm run dev
```

Your application should now be running at [http://localhost:3000](http://localhost:3000).

## Additional Setup

### Setting Up Storybook

To run Storybook for component development:

```bash
npm run storybook
```

Storybook will be available at [http://localhost:6006](http://localhost:6006).

### Setting Up Testing

#### Unit Tests with Jest

Run unit tests:

```bash
npm run test
```

Run tests in watch mode:

```bash
npm run test:watch
```

Generate coverage report:

```bash
npm run test:coverage
```

#### E2E Tests with Playwright

Install Playwright browsers:

```bash
npx playwright install
```

Run E2E tests:

```bash
npm run test:e2e
```

Run E2E tests with UI:

```bash
npm run test:e2e:ui
```

### Git Hooks

The project uses Husky for Git hooks. These are automatically set up when you run `npm install`.

The hooks include:
- Pre-commit: Runs linting and formatting on staged files
- Pre-push: Runs tests

## Troubleshooting

### Database Connection Issues

If you're having trouble connecting to the database:

1. Make sure your PostgreSQL server is running
2. Check that the `DATABASE_URL` in your `.env.local` file is correct
3. Try running `npm run db:check` to verify the connection

### Supabase Authentication Issues

If you're having trouble with Supabase authentication:

1. Make sure your Supabase project is set up correctly
2. Check that the Supabase environment variables in your `.env.local` file are correct
3. Make sure you've enabled the authentication providers you want to use in the Supabase dashboard

### Node.js Version Issues

This project requires Node.js v18 or later. If you're using an older version, you may encounter errors. You can use [nvm](https://github.com/nvm-sh/nvm) to manage multiple Node.js versions.

## Next Steps

Now that your environment is set up, you can:

- Explore the codebase
- Run the application
- Make changes and see them reflected in real-time
- Run tests to ensure your changes don't break existing functionality

For more information on the project structure and architecture, see [project-structure.md](./project-structure.md). 