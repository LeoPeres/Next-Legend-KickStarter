import {
  CLSMetric,
  FCPMetric,
  FIDMetric,
  INPMetric,
  LCPMetric,
  TTFBMetric,
  onCLS,
  onFCP,
  onFID,
  onINP,
  onLCP,
  onTTFB,
} from "web-vitals";

// Define the types for the metrics
export type WebVitalsMetric = {
  id: string;
  name: string;
  value: number;
  delta: number;
  entries: PerformanceEntry[];
  navigationType?: string;
};

// Define the reporter function type
export type WebVitalsReporter = (metric: WebVitalsMetric) => void;

// Function to send metrics to analytics
const sendToAnalytics = (metric: WebVitalsMetric) => {
  // Clone the metric to avoid reference issues
  const metricData = {
    id: metric.id,
    name: metric.name,
    value: metric.value,
    delta: metric.delta,
    navigationType: metric.navigationType || "navigate",
  };

  // Use Vercel Analytics if available
  if (typeof window !== "undefined" && (window as any).va) {
    (window as any).va("event", {
      name: "web-vitals",
      data: metricData,
    });
  }

  // Log to console in development
  if (process.env.NODE_ENV === "development") {
    console.log("[Web Vitals]", metricData);
  }

  // You can also send to your own analytics service here
  // Example: fetch('/api/vitals', { method: 'POST', body: JSON.stringify(metricData) });
};

// Function to report web vitals
export function reportWebVitals(onPerfEntry?: WebVitalsReporter) {
  const reporter = onPerfEntry || sendToAnalytics;

  // Core Web Vitals
  onLCP((metric: LCPMetric) => {
    reporter({
      id: metric.id,
      name: "LCP",
      value: metric.value,
      delta: metric.delta,
      entries: metric.entries,
      navigationType: metric.navigationType,
    });
  });

  onFID((metric: FIDMetric) => {
    reporter({
      id: metric.id,
      name: "FID",
      value: metric.value,
      delta: metric.delta,
      entries: metric.entries,
      navigationType: metric.navigationType,
    });
  });

  onCLS((metric: CLSMetric) => {
    reporter({
      id: metric.id,
      name: "CLS",
      value: metric.value,
      delta: metric.delta,
      entries: metric.entries,
      navigationType: metric.navigationType,
    });
  });

  // Additional metrics
  onINP((metric: INPMetric) => {
    reporter({
      id: metric.id,
      name: "INP",
      value: metric.value,
      delta: metric.delta,
      entries: metric.entries,
      navigationType: metric.navigationType,
    });
  });

  onFCP((metric: FCPMetric) => {
    reporter({
      id: metric.id,
      name: "FCP",
      value: metric.value,
      delta: metric.delta,
      entries: metric.entries,
      navigationType: metric.navigationType,
    });
  });

  onTTFB((metric: TTFBMetric) => {
    reporter({
      id: metric.id,
      name: "TTFB",
      value: metric.value,
      delta: metric.delta,
      entries: metric.entries,
      navigationType: metric.navigationType,
    });
  });
}
