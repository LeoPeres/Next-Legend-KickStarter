# Monitoring and Analytics

This document outlines the monitoring and analytics setup for the Next Legend application.

## Error Monitoring with Sentry

The application uses Sentry for error tracking and performance monitoring. Sentry is configured to capture errors in the following environments:

- Client-side (browser)
- Server-side (Node.js)
- Edge functions

### Configuration

Sentry is configured in the following files:

- `sentry.client.config.js` - Client-side configuration
- `sentry.server.config.js` - Server-side configuration
- `sentry.edge.config.js` - Edge functions configuration
- `next.config.js` - Integration with Next.js build process

### Environment Variables

The following environment variables are required for Sentry:

- `NEXT_PUBLIC_SENTRY_DSN` - Sentry Data Source Name (DSN)
- `SENTRY_ORG` - Sentry organization name
- `SENTRY_PROJECT` - Sentry project name
- `SENTRY_AUTH_TOKEN` - Authentication token for source map uploads

### Features Enabled

- Error tracking
- Performance monitoring
- Session replay (for error reproduction)
- Breadcrumbs for debugging

## Performance Monitoring

Performance monitoring is handled through Sentry's performance monitoring features, which include:

- Web Vitals tracking
- API response time monitoring
- Page load performance
- Resource timing

## Analytics Implementation

For user analytics, we recommend implementing one of the following solutions:

### Option 1: Vercel Analytics

Vercel provides built-in analytics that can be enabled in the Vercel dashboard:

1. Go to your project in the Vercel dashboard
2. Navigate to Analytics
3. Enable Web Analytics
4. Add the tracking script to your application

### Option 2: Google Analytics

To implement Google Analytics:

1. Create a Google Analytics 4 property
2. Add the Google Analytics script to your application
3. Configure events and conversions

### Option 3: Plausible or Fathom (Privacy-Focused Analytics)

For privacy-focused analytics:

1. Sign up for Plausible or Fathom
2. Add their lightweight script to your application
3. Configure custom events as needed

## Monitoring Dashboards

### Sentry Dashboard

The Sentry dashboard provides:

- Error tracking and grouping
- Performance monitoring
- User impact assessment
- Release tracking

### Custom Dashboards

For custom monitoring dashboards, consider:

1. Setting up Grafana with Prometheus for server metrics
2. Using Vercel's built-in dashboard for deployment metrics
3. Creating custom dashboards in your analytics platform of choice

## Alerting

Configure alerts in Sentry for:

- New error types
- Error frequency thresholds
- Performance degradation
- Critical user flows

## Implementation Checklist

- [x] Set up Sentry for error monitoring
- [x] Configure performance monitoring
- [ ] Implement analytics tracking
- [ ] Create monitoring dashboards 