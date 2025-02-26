# Coding Standards and Best Practices

This document outlines the coding standards and best practices for the Next-Legend-KickStarter project.

## General Principles

- **Readability**: Write code that is easy to read and understand.
- **Maintainability**: Write code that is easy to maintain and extend.
- **Consistency**: Follow consistent patterns and conventions throughout the codebase.
- **Simplicity**: Keep code simple and avoid unnecessary complexity.
- **Performance**: Write efficient code that performs well.

## TypeScript Standards

### Type Safety

- Always use TypeScript's type system to its fullest extent.
- Avoid using `any` type unless absolutely necessary.
- Use interfaces for object shapes and types for unions, primitives, and aliases.
- Use generics when creating reusable components or functions.

```typescript
// Good
interface User {
  id: string;
  name: string;
  email: string;
}

type UserRole = 'admin' | 'user' | 'guest';

// Bad
const user: any = { id: '1', name: 'John' };
```

### Type Definitions

- Place shared type definitions in the `src/types` directory.
- Use descriptive names for types and interfaces.
- Export types that are used across multiple files.

```typescript
// src/types/user.ts
export interface User {
  id: string;
  name: string;
  email: string;
}

export type UserRole = 'admin' | 'user' | 'guest';
```

### Null and Undefined

- Use `undefined` for uninitialized values.
- Use `null` for intentionally absent values.
- Use optional chaining (`?.`) and nullish coalescing (`??`) operators.

```typescript
// Good
const user = users.find(u => u.id === userId);
const userName = user?.name ?? 'Unknown';

// Bad
const userName = user && user.name ? user.name : 'Unknown';
```

## React Standards

### Component Structure

- Use functional components with hooks instead of class components.
- Keep components small and focused on a single responsibility.
- Use named exports for components.

```tsx
// Good
export function UserProfile({ user }: UserProfileProps) {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}

// Bad
export default function(props) {
  return (
    <div>
      <h1>{props.user.name}</h1>
      <p>{props.user.email}</p>
      {/* Many more lines of code... */}
    </div>
  );
}
```

### Props

- Define prop types using TypeScript interfaces.
- Use destructuring for props.
- Provide default values for optional props.

```tsx
interface ButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={`btn btn-${variant} btn-${size}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
```

### Hooks

- Follow the [Rules of Hooks](https://reactjs.org/docs/hooks-rules.html).
- Use custom hooks to share logic between components.
- Keep hook dependencies accurate in `useEffect`, `useMemo`, and `useCallback`.

```tsx
// Good
function useUser(userId: string) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      setLoading(true);
      try {
        const data = await fetchUserById(userId);
        setUser(data);
      } catch (error) {
        console.error('Failed to fetch user:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, [userId]);

  return { user, loading };
}
```

### Server Components vs. Client Components

- Use Server Components for data fetching and rendering static content.
- Use Client Components for interactive elements and client-side state.
- Add the `'use client'` directive at the top of client component files.

```tsx
// Server Component
export function UserList({ users }: { users: User[] }) {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

// Client Component
'use client';

import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

## State Management

### Legend State

- Use Legend State for global state management.
- Create separate stores for different domains.
- Use selectors to access specific parts of the state.

```typescript
// src/lib/state/user-store.ts
import { observable } from '@legendapp/state';

export interface UserState {
  currentUser: User | null;
  isAuthenticated: boolean;
}

export const userStore = observable<UserState>({
  currentUser: null,
  isAuthenticated: false,
});

// Usage in component
import { userStore } from '@/lib/state/user-store';
import { observer } from '@legendapp/state/react';

export const UserProfile = observer(() => {
  const user = userStore.currentUser.get();
  
  if (!user) return <p>Not logged in</p>;
  
  return <p>Welcome, {user.name}</p>;
});
```

### Local State

- Use `useState` for simple component state.
- Use `useReducer` for complex state logic.
- Keep state as close as possible to where it's used.

```tsx
// Good
function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

// Complex state with useReducer
type CounterState = { count: number };
type CounterAction = 
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'reset' };

function counterReducer(state: CounterState, action: CounterAction): CounterState {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  
  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}
```

## Styling Standards

### Tailwind CSS

- Use Tailwind CSS utility classes for styling.
- Follow the mobile-first approach for responsive design.
- Use the `cn` utility function to conditionally apply classes.

```tsx
import { cn } from '@/lib/utils';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  className?: string;
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  className,
  children,
}: ButtonProps) {
  return (
    <button
      className={cn(
        'px-4 py-2 rounded',
        variant === 'primary' ? 'bg-primary text-white' : 'bg-secondary text-gray-800',
        className
      )}
    >
      {children}
    </button>
  );
}
```

### Component Variants

- Use the `cva` function from `class-variance-authority` to define component variants.
- Keep variant definitions consistent across similar components.

```tsx
import { cva } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 py-2 px-4',
        sm: 'h-9 px-3 rounded-md',
        lg: 'h-11 px-8 rounded-md',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);
```

## File and Folder Structure

### Component Files

- One component per file (except for small, related components).
- Use PascalCase for component file names.
- Group related components in folders.

```
src/components/
├── ui/
│   ├── Button.tsx
│   ├── Card.tsx
│   └── Input.tsx
├── auth/
│   ├── LoginForm.tsx
│   ├── SignupForm.tsx
│   └── PasswordReset.tsx
└── dashboard/
    ├── DashboardHeader.tsx
    ├── DashboardSidebar.tsx
    └── DashboardContent.tsx
```

### Page Files

- Follow the Next.js App Router conventions.
- Use `page.tsx` for page components.
- Use `layout.tsx` for layout components.
- Use `loading.tsx` for loading states.
- Use `error.tsx` for error states.

```
src/app/
├── (auth)/
│   ├── login/
│   │   └── page.tsx
│   └── signup/
│       └── page.tsx
├── dashboard/
│   ├── page.tsx
│   ├── layout.tsx
│   └── loading.tsx
└── settings/
    ├── page.tsx
    └── error.tsx
```

## API and Data Fetching

### API Routes

- Use Next.js API routes for backend functionality.
- Organize routes by feature or resource.
- Use HTTP methods appropriately (GET, POST, PUT, DELETE).

```typescript
// src/app/api/users/route.ts
import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { users } from '@/lib/db/schema';

export async function GET() {
  try {
    const allUsers = await db.select().from(users);
    return NextResponse.json(allUsers);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const newUser = await db.insert(users).values(body).returning();
    return NextResponse.json(newUser[0], { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create user' }, { status: 500 });
  }
}
```

### Data Fetching

- Use Server Components for data fetching when possible.
- Use React Query or SWR for client-side data fetching.
- Handle loading and error states appropriately.

```tsx
// Server Component data fetching
async function UserList() {
  const users = await db.select().from(users);
  
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

// Client Component data fetching with SWR
'use client';

import useSWR from 'swr';

function UserList() {
  const { data, error, isLoading } = useSWR('/api/users', fetcher);
  
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  
  return (
    <ul>
      {data.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

## Database Access

### Drizzle ORM

- Define schemas in the `src/lib/db/schema` directory.
- Use migrations for schema changes.
- Use type-safe queries with Drizzle ORM.

```typescript
// src/lib/db/schema/users.ts
import { pgTable, text, timestamp } from 'drizzle-orm/pg-core';
import { createId } from '@paralleldrive/cuid2';

export const users = pgTable('users', {
  id: text('id').primaryKey().$defaultFn(() => createId()),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Usage in a server component
import { db } from '@/lib/db';
import { users } from '@/lib/db/schema/users';

async function getUserById(id: string) {
  const user = await db.select().from(users).where(eq(users.id, id)).limit(1);
  return user[0] || null;
}
```

## Testing Standards

### Unit Tests

- Write unit tests for utility functions and components.
- Use Jest and React Testing Library.
- Focus on testing behavior, not implementation details.

```tsx
// src/components/Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
  
  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  
  it('applies variant classes correctly', () => {
    render(<Button variant="destructive">Delete</Button>);
    const button = screen.getByText('Delete');
    expect(button).toHaveClass('bg-destructive');
  });
});
```

### Integration Tests

- Write integration tests for complex interactions.
- Test how components work together.
- Mock external dependencies.

```tsx
// src/features/auth/LoginForm.test.tsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { LoginForm } from './LoginForm';
import { signIn } from 'next-auth/react';

// Mock next-auth
jest.mock('next-auth/react', () => ({
  signIn: jest.fn(),
}));

describe('LoginForm', () => {
  it('submits the form with user credentials', async () => {
    (signIn as jest.Mock).mockResolvedValueOnce({ ok: true });
    
    render(<LoginForm />);
    
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'test@example.com' },
    });
    
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: 'password123' },
    });
    
    fireEvent.click(screen.getByRole('button', { name: /sign in/i }));
    
    await waitFor(() => {
      expect(signIn).toHaveBeenCalledWith('credentials', {
        email: 'test@example.com',
        password: 'password123',
        redirect: false,
      });
    });
  });
});
```

### End-to-End Tests

- Write E2E tests for critical user flows.
- Use Playwright for E2E testing.
- Test in multiple browsers.

```typescript
// e2e-tests/auth.spec.ts
import { test, expect } from '@playwright/test';

test('user can log in', async ({ page }) => {
  await page.goto('/login');
  
  await page.fill('input[name="email"]', 'test@example.com');
  await page.fill('input[name="password"]', 'password123');
  
  await page.click('button[type="submit"]');
  
  // Wait for navigation to complete
  await page.waitForURL('/dashboard');
  
  // Verify user is logged in
  expect(page.url()).toContain('/dashboard');
  await expect(page.locator('text=Welcome, Test User')).toBeVisible();
});
```

## Performance Optimization

### Code Splitting

- Use dynamic imports for large components or libraries.
- Use Next.js's built-in code splitting.

```tsx
import dynamic from 'next/dynamic';

const DashboardChart = dynamic(() => import('@/components/DashboardChart'), {
  loading: () => <p>Loading chart...</p>,
  ssr: false, // Disable server-side rendering if the component uses browser APIs
});
```

### Memoization

- Use `useMemo` for expensive calculations.
- Use `useCallback` for functions passed to child components.
- Use `memo` for components that render often but with the same props.

```tsx
import { useMemo, useCallback, memo } from 'react';

function ParentComponent({ data }) {
  // Memoize expensive calculation
  const processedData = useMemo(() => {
    return data.map(item => /* expensive processing */);
  }, [data]);
  
  // Memoize callback
  const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, []);
  
  return (
    <div>
      <ChildComponent data={processedData} onClick={handleClick} />
    </div>
  );
}

// Memoize component
const ChildComponent = memo(function ChildComponent({ data, onClick }) {
  return (
    <button onClick={onClick}>
      {data.length} items
    </button>
  );
});
```

### Image Optimization

- Use Next.js's Image component for optimized images.
- Specify appropriate sizes and quality.

```tsx
import Image from 'next/image';

function ProfileImage({ user }) {
  return (
    <Image
      src={user.avatarUrl}
      alt={`${user.name}'s profile picture`}
      width={64}
      height={64}
      quality={80}
      priority={false}
      loading="lazy"
      className="rounded-full"
    />
  );
}
```

## Security Best Practices

### Input Validation

- Validate all user inputs on both client and server.
- Use a validation library like Zod or Yup.

```typescript
import { z } from 'zod';

const userSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  password: z.string().min(8).max(100),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate input
    const result = userSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }
    
    // Process validated data
    const validatedData = result.data;
    // ...
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
```

### Authentication and Authorization

- Use NextAuth.js for authentication.
- Implement proper authorization checks.
- Use secure cookies and HTTPS.

```typescript
// src/middleware.ts
import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  
  // Protect routes that require authentication
  if (!token && request.nextUrl.pathname.startsWith('/dashboard')) {
    const url = new URL('/login', request.url);
    url.searchParams.set('callbackUrl', request.nextUrl.pathname);
    return NextResponse.redirect(url);
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/settings/:path*'],
};
```

### XSS Prevention

- Use Next.js's built-in XSS protection.
- Avoid using `dangerouslySetInnerHTML`.
- Sanitize user-generated content.

```tsx
// Bad - vulnerable to XSS
function Comment({ comment }) {
  return <div dangerouslySetInnerHTML={{ __html: comment.text }} />;
}

// Good - safe from XSS
import DOMPurify from 'dompurify';

function Comment({ comment }) {
  const sanitizedHtml = DOMPurify.sanitize(comment.text);
  return <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />;
}
```

## Git and Commit Standards

### Branch Naming

- Use descriptive branch names.
- Follow a consistent pattern: `type/description`.
- Examples: `feature/user-authentication`, `bugfix/login-error`, `refactor/api-endpoints`.

### Commit Messages

- Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification.
- Use a consistent format: `type(scope): description`.
- Examples: `feat(auth): add login form`, `fix(api): handle error in user creation`, `docs(readme): update installation instructions`.

### Pull Requests

- Create descriptive pull request titles and descriptions.
- Reference related issues.
- Keep pull requests focused on a single change.
- Request reviews from appropriate team members.

## Documentation Standards

### Code Comments

- Use comments to explain why, not what.
- Document complex logic and algorithms.
- Use JSDoc for functions and components.

```typescript
/**
 * Calculates the total price including tax and discounts.
 * 
 * @param price - The base price of the item
 * @param quantity - The number of items
 * @param taxRate - The tax rate as a decimal (e.g., 0.1 for 10%)
 * @param discount - The discount amount to apply
 * @returns The total price
 */
function calculateTotalPrice(
  price: number,
  quantity: number,
  taxRate: number,
  discount: number
): number {
  const subtotal = price * quantity;
  const taxAmount = subtotal * taxRate;
  const total = subtotal + taxAmount - discount;
  return Math.max(0, total); // Ensure total is not negative
}
```

### README and Documentation

- Keep the README up to date.
- Document the project structure, setup, and usage.
- Include examples and troubleshooting information.
- Document APIs and component props.

## Conclusion

Following these coding standards and best practices will help maintain a consistent, high-quality codebase that is easy to understand, maintain, and extend. These standards should be reviewed and updated regularly as the project evolves and new best practices emerge. 