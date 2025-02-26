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

## E2E Testing with Playwright

We use Playwright for end-to-end testing to ensure our application works correctly from a user's perspective.

### Running E2E Tests

```bash
# Run all E2E tests
npm run test:e2e

# Run E2E tests with UI
npm run test:e2e:ui

# Debug E2E tests
npm run test:e2e:debug

# View test report
npm run test:e2e:report
```

### Page Object Model

We follow the Page Object Model pattern for E2E tests:

- Page objects are in `e2e-tests/page-objects/`
- Test fixtures are in `e2e-tests/fixtures/`
- Test specs are in `e2e-tests/*.spec.ts`

### Visual Regression Testing

Visual regression tests ensure UI components look correct across different browsers and screen sizes:

```typescript
test('component should match snapshot', async ({ page }) => {
  // Setup component
  await page.goto('/component-page');
  
  // Take screenshot and compare with baseline
  await expect(page).toHaveScreenshot('component.png');
});
```

### CI Integration

E2E tests run automatically on GitHub Actions for:
- Pull requests to main branch
- Pushes to main branch

Test reports are uploaded as artifacts and can be downloaded from the GitHub Actions workflow.

## Current Testing Status

### Completed
- ✅ Unit Testing Setup: Jest and React Testing Library are configured
- ✅ Component Testing: Test templates, snapshot tests, and interaction tests are implemented
- ✅ Test Utilities: Mocks for browser APIs (matchMedia, ResizeObserver) and providers
- ✅ Type Definitions: Extended Jest matchers for DOM testing
- ✅ E2E Testing: Playwright configured with page objects and critical user journeys
- ✅ Visual Regression Testing: Set up with Playwright
- ✅ CI Integration: GitHub Actions workflow for automated testing

### In Progress
- 🔄 Test Coverage: Currently at ~4% overall, aiming for 80%
- 🔄 Component Tests: More components need tests

## Next Steps

1. Increase test coverage by adding tests for more components
2. Add more comprehensive E2E tests for complex user flows
3. Integrate test results reporting into development workflow
4. Set up performance testing benchmarks 