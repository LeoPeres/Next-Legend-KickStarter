import { test, expect } from "./fixtures/base-fixture";

// These tests use the authenticatedPage fixture which logs in before each test
test.describe("Authenticated User Flows", () => {
  // Skip these tests for now as they require a working authentication system
  test.skip("should display user-specific content when authenticated", async ({
    authenticatedPage,
  }) => {
    // Check for elements that should only be visible to authenticated users
    // This is a placeholder and should be updated with actual selectors
    const userProfileLink = authenticatedPage.page.getByRole("link", { name: /profile/i });
    await expect(userProfileLink).toBeVisible();
  });

  test.skip("should allow user to access protected routes", async ({ authenticatedPage }) => {
    // Navigate to a protected route
    await authenticatedPage.page.goto("/dashboard");

    // Verify we can access the page (not redirected to login)
    await expect(authenticatedPage.page).toHaveURL(/.*dashboard/);

    // Check for dashboard-specific elements
    const dashboardTitle = authenticatedPage.page.getByRole("heading", { name: /dashboard/i });
    await expect(dashboardTitle).toBeVisible();
  });

  test.skip("should persist authentication across page navigation", async ({
    authenticatedPage,
  }) => {
    // Navigate to another page
    await authenticatedPage.page.goto("/settings");

    // Verify we're still authenticated (check for elements only visible to authenticated users)
    const settingsTitle = authenticatedPage.page.getByRole("heading", { name: /settings/i });
    await expect(settingsTitle).toBeVisible();
  });
});
