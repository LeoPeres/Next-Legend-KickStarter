/**
 * Performance Monitoring Utilities
 *
 * This module provides tools for monitoring and reporting web performance metrics,
 * including Core Web Vitals (LCP, FID/INP, CLS) and other important metrics.
 */

import { onCLS, onFCP, onFID, onINP, onLCP, onTTFB, Metric } from "web-vitals";

// Types for performance data
export type PerformanceMetric = {
  name: string;
  value: number;
  rating: "good" | "needs-improvement" | "poor";
  navigationType?: string;
  id?: string;
};

export type PerformanceEventHandler = (metric: PerformanceMetric) => void;

// Define PerformanceLongTaskTiming interface
interface PerformanceLongTaskTiming extends PerformanceEntry {
  duration: number;
  attribution: TaskAttributionTiming[];
}

interface TaskAttributionTiming {
  name: string;
  entryType: string;
  startTime: number;
  duration: number;
  containerType?: string;
  containerSrc?: string;
  containerId?: string;
  containerName?: string;
}

// Default thresholds for Core Web Vitals
// Based on https://web.dev/vitals/
const thresholds = {
  CLS: { good: 0.1, poor: 0.25 },
  FCP: { good: 1800, poor: 3000 },
  FID: { good: 100, poor: 300 },
  INP: { good: 200, poor: 500 },
  LCP: { good: 2500, poor: 4000 },
  TTFB: { good: 800, poor: 1800 },
};

/**
 * Determine the rating of a metric based on its value and thresholds
 */
function getRating(name: string, value: number): "good" | "needs-improvement" | "poor" {
  const threshold = thresholds[name as keyof typeof thresholds];
  if (!threshold) return "needs-improvement";

  if (value <= threshold.good) return "good";
  if (value <= threshold.poor) return "needs-improvement";
  return "poor";
}

/**
 * Format a metric for reporting
 */
function formatMetric(metric: Metric): PerformanceMetric {
  return {
    name: metric.name,
    value: metric.value,
    rating: getRating(metric.name, metric.value),
    navigationType: metric.navigationType,
    id: metric.id,
  };
}

/**
 * Initialize performance monitoring
 * @param onPerfEvent Callback function to handle performance metrics
 * @param reportAllMetrics Whether to report all metrics or only Core Web Vitals
 */
export function initPerformanceMonitoring(
  onPerfEvent: PerformanceEventHandler,
  reportAllMetrics: boolean = false
): void {
  // Only run in the browser
  if (typeof window === "undefined") return;

  // Core Web Vitals
  onCLS((metric) => {
    onPerfEvent(formatMetric(metric));
  });

  onLCP((metric) => {
    onPerfEvent(formatMetric(metric));
  });

  // FID is being replaced by INP, but we'll track both for now
  onFID((metric) => {
    onPerfEvent(formatMetric(metric));
  });

  onINP((metric) => {
    onPerfEvent(formatMetric(metric));
  });

  // Additional metrics if requested
  if (reportAllMetrics) {
    onFCP((metric) => {
      onPerfEvent(formatMetric(metric));
    });

    onTTFB((metric) => {
      onPerfEvent(formatMetric(metric));
    });
  }

  // Track long tasks
  if ("PerformanceObserver" in window) {
    try {
      const longTaskObserver = new PerformanceObserver((entryList) => {
        entryList.getEntries().forEach((entry) => {
          const longTask = entry as PerformanceLongTaskTiming;
          onPerfEvent({
            name: "LONG_TASK",
            value: longTask.duration,
            rating: longTask.duration > 100 ? "poor" : "needs-improvement",
          });
        });
      });

      longTaskObserver.observe({ type: "longtask", buffered: true });
    } catch (e) {
      console.error("Long Task observer error:", e);
    }
  }

  // Track memory usage if available
  if (performance && "memory" in performance) {
    setInterval(() => {
      const memory = (performance as any).memory;
      if (memory) {
        const usedHeapSizeMB = Math.round(memory.usedJSHeapSize / (1024 * 1024));
        const totalHeapSizeMB = Math.round(memory.totalJSHeapSize / (1024 * 1024));
        const heapLimitMB = Math.round(memory.jsHeapSizeLimit / (1024 * 1024));

        onPerfEvent({
          name: "MEMORY_USAGE",
          value: usedHeapSizeMB,
          rating: usedHeapSizeMB > totalHeapSizeMB * 0.9 ? "poor" : "good",
        });

        // Also report heap limit and total size
        onPerfEvent({
          name: "MEMORY_TOTAL",
          value: totalHeapSizeMB,
          rating: "good",
        });

        onPerfEvent({
          name: "MEMORY_LIMIT",
          value: heapLimitMB,
          rating: "good",
        });
      }
    }, 10000); // Check every 10 seconds
  }

  // Track resource timing
  if ("PerformanceObserver" in window) {
    try {
      const resourceObserver = new PerformanceObserver((entryList) => {
        entryList.getEntries().forEach((entry) => {
          const resource = entry as PerformanceResourceTiming;

          // Only report resources that take longer than 500ms to load
          if (resource.duration > 500) {
            onPerfEvent({
              name: "SLOW_RESOURCE",
              value: resource.duration,
              rating: resource.duration > 1000 ? "poor" : "needs-improvement",
              id: resource.name,
            });
          }
        });
      });

      resourceObserver.observe({ type: "resource", buffered: true });
    } catch (e) {
      console.error("Resource observer error:", e);
    }
  }
}

/**
 * Send performance metrics to an analytics service
 * @param metric The performance metric to send
 */
export function sendToAnalytics(metric: PerformanceMetric): void {
  // In a real app, you would send this to your analytics service
  // For now, we'll just log it to the console in development
  if (process.env.NODE_ENV === "development") {
    const color =
      metric.rating === "good" ? "green" : metric.rating === "needs-improvement" ? "orange" : "red";

    console.log(
      `%c📊 ${metric.name}: ${metric.value.toFixed(2)}`,
      `color: ${color}; font-weight: bold;`,
      metric
    );
  }

  // Example of sending to an analytics endpoint
  if (process.env.NODE_ENV === "production") {
    // This would be your actual analytics endpoint
    const analyticsEndpoint = "/api/analytics/performance";

    // Use sendBeacon if available for better reliability during page unload
    if (navigator.sendBeacon) {
      navigator.sendBeacon(
        analyticsEndpoint,
        JSON.stringify({
          metric: metric.name,
          value: metric.value,
          rating: metric.rating,
          timestamp: Date.now(),
          url: window.location.href,
          userAgent: navigator.userAgent,
        })
      );
    } else {
      // Fall back to fetch
      fetch(analyticsEndpoint, {
        method: "POST",
        body: JSON.stringify({
          metric: metric.name,
          value: metric.value,
          rating: metric.rating,
          timestamp: Date.now(),
          url: window.location.href,
          userAgent: navigator.userAgent,
        }),
        keepalive: true,
        headers: {
          "Content-Type": "application/json",
        },
      }).catch((error) => {
        console.error("Error sending performance metric:", error);
      });
    }
  }
}

/**
 * Create a custom performance mark and measure
 * @param name The name of the performance mark/measure
 * @param fn The function to measure
 * @returns The result of the function
 */
export function measurePerformance<T>(name: string, fn: () => T): T {
  if (typeof performance === "undefined") return fn();

  const startMark = `${name}_start`;
  const endMark = `${name}_end`;
  const measureName = name;

  performance.mark(startMark);
  const result = fn();
  performance.mark(endMark);

  try {
    performance.measure(measureName, startMark, endMark);

    // Get the measure and report it
    const measures = performance.getEntriesByName(measureName, "measure");
    if (measures.length > 0) {
      const duration = measures[0].duration;
      sendToAnalytics({
        name: `CUSTOM_${name.toUpperCase()}`,
        value: duration,
        rating: duration > 100 ? "poor" : duration > 50 ? "needs-improvement" : "good",
      });
    }
  } catch (e) {
    console.error(`Error measuring performance for ${name}:`, e);
  }

  // Clean up marks
  try {
    performance.clearMarks(startMark);
    performance.clearMarks(endMark);
    performance.clearMeasures(measureName);
  } catch (e) {
    // Ignore errors in cleanup
  }

  return result;
}

/**
 * Create a performance dashboard component
 * This can be used to display performance metrics in development
 */
export function createPerformanceDashboard(): void {
  if (typeof document === "undefined" || process.env.NODE_ENV !== "development") return;

  // Create dashboard container
  const dashboard = document.createElement("div");
  dashboard.id = "performance-dashboard";
  dashboard.style.position = "fixed";
  dashboard.style.bottom = "0";
  dashboard.style.right = "0";
  dashboard.style.width = "300px";
  dashboard.style.maxHeight = "400px";
  dashboard.style.overflow = "auto";
  dashboard.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  dashboard.style.color = "white";
  dashboard.style.padding = "10px";
  dashboard.style.fontSize = "12px";
  dashboard.style.fontFamily = "monospace";
  dashboard.style.zIndex = "10000";
  dashboard.style.borderTopLeftRadius = "5px";
  dashboard.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";

  // Add header
  const header = document.createElement("div");
  header.textContent = "Performance Dashboard";
  header.style.fontWeight = "bold";
  header.style.marginBottom = "5px";
  header.style.borderBottom = "1px solid #555";
  header.style.paddingBottom = "5px";
  dashboard.appendChild(header);

  // Add metrics container
  const metricsContainer = document.createElement("div");
  metricsContainer.id = "performance-metrics";
  dashboard.appendChild(metricsContainer);

  // Add toggle button
  const toggleButton = document.createElement("button");
  toggleButton.textContent = "Hide";
  toggleButton.style.position = "absolute";
  toggleButton.style.top = "5px";
  toggleButton.style.right = "5px";
  toggleButton.style.padding = "2px 5px";
  toggleButton.style.backgroundColor = "#555";
  toggleButton.style.border = "none";
  toggleButton.style.borderRadius = "3px";
  toggleButton.style.color = "white";
  toggleButton.style.cursor = "pointer";

  toggleButton.addEventListener("click", () => {
    if (metricsContainer.style.display === "none") {
      metricsContainer.style.display = "block";
      toggleButton.textContent = "Hide";
    } else {
      metricsContainer.style.display = "none";
      toggleButton.textContent = "Show";
    }
  });

  dashboard.appendChild(toggleButton);

  // Add to document
  document.body.appendChild(dashboard);

  // Function to update metrics
  window.__updatePerformanceMetric = (metric: PerformanceMetric) => {
    const metricsContainer = document.getElementById("performance-metrics");
    if (!metricsContainer) return;

    let metricElement = document.getElementById(`metric-${metric.name}`);

    if (!metricElement) {
      metricElement = document.createElement("div");
      metricElement.id = `metric-${metric.name}`;
      metricElement.style.marginBottom = "5px";
      metricElement.style.display = "flex";
      metricElement.style.justifyContent = "space-between";
      metricsContainer.appendChild(metricElement);
    }

    const color =
      metric.rating === "good"
        ? "#4caf50"
        : metric.rating === "needs-improvement"
          ? "#ff9800"
          : "#f44336";

    metricElement.innerHTML = `
      <span>${metric.name}:</span>
      <span style="color: ${color}; font-weight: bold;">${metric.value.toFixed(2)}</span>
    `;
  };
}

// Declare global window type
declare global {
  interface Window {
    __updatePerformanceMetric?: (metric: PerformanceMetric) => void;
  }
}
