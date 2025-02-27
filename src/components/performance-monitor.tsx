"use client";

import { useEffect } from "react";
import {
  initPerformanceMonitoring,
  sendToAnalytics,
  createPerformanceDashboard,
  PerformanceMetric,
} from "@/lib/performance-monitoring";

interface PerformanceMonitorProps {
  /**
   * Whether to show a performance dashboard in development
   */
  showDashboard?: boolean;

  /**
   * Whether to report all metrics or only Core Web Vitals
   */
  reportAllMetrics?: boolean;
}

/**
 * Performance Monitor Component
 *
 * This component initializes performance monitoring for the application.
 * It tracks Core Web Vitals and other performance metrics.
 *
 * In development, it can display a dashboard with real-time metrics.
 * In production, it sends metrics to an analytics endpoint.
 */
export function PerformanceMonitor({
  showDashboard = true,
  reportAllMetrics = false,
}: PerformanceMonitorProps) {
  useEffect(() => {
    // Only run in the browser
    if (typeof window === "undefined") return;

    // Create performance dashboard in development if enabled
    if (process.env.NODE_ENV === "development" && showDashboard) {
      createPerformanceDashboard();
    }

    // Initialize performance monitoring
    initPerformanceMonitoring((metric: PerformanceMetric) => {
      // Send metrics to analytics
      sendToAnalytics(metric);

      // Update dashboard in development
      if (
        process.env.NODE_ENV === "development" &&
        showDashboard &&
        window.__updatePerformanceMetric
      ) {
        window.__updatePerformanceMetric(metric);
      }
    }, reportAllMetrics);

    // Log initialization
    if (process.env.NODE_ENV === "development") {
      console.log("🔍 Performance monitoring initialized");
    }
  }, [showDashboard, reportAllMetrics]);

  // This component doesn't render anything
  return null;
}
