import { NextRequest, NextResponse } from "next/server";

/**
 * GET handler for individual user
 * Returns a user by ID
 */
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const id = params.id;

  // In a real application, this would fetch from the database
  if (id === "1" || id === "2") {
    return NextResponse.json({
      id: parseInt(id),
      name: `User ${id}`,
      email: `user${id}@example.com`,
      role: "user",
      createdAt: new Date().toISOString(),
    });
  }

  return NextResponse.json({ error: "User not found" }, { status: 404 });
}

/**
 * PUT handler for individual user
 * Updates a user by ID
 */
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const id = params.id;

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
      id: parseInt(id),
      name: body.name || `User ${id}`,
      email: body.email || `user${id}@example.com`,
      message: "User updated successfully",
    });
  } catch (error) {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }
}

/**
 * DELETE handler for individual user
 * Deletes a user by ID
 */
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  const id = params.id;

  // In a real application, this would delete the user from the database
  return NextResponse.json({
    message: `User ${id} deleted successfully`,
  });
}
