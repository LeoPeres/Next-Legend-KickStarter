# Troubleshooting Guide

This guide provides solutions for common issues you might encounter while working with the Next-Legend-KickStarter project.

## Table of Contents

- [Development Environment Issues](#development-environment-issues)
- [Build and Compilation Errors](#build-and-compilation-errors)
- [Runtime Errors](#runtime-errors)
- [Database Issues](#database-issues)
- [Authentication Issues](#authentication-issues)
- [Styling Issues](#styling-issues)
- [Performance Issues](#performance-issues)
- [Testing Issues](#testing-issues)
- [Deployment Issues](#deployment-issues)

## Development Environment Issues

### Node.js Version Mismatch

**Issue**: Error messages related to unsupported JavaScript features or incompatible dependencies.

**Solution**:
1. Check your Node.js version:
   ```bash
   node -v
   ```
2. Ensure you're using Node.js v18.0.0 or later as specified in the [Environment Setup Guide](./environment-setup.md).
3. If needed, install the correct version using nvm:
   ```bash
   nvm install 18
   nvm use 18
   ```

### Package Installation Failures

**Issue**: Errors during `npm install` or missing dependencies.

**Solution**:
1. Clear npm cache:
   ```bash
   npm cache clean --force
   ```
2. Delete node_modules and package-lock.json:
   ```bash
   rm -rf node_modules package-lock.json
   ```
3. Reinstall dependencies:
   ```bash
   npm install
   ```
4. If specific packages are causing issues, try installing them separately:
   ```bash
   npm install problematic-package --force
   ```

### Environment Variables Not Loading

**Issue**: Application can't access environment variables.

**Solution**:
1. Ensure you have a `.env.local` file in the project root.
2. Check that the variable names match exactly what the application expects.
3. Restart the development server after making changes to environment variables.
4. Verify that you're not accidentally gitignoring your `.env.local` file if working in a local environment.

## Build and Compilation Errors

### TypeScript Errors

**Issue**: TypeScript compilation errors preventing build.

**Solution**:
1. Run TypeScript check to see all errors:
   ```bash
   npm run typecheck
   ```
2. Address each error, focusing on:
   - Type mismatches
   - Missing type definitions
   - Incorrect imports
3. If using third-party libraries without types, install their @types package:
   ```bash
   npm install @types/package-name --save-dev
   ```
4. For temporary fixes, you can use `// @ts-ignore` or `any` type, but prefer proper typing.

### Next.js Build Errors

**Issue**: Errors when running `npm run build`.

**Solution**:
1. Check for dynamic imports that might be causing issues.
2. Ensure all pages and components export properly.
3. Look for client-side code that's being imported in server components.
4. Check for missing dependencies in the package.json.
5. Verify that all imported modules exist and are correctly referenced.

### ESLint Errors

**Issue**: Linting errors preventing commit or build.

**Solution**:
1. Run ESLint to see all errors:
   ```bash
   npm run lint
   ```
2. Fix automatically fixable issues:
   ```bash
   npm run lint -- --fix
   ```
3. Address remaining issues manually following the [Coding Standards](./coding-standards.md).
4. If needed, update ESLint rules in `.eslintrc.json`.

## Runtime Errors

### Hydration Errors

**Issue**: React hydration errors in the console, such as "Text content does not match server-rendered HTML".

**Solution**:
1. Ensure server and client render the same content.
2. Avoid using browser-specific APIs (like `window` or `document`) without checks.
3. Use `useEffect` for client-side-only code.
4. For date/time rendering issues, ensure consistent timezone handling.
5. For dynamic content that can't be consistent, use `suppressHydrationWarning` or dynamic imports with `ssr: false`.

### API Route Errors

**Issue**: API routes returning errors or not working as expected.

**Solution**:
1. Check the server logs for detailed error messages.
2. Verify that the API route is correctly exported and follows Next.js conventions.
3. Ensure proper error handling in API routes.
4. Check for CORS issues if calling from external domains.
5. Verify that the HTTP method (GET, POST, etc.) matches what the client is sending.

### Component Rendering Issues

**Issue**: Components not rendering as expected or rendering errors.

**Solution**:
1. Check for null or undefined props.
2. Add proper error boundaries around problematic components.
3. Verify that all required props are being passed.
4. Check for infinite rendering loops in useEffect hooks.
5. Use React DevTools to inspect component state and props.

## Database Issues

### Connection Errors

**Issue**: Unable to connect to the database.

**Solution**:
1. Verify that your PostgreSQL server is running:
   ```bash
   # On macOS
   brew services list
   
   # On Ubuntu
   sudo service postgresql status
   
   # On Windows
   # Check Services application
   ```
2. Check that your `DATABASE_URL` in `.env.local` is correct.
3. Ensure the database exists:
   ```bash
   psql -c "SELECT 1" -d next_legend_db
   ```
4. Check for network issues if using a remote database.
5. Verify that the database user has the necessary permissions.

### Migration Errors

**Issue**: Database migrations failing.

**Solution**:
1. Check migration logs for specific errors.
2. Ensure migrations are running in the correct order.
3. For development, consider resetting the database and running migrations from scratch:
   ```bash
   npm run db:drop
   npm run db:migrate
   ```
4. Check for schema conflicts or constraints that might be preventing migrations.
5. Verify that the migration files are correctly formatted.

### Query Errors

**Issue**: Database queries failing or returning unexpected results.

**Solution**:
1. Log the generated SQL queries for debugging.
2. Check for type mismatches between TypeScript and database schema.
3. Verify that all required fields are included in queries.
4. Check for transaction issues if using transactions.
5. Ensure proper error handling around database operations.

## Authentication Issues

### Login Failures

**Issue**: Unable to log in or authentication errors.

**Solution**:
1. Check that the authentication provider is correctly configured.
2. Verify credentials are being sent correctly.
3. Check for CSRF token issues.
4. Ensure cookies are being set and read correctly.
5. Check for session expiration issues.

### Authorization Errors

**Issue**: Access denied to resources that should be accessible.

**Solution**:
1. Verify that the user has the correct role or permissions.
2. Check that authorization middleware is correctly implemented.
3. Ensure JWT tokens or session cookies are valid and not expired.
4. Check for issues with protected route implementation.
5. Verify that the authorization logic is working as expected.

### Session Management Issues

**Issue**: Sessions expiring too quickly or not working correctly.

**Solution**:
1. Check session configuration in NextAuth.js or your auth provider.
2. Verify that cookies are being set with the correct options.
3. Check for issues with secure and httpOnly flags.
4. Ensure proper handling of token refresh.
5. Check for cross-domain issues if applicable.

## Styling Issues

### Tailwind Classes Not Applied

**Issue**: Tailwind CSS classes not being applied to elements.

**Solution**:
1. Verify that Tailwind is correctly configured in `tailwind.config.ts`.
2. Check that the class names are correct and not misspelled.
3. Ensure the global CSS file is imported in `_app.tsx` or layout.
4. Check for CSS specificity issues that might be overriding Tailwind.
5. Verify that the content paths in the Tailwind config include all your files.

### Theme Variables Not Working

**Issue**: Theme variables or dark mode not working correctly.

**Solution**:
1. Check that CSS variables are correctly defined in `globals.css`.
2. Verify that the theme provider is correctly set up.
3. Ensure the correct class is applied to the HTML or body element.
4. Check for conflicts with other styling libraries.
5. Verify that the theme is being correctly applied in components.

### Responsive Design Issues

**Issue**: Layout not responding correctly to different screen sizes.

**Solution**:
1. Use browser dev tools to test different screen sizes.
2. Verify that you're using Tailwind's responsive prefixes correctly (sm:, md:, lg:, etc.).
3. Check for hardcoded widths or heights that might be preventing responsiveness.
4. Ensure flex and grid layouts are correctly implemented.
5. Test on actual devices when possible, not just browser emulation.

## Performance Issues

### Slow Page Loads

**Issue**: Pages taking too long to load.

**Solution**:
1. Use Lighthouse or Next.js Analytics to identify bottlenecks.
2. Optimize images using Next.js Image component.
3. Implement code splitting with dynamic imports.
4. Reduce JavaScript bundle size by removing unused dependencies.
5. Implement proper caching strategies.
6. Consider using Server Components for data-heavy pages.

### Memory Leaks

**Issue**: Application using increasing amounts of memory over time.

**Solution**:
1. Check for uncleared event listeners in useEffect cleanup functions.
2. Look for large objects being stored in state or context.
3. Verify that subscriptions are being properly unsubscribed.
4. Use React DevTools Profiler to identify components that re-render too often.
5. Check for circular references in state objects.

### Excessive Re-renders

**Issue**: Components re-rendering too frequently, causing performance issues.

**Solution**:
1. Use React DevTools Profiler to identify components that re-render too often.
2. Implement `React.memo` for pure components.
3. Use `useMemo` and `useCallback` to memoize expensive calculations and callbacks.
4. Optimize context providers to avoid unnecessary re-renders.
5. Check for state updates in render functions or unintended side effects.

## Testing Issues

### Jest Test Failures

**Issue**: Unit tests failing unexpectedly.

**Solution**:
1. Run tests in watch mode to see detailed errors:
   ```bash
   npm run test -- --watch
   ```
2. Check for environment-specific code that might not work in the test environment.
3. Ensure mocks are correctly set up for external dependencies.
4. Verify that test assertions are correct.
5. Check for asynchronous code that's not properly awaited.

### Playwright Test Failures

**Issue**: End-to-end tests failing.

**Solution**:
1. Run tests with headed browser to see what's happening:
   ```bash
   npm run test:e2e -- --headed
   ```
2. Check for timing issues and add appropriate waits.
3. Verify that selectors are correct and unique.
4. Ensure the test environment is correctly set up.
5. Check for environment-specific issues (like different viewport sizes).

### Storybook Issues

**Issue**: Storybook not loading or stories not rendering correctly.

**Solution**:
1. Check for errors in the browser console.
2. Verify that story files are correctly formatted.
3. Ensure dependencies required by components are available in Storybook.
4. Check for issues with decorators or parameters.
5. Try clearing the Storybook cache:
   ```bash
   npm run storybook -- --no-manager-cache
   ```

## Deployment Issues

### Vercel Deployment Failures

**Issue**: Deployments failing on Vercel.

**Solution**:
1. Check the build logs for specific errors.
2. Verify that all environment variables are correctly set in the Vercel dashboard.
3. Ensure the build command and output directory are correctly configured.
4. Check for issues with serverless function size limits.
5. Verify that the Node.js version is correctly set.

### Static Generation Errors

**Issue**: Static generation failing for certain pages.

**Solution**:
1. Check for dynamic content that can't be statically generated.
2. Verify that `getStaticProps` and `getStaticPaths` are correctly implemented.
3. Consider using Incremental Static Regeneration for frequently changing content.
4. Check for API calls that might be failing during build time.
5. Ensure fallback strategies are correctly implemented.

### Post-Deployment Issues

**Issue**: Application works locally but fails after deployment.

**Solution**:
1. Check for environment-specific code that might behave differently in production.
2. Verify that all environment variables are correctly set.
3. Check for API or database connection issues specific to the production environment.
4. Look for CORS issues if APIs are on different domains.
5. Verify that the build process is correctly optimizing the code.

## Getting Additional Help

If you're still experiencing issues after trying the solutions in this guide:

1. Check the project's GitHub issues to see if others have encountered the same problem.
2. Search for similar issues in the documentation of the libraries you're using.
3. Reach out to the team through the appropriate channels.
4. Consider creating a minimal reproduction of the issue to share with others.
5. For Next.js specific issues, consult the [Next.js GitHub discussions](https://github.com/vercel/next.js/discussions) or [Vercel support](https://vercel.com/support).

Remember to provide as much detail as possible when seeking help, including:
- Error messages
- Steps to reproduce
- Environment details (OS, Node.js version, etc.)
- Code snippets or links to the relevant code 