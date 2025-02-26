import { test, expect } from "@playwright/test";
import { HomePage } from "./page-objects/home-page";
import { LoginPage } from "./page-objects/login-page";

test.describe("Visual Regression Tests", () => {
  test("home page should match snapshot", async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();

    // Wait for any animations to complete
    await page.waitForTimeout(500);

    // Take a screenshot and compare with baseline
    await expect(page).toHaveScreenshot("home-page.png", {
      maxDiffPixelRatio: 0.01,
    });
  });

  test("login page should match snapshot", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();

    // Wait for any animations to complete
    await page.waitForTimeout(500);

    // Take a screenshot and compare with baseline
    await expect(page).toHaveScreenshot("login-page.png", {
      maxDiffPixelRatio: 0.01,
    });
  });

  test("dark mode should match snapshot", async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();

    // Ensure we're in dark mode
    const initialTheme = await homePage.getTheme();
    if (initialTheme === "light") {
      await homePage.toggleTheme();
      // Wait for theme transition
      await page.waitForTimeout(500);
    }

    // Take a screenshot and compare with baseline
    await expect(page).toHaveScreenshot("home-page-dark.png", {
      maxDiffPixelRatio: 0.01,
    });
  });
});
