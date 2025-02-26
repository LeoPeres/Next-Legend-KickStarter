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
```

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
│   ├── components/     # Reusable UI components
│   ├── lib/            # Utility functions and shared code
│   │   ├── db/         # Database related code
│   │   │   ├── schema/ # Database schema definitions
│   │   │   └── index.ts # Database connection and utilities
│   ├── styles/         # Global styles
│   └── types/          # TypeScript type definitions
├── tasks/              # Project tasks and checklists
├── prompts/            # AI prompts for development
└── drizzle/            # Database migrations
```

## Database Management

- **Generate Migrations**: `npm run db:generate`
- **Run Migrations**: `npm run db:migrate`
- **View Database**: `npm run db:studio`

For more details on database setup and management, see [DATABASE.md](./DATABASE.md).

## Development Guidelines

- Follow the TypeScript best practices
- Use Tailwind CSS for styling
- Implement responsive design for all components
- Write unit tests for critical functionality

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Legend State Documentation](https://legendapp.com/open-source/state/)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [Drizzle ORM Documentation](https://orm.drizzle.team/)

## Deployment

The application can be deployed on Vercel or any other hosting platform that supports Next.js applications.
