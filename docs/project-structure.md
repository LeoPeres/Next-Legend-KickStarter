# Project Structure and Architecture

This document provides a detailed overview of the Next-Legend-KickStarter project structure and architecture.

## Directory Structure

```
├── public/             # Static assets
├── src/
│   ├── app/            # App router pages and layouts
│   │   ├── api/        # API routes
│   │   ├── auth/       # Authentication pages
│   │   ├── dashboard/  # Dashboard pages
│   │   └── ...         # Other routes
│   ├── components/     # Reusable UI components
│   │   ├── ui/         # Base UI components (shadcn/ui)
│   │   └── ...         # Custom components
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions and shared code
│   │   ├── db/         # Database related code
│   │   │   ├── schema/ # Database schema definitions
│   │   │   └── index.ts # Database connection and utilities
│   ├── styles/         # Global styles
│   ├── types/          # TypeScript type definitions
│   └── test-utils/     # Testing utilities
├── tasks/              # Project tasks and checklists
├── prompts/            # AI prompts for development
├── drizzle/            # Database migrations
├── e2e-tests/          # End-to-end tests with Playwright
├── __mocks__/          # Jest mocks
└── .storybook/         # Storybook configuration
```

## Architecture Overview

Next-Legend-KickStarter follows a modern Next.js architecture with the following key components:

### Frontend Architecture

#### App Router

The project uses Next.js App Router for routing and layouts. This provides:
- File-based routing
- Nested layouts
- Loading states
- Error handling
- Server and client components

#### Component Structure

Components are organized into:
- **UI Components**: Base components from shadcn/ui (src/components/ui)
- **Custom Components**: Application-specific components (src/components)
- **Page Components**: Components specific to a page or route (src/app)

#### State Management

- **Legend State**: Used for client-side state management
- **Server State**: Leverages React Server Components for server-side state
- **Supabase Integration**: Legend State integrates with Supabase for real-time updates

### Backend Architecture

#### API Routes

Next.js API routes are used for backend functionality:
- RESTful endpoints in `src/app/api`
- Authentication endpoints
- Data fetching and mutation

#### Database Layer

- **Drizzle ORM**: Type-safe database access
- **PostgreSQL**: Relational database for data storage
- **Schema**: Defined in `src/lib/db/schema`
- **Migrations**: Managed with Drizzle Kit in the `drizzle` directory

#### Authentication

- **Supabase Auth**: For authentication and user management
- **Auth Providers**: Multiple authentication providers (email/password, social)
- **Protected Routes**: Implementation in `src/components/protected-route.tsx`
- **Permission Guards**: Implementation in `src/components/permission-guard.tsx`

### Testing Architecture

- **Unit Tests**: Jest for component and utility testing
- **E2E Tests**: Playwright for end-to-end testing
- **Storybook**: For component development and visual testing
- **Test Utilities**: Helper functions in `src/test-utils`

### Monitoring and Analytics

- **Sentry**: For error tracking and monitoring
- **Vercel Analytics**: For performance monitoring
- **Custom Analytics**: Implementation in `src/components/analytics-provider.tsx`

## Key Design Patterns

### Provider Pattern

The application uses the Provider pattern for various global services:
- `auth-provider.tsx`: Authentication context
- `theme-provider.tsx`: Theme context
- `supabase-provider.tsx`: Supabase client
- `analytics-provider.tsx`: Analytics tracking

### Component Composition

UI components are built using composition:
- Base components from shadcn/ui
- Composed into more complex components
- Props for customization and flexibility

### Server/Client Component Pattern

The application leverages Next.js server and client components:
- Server components for data fetching and rendering
- Client components for interactivity
- Clear boundaries between server and client code

### Data Fetching Patterns

- Server components for direct database access
- API routes for client-side data fetching
- SWR or React Query for data fetching in client components

## Configuration Files

- `next.config.js`: Next.js configuration
- `tailwind.config.ts`: Tailwind CSS configuration
- `tsconfig.json`: TypeScript configuration
- `jest.config.js`: Jest configuration
- `playwright.config.ts`: Playwright configuration
- `drizzle.config.ts`: Drizzle ORM configuration
- `.env.*`: Environment variables for different environments

## Deployment Architecture

The application is configured for deployment on Vercel:
- Automatic deployments from Git
- Environment variables managed in Vercel dashboard
- Edge functions for API routes
- CDN for static assets

For more details on deployment, see [deployment.md](./deployment.md).

## Database Architecture

The database schema is defined using Drizzle ORM:
- Tables and relationships in `src/lib/db/schema`
- Migrations in `drizzle` directory
- Connection pooling for efficient database access

For more details on the database, see [DATABASE.md](../DATABASE.md).

## Authentication Flow

The authentication flow is implemented using Supabase Auth:
- Sign up, sign in, and sign out
- Password reset
- Social authentication
- Protected routes

For more details on authentication, see [authentication.md](./authentication.md).

## Monitoring and Error Tracking

The application uses Sentry for error tracking and monitoring:
- Error boundaries for graceful error handling
- Performance monitoring
- Error tracking and reporting

For more details on monitoring, see [monitoring.md](./monitoring.md). 