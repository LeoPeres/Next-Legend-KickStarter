import { NextRequest, NextResponse } from "next/server";
import { getRedisClient } from "@/lib/redis";

/**
 * API route for receiving performance metrics
 *
 * This endpoint receives performance metrics from the client
 * and stores them in Redis for later analysis.
 *
 * In a production environment, you might want to use a more
 * robust analytics solution like Google Analytics, Sentry,
 * or a custom analytics service.
 */
export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const data = await request.json();

    // Validate the data
    if (!data.metric || typeof data.value !== "number") {
      return NextResponse.json({ error: "Invalid performance data" }, { status: 400 });
    }

    // Add timestamp if not provided
    if (!data.timestamp) {
      data.timestamp = Date.now();
    }

    // Add URL if not provided
    if (!data.url) {
      data.url = request.headers.get("referer") || "unknown";
    }

    // Store in Redis
    const redis = getRedisClient();

    // Create a unique key for this metric
    const metricKey = `perf:${data.metric}:${new Date().toISOString().split("T")[0]}`;

    // Add to a list of metrics for this type and day
    await redis.lpush(metricKey, JSON.stringify(data));

    // Set expiry for 30 days
    await redis.expire(metricKey, 60 * 60 * 24 * 30);

    // Also store in a sorted set for easy querying
    const sortedSetKey = `perf:metrics:${data.metric}`;
    await redis.zadd(sortedSetKey, data.timestamp, JSON.stringify(data));

    // Keep only the last 1000 entries per metric type
    await redis.zremrangebyrank(sortedSetKey, 0, -1001);

    // Return success
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error storing performance metric:", error);

    return NextResponse.json({ error: "Failed to store performance metric" }, { status: 500 });
  }
}

/**
 * API route for retrieving performance metrics
 *
 * This endpoint returns performance metrics for analysis.
 * It's protected and should only be accessible to authenticated
 * administrators.
 */
export async function GET(request: NextRequest) {
  try {
    // In a real application, you would check authentication here
    // For now, we'll only allow this in development
    if (process.env.NODE_ENV !== "development") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const metric = searchParams.get("metric");
    const days = parseInt(searchParams.get("days") || "7", 10);

    // Validate parameters
    if (!metric) {
      return NextResponse.json({ error: "Metric parameter is required" }, { status: 400 });
    }

    const redis = getRedisClient();

    // Get metrics for the specified number of days
    const metrics = [];
    const today = new Date();

    for (let i = 0; i < days; i++) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const dateStr = date.toISOString().split("T")[0];

      const metricKey = `perf:${metric}:${dateStr}`;
      const metricData = await redis.lrange(metricKey, 0, -1);

      metrics.push(...metricData.map((item) => JSON.parse(item)));
    }

    // Return the metrics
    return NextResponse.json({
      metric,
      days,
      count: metrics.length,
      metrics,
    });
  } catch (error) {
    console.error("Error retrieving performance metrics:", error);

    return NextResponse.json({ error: "Failed to retrieve performance metrics" }, { status: 500 });
  }
}
