# Deployment Guide

This document provides a comprehensive guide for building and deploying the Next-Legend-KickStarter application.

## Build Process

### Local Build

To build the application locally:

```bash
npm run build
```

This command:
1. Runs TypeScript type checking
2. Compiles the application with Next.js
3. Generates optimized production assets in the `.next` directory

To test the production build locally:

```bash
npm run start
```

This will start the production server on [http://localhost:3000](http://localhost:3000).

### CI/CD Build

The project is configured for CI/CD with GitHub Actions. The workflow is defined in `.github/workflows/main.yml` and includes:

1. Installing dependencies
2. Running linting and type checking
3. Running tests
4. Building the application
5. Deploying to the appropriate environment based on the branch

## Vercel Deployment

This project is configured to be deployed on Vercel. Follow these steps to set up your deployment:

1. Create a Vercel account at [vercel.com](https://vercel.com) if you don't have one.
2. Install the Vercel CLI: `npm i -g vercel`
3. Login to Vercel: `vercel login`
4. From the project root, run: `vercel` to deploy to a preview environment or `vercel --prod` to deploy to production.

### Automatic Deployments

For automatic deployments:

1. Connect your GitHub repository to Vercel
2. Configure the following settings:
   - Production Branch: `main`
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm ci`

### Environment Variables

The following environment variables need to be configured in the Vercel dashboard:

- `DATABASE_URL`: Your PostgreSQL database connection string
- `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anonymous key
- `NEXT_PUBLIC_APP_URL`: The URL of your deployed application
- `NODE_ENV`: Set to "production" for production deployments
- `SENTRY_DSN`: Your Sentry DSN for error tracking
- `SENTRY_AUTH_TOKEN`: Your Sentry auth token
- `NEXT_PUBLIC_ANALYTICS_ID`: Your analytics ID

You can configure these variables in the Vercel dashboard under Project Settings > Environment Variables.

### Custom Domains and SSL

To set up a custom domain:

1. Go to your project in the Vercel dashboard
2. Navigate to Settings > Domains
3. Add your domain and follow the instructions to configure DNS settings
4. Vercel will automatically provision an SSL certificate for your domain

### Deployment Previews for PRs

Vercel automatically creates deployment previews for each pull request. To enable this feature:

1. Connect your GitHub repository to Vercel
2. Go to Settings > Git
3. Ensure "Deploy Preview" is enabled for pull requests
4. Optionally, configure comment settings to have Vercel comment on PRs with preview links

### Deployment Configuration

The `vercel.json` file in the project root contains the deployment configuration. You can modify this file to customize your deployment settings.

## Database Migrations

Database migrations should be run as part of the deployment process:

### Manual Migration

```bash
npm run db:migrate
```

### Automated Migration

For automated migrations in CI/CD:

1. Add a migration step to your deployment workflow
2. Ensure the database connection is properly configured
3. Run the migration command before starting the application

## Multi-Environment Deployment

The project supports multiple deployment environments:

### Development

- Branch: `develop`
- Environment Variables: `.env.development`
- Database: Development database
- URL: `dev.your-app.com`

### Staging

- Branch: `staging`
- Environment Variables: `.env.staging`
- Database: Staging database
- URL: `staging.your-app.com`

### Production

- Branch: `main`
- Environment Variables: `.env.production`
- Database: Production database
- URL: `your-app.com`

## Monitoring and Error Tracking

The application is configured with Sentry for error tracking and monitoring:

1. Errors are automatically reported to Sentry
2. Performance metrics are collected
3. Release tracking is enabled

To view errors and performance metrics:

1. Log in to your Sentry dashboard
2. Navigate to your project
3. View issues, performance, and releases

## Rollback Procedure

If you need to roll back a deployment:

### Using Vercel

1. Go to your project in the Vercel dashboard
2. Navigate to Deployments
3. Find the previous working deployment
4. Click the three dots menu and select "Promote to Production"

### Using Git

1. Identify the last working commit
2. Revert to that commit: `git revert HEAD~1`
3. Push the revert commit: `git push`
4. The CI/CD pipeline will deploy the reverted code

## Deployment Checklist

Before deploying to production:

1. Run all tests: `npm run test`
2. Check for TypeScript errors: `npm run typecheck`
3. Run E2E tests: `npm run test:e2e`
4. Verify environment variables are correctly set
5. Ensure database migrations are ready
6. Check for security vulnerabilities: `npm audit`
7. Verify the application works in the staging environment

## Troubleshooting

### Build Failures

If the build fails:

1. Check the build logs for errors
2. Verify all dependencies are installed
3. Check for TypeScript errors
4. Ensure environment variables are correctly set

### Deployment Failures

If deployment fails:

1. Check the deployment logs
2. Verify database connection
3. Check for issues with environment variables
4. Ensure the build process completed successfully

### Runtime Errors

If the application crashes after deployment:

1. Check Sentry for error reports
2. Review application logs
3. Verify database connection
4. Check for issues with third-party services 