import React from "react";
import { render, screen } from "../../test-utils/render";
import { LoginForm } from "../../stories/composition/LoginForm";

describe("LoginForm Component", () => {
  it("renders the form correctly", () => {
    render(<LoginForm />);

    // Check if form elements are rendered
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/remember me/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /log in/i })).toBeInTheDocument();
    expect(screen.getByText(/forgot password/i)).toBeInTheDocument();
  });

  it("updates input values when typing", async () => {
    const { user } = render(<LoginForm />);

    // Get form elements
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);

    // Type in the inputs
    await user.type(emailInput, "test@example.com");
    await user.type(passwordInput, "password123");

    // Check if values are updated
    expect(emailInput).toHaveValue("test@example.com");
    expect(passwordInput).toHaveValue("password123");
  });

  it("toggles remember me checkbox", async () => {
    const { user } = render(<LoginForm />);

    // Get checkbox
    const checkbox = screen.getByLabelText(/remember me/i);

    // Initially unchecked
    expect(checkbox).not.toBeChecked();

    // Click the checkbox
    await user.click(checkbox);

    // Should be checked now
    expect(checkbox).toBeChecked();

    // Click again to uncheck
    await user.click(checkbox);

    // Should be unchecked again
    expect(checkbox).not.toBeChecked();
  });

  it("calls onSubmit with form data when submitted", async () => {
    const handleSubmit = jest.fn();
    const { user } = render(<LoginForm onSubmit={handleSubmit} />);

    // Fill out the form
    await user.type(screen.getByLabelText(/email/i), "test@example.com");
    await user.type(screen.getByLabelText(/password/i), "password123");
    await user.click(screen.getByLabelText(/remember me/i));

    // Submit the form
    await user.click(screen.getByRole("button", { name: /log in/i }));

    // Check if onSubmit was called with the correct data
    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenCalledWith({
      email: "test@example.com",
      password: "password123",
      rememberMe: true,
    });
  });

  it("shows loading state when isLoading is true", () => {
    render(<LoginForm isLoading={true} />);

    // Check if button shows loading text
    expect(screen.getByRole("button", { name: /logging in/i })).toBeInTheDocument();

    // Check if button is disabled
    expect(screen.getByRole("button", { name: /logging in/i })).toBeDisabled();
  });
});
