import { NextRequest, NextResponse } from "next/server";
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";

// Define cache control directives for different content types
const cacheControl = {
  // Static assets (images, fonts, etc.)
  static: "public, max-age=31536000, immutable", // 1 year

  // CSS and JavaScript files
  assets: "public, max-age=86400, stale-while-revalidate=604800", // 1 day, stale for 1 week

  // HTML pages for authenticated users
  authenticated: "private, no-cache, no-store, must-revalidate",

  // HTML pages for public users
  public: "public, max-age=60, stale-while-revalidate=600", // 1 minute, stale for 10 minutes

  // API responses
  api: "private, no-cache, no-store, must-revalidate",

  // API responses that can be cached
  apiCacheable: "public, max-age=60, stale-while-revalidate=600", // 1 minute, stale for 10 minutes
};

/**
 * Determine if a request is for a static asset
 * @param pathname The request pathname
 * @returns Whether the request is for a static asset
 */
function isStaticAsset(pathname: string): boolean {
  return /\.(jpg|jpeg|png|gif|svg|webp|ico|woff|woff2|ttf|eot|otf)$/.test(pathname);
}

/**
 * Determine if a request is for a CSS or JavaScript file
 * @param pathname The request pathname
 * @returns Whether the request is for a CSS or JavaScript file
 */
function isAsset(pathname: string): boolean {
  return /\.(css|js|json|xml|txt|pdf|map)$/.test(pathname);
}

/**
 * Determine if a request is for an API endpoint
 * @param pathname The request pathname
 * @returns Whether the request is for an API endpoint
 */
function isApiRequest(pathname: string): boolean {
  return pathname.startsWith("/api/");
}

/**
 * Determine if an API request is cacheable
 * @param pathname The request pathname
 * @param method The request method
 * @returns Whether the API request is cacheable
 */
function isApiCacheable(pathname: string, method: string): boolean {
  // Only GET requests can be cached
  if (method !== "GET") return false;

  // Define API endpoints that can be cached
  const cacheableEndpoints = ["/api/v1/posts", "/api/v1/categories", "/api/v1/tags"];

  // Check if the pathname starts with any of the cacheable endpoints
  return cacheableEndpoints.some((endpoint) => pathname.startsWith(endpoint));
}

/**
 * Add cache control headers to the response
 * @param req The Next.js request
 * @param res The Next.js response
 * @returns The response with cache control headers
 */
function addCacheHeaders(req: NextRequest, res: NextResponse): NextResponse {
  const { pathname } = req.nextUrl;
  const method = req.method;

  // Set appropriate cache control headers based on the request
  if (isStaticAsset(pathname)) {
    res.headers.set("Cache-Control", cacheControl.static);
  } else if (isAsset(pathname)) {
    res.headers.set("Cache-Control", cacheControl.assets);
  } else if (isApiRequest(pathname)) {
    if (isApiCacheable(pathname, method)) {
      res.headers.set("Cache-Control", cacheControl.apiCacheable);
    } else {
      res.headers.set("Cache-Control", cacheControl.api);
    }
  } else {
    // For HTML pages, check if the user is authenticated
    const supabase = createMiddlewareClient({ req, res });
    const hasSession = req.cookies.has("supabase-auth-token");

    if (hasSession) {
      res.headers.set("Cache-Control", cacheControl.authenticated);
    } else {
      res.headers.set("Cache-Control", cacheControl.public);
    }
  }

  // Add Vary header to ensure proper caching based on these headers
  res.headers.set("Vary", "Accept-Encoding, Cookie");

  return res;
}

/**
 * Middleware function
 * @param req The Next.js request
 * @returns The Next.js response
 */
export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Get the response from the next middleware or route handler
  const res = NextResponse.next();

  // Add cache control headers
  return addCacheHeaders(req, res);
}

/**
 * Configure which paths the middleware should run on
 */
export const config = {
  matcher: [
    // Apply to all paths except for specific ones
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
