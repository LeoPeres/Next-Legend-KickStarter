# Project Structure and Architecture

This document provides an overview of the Next-Legend-KickStarter project structure and architecture.

## Technology Stack

The project is built with the following technologies:

- **Next.js**: React framework for server-side rendering and static site generation
- **TypeScript**: Typed JavaScript for better developer experience and code quality
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Legend State**: State management library
- **Drizzle ORM**: TypeScript ORM for database access
- **PostgreSQL**: Relational database
- **Shadcn UI**: Component library based on Radix UI and Tailwind CSS
- **Storybook**: Tool for developing UI components in isolation

## Project Structure

```
next-legend-kickstarter/
├── .github/                  # GitHub workflows and templates
├── .storybook/               # Storybook configuration
├── docs/                     # Project documentation
├── public/                   # Static assets
├── src/                      # Source code
│   ├── app/                  # Next.js app router
│   │   ├── (auth)/           # Authentication routes
│   │   ├── (dashboard)/      # Dashboard routes
│   │   ├── api/              # API routes
│   │   ├── globals.css       # Global CSS
│   │   ├── layout.tsx        # Root layout
│   │   └── page.tsx          # Home page
│   ├── components/           # React components
│   │   ├── ui/               # UI components
│   │   └── [feature]/        # Feature-specific components
│   ├── hooks/                # Custom React hooks
│   ├── lib/                  # Utility functions and libraries
│   │   ├── db/               # Database configuration and schemas
│   │   ├── state/            # State management
│   │   └── utils/            # Utility functions
│   ├── stories/              # Storybook stories
│   └── types/                # TypeScript type definitions
├── tasks/                    # Project tasks and documentation
├── .env.example              # Example environment variables
├── .eslintrc.json           # ESLint configuration
├── .gitignore               # Git ignore file
├── drizzle.config.ts        # Drizzle ORM configuration
├── next.config.js           # Next.js configuration
├── package.json             # Project dependencies and scripts
├── postcss.config.js        # PostCSS configuration
├── tailwind.config.ts       # Tailwind CSS configuration
└── tsconfig.json            # TypeScript configuration
```

## Architecture Overview

The project follows a modern React architecture with Next.js, emphasizing server components, type safety, and component-based design.

### Key Architectural Patterns

#### 1. App Router

Next.js App Router is used for routing, which provides:
- File-based routing
- Nested layouts
- Server components
- Route groups
- Loading states
- Error handling

#### 2. Component Architecture

Components are organized into two main categories:
- **UI Components**: Reusable, presentational components in `src/components/ui/`
- **Feature Components**: Components specific to features in `src/components/[feature]/`

#### 3. State Management

Legend State is used for state management, providing:
- Reactive state management
- Server-side rendering compatibility
- TypeScript integration
- Optimized re-renders

#### 4. Data Access Layer

Drizzle ORM is used for database access, providing:
- Type-safe database queries
- Schema definition
- Migrations
- Query building

### Request Flow

1. **Client Request**: User interacts with the application
2. **Next.js Router**: Routes the request to the appropriate page
3. **Server Component**: Renders on the server and fetches data if needed
4. **Data Access**: Server components access data through the data access layer
5. **State Management**: Client components use Legend State for client-side state
6. **Response**: Rendered HTML is sent to the client
7. **Hydration**: Client-side JavaScript hydrates the page for interactivity

## Key Directories and Files

### `/src/app`

Contains the Next.js App Router pages and layouts. Each directory represents a route in the application.

### `/src/components`

Contains all React components used in the application:
- `/ui`: UI components from the component library
- `/[feature]`: Feature-specific components

### `/src/lib`

Contains utility functions and libraries:
- `/db`: Database configuration, schemas, and migrations
- `/state`: State management setup and stores
- `/utils`: Utility functions used throughout the application

### `/src/hooks`

Contains custom React hooks for reusing logic across components.

### `/src/types`

Contains TypeScript type definitions used throughout the application.

### `/docs`

Contains project documentation, including:
- Architecture documentation
- Component library documentation
- Developer guides
- API documentation

## Database Schema

The database schema is defined in `src/lib/db/schema/` and includes the following tables:

- **users**: User information
- **accounts**: Authentication accounts
- **sessions**: User sessions
- **projects**: Project information
- **tasks**: Task information
- **comments**: Comment information

## Authentication Flow

The authentication flow is handled by NextAuth.js and follows these steps:

1. User navigates to a protected route
2. If not authenticated, user is redirected to the login page
3. User authenticates with a provider (e.g., email, Google, GitHub)
4. NextAuth.js creates a session
5. User is redirected back to the protected route

## Deployment Architecture

The application is deployed using a modern cloud architecture:

1. **Frontend**: Next.js application deployed on Vercel
2. **Database**: PostgreSQL database hosted on a cloud provider
3. **Assets**: Static assets served from a CDN
4. **CI/CD**: Automated testing and deployment using GitHub Actions

## Performance Considerations

The application is optimized for performance in several ways:

1. **Server Components**: Reduce client-side JavaScript
2. **Code Splitting**: Automatically split code by route
3. **Image Optimization**: Next.js Image component for optimized images
4. **Caching**: Leveraging Next.js caching mechanisms
5. **Prefetching**: Prefetch links for faster navigation

## Security Considerations

The application implements several security measures:

1. **Authentication**: Secure authentication with NextAuth.js
2. **Authorization**: Role-based access control
3. **CSRF Protection**: Protection against cross-site request forgery
4. **Content Security Policy**: Restrictions on content sources
5. **Input Validation**: Validation of all user inputs
6. **Secure Headers**: HTTP security headers

## Testing Strategy

The project uses a comprehensive testing strategy:

1. **Unit Tests**: Testing individual components and functions
2. **Integration Tests**: Testing how components work together
3. **End-to-End Tests**: Testing the application as a whole
4. **Visual Regression Tests**: Testing UI components visually

## Conclusion

This document provides an overview of the project structure and architecture. For more detailed information, refer to the specific documentation for each component or feature. 