import { NextRequest, NextResponse } from "next/server";
import { errorResponse } from "@/lib/api-utils";
import { getRedisClient } from "@/lib/redis";

// Rate limit configuration
const RATE_LIMIT = {
  MAX_REQUESTS: 100, // Maximum requests per window
  WINDOW_MS: 60 * 1000, // 1 minute window
};

/**
 * Middleware for API rate limiting
 * @param request The Next.js request object
 * @returns NextResponse or undefined
 */
export async function rateLimitMiddleware(request: NextRequest): Promise<NextResponse | undefined> {
  // Get client IP address
  const ip = request.ip || request.headers.get("x-forwarded-for") || "unknown";

  // Create a key based on IP and path
  const path = request.nextUrl.pathname;
  const key = `ratelimit:${ip}:${path}`;

  const now = Date.now();
  const windowExpireMs = RATE_LIMIT.WINDOW_MS;

  try {
    const redis = getRedisClient();

    // Use Redis for rate limiting with a sliding window
    const [count, resetTime] = await Promise.all([
      // Increment the counter
      redis.incr(key),
      // Get the TTL or set it if it doesn't exist
      redis.pttl(key).then((ttl) => {
        if (ttl === -1 || ttl === -2) {
          // Key doesn't exist or has no expiry, set it
          redis.pexpire(key, windowExpireMs);
          return now + windowExpireMs;
        }
        return now + ttl;
      }),
    ]);

    // Check if the rate limit has been exceeded
    if (count > RATE_LIMIT.MAX_REQUESTS) {
      // Return a rate limit exceeded response
      const response = errorResponse("Rate limit exceeded", 429);
      response.headers.set("Retry-After", Math.ceil((resetTime - now) / 1000).toString());
      response.headers.set("X-RateLimit-Limit", RATE_LIMIT.MAX_REQUESTS.toString());
      response.headers.set("X-RateLimit-Remaining", "0");
      response.headers.set("X-RateLimit-Reset", Math.ceil(resetTime / 1000).toString());

      return response;
    }

    // Add rate limit headers to the response
    // This will be handled in the corsMiddleware
    request.headers.set("X-RateLimit-Limit", RATE_LIMIT.MAX_REQUESTS.toString());
    request.headers.set("X-RateLimit-Remaining", (RATE_LIMIT.MAX_REQUESTS - count).toString());
    request.headers.set("X-RateLimit-Reset", Math.ceil(resetTime / 1000).toString());

    // Allow the request to continue
    return undefined;
  } catch (error) {
    // If Redis fails, fall back to in-memory rate limiting
    console.error("Redis rate limiting error:", error);

    // Simple in-memory store for rate limiting fallback
    const rateLimitStore: Record<string, { count: number; resetTime: number }> = {};

    // Initialize or get the rate limit data for this key
    if (!rateLimitStore[key] || rateLimitStore[key].resetTime < now) {
      rateLimitStore[key] = {
        count: 0,
        resetTime: now + RATE_LIMIT.WINDOW_MS,
      };
    }

    // Increment the request count
    rateLimitStore[key].count++;

    // Check if the rate limit has been exceeded
    if (rateLimitStore[key].count > RATE_LIMIT.MAX_REQUESTS) {
      const resetTime = rateLimitStore[key].resetTime;

      // Return a rate limit exceeded response
      const response = errorResponse("Rate limit exceeded", 429);
      response.headers.set("Retry-After", Math.ceil((resetTime - now) / 1000).toString());
      response.headers.set("X-RateLimit-Limit", RATE_LIMIT.MAX_REQUESTS.toString());
      response.headers.set("X-RateLimit-Remaining", "0");
      response.headers.set("X-RateLimit-Reset", Math.ceil(resetTime / 1000).toString());

      return response;
    }

    // Add rate limit headers to the response
    request.headers.set("X-RateLimit-Limit", RATE_LIMIT.MAX_REQUESTS.toString());
    request.headers.set(
      "X-RateLimit-Remaining",
      (RATE_LIMIT.MAX_REQUESTS - rateLimitStore[key].count).toString()
    );
    request.headers.set(
      "X-RateLimit-Reset",
      Math.ceil(rateLimitStore[key].resetTime / 1000).toString()
    );

    // Allow the request to continue
    return undefined;
  }
}

/**
 * Middleware for API authentication
 * @param request The Next.js request object
 * @returns NextResponse or undefined
 */
export async function authMiddleware(request: NextRequest): Promise<NextResponse | undefined> {
  // Skip authentication for public routes
  const url = request.nextUrl.pathname;
  if (url.includes("/api/v1/auth/") || url === "/api/v1") {
    return undefined;
  }

  // In a real application, this would verify the token
  const token = request.headers.get("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return errorResponse("Unauthorized", 401);
  }

  // For now, we'll just check if the token exists
  // In a real application, this would verify the token and set the user in the request
  return undefined;
}

/**
 * Middleware for CORS
 * @param request The Next.js request object
 * @returns NextResponse with CORS headers
 */
export function corsMiddleware(request: NextRequest, response: NextResponse): NextResponse {
  // Add CORS headers
  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");

  // Add rate limit headers if they exist in the request
  const rateLimitLimit = request.headers.get("X-RateLimit-Limit");
  const rateLimitRemaining = request.headers.get("X-RateLimit-Remaining");
  const rateLimitReset = request.headers.get("X-RateLimit-Reset");

  if (rateLimitLimit) {
    response.headers.set("X-RateLimit-Limit", rateLimitLimit);
  }

  if (rateLimitRemaining) {
    response.headers.set("X-RateLimit-Remaining", rateLimitRemaining);
  }

  if (rateLimitReset) {
    response.headers.set("X-RateLimit-Reset", rateLimitReset);
  }

  // Handle preflight requests
  if (request.method === "OPTIONS") {
    return new NextResponse(null, { status: 204, headers: response.headers });
  }

  return response;
}

/**
 * Main API middleware
 * @param request The Next.js request object
 * @param handler The route handler
 * @returns NextResponse
 */
export async function apiMiddleware(
  request: NextRequest,
  handler: (request: NextRequest) => Promise<NextResponse>
): Promise<NextResponse> {
  try {
    // Apply rate limiting
    const rateLimitResponse = await rateLimitMiddleware(request);
    if (rateLimitResponse) return rateLimitResponse;

    // Apply authentication
    const authResponse = await authMiddleware(request);
    if (authResponse) return authResponse;

    // Call the handler
    const response = await handler(request);

    // Apply CORS
    return corsMiddleware(request, response);
  } catch (error) {
    // Handle errors
    if (error instanceof Error) {
      return errorResponse(error.message, 500);
    }
    return errorResponse("An unexpected error occurred", 500);
  }
}
