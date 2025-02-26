# Testing Standards and Patterns

This document outlines the testing standards and patterns for the Next-Legend-KickStarter project.

## Testing Pyramid

We follow a testing pyramid approach with:

1. **Unit Tests**: Testing individual functions and components in isolation
2. **Component Tests**: Testing components with their dependencies
3. **Integration Tests**: Testing interactions between multiple components
4. **E2E Tests**: Testing complete user flows

## Test File Organization

- Test files should be co-located with the code they test
- Test files should be named `*.test.ts` or `*.test.tsx`
- Test utilities are located in `src/test-utils/`

## Writing Tests

### Unit Tests

```tsx
import { sum } from './math';

describe('sum function', () => {
  it('adds two numbers correctly', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('handles negative numbers', () => {
    expect(sum(-1, -2)).toBe(-3);
  });
});
```

### Component Tests

```tsx
import { render, screen } from '@/test-utils/render';
import { Button } from './Button';

describe('Button component', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Click me');
  });

  it('calls onClick when clicked', async () => {
    const handleClick = jest.fn();
    const { user } = render(<Button onClick={handleClick}>Click me</Button>);
    
    await user.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

## Best Practices

1. **Test Behavior, Not Implementation**: Focus on what the component does, not how it does it.
2. **Use Semantic Queries**: Prefer queries like `getByRole`, `getByLabelText` over `getByTestId`.
3. **Mock External Dependencies**: Use Jest mocks for external services and APIs.
4. **Keep Tests Independent**: Each test should be able to run independently of others.
5. **Test Edge Cases**: Include tests for error states, loading states, and edge cases.
6. **Avoid Testing Implementation Details**: Don't test internal state or private methods.
7. **Use Test Doubles Appropriately**: Use stubs, spies, and mocks as needed, but don't overuse them.

## Code Coverage

We aim for:
- 80% statement coverage
- 70% branch coverage
- 80% function coverage
- 80% line coverage

Run coverage reports with `npm run test:coverage`.

## Continuous Integration

Tests are run automatically on:
- Pull requests
- Merges to main branch

## Resources

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Testing Library Queries](https://testing-library.com/docs/queries/about)
- [Common Testing Library Mistakes](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library) 