import { Page, Locator } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly heading: Locator;
  readonly themeToggle: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.getByRole("heading", { level: 1 });
    this.themeToggle = page.getByRole("button", { name: /toggle theme/i });
    this.loginButton = page.getByRole("link", { name: /login/i });
  }

  async goto() {
    await this.page.goto("/");
  }

  async toggleTheme() {
    await this.themeToggle.click();
  }

  async navigateToLogin() {
    await this.loginButton.click();
  }

  async getTheme(): Promise<string> {
    // Check if the body has the dark class
    const isDark = await this.page.evaluate(() => {
      return document.documentElement.classList.contains("dark");
    });
    return isDark ? "dark" : "light";
  }
}
