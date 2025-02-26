import { Page, Locator } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly rememberMeCheckbox: Locator;
  readonly submitButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.getByLabel("Email");
    this.passwordInput = page.getByLabel("Password");
    this.rememberMeCheckbox = page.getByLabel("Remember me");
    this.submitButton = page.getByRole("button", { name: /sign in/i });
    this.errorMessage = page.getByText(/invalid email or password/i);
  }

  async goto() {
    await this.page.goto("/login");
  }

  async fillEmail(email: string) {
    await this.emailInput.fill(email);
  }

  async fillPassword(password: string) {
    await this.passwordInput.fill(password);
  }

  async toggleRememberMe() {
    await this.rememberMeCheckbox.click();
  }

  async submitForm() {
    await this.submitButton.click();
  }

  async login(email: string, password: string, rememberMe = false) {
    await this.fillEmail(email);
    await this.fillPassword(password);

    if (rememberMe) {
      await this.toggleRememberMe();
    }

    await this.submitForm();
  }

  async getErrorMessage(): Promise<string | null> {
    if (await this.errorMessage.isVisible()) {
      return this.errorMessage.textContent();
    }
    return null;
  }
}
