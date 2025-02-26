# Developer Onboarding Guide

Welcome to the Next-Legend-KickStarter project! This guide will help you get started as a new developer on the team.

## Introduction

Next-Legend-KickStarter is a modern web application built with Next.js, TypeScript, Tailwind CSS, and Legend State for state management. This guide will walk you through the steps to set up your development environment, understand the project structure, and start contributing.

## Getting Started

### 1. Environment Setup

First, follow the [Environment Setup Guide](./environment-setup.md) to set up your development environment. This includes installing the necessary tools and dependencies, setting up the database, and configuring environment variables.

### 2. Project Structure

Familiarize yourself with the project structure by reading the [Project Structure and Architecture](./project-structure.md) documentation. This will give you an overview of how the codebase is organized and the key architectural patterns used in the project.

### 3. Component Library

Explore the [Component Library Documentation](./component-library.md) to understand the UI components available in the project. This will help you build new features using the existing components and maintain consistency across the application.

### 4. Theming and Customization

Learn about the theming system by reading the [Theming and Customization Guide](./theming-customization.md). This will help you understand how to style components and maintain a consistent look and feel across the application.

## Development Workflow

### Git Workflow

We follow a feature branch workflow for development:

1. Create a new branch from `main` for your feature or bug fix:
   ```bash
   git checkout main
   git pull
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and commit them with descriptive commit messages:
   ```bash
   git add .
   git commit -m "feat: add new feature"
   ```

   We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification for commit messages.

3. Push your branch to the remote repository:
   ```bash
   git push -u origin feature/your-feature-name
   ```

4. Create a pull request (PR) on GitHub and request a review from a team member.

5. After your PR is approved, merge it into the `main` branch.

### Code Review Process

All code changes must go through a code review process before being merged into the `main` branch. Here's what to expect:

1. Create a pull request with a clear description of the changes.
2. Assign at least one reviewer to your PR.
3. Address any feedback or comments from the reviewer.
4. Once approved, your PR can be merged.

### Testing

We have several types of tests in the project:

- **Unit Tests**: Test individual components and functions in isolation.
- **Integration Tests**: Test how components work together.
- **End-to-End Tests**: Test the application as a whole from the user's perspective.

Before submitting a PR, make sure to run the tests to ensure your changes don't break existing functionality:

```bash
# Run unit tests
npm run test

# Run end-to-end tests
npm run test:e2e
```

## Common Tasks

### Creating a New Component

1. Create a new file in the appropriate directory:
   - For UI components: `src/components/ui/`
   - For custom components: `src/components/`

2. Follow the component structure used in existing components:
   ```tsx
   import * as React from "react";
   import { cn } from "@/lib/utils";

   export interface MyComponentProps {
     // Define your props here
   }

   export function MyComponent({ className, ...props }: MyComponentProps) {
     return (
       <div className={cn("my-component", className)} {...props}>
         {/* Component content */}
       </div>
     );
   }
   ```

3. Create a story for your component in `src/stories/` to showcase its usage.

4. Write tests for your component in `src/components/__tests__/`.

### Creating a New Page

1. Create a new directory in `src/app/` for your page.

2. Create a `page.tsx` file in the directory:
   ```tsx
   export default function MyPage() {
     return (
       <div>
         <h1>My Page</h1>
         {/* Page content */}
       </div>
     );
   }
   ```

3. If needed, create a `layout.tsx` file for the page layout.

4. Update the navigation to include a link to your new page.

### Working with the Database

1. Define your schema in `src/lib/db/schema/`.

2. Generate migrations:
   ```bash
   npm run db:generate
   ```

3. Run migrations:
   ```bash
   npm run db:migrate
   ```

4. Use the Drizzle ORM to query the database in your server components or API routes.

## Troubleshooting

### Common Issues

#### Build Errors

If you encounter build errors:

1. Check for TypeScript errors:
   ```bash
   npm run typecheck
   ```

2. Make sure all dependencies are installed:
   ```bash
   npm install
   ```

3. Check for linting errors:
   ```bash
   npm run lint
   ```

#### Database Connection Issues

If you have trouble connecting to the database:

1. Make sure your PostgreSQL server is running.
2. Check that your `.env.local` file has the correct `DATABASE_URL`.
3. Try running `npm run db:check` to verify the connection.

#### Storybook Issues

If Storybook is not working correctly:

1. Make sure all dependencies are installed:
   ```bash
   npm install
   ```

2. Clear the Storybook cache:
   ```bash
   npm run storybook -- --no-manager-cache
   ```

## Getting Help

If you need help, there are several resources available:

- **Documentation**: Check the documentation in the `docs/` directory.
- **Team Chat**: Ask questions in the team chat.
- **Issue Tracker**: Check the issue tracker for known issues and solutions.
- **Team Meetings**: Bring up issues in the daily stand-up or weekly team meetings.

## Next Steps

Now that you're set up, here are some next steps to get familiar with the codebase:

1. **Explore the Application**: Run the application locally and explore its features.
2. **Review Recent PRs**: Look at recent pull requests to understand what the team is working on.
3. **Pick a Small Task**: Start with a small task or bug fix to get familiar with the codebase.
4. **Pair Programming**: Schedule a pair programming session with a team member to learn from them.

Welcome to the team! We're excited to have you on board. 