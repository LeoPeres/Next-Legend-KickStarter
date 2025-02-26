import { NextResponse } from "next/server";

/**
 * GET handler for the API root
 * Returns API information and available endpoints
 */
export async function GET() {
  return NextResponse.json({
    name: "Next Legend API",
    version: "v1",
    status: "operational",
    documentation: "/api/v1/docs",
    endpoints: {
      auth: {
        login: "/api/v1/auth/login",
        register: "/api/v1/auth/register",
        logout: "/api/v1/auth/logout",
        refresh: "/api/v1/auth/refresh",
      },
      users: {
        me: "/api/v1/users/me",
        byId: "/api/v1/users/:id",
      },
      projects: {
        list: "/api/v1/projects",
        byId: "/api/v1/projects/:id",
        create: "/api/v1/projects",
        update: "/api/v1/projects/:id",
        delete: "/api/v1/projects/:id",
      },
      tasks: {
        list: "/api/v1/tasks",
        byId: "/api/v1/tasks/:id",
        create: "/api/v1/tasks",
        update: "/api/v1/tasks/:id",
        delete: "/api/v1/tasks/:id",
      },
    },
  });
}
