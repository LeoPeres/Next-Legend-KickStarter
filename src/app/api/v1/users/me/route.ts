import { NextRequest, NextResponse } from "next/server";
import { withCache, invalidateCache } from "@/lib/cache";

/**
 * GET handler for current user
 * Returns the currently authenticated user
 */
async function getCurrentUser(request: NextRequest) {
  // In a real application, this would fetch the current user from the session
  return NextResponse.json({
    id: 1,
    name: "Current User",
    email: "current@example.com",
    role: "admin",
    createdAt: new Date().toISOString(),
    lastLogin: new Date().toISOString(),
  });
}

/**
 * PUT handler for current user
 * Updates the currently authenticated user
 */
async function updateCurrentUser(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate request body
    if (!body.name && !body.email) {
      return NextResponse.json(
        { error: "At least one field (name or email) is required" },
        { status: 400 }
      );
    }

    // In a real application, this would update the user in the database

    // Invalidate cache for the current user
    await invalidateCache(["current-user"]);

    return NextResponse.json({
      id: 1,
      name: body.name || "Current User",
      email: body.email || "current@example.com",
      message: "Profile updated successfully",
    });
  } catch (error) {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }
}

// Apply caching to the GET handler (short duration for personal data)
export const GET = withCache(getCurrentUser, {
  duration: 60, // 1 minute
  staleWhileRevalidate: true,
  tags: ["current-user"],
});

// PUT requests should not be cached
export const PUT = updateCurrentUser;
