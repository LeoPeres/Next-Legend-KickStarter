import { NextRequest, NextResponse } from "next/server";

/**
 * GET handler for users endpoint
 * Returns a list of users
 */
export async function GET(request: NextRequest) {
  // In a real application, this would fetch from the database
  // and include pagination, filtering, etc.
  return NextResponse.json({
    users: [
      { id: 1, name: "User 1", email: "user1@example.com" },
      { id: 2, name: "User 2", email: "user2@example.com" },
    ],
    pagination: {
      total: 2,
      page: 1,
      limit: 10,
    },
  });
}

/**
 * POST handler for users endpoint
 * Creates a new user
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate request body
    if (!body.name || !body.email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
    }

    // In a real application, this would create a user in the database
    return NextResponse.json(
      {
        id: 3,
        name: body.name,
        email: body.email,
        message: "User created successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }
}
