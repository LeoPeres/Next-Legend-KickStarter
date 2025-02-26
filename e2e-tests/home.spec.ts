import { test, expect } from "./fixtures/base-fixture";

test.describe("Home Page", () => {
  test("should display the correct title", async ({ homePage }) => {
    // Check if the heading is visible
    await expect(homePage.heading).toBeVisible();
  });

  test("should toggle theme when theme button is clicked", async ({ homePage }) => {
    // Get initial theme
    const initialTheme = await homePage.getTheme();

    // Toggle theme
    await homePage.toggleTheme();

    // Get new theme
    const newTheme = await homePage.getTheme();

    // Verify theme has changed
    expect(newTheme).not.toBe(initialTheme);
  });

  test("should navigate to login page when login button is clicked", async ({ homePage, page }) => {
    // Click login button
    await homePage.navigateToLogin();

    // Verify URL has changed to login page
    await expect(page).toHaveURL(/.*login/);
  });
});
