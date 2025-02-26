# Testing Strategies and Patterns

This document outlines the testing strategies and patterns used in the Next-Legend-KickStarter project.

## Testing Philosophy

Our testing approach is based on the following principles:

1. **Confidence**: Tests should give us confidence that our code works as expected.
2. **Maintainability**: Tests should be easy to maintain and update as the codebase evolves.
3. **Speed**: Tests should run quickly to provide fast feedback during development.
4. **Coverage**: Tests should cover critical paths and edge cases.
5. **Readability**: Tests should be easy to read and understand.

## Testing Pyramid

We follow the testing pyramid approach, with a focus on:

1. **Unit Tests**: The foundation of our testing strategy, testing individual functions and components in isolation.
2. **Integration Tests**: Testing how components and services work together.
3. **End-to-End Tests**: Testing the application as a whole from the user's perspective.

## Testing Tools

The project uses the following testing tools:

- **Jest**: For unit and integration testing
- **React Testing Library**: For testing React components
- **Playwright**: For end-to-end testing
- **Storybook**: For visual testing and component development
- **MSW (Mock Service Worker)**: For mocking API requests

## Unit Testing

### What to Test

- **Utility Functions**: Pure functions that transform data or perform calculations.
- **Hooks**: Custom React hooks that encapsulate logic.
- **Components**: Individual React components, focusing on their behavior rather than implementation details.
- **State Management**: State updates and selectors.

### Testing Patterns

#### Testing Utility Functions

```typescript
// src/lib/utils/formatDate.ts
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

// src/lib/utils/__tests__/formatDate.test.ts
import { formatDate } from '../formatDate';

describe('formatDate', () => {
  it('formats a date correctly', () => {
    const date = new Date('2023-01-15');
    expect(formatDate(date)).toBe('January 15, 2023');
  });

  it('handles different dates', () => {
    const date = new Date('2022-12-31');
    expect(formatDate(date)).toBe('December 31, 2022');
  });
});
```

#### Testing React Components

```tsx
// src/components/ui/Button.tsx
import { ButtonProps } from './Button.types';

export function Button({ variant = 'primary', children, onClick }: ButtonProps) {
  return (
    <button
      className={`btn btn-${variant}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

// src/components/ui/__tests__/Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '../Button';

describe('Button', () => {
  it('renders with the correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies the correct class based on variant', () => {
    render(<Button variant="secondary">Secondary</Button>);
    const button = screen.getByText('Secondary');
    expect(button).toHaveClass('btn-secondary');
  });
});
```

#### Testing Custom Hooks

```typescript
// src/hooks/useCounter.ts
import { useState, useCallback } from 'react';

export function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = useCallback(() => setCount(c => c + 1), []);
  const decrement = useCallback(() => setCount(c => c - 1), []);
  const reset = useCallback(() => setCount(initialValue), [initialValue]);

  return { count, increment, decrement, reset };
}

// src/hooks/__tests__/useCounter.test.ts
import { renderHook, act } from '@testing-library/react';
import { useCounter } from '../useCounter';

describe('useCounter', () => {
  it('initializes with the default value', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
  });

  it('initializes with the provided value', () => {
    const { result } = renderHook(() => useCounter(10));
    expect(result.current.count).toBe(10);
  });

  it('increments the counter', () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);
  });

  it('decrements the counter', () => {
    const { result } = renderHook(() => useCounter(5));
    act(() => {
      result.current.decrement();
    });
    expect(result.current.count).toBe(4);
  });

  it('resets the counter', () => {
    const { result } = renderHook(() => useCounter(5));
    act(() => {
      result.current.increment();
      result.current.reset();
    });
    expect(result.current.count).toBe(5);
  });
});
```

### Best Practices for Unit Testing

1. **Test Behavior, Not Implementation**: Focus on what the code does, not how it does it.
2. **Arrange, Act, Assert**: Structure tests with clear setup, action, and assertion phases.
3. **Use Descriptive Test Names**: Test names should describe what is being tested and the expected outcome.
4. **Avoid Testing Implementation Details**: Don't test internal state or methods that aren't part of the public API.
5. **Keep Tests Independent**: Each test should run independently of others.
6. **Mock External Dependencies**: Use mocks for external services, APIs, and complex dependencies.

## Integration Testing

### What to Test

- **Component Compositions**: How components work together.
- **Form Submissions**: Testing form validation and submission.
- **API Interactions**: Testing how components interact with APIs.
- **Routing**: Testing navigation and route changes.

### Testing Patterns

#### Testing Component Compositions

```tsx
// src/features/auth/LoginForm.tsx
import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

export function LoginForm({ onSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <Button type="submit">Log in</Button>
    </form>
  );
}

// src/features/auth/__tests__/LoginForm.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { LoginForm } from '../LoginForm';

describe('LoginForm', () => {
  it('submits the form with user input', () => {
    const handleSubmit = jest.fn();
    render(<LoginForm onSubmit={handleSubmit} />);

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'test@example.com' },
    });

    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: 'password123' },
    });

    fireEvent.click(screen.getByText(/log in/i));

    expect(handleSubmit).toHaveBeenCalledWith({
      email: 'test@example.com',
      password: 'password123',
    });
  });
});
```

#### Testing API Interactions

```tsx
// src/features/users/UserList.tsx
import { useEffect, useState } from 'react';
import { fetchUsers } from '@/lib/api';

export function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadUsers() {
      try {
        setLoading(true);
        const data = await fetchUsers();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadUsers();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

// src/features/users/__tests__/UserList.test.tsx
import { render, screen, waitFor } from '@testing-library/react';
import { UserList } from '../UserList';
import { fetchUsers } from '@/lib/api';

// Mock the API module
jest.mock('@/lib/api', () => ({
  fetchUsers: jest.fn(),
}));

describe('UserList', () => {
  it('displays loading state initially', () => {
    (fetchUsers as jest.Mock).mockResolvedValueOnce([]);
    render(<UserList />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it('displays users when loaded successfully', async () => {
    const mockUsers = [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' },
    ];
    
    (fetchUsers as jest.Mock).mockResolvedValueOnce(mockUsers);
    
    render(<UserList />);
    
    await waitFor(() => {
      expect(screen.getByText('John Doe')).toBeInTheDocument();
      expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    });
  });

  it('displays error message when API call fails', async () => {
    (fetchUsers as jest.Mock).mockRejectedValueOnce(new Error('Failed to fetch users'));
    
    render(<UserList />);
    
    await waitFor(() => {
      expect(screen.getByText(/error: failed to fetch users/i)).toBeInTheDocument();
    });
  });
});
```

### Best Practices for Integration Testing

1. **Focus on User Flows**: Test common user flows and interactions.
2. **Mock External Services**: Use MSW or similar tools to mock API responses.
3. **Test Error Handling**: Ensure components handle errors gracefully.
4. **Test Loading States**: Verify that loading indicators are displayed appropriately.
5. **Use Realistic Data**: Use realistic data structures that match what the API would return.

## End-to-End Testing

### What to Test

- **Critical User Flows**: Complete user journeys through the application.
- **Authentication**: Login, logout, and protected routes.
- **Form Submissions**: Complex forms and validation.
- **Navigation**: Moving between different parts of the application.

### Testing Patterns

#### Testing User Flows

```typescript
// e2e-tests/auth.spec.ts
import { test, expect } from '@playwright/test';

test('user can log in and access dashboard', async ({ page }) => {
  // Navigate to login page
  await page.goto('/login');
  
  // Fill in login form
  await page.fill('input[name="email"]', 'test@example.com');
  await page.fill('input[name="password"]', 'password123');
  
  // Submit form
  await page.click('button[type="submit"]');
  
  // Wait for navigation to complete
  await page.waitForURL('/dashboard');
  
  // Verify user is logged in and on dashboard
  expect(page.url()).toContain('/dashboard');
  await expect(page.locator('h1')).toContainText('Dashboard');
  await expect(page.locator('text=Welcome, Test User')).toBeVisible();
});
```

#### Testing Form Validation

```typescript
// e2e-tests/registration.spec.ts
import { test, expect } from '@playwright/test';

test('form validation prevents submission with invalid data', async ({ page }) => {
  await page.goto('/register');
  
  // Try to submit without filling required fields
  await page.click('button[type="submit"]');
  
  // Check for validation messages
  await expect(page.locator('text=Email is required')).toBeVisible();
  await expect(page.locator('text=Password is required')).toBeVisible();
  
  // Fill email with invalid format
  await page.fill('input[name="email"]', 'invalid-email');
  await page.click('button[type="submit"]');
  
  // Check for format validation
  await expect(page.locator('text=Invalid email format')).toBeVisible();
  
  // Fill password that's too short
  await page.fill('input[name="email"]', 'test@example.com');
  await page.fill('input[name="password"]', '123');
  await page.click('button[type="submit"]');
  
  // Check for password length validation
  await expect(page.locator('text=Password must be at least 8 characters')).toBeVisible();
});
```

### Best Practices for E2E Testing

1. **Focus on Critical Paths**: Test the most important user flows.
2. **Use Realistic Test Data**: Set up test data that mimics real-world scenarios.
3. **Test Across Browsers**: Run tests on multiple browsers to ensure cross-browser compatibility.
4. **Isolate Tests**: Each test should be independent and clean up after itself.
5. **Use Explicit Waits**: Wait for specific elements or conditions rather than arbitrary timeouts.
6. **Take Screenshots on Failure**: Configure Playwright to take screenshots when tests fail.

## Visual Testing with Storybook

### What to Test

- **Component Appearance**: How components look in different states.
- **Responsive Design**: How components adapt to different screen sizes.
- **Theme Variations**: How components look with different themes.
- **Accessibility**: Visual indicators for accessibility features.

### Testing Patterns

#### Component Stories

```tsx
// src/stories/Button.stories.tsx
import { Button } from '@/components/ui/Button';

export default {
  title: 'UI/Button',
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'select', options: ['primary', 'secondary', 'destructive'] },
    },
    size: {
      control: { type: 'select', options: ['sm', 'md', 'lg'] },
    },
    disabled: {
      control: 'boolean',
    },
  },
};

// Default button
export const Default = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
};

// Secondary button
export const Secondary = {
  args: {
    ...Default.args,
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

// Destructive button
export const Destructive = {
  args: {
    ...Default.args,
    variant: 'destructive',
    children: 'Delete',
  },
};

// Disabled button
export const Disabled = {
  args: {
    ...Default.args,
    disabled: true,
    children: 'Disabled Button',
  },
};
```

#### Testing Responsive Design

```tsx
// src/stories/Card.stories.tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

export default {
  title: 'UI/Card',
  component: Card,
  parameters: {
    viewport: {
      defaultViewport: 'responsive',
    },
    chromatic: { viewports: [320, 768, 1200] },
  },
};

export const Default = () => (
  <Card>
    <CardHeader>
      <CardTitle>Card Title</CardTitle>
    </CardHeader>
    <CardContent>
      <p>Card content goes here.</p>
    </CardContent>
  </Card>
);

export const Responsive = () => (
  <Card className="w-full md:w-2/3 lg:w-1/2">
    <CardHeader>
      <CardTitle>Responsive Card</CardTitle>
    </CardHeader>
    <CardContent>
      <p>This card changes width at different breakpoints.</p>
    </CardContent>
  </Card>
);
```

### Best Practices for Visual Testing

1. **Document Component Props**: Use Storybook's docs addon to document component props.
2. **Show Different States**: Create stories for different component states (loading, error, etc.).
3. **Test Responsive Behavior**: Use Storybook's viewport addon to test different screen sizes.
4. **Test Accessibility**: Use Storybook's accessibility addon to check for accessibility issues.
5. **Use Controls**: Use Storybook's controls to make stories interactive.

## Testing Server Components

### What to Test

- **Data Fetching**: Testing that components fetch and display data correctly.
- **Error Handling**: Testing how components handle errors during data fetching.
- **Server-Side Rendering**: Testing that components render correctly on the server.

### Testing Patterns

#### Testing Server Components

```tsx
// src/app/users/page.tsx
import { db } from '@/lib/db';
import { users } from '@/lib/db/schema';

export default async function UsersPage() {
  const allUsers = await db.select().from(users);
  
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {allUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

// src/app/__tests__/UsersPage.test.tsx
import { render, screen } from '@testing-library/react';
import UsersPage from '../users/page';
import { db } from '@/lib/db';

// Mock the database module
jest.mock('@/lib/db', () => ({
  db: {
    select: jest.fn().mockReturnThis(),
    from: jest.fn().mockReturnThis(),
  },
}));

describe('UsersPage', () => {
  it('renders a list of users', async () => {
    // Mock the database query result
    const mockUsers = [
      { id: '1', name: 'John Doe' },
      { id: '2', name: 'Jane Smith' },
    ];
    
    (db.from as jest.Mock).mockResolvedValueOnce(mockUsers);
    
    // Render the component
    const UsersPageComponent = await UsersPage();
    render(UsersPageComponent);
    
    // Check that the users are rendered
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
  });
});
```

### Best Practices for Testing Server Components

1. **Mock Database Queries**: Use jest.mock to mock database interactions.
2. **Test Error Boundaries**: Ensure error boundaries catch and display errors correctly.
3. **Test Loading States**: Verify that loading states are displayed appropriately.
4. **Test with Realistic Data**: Use realistic data structures that match what the database would return.

## Testing API Routes

### What to Test

- **Request Handling**: Testing that API routes handle different HTTP methods correctly.
- **Response Formatting**: Testing that responses have the correct format and status codes.
- **Error Handling**: Testing how API routes handle errors.
- **Authentication and Authorization**: Testing that protected routes enforce authentication.

### Testing Patterns

#### Testing API Routes

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

// src/app/api/__tests__/users.test.ts
import { GET } from '../users/route';
import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

// Mock the database module
jest.mock('@/lib/db', () => ({
  db: {
    select: jest.fn().mockReturnThis(),
    from: jest.fn().mockReturnThis(),
  },
}));

// Mock NextResponse
jest.mock('next/server', () => ({
  NextResponse: {
    json: jest.fn(),
  },
}));

describe('Users API', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('returns a list of users', async () => {
    // Mock the database query result
    const mockUsers = [
      { id: '1', name: 'John Doe' },
      { id: '2', name: 'Jane Smith' },
    ];
    
    (db.from as jest.Mock).mockResolvedValueOnce(mockUsers);
    
    // Call the API route handler
    await GET();
    
    // Check that NextResponse.json was called with the correct data
    expect(NextResponse.json).toHaveBeenCalledWith(mockUsers);
  });

  it('handles errors correctly', async () => {
    // Mock the database query to throw an error
    (db.from as jest.Mock).mockRejectedValueOnce(new Error('Database error'));
    
    // Call the API route handler
    await GET();
    
    // Check that NextResponse.json was called with the correct error response
    expect(NextResponse.json).toHaveBeenCalledWith(
      { error: 'Failed to fetch users' },
      { status: 500 }
    );
  });
});
```

### Best Practices for Testing API Routes

1. **Test Different HTTP Methods**: Test GET, POST, PUT, DELETE methods as applicable.
2. **Test Status Codes**: Verify that the correct status codes are returned.
3. **Test Response Bodies**: Check that response bodies have the expected structure.
4. **Test Validation**: Ensure that input validation works correctly.
5. **Test Authentication**: Verify that protected routes enforce authentication.

## Test Coverage

We aim for high test coverage, but focus on meaningful coverage rather than arbitrary percentages.

### Coverage Goals

- **Critical Paths**: 100% coverage for critical business logic and user flows.
- **UI Components**: At least 80% coverage for UI components.
- **Utility Functions**: 100% coverage for utility functions.
- **API Routes**: At least 90% coverage for API routes.

### Measuring Coverage

We use Jest's coverage reporting to measure test coverage:

```bash
npm run test -- --coverage
```

### Improving Coverage

1. **Identify Gaps**: Use coverage reports to identify untested code.
2. **Prioritize Critical Paths**: Focus on testing critical business logic first.
3. **Add Missing Tests**: Write tests for uncovered code paths.
4. **Refactor for Testability**: Refactor code that's difficult to test.

## Continuous Integration

We run tests as part of our CI/CD pipeline to ensure code quality.

### CI Workflow

1. **Lint**: Run ESLint to check for code style issues.
2. **Type Check**: Run TypeScript type checking.
3. **Unit Tests**: Run Jest tests.
4. **E2E Tests**: Run Playwright tests.
5. **Build**: Build the application.
6. **Deploy**: Deploy the application if all tests pass.

### CI Configuration

Our CI configuration is defined in `.github/workflows/main.yml`:

```yaml
name: CI/CD

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      - run: npm ci
      - run: npm run lint
      - run: npm run typecheck
      - run: npm run test
      - run: npx playwright install --with-deps
      - run: npm run test:e2e
      - run: npm run build
```

## Conclusion

Following these testing strategies and patterns will help ensure the quality and reliability of the Next-Legend-KickStarter project. By focusing on a mix of unit, integration, and end-to-end tests, we can have confidence in our code while maintaining a fast and efficient development process. 