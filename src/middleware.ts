import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";

export async function middleware(request: NextRequest) {
  // Create a Supabase client configured to use cookies
  const supabase = createMiddlewareClient({ req: request, res: NextResponse.next() });

  // Refresh session if expired - required for Server Components
  const {
    data: { session },
  } = await supabase.auth.getSession();

  // Check if this is an API route that requires authentication
  if (request.nextUrl.pathname.startsWith("/api/protected")) {
    if (!session) {
      // Return a 401 response if not authenticated
      return new NextResponse(
        JSON.stringify({ error: "Unauthorized", message: "Authentication required" }),
        {
          status: 401,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }
  }

  // Check if this is an admin API route
  if (request.nextUrl.pathname.startsWith("/api/admin")) {
    if (!session) {
      // Return a 401 response if not authenticated
      return new NextResponse(
        JSON.stringify({ error: "Unauthorized", message: "Authentication required" }),
        {
          status: 401,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    // Check if user has admin role (in a real app, you'd check user metadata)
    // For now, we'll just check if the user's email ends with @admin.com
    const userEmail = session.user.email;
    const isAdmin = userEmail?.endsWith("@admin.com");

    if (!isAdmin) {
      // Return a 403 response if not authorized
      return new NextResponse(
        JSON.stringify({ error: "Forbidden", message: "Admin access required" }),
        {
          status: 403,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }
  }

  // Auth pages redirect
  if (session && ["/login", "/register", "/forgot-password"].includes(request.nextUrl.pathname)) {
    // Redirect authenticated users away from auth pages
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // Continue with the request
  return NextResponse.next();
}

// Specify which routes this middleware should run on
export const config = {
  matcher: [
    // Apply to all API routes
    "/api/:path*",
    // Apply to auth pages
    "/login",
    "/register",
    "/forgot-password",
    // Apply to protected pages
    "/dashboard/:path*",
    "/admin/:path*",
    "/profile/:path*",
    "/settings/:path*",
  ],
};
