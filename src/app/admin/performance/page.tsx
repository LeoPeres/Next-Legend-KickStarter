"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface PerformanceMetric {
  metric: string;
  value: number;
  rating: "good" | "needs-improvement" | "poor";
  timestamp: number;
  url: string;
  userAgent?: string;
}

interface MetricsResponse {
  metric: string;
  days: number;
  count: number;
  metrics: PerformanceMetric[];
}

export default function PerformanceDashboard() {
  const [activeTab, setActiveTab] = useState("core-vitals");
  const [days, setDays] = useState("7");
  const [metrics, setMetrics] = useState<Record<string, PerformanceMetric[]>>({});
  const [loading, setLoading] = useState<Record<string, boolean>>({});
  const [error, setError] = useState<Record<string, string>>({});

  const coreVitalsMetrics = ["LCP", "FID", "CLS", "INP"];
  const otherMetrics = ["FCP", "TTFB", "LONG_TASK", "SLOW_RESOURCE"];

  const fetchMetrics = async (metric: string) => {
    setLoading((prev) => ({ ...prev, [metric]: true }));
    setError((prev) => ({ ...prev, [metric]: "" }));

    try {
      const response = await fetch(`/api/analytics/performance?metric=${metric}&days=${days}`);

      if (!response.ok) {
        throw new Error(`Failed to fetch ${metric} metrics`);
      }

      const data: MetricsResponse = await response.json();

      setMetrics((prev) => ({
        ...prev,
        [metric]: data.metrics,
      }));
    } catch (err) {
      console.error(`Error fetching ${metric} metrics:`, err);
      setError((prev) => ({
        ...prev,
        [metric]: err instanceof Error ? err.message : "Unknown error",
      }));
    } finally {
      setLoading((prev) => ({ ...prev, [metric]: false }));
    }
  };

  const fetchAllMetrics = () => {
    const metricsToFetch = activeTab === "core-vitals" ? coreVitalsMetrics : otherMetrics;
    metricsToFetch.forEach(fetchMetrics);
  };

  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      fetchAllMetrics();
    }
  }, [activeTab, days]);

  const getAverageValue = (metricName: string) => {
    const metricData = metrics[metricName] || [];
    if (metricData.length === 0) return 0;

    const sum = metricData.reduce((acc, curr) => acc + curr.value, 0);
    return sum / metricData.length;
  };

  const getRatingColor = (rating: string) => {
    switch (rating) {
      case "good":
        return "text-green-500";
      case "needs-improvement":
        return "text-yellow-500";
      case "poor":
        return "text-red-500";
      default:
        return "text-gray-500";
    }
  };

  const getRatingForValue = (metric: string, value: number) => {
    switch (metric) {
      case "LCP":
        return value <= 2500 ? "good" : value <= 4000 ? "needs-improvement" : "poor";
      case "FID":
        return value <= 100 ? "good" : value <= 300 ? "needs-improvement" : "poor";
      case "CLS":
        return value <= 0.1 ? "good" : value <= 0.25 ? "needs-improvement" : "poor";
      case "INP":
        return value <= 200 ? "good" : value <= 500 ? "needs-improvement" : "poor";
      case "FCP":
        return value <= 1800 ? "good" : value <= 3000 ? "needs-improvement" : "poor";
      case "TTFB":
        return value <= 800 ? "good" : value <= 1800 ? "needs-improvement" : "poor";
      default:
        return "needs-improvement";
    }
  };

  const formatValue = (metric: string, value: number) => {
    if (metric === "CLS") return value.toFixed(3);
    return (
      value.toFixed(0) +
      (metric === "LCP" ||
      metric === "FID" ||
      metric === "INP" ||
      metric === "FCP" ||
      metric === "TTFB"
        ? "ms"
        : "")
    );
  };

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">Performance Dashboard</h1>

      <div className="flex justify-between items-center mb-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="core-vitals">Core Web Vitals</TabsTrigger>
            <TabsTrigger value="other-metrics">Other Metrics</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="flex items-center gap-4">
          <Select value={days} onValueChange={setDays}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select time period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Last 24 hours</SelectItem>
              <SelectItem value="7">Last 7 days</SelectItem>
              <SelectItem value="30">Last 30 days</SelectItem>
            </SelectContent>
          </Select>

          <Button onClick={fetchAllMetrics}>Refresh</Button>
        </div>
      </div>

      <TabsContent value="core-vitals" className="mt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {coreVitalsMetrics.map((metric) => (
            <MetricCard
              key={metric}
              metric={metric}
              data={metrics[metric] || []}
              loading={loading[metric] || false}
              error={error[metric] || ""}
              averageValue={getAverageValue(metric)}
              formatValue={formatValue}
              getRatingColor={getRatingColor}
              getRatingForValue={getRatingForValue}
            />
          ))}
        </div>
      </TabsContent>

      <TabsContent value="other-metrics" className="mt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherMetrics.map((metric) => (
            <MetricCard
              key={metric}
              metric={metric}
              data={metrics[metric] || []}
              loading={loading[metric] || false}
              error={error[metric] || ""}
              averageValue={getAverageValue(metric)}
              formatValue={formatValue}
              getRatingColor={getRatingColor}
              getRatingForValue={getRatingForValue}
            />
          ))}
        </div>
      </TabsContent>
    </div>
  );
}

interface MetricCardProps {
  metric: string;
  data: PerformanceMetric[];
  loading: boolean;
  error: string;
  averageValue: number;
  formatValue: (metric: string, value: number) => string;
  getRatingColor: (rating: string) => string;
  getRatingForValue: (metric: string, value: number) => string;
}

function MetricCard({
  metric,
  data,
  loading,
  error,
  averageValue,
  formatValue,
  getRatingColor,
  getRatingForValue,
}: MetricCardProps) {
  const metricNames: Record<string, string> = {
    LCP: "Largest Contentful Paint",
    FID: "First Input Delay",
    CLS: "Cumulative Layout Shift",
    INP: "Interaction to Next Paint",
    FCP: "First Contentful Paint",
    TTFB: "Time to First Byte",
    LONG_TASK: "Long Tasks",
    SLOW_RESOURCE: "Slow Resources",
  };

  const rating = getRatingForValue(metric, averageValue);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between">
          <span>{metricNames[metric] || metric}</span>
          <span className={getRatingColor(rating)}>{formatValue(metric, averageValue)}</span>
        </CardTitle>
        <CardDescription>
          {loading ? (
            "Loading..."
          ) : error ? (
            <span className="text-red-500">{error}</span>
          ) : (
            `Based on ${data.length} measurements`
          )}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {!loading && !error && data.length > 0 && (
          <div className="space-y-4">
            <div className="h-[150px] relative">
              {/* Simple bar chart */}
              <div className="absolute inset-0 flex items-end justify-between">
                {data.slice(0, 10).map((item, index) => {
                  const itemRating = getRatingForValue(metric, item.value);
                  const height = `${Math.min(100, (item.value / (averageValue * 2)) * 100)}%`;

                  return (
                    <div
                      key={index}
                      className={`w-[8%] ${getRatingColor(itemRating)} bg-current opacity-20 hover:opacity-50 transition-opacity`}
                      style={{ height }}
                      title={`${new Date(item.timestamp).toLocaleString()}: ${formatValue(metric, item.value)}`}
                    />
                  );
                })}
              </div>
            </div>

            <div className="text-sm text-muted-foreground">
              <p>
                <strong>Latest value:</strong>{" "}
                <span className={getRatingColor(getRatingForValue(metric, data[0]?.value || 0))}>
                  {formatValue(metric, data[0]?.value || 0)}
                </span>
              </p>
              <p>
                <strong>URL:</strong> {data[0]?.url?.split("?")[0] || "N/A"}
              </p>
              <p>
                <strong>Time:</strong>{" "}
                {data[0]?.timestamp ? new Date(data[0].timestamp).toLocaleString() : "N/A"}
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
