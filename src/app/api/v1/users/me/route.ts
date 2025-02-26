import { NextRequest, NextResponse } from "next/server";

/**
 * GET handler for current user
 * Returns the currently authenticated user
 */
export async function GET(request: NextRequest) {
  // In a real application, this would get the user from the session/token
  // For now, we'll return a mock user
  return NextResponse.json({
    id: 1,
    name: "Current User",
    email: "current.user@example.com",
    role: "admin",
    createdAt: new Date().toISOString(),
    lastLogin: new Date().toISOString(),
  });
}

/**
 * PUT handler for current user
 * Updates the currently authenticated user
 */
export async function PUT(request: NextRequest) {
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
    return NextResponse.json({
      id: 1,
      name: body.name || "Current User",
      email: body.email || "current.user@example.com",
      role: "admin",
      message: "Profile updated successfully",
    });
  } catch (error) {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }
}
