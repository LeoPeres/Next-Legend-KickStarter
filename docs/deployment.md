# Deployment Guide

## Vercel Deployment

This project is configured to be deployed on Vercel. Follow these steps to set up your deployment:

1. Create a Vercel account at [vercel.com](https://vercel.com) if you don't have one.
2. Install the Vercel CLI: `npm i -g vercel`
3. Login to Vercel: `vercel login`
4. From the project root, run: `vercel` to deploy to a preview environment or `vercel --prod` to deploy to production.

## Environment Variables

The following environment variables need to be configured in the Vercel dashboard:

- `DATABASE_URL`: Your PostgreSQL database connection string
- `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anonymous key
- `NEXT_PUBLIC_APP_URL`: The URL of your deployed application
- `NODE_ENV`: Set to "production" for production deployments

You can configure these variables in the Vercel dashboard under Project Settings > Environment Variables.

## Custom Domains and SSL

To set up a custom domain:

1. Go to your project in the Vercel dashboard
2. Navigate to Settings > Domains
3. Add your domain and follow the instructions to configure DNS settings
4. Vercel will automatically provision an SSL certificate for your domain

## Deployment Previews for PRs

Vercel automatically creates deployment previews for each pull request. To enable this feature:

1. Connect your GitHub repository to Vercel
2. Go to Settings > Git
3. Ensure "Deploy Preview" is enabled for pull requests
4. Optionally, configure comment settings to have Vercel comment on PRs with preview links

## Deployment Configuration

The `vercel.json` file in the project root contains the deployment configuration. You can modify this file to customize your deployment settings. 