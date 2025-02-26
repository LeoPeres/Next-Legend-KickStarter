import { test, expect } from "./fixtures/base-fixture";

test.describe("Login Page", () => {
  test("should display login form", async ({ loginPage }) => {
    // Check if form elements are visible
    await expect(loginPage.emailInput).toBeVisible();
    await expect(loginPage.passwordInput).toBeVisible();
    await expect(loginPage.submitButton).toBeVisible();
  });

  test("should toggle remember me checkbox", async ({ loginPage }) => {
    // Check initial state (usually unchecked)
    const initialState = await loginPage.rememberMeCheckbox.isChecked();

    // Toggle checkbox
    await loginPage.toggleRememberMe();

    // Verify state has changed
    const newState = await loginPage.rememberMeCheckbox.isChecked();
    expect(newState).not.toBe(initialState);
  });

  test("should show error with invalid credentials", async ({ loginPage }) => {
    // Attempt login with invalid credentials
    await loginPage.login("invalid@example.com", "wrongpassword");

    // Check if error message is displayed
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).not.toBeNull();
  });

  // This test would require a mock server or test environment with valid credentials
  test.skip("should login successfully with valid credentials", async ({ loginPage, page }) => {
    // Login with valid credentials
    await loginPage.login("test@example.com", "password123");

    // Check if redirected to dashboard or home page
    await expect(page).toHaveURL(/.*dashboard|.*/);
  });
});
