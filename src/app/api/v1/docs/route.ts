import { NextRequest, NextResponse } from "next/server";

/**
 * GET handler for API documentation
 * Returns the OpenAPI specification
 */
export async function GET(request: NextRequest) {
  const openApiSpec = {
    openapi: "3.0.0",
    info: {
      title: "Next Legend API",
      version: "v1",
      description: "API for the Next Legend application",
    },
    servers: [
      {
        url: "/api/v1",
        description: "API v1",
      },
    ],
    paths: {
      "/": {
        get: {
          summary: "API Information",
          description: "Returns API information and available endpoints",
          responses: {
            "200": {
              description: "API information",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      name: { type: "string" },
                      version: { type: "string" },
                      status: { type: "string" },
                      documentation: { type: "string" },
                      endpoints: { type: "object" },
                    },
                  },
                },
              },
            },
          },
        },
      },
      "/users": {
        get: {
          summary: "Get Users",
          description: "Returns a list of users",
          responses: {
            "200": {
              description: "List of users",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      users: {
                        type: "array",
                        items: {
                          $ref: "#/components/schemas/User",
                        },
                      },
                      pagination: {
                        $ref: "#/components/schemas/Pagination",
                      },
                    },
                  },
                },
              },
            },
          },
        },
        post: {
          summary: "Create User",
          description: "Creates a new user",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/CreateUser",
                },
              },
            },
          },
          responses: {
            "201": {
              description: "User created",
              content: {
                "application/json": {
                  schema: {
                    allOf: [
                      { $ref: "#/components/schemas/User" },
                      {
                        type: "object",
                        properties: {
                          message: { type: "string" },
                        },
                      },
                    ],
                  },
                },
              },
            },
            "400": {
              description: "Bad request",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/Error",
                  },
                },
              },
            },
          },
        },
      },
      "/users/{id}": {
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: {
              type: "string",
            },
            description: "User ID",
          },
        ],
        get: {
          summary: "Get User",
          description: "Returns a user by ID",
          responses: {
            "200": {
              description: "User details",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/User",
                  },
                },
              },
            },
            "404": {
              description: "User not found",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/Error",
                  },
                },
              },
            },
          },
        },
        put: {
          summary: "Update User",
          description: "Updates a user by ID",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/UpdateUser",
                },
              },
            },
          },
          responses: {
            "200": {
              description: "User updated",
              content: {
                "application/json": {
                  schema: {
                    allOf: [
                      { $ref: "#/components/schemas/User" },
                      {
                        type: "object",
                        properties: {
                          message: { type: "string" },
                        },
                      },
                    ],
                  },
                },
              },
            },
            "400": {
              description: "Bad request",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/Error",
                  },
                },
              },
            },
            "404": {
              description: "User not found",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/Error",
                  },
                },
              },
            },
          },
        },
        delete: {
          summary: "Delete User",
          description: "Deletes a user by ID",
          responses: {
            "200": {
              description: "User deleted",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      message: { type: "string" },
                    },
                  },
                },
              },
            },
            "404": {
              description: "User not found",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/Error",
                  },
                },
              },
            },
          },
        },
      },
      "/users/me": {
        get: {
          summary: "Get Current User",
          description: "Returns the currently authenticated user",
          responses: {
            "200": {
              description: "Current user details",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/User",
                  },
                },
              },
            },
            "401": {
              description: "Unauthorized",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/Error",
                  },
                },
              },
            },
          },
        },
        put: {
          summary: "Update Current User",
          description: "Updates the currently authenticated user",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/UpdateUser",
                },
              },
            },
          },
          responses: {
            "200": {
              description: "User updated",
              content: {
                "application/json": {
                  schema: {
                    allOf: [
                      { $ref: "#/components/schemas/User" },
                      {
                        type: "object",
                        properties: {
                          message: { type: "string" },
                        },
                      },
                    ],
                  },
                },
              },
            },
            "400": {
              description: "Bad request",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/Error",
                  },
                },
              },
            },
            "401": {
              description: "Unauthorized",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/Error",
                  },
                },
              },
            },
          },
        },
      },
    },
    components: {
      schemas: {
        User: {
          type: "object",
          properties: {
            id: { type: "number" },
            name: { type: "string" },
            email: { type: "string", format: "email" },
            role: { type: "string", enum: ["admin", "user"] },
            createdAt: { type: "string", format: "date-time" },
            lastLogin: { type: "string", format: "date-time" },
          },
          required: ["id", "name", "email"],
        },
        CreateUser: {
          type: "object",
          properties: {
            name: { type: "string", minLength: 2 },
            email: { type: "string", format: "email" },
            password: { type: "string", minLength: 8 },
          },
          required: ["name", "email", "password"],
        },
        UpdateUser: {
          type: "object",
          properties: {
            name: { type: "string", minLength: 2 },
            email: { type: "string", format: "email" },
          },
        },
        Pagination: {
          type: "object",
          properties: {
            total: { type: "number" },
            page: { type: "number" },
            limit: { type: "number" },
          },
          required: ["total", "page", "limit"],
        },
        Error: {
          type: "object",
          properties: {
            error: { type: "string" },
          },
          required: ["error"],
        },
      },
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  };

  return NextResponse.json(openApiSpec);
}
