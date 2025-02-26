# Authentication and Authorization Documentation

This document provides an overview of the authentication and authorization system implemented in the Next Legend Kickstarter project.

## Authentication System

The authentication system is built using Supabase Auth, which provides a secure and scalable solution for user authentication.

### Authentication Flow

1. **User Registration**:
   - Users can register with email/password or OAuth providers (Google, GitHub)
   - Email verification is required for email/password registration
   - User data is stored in Supabase Auth

2. **User Login**:
   - Users can log in with email/password or OAuth providers
   - Session management is handled by Supabase Auth
   - JWT tokens are used for authentication

3. **Password Reset**:
   - Users can request a password reset via email
   - A secure link is sent to the user's email
   - The link redirects to a password reset page

4. **Session Management**:
   - Sessions are managed by Supabase Auth
   - Sessions are refreshed automatically
   - Sessions can be revoked by the user or admin

### Authentication Components

- **Login Page**: `/login`
- **Registration Page**: `/register`
- **Forgot Password Page**: `/forgot-password`
- **Reset Password Page**: `/auth/reset-password`
- **OAuth Callback Page**: `/auth/callback`

### Authentication Utilities

- **Auth Hook**: `useAuth()` - Provides authentication methods and state
- **Auth Actions**: Functions for login, logout, registration, etc.
- **Protected Route Component**: Prevents unauthorized access to protected pages

## Authorization System

The authorization system is built using a Role-Based Access Control (RBAC) approach.

### User Roles

- **Guest**: Unauthenticated users
- **User**: Basic authenticated users
- **Editor**: Users with content management permissions
- **Admin**: Users with full system access

### Permissions

#### Content Permissions
- `read:content`: Permission to read content
- `create:content`: Permission to create content
- `update:content`: Permission to update content
- `delete:content`: Permission to delete content

#### User Management Permissions
- `read:users`: Permission to read user data
- `create:users`: Permission to create users
- `update:users`: Permission to update users
- `delete:users`: Permission to delete users

#### Settings Permissions
- `read:settings`: Permission to read settings
- `update:settings`: Permission to update settings

### Role-Permission Mapping

Each role has a set of permissions:

- **Guest**: `read:content`
- **User**: `read:content`, `create:content`, `update:content`
- **Editor**: `read:content`, `create:content`, `update:content`, `delete:content`, `read:users`
- **Admin**: All permissions

### Authorization Components

- **PermissionGuard**: Component that renders content based on user permissions
- **RoleGuard**: Component that renders content based on user roles

### Middleware

The middleware provides server-side protection for:

- Protected API routes (`/api/protected/*`)
- Admin API routes (`/api/admin/*`)
- Protected pages
- Redirecting authenticated users away from auth pages

## Implementation Details

### Files and Components

- **Authentication**:
  - `src/lib/auth.ts`: Authentication utilities
  - `src/lib/supabase.ts`: Supabase client configuration
  - `src/hooks/use-auth.ts`: Authentication hook
  - Auth pages in `src/app/login`, `src/app/register`, etc.

- **Authorization**:
  - `src/lib/rbac.ts`: Role-based access control utilities
  - `src/components/permission-guard.tsx`: Permission and role guard components
  - `src/middleware.ts`: Server-side authorization middleware
  - `src/components/protected-route.tsx`: Client-side route protection

### Usage Examples

#### Protecting a Route

```tsx
import { ProtectedRoute } from "@/components/protected-route";

export default function ProtectedPage() {
  return (
    <ProtectedRoute>
      <YourComponent />
    </ProtectedRoute>
  );
}
```

#### Checking Permissions

```tsx
import { PermissionGuard } from "@/components/permission-guard";
import { Permission } from "@/lib/rbac";

export default function YourComponent() {
  return (
    <PermissionGuard 
      permission={Permission.CREATE_CONTENT}
      fallback={<p>You don't have permission to create content</p>}
    >
      <CreateContentForm />
    </PermissionGuard>
  );
}
```

#### Checking Roles

```tsx
import { RoleGuard } from "@/components/permission-guard";
import { UserRole } from "@/lib/rbac";

export default function YourComponent() {
  return (
    <RoleGuard 
      role={UserRole.ADMIN}
      fallback={<p>Admin access required</p>}
    >
      <AdminPanel />
    </RoleGuard>
  );
}
```

## Security Considerations

- JWT tokens are stored securely in cookies
- PKCE flow is used for OAuth authentication
- Password reset links expire after a short period
- API routes are protected by middleware
- Row-level security is configured in Supabase
- User roles and permissions are checked on both client and server 