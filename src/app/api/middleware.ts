import { NextRequest, NextResponse } from "next/server";
import { errorResponse } from "@/lib/api-utils";

/**
 * Middleware for API rate limiting
 * @param request The Next.js request object
 * @returns NextResponse or undefined
 */
export async function rateLimitMiddleware(request: NextRequest): Promise<NextResponse | undefined> {
  // In a real application, this would check rate limits
  // For now, we'll just return undefined to allow the request to continue
  return undefined;
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
