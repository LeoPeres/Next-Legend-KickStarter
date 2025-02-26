# Monitoring Dashboard Setup

This document provides instructions for setting up monitoring dashboards for the Next Legend application.

## Vercel Analytics Dashboard

The application uses Vercel Analytics for user behavior tracking and Vercel Speed Insights for performance monitoring. These tools provide built-in dashboards in the Vercel platform.

### Accessing the Dashboards

1. Log in to your Vercel account
2. Navigate to your project
3. Click on "Analytics" in the sidebar to view user analytics
4. Click on "Speed Insights" to view performance metrics

### Key Metrics in Vercel Analytics

- Page views
- Unique visitors
- Top pages
- Referral sources
- Geographic distribution
- Device types

### Key Metrics in Speed Insights

- Web Vitals (LCP, FID, CLS)
- Page load times
- Time to First Byte (TTFB)
- First Contentful Paint (FCP)
- Time to Interactive (TTI)

## Sentry Dashboard

Sentry provides comprehensive error tracking and performance monitoring.

### Accessing the Sentry Dashboard

1. Log in to your Sentry account
2. Navigate to your project
3. The overview dashboard shows recent errors and performance issues

### Key Sections in Sentry

- **Issues**: View and triage errors grouped by similarity
- **Performance**: Monitor transaction performance and identify bottlenecks
- **Releases**: Track errors by release version
- **Discover**: Create custom queries to analyze error and performance data
- **Dashboards**: Create custom dashboards with relevant metrics

## Custom Dashboard with Grafana (Optional)

For more advanced monitoring, you can set up Grafana with Prometheus.

### Setup Instructions

1. Deploy Grafana and Prometheus using Docker:

```bash
# Create a docker-compose.yml file for Grafana and Prometheus
cat > monitoring/docker-compose.yml << EOF
version: '3'
services:
  prometheus:
    image: prom/prometheus
    ports:
      - "9090:9090"
    volumes:
      - ./prometheus.yml:/etc/prometheus/prometheus.yml
    restart: always

  grafana:
    image: grafana/grafana
    ports:
      - "3000:3000"
    environment:
      - GF_SECURITY_ADMIN_PASSWORD=secure_password
    volumes:
      - grafana-data:/var/lib/grafana
    depends_on:
      - prometheus
    restart: always

volumes:
  grafana-data:
EOF

# Create a basic Prometheus configuration
cat > monitoring/prometheus.yml << EOF
global:
  scrape_interval: 15s

scrape_configs:
  - job_name: 'prometheus'
    static_configs:
      - targets: ['localhost:9090']
EOF

# Start the services
cd monitoring
docker-compose up -d
```

2. Access Grafana at http://localhost:3000 (username: admin, password: secure_password)
3. Add Prometheus as a data source in Grafana
4. Import or create dashboards for monitoring

## Alerting Configuration

### Sentry Alerts

1. In Sentry, navigate to Alerts
2. Create alert rules for:
   - New error types
   - Error frequency thresholds
   - Performance degradation
   - Critical user flows

### Vercel Alerts

1. In Vercel, navigate to Settings > Notifications
2. Configure alerts for:
   - Deployment failures
   - Performance regressions
   - High error rates

## Implementation Checklist

- [x] Set up Vercel Analytics dashboard
- [x] Configure Sentry dashboard
- [x] Set up alerting rules
- [ ] (Optional) Deploy Grafana for custom metrics 