import Redis from "ioredis";
import { REDIS_URL } from "./env";

// Redis client options
const options = {
  maxRetriesPerRequest: 3,
  retryStrategy: (times: number) => {
    // Retry with exponential backoff
    return Math.min(times * 50, 2000);
  },
};

// Create Redis client instance
let redisClient: Redis | null = null;

/**
 * Get Redis client instance (singleton pattern)
 * @returns Redis client instance
 */
export function getRedisClient(): Redis {
  if (!redisClient) {
    redisClient = new Redis(REDIS_URL, options);

    // Handle Redis connection errors
    redisClient.on("error", (error) => {
      console.error("Redis connection error:", error);

      // In development, provide helpful error messages
      if (process.env.NODE_ENV === "development") {
        if (error instanceof Error && "code" in error && error.code === "ECONNREFUSED") {
          console.error("\nRedis connection refused. Please check that:");
          console.error("1. Redis is installed and running");
          console.error("2. The REDIS_URL in .env.local is correct");
          console.error("\nTo start Redis locally, you can run:");
          console.error("docker run -p 6379:6379 redis:alpine");
        }
      }
    });
  }

  return redisClient;
}

/**
 * Cache wrapper for server-side functions
 * @param key The cache key
 * @param fn The function to cache
 * @param ttl Time to live in seconds (default: 60 seconds)
 * @returns The cached or fresh result
 */
export async function withCache<T>(
  key: string,
  fn: () => Promise<T>,
  ttl: number = 60
): Promise<T> {
  const redis = getRedisClient();

  try {
    // Try to get from cache first
    const cachedData = await redis.get(key);

    if (cachedData) {
      return JSON.parse(cachedData) as T;
    }

    // If not in cache, execute the function
    const result = await fn();

    // Store in cache
    await redis.set(key, JSON.stringify(result), "EX", ttl);

    return result;
  } catch (error) {
    // If Redis fails, just execute the function
    console.error("Redis cache error:", error);
    return fn();
  }
}

/**
 * Cache wrapper with hash fields for server-side functions
 * @param hashKey The hash key
 * @param fieldKey The field key within the hash
 * @param fn The function to cache
 * @param ttl Time to live in seconds (default: 60 seconds)
 * @returns The cached or fresh result
 */
export async function withHashCache<T>(
  hashKey: string,
  fieldKey: string,
  fn: () => Promise<T>,
  ttl: number = 60
): Promise<T> {
  const redis = getRedisClient();

  try {
    // Try to get from cache first
    const cachedData = await redis.hget(hashKey, fieldKey);

    if (cachedData) {
      return JSON.parse(cachedData) as T;
    }

    // If not in cache, execute the function
    const result = await fn();

    // Store in cache
    await redis.hset(hashKey, fieldKey, JSON.stringify(result));

    // Set expiry on the hash
    await redis.expire(hashKey, ttl);

    return result;
  } catch (error) {
    // If Redis fails, just execute the function
    console.error("Redis hash cache error:", error);
    return fn();
  }
}

/**
 * Invalidate a cache key
 * @param key The cache key to invalidate
 */
export async function invalidateCache(key: string): Promise<void> {
  const redis = getRedisClient();

  try {
    await redis.del(key);
  } catch (error) {
    console.error("Redis invalidation error:", error);
  }
}

/**
 * Invalidate a field in a hash
 * @param hashKey The hash key
 * @param fieldKey The field key to invalidate
 */
export async function invalidateHashField(hashKey: string, fieldKey: string): Promise<void> {
  const redis = getRedisClient();

  try {
    await redis.hdel(hashKey, fieldKey);
  } catch (error) {
    console.error("Redis hash field invalidation error:", error);
  }
}

/**
 * Invalidate all cache keys matching a pattern
 * @param pattern The pattern to match (e.g., "user:*")
 */
export async function invalidateCachePattern(pattern: string): Promise<void> {
  const redis = getRedisClient();

  try {
    const keys = await redis.keys(pattern);

    if (keys.length > 0) {
      await redis.del(...keys);
    }
  } catch (error) {
    console.error("Redis pattern invalidation error:", error);
  }
}

/**
 * Close Redis connection
 */
export async function closeRedisConnection(): Promise<void> {
  if (redisClient) {
    await redisClient.quit();
    redisClient = null;
  }
}
