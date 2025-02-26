import { NextRequest, NextResponse } from "next/server";
import { ZodError, ZodSchema } from "zod";

/**
 * Validates request body against a Zod schema
 * @param request The Next.js request object
 * @param schema The Zod schema to validate against
 * @returns The validated data or throws an error
 */
export async function validateRequest<T>(request: NextRequest, schema: ZodSchema<T>): Promise<T> {
  try {
    const body = await request.json();
    return schema.parse(body);
  } catch (error) {
    if (error instanceof ZodError) {
      throw new ValidationError(error.errors);
    }
    throw new Error("Invalid request body");
  }
}

/**
 * Custom error class for validation errors
 */
export class ValidationError extends Error {
  public errors: any[];

  constructor(errors: any[]) {
    super("Validation error");
    this.name = "ValidationError";
    this.errors = errors;
  }
}

/**
 * Creates a success response
 * @param data The data to return
 * @param status The HTTP status code (default: 200)
 * @returns A NextResponse with the data
 */
export function successResponse(data: any, status = 200): NextResponse {
  return NextResponse.json(data, { status });
}

/**
 * Creates an error response
 * @param message The error message
 * @param status The HTTP status code (default: 400)
 * @returns A NextResponse with the error
 */
export function errorResponse(message: string, status = 400): NextResponse {
  return NextResponse.json({ error: message }, { status });
}

/**
 * Creates a validation error response
 * @param errors The validation errors
 * @returns A NextResponse with the validation errors
 */
export function validationErrorResponse(errors: any[]): NextResponse {
  return NextResponse.json(
    {
      error: "Validation error",
      details: errors,
    },
    { status: 400 }
  );
}

/**
 * Handles API errors and returns appropriate responses
 * @param error The error to handle
 * @returns A NextResponse with the error
 */
export function handleApiError(error: unknown): NextResponse {
  if (error instanceof ValidationError) {
    return validationErrorResponse(error.errors);
  }

  if (error instanceof Error) {
    return errorResponse(error.message);
  }

  return errorResponse("An unexpected error occurred", 500);
}
