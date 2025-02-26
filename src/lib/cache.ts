import { NextRequest, NextResponse } from "next/server";

/**
 * Cache configuration types
 */
export type CacheDuration =
  | "no-cache" // No caching
  | "force-cache" // Cache indefinitely
  | number; // Cache for specified seconds

/**
 * Cache configuration for API responses
 */
export interface CacheConfig {
  duration: CacheDuration;
  staleWhileRevalidate?: boolean; // Whether to serve stale data while revalidating
  tags?: string[]; // Cache tags for invalidation
}

/**
 * Default cache configuration
 */
export const defaultCacheConfig: CacheConfig = {
  duration: 60, // 60 seconds
  staleWhileRevalidate: true,
  tags: [],
};

/**
 * Apply caching headers to a NextResponse
 * @param response The NextResponse to apply caching headers to
 * @param config The cache configuration
 * @returns The NextResponse with caching headers
 */
export function applyCacheHeaders(
  response: NextResponse,
  config: CacheConfig = defaultCacheConfig
): NextResponse {
  const { duration, staleWhileRevalidate, tags } = config;

  // Set cache control header
  let cacheControlValue = "";

  if (duration === "no-cache") {
    cacheControlValue = "no-store, no-cache, must-revalidate, proxy-revalidate";
  } else if (duration === "force-cache") {
    cacheControlValue = "public, max-age=31536000, immutable"; // 1 year
  } else {
    cacheControlValue = `public, max-age=${duration}`;

    // Add stale-while-revalidate if enabled
    if (staleWhileRevalidate) {
      cacheControlValue += `, stale-while-revalidate=${Math.floor(duration / 2)}`;
    }
  }

  response.headers.set("Cache-Control", cacheControlValue);

  // Set cache tags if provided
  if (tags && tags.length > 0) {
    response.headers.set("Cache-Tag", tags.join(","));
  }

  return response;
}

/**
 * Create a cached API handler
 * @param handler The original API handler function
 * @param config The cache configuration
 * @returns A new handler function with caching applied
 */
export function withCache<T extends any[]>(
  handler: (...args: T) => Promise<NextResponse>,
  config: CacheConfig = defaultCacheConfig
) {
  return async (...args: T): Promise<NextResponse> => {
    const response = await handler(...args);
    return applyCacheHeaders(response, config);
  };
}

/**
 * Cache key generator for requests
 * @param request The NextRequest
 * @param params Optional route params
 * @returns A cache key string
 */
export function generateCacheKey(request: NextRequest, params?: Record<string, string>): string {
  const url = new URL(request.url);
  const path = url.pathname;
  const query = url.search;

  // Include route params in the cache key if provided
  const paramsString = params ? `-params:${JSON.stringify(params)}` : "";

  return `${path}${query}${paramsString}`;
}

/**
 * Invalidate cache for specific tags
 * @param tags The cache tags to invalidate
 */
export async function invalidateCache(tags: string[]): Promise<void> {
  // In a real application, this would invalidate the cache in your CDN or cache provider
  console.log(`Invalidating cache for tags: ${tags.join(", ")}`);
}
