# E2E Testing with Playwright

This directory contains end-to-end tests for the Next-Legend-KickStarter project using Playwright.

## Structure

- `fixtures/`: Test fixtures and setup
- `page-objects/`: Page Object Models for different pages
- `*.spec.ts`: Test specifications

## Running Tests

```bash
# Run all tests
npm run test:e2e

# Run tests with UI
npm run test:e2e:ui

# Debug tests
npm run test:e2e:debug

# View test report
npm run test:e2e:report
```

## Page Object Model

We use the Page Object Model pattern to organize our tests:

1. **Page Objects**: Encapsulate page structure and behavior
2. **Fixtures**: Provide reusable test setup and state
3. **Test Specs**: Define test scenarios and assertions

## Visual Regression Testing

Visual regression tests ensure UI components look correct across different browsers and screen sizes.

## CI Integration

Tests run automatically on GitHub Actions for:
- Pull requests to main branch
- Pushes to main branch

## Adding New Tests

1. Create page objects for new pages in `page-objects/`
2. Add fixtures if needed in `fixtures/`
3. Create test specs in the root directory with `.spec.ts` extension

## Best Practices

1. **Use Page Objects**: Don't interact with the page directly in tests
2. **Test User Flows**: Focus on user journeys, not implementation details
3. **Keep Tests Independent**: Each test should be able to run independently
4. **Use Descriptive Names**: Test names should describe what is being tested
5. **Avoid Flaky Tests**: Use proper waiting and assertions to avoid flakiness 