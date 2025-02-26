# Next-Legend-KickStarter

A modern web application built with Next.js, TypeScript, Tailwind CSS, and Legend State for state management.

## Project Overview

This project is a kickstarter application built with the following technologies:

- **Next.js**: React framework for server-side rendering and static site generation
- **TypeScript**: For type safety and better developer experience
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Reusable UI components
- **Legend State**: State management with Supabase plugin
- **Drizzle ORM**: Type-safe database ORM for PostgreSQL
- **PostgreSQL**: Relational database for data storage
- **Supabase**: For authentication and storage
- **Sentry**: For error tracking and monitoring
- **Vercel Analytics**: For performance monitoring
- **Jest & Playwright**: For testing

## Getting Started

First, install the dependencies:

```bash
npm install
```

### Database Setup

This project uses PostgreSQL as the database. You can set it up using Docker:

```bash
docker-compose up -d postgres
```

Or follow the instructions in [DATABASE.md](./DATABASE.md) for alternative setup methods.

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```
# Database
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/next_legend"

# Supabase (if you're using Supabase)
SUPABASE_URL="https://your-supabase-url.supabase.co"
SUPABASE_ANON_KEY="your-supabase-anon-key"

# Sentry (for error tracking)
SENTRY_DSN="your-sentry-dsn"
SENTRY_AUTH_TOKEN="your-sentry-auth-token"

# Analytics
NEXT_PUBLIC_ANALYTICS_ID="your-analytics-id"
```

For different environments, you can use:
- `.env.local` - Local development
- `.env.staging` - Staging environment
- `.env.production` - Production environment

### Running Migrations

To set up the database schema:

```bash
npm run db:migrate
```

### Development Server

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

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

## Architecture

This project follows a modern Next.js architecture with the following key aspects:

### Frontend Architecture
- **App Router**: Uses Next.js App Router for routing and layouts
- **Server Components**: Leverages React Server Components for improved performance
- **Client Components**: Uses client components where interactivity is needed
- **Legend State**: For client-side state management with Supabase integration

### Backend Architecture
- **API Routes**: Next.js API routes for backend functionality
- **Drizzle ORM**: Type-safe database access
- **PostgreSQL**: Relational database for data storage
- **Supabase Auth**: For authentication and user management

### Testing Strategy
- **Unit Tests**: Jest for component and utility testing
- **E2E Tests**: Playwright for end-to-end testing
- **Storybook**: For component development and visual testing

## Database Management

- **Generate Migrations**: `npm run db:generate`
- **Run Migrations**: `npm run db:migrate`
- **View Database**: `npm run db:studio`

For more details on database setup and management, see [DATABASE.md](./DATABASE.md).

## Build and Deployment

### Building the Application

```bash
npm run build
```

This will create an optimized production build in the `.next` directory.

### Running in Production

```bash
npm run start
```

This will start the production server.

### Deployment

The application is configured for deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Configure environment variables in the Vercel dashboard
3. Deploy with the default settings

For other platforms, you may need to adjust the configuration accordingly.

## Development Guidelines

- Follow the TypeScript best practices
- Use Tailwind CSS for styling
- Implement responsive design for all components
- Write unit tests for critical functionality
- Use Storybook for component development
- Follow the Git workflow described in the team documentation

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Legend State Documentation](https://legendapp.com/open-source/state/)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [Drizzle ORM Documentation](https://orm.drizzle.team/)
- [Supabase Documentation](https://supabase.com/docs)
- [Sentry Documentation](https://docs.sentry.io/)
- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Jest Documentation](https://jestjs.io/docs/getting-started)

## Contributing

Please read our [Contributing Guide](./CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
