# Environment Setup Guide

This guide will walk you through setting up your development environment for the Next-Legend-KickStarter project.

## Prerequisites

Before you begin, make sure you have the following installed on your machine:

- **Node.js** (v18.0.0 or later)
- **npm** (v9.0.0 or later)
- **Git** (v2.30.0 or later)
- **PostgreSQL** (v14.0 or later)
- **Visual Studio Code** (recommended) or your preferred code editor

## Installation Steps

### 1. Clone the Repository

```bash
git clone https://github.com/your-organization/next-legend-kickstarter.git
cd next-legend-kickstarter
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the root directory of the project:

```bash
cp .env.example .env.local
```

Update the `.env.local` file with your local configuration:

```
# Database
DATABASE_URL=postgresql://username:password@localhost:5432/next_legend_db

# Authentication
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key

# API Keys (if needed)
API_KEY=your-api-key
```

### 4. Set Up the Database

Make sure your PostgreSQL server is running, then create a new database:

```bash
createdb next_legend_db
```

Run the database migrations:

```bash
npm run db:migrate
```

Seed the database with initial data (if available):

```bash
npm run db:seed
```

### 5. Start the Development Server

```bash
npm run dev
```

The application should now be running at [http://localhost:3000](http://localhost:3000).

## Development Tools

### VS Code Extensions

We recommend installing the following VS Code extensions for a better development experience:

- **ESLint**: JavaScript linting
- **Prettier**: Code formatting
- **Tailwind CSS IntelliSense**: Autocomplete for Tailwind CSS classes
- **TypeScript Hero**: TypeScript imports management
- **GitLens**: Git integration
- **Error Lens**: Inline error display

### Browser Extensions

- **React Developer Tools**: For debugging React components
- **Redux DevTools**: For debugging state management (if using Redux)

## Troubleshooting

### Common Installation Issues

#### Node.js Version

If you encounter issues with Node.js compatibility, make sure you're using the correct version:

```bash
node -v
```

If needed, you can use [nvm](https://github.com/nvm-sh/nvm) to install and switch to the required Node.js version:

```bash
nvm install 18
nvm use 18
```

#### PostgreSQL Connection

If you have trouble connecting to PostgreSQL:

1. Make sure the PostgreSQL service is running:
   ```bash
   # On macOS
   brew services start postgresql
   
   # On Ubuntu
   sudo service postgresql start
   
   # On Windows
   # Check Services application
   ```

2. Verify your PostgreSQL credentials:
   ```bash
   psql -U your_username -d postgres
   ```

3. Check that the `DATABASE_URL` in your `.env.local` file is correct.

#### Package Installation Errors

If you encounter errors during `npm install`:

1. Clear the npm cache:
   ```bash
   npm cache clean --force
   ```

2. Delete the `node_modules` directory and `package-lock.json` file:
   ```bash
   rm -rf node_modules package-lock.json
   ```

3. Reinstall the dependencies:
   ```bash
   npm install
   ```

## Next Steps

Once your environment is set up, you can:

1. Read the [Developer Onboarding Guide](./onboarding.md) to learn more about the project.
2. Explore the [Project Structure and Architecture](./project-structure.md) to understand how the codebase is organized.
3. Check out the [Component Library Documentation](./component-library.md) to learn about the UI components available in the project.

If you encounter any issues not covered in this guide, please reach out to the team for assistance. 