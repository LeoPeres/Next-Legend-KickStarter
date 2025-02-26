import { test as base } from "@playwright/test";
import { HomePage } from "../page-objects/home-page";
import { LoginPage } from "../page-objects/login-page";

// Declare the types of fixtures
type Fixtures = {
  homePage: HomePage;
  loginPage: LoginPage;
  authenticatedPage: HomePage;
};

// Extend the base test with our fixtures
export const test = base.extend<Fixtures>({
  // Define a fixture for the home page
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await use(homePage);
  },

  // Define a fixture for the login page
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await use(loginPage);
  },

  // Define a fixture for authenticated state
  authenticatedPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();

    // Use test credentials (these should be environment variables in a real project)
    await loginPage.login("test@example.com", "password123");

    // Create a home page instance with the authenticated session
    const homePage = new HomePage(page);
    await use(homePage);
  },
});

// Re-export expect from the base test
export { expect } from "@playwright/test";
