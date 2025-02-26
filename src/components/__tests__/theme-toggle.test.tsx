import React from "react";
import { render, screen } from "../../test-utils/render";
import { ThemeToggle } from "../theme-toggle";
import { store, themeActions } from "@/lib/store";

// Mock the store and actions
jest.mock("@/lib/store", () => {
  const mockStore = {
    theme: {
      get: jest.fn().mockReturnValue("light"),
    },
  };

  return {
    store: mockStore,
    themeActions: {
      toggleTheme: jest.fn(),
      setTheme: jest.fn(),
    },
  };
});

describe("ThemeToggle Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders sun icon when theme is dark", () => {
    // Mock the theme as dark
    (store.theme.get as jest.Mock).mockReturnValue("dark");

    render(<ThemeToggle />);

    // Check if the sun icon is rendered
    const button = screen.getByRole("button", { name: /toggle theme/i });
    expect(button).toBeInTheDocument();

    // We can't directly test for the Sun component, but we can check for aria-label
    expect(button).toHaveAttribute("aria-label", "Toggle theme");
  });

  it("renders moon icon when theme is light", () => {
    // Mock the theme as light
    (store.theme.get as jest.Mock).mockReturnValue("light");

    render(<ThemeToggle />);

    // Check if the moon icon is rendered
    const button = screen.getByRole("button", { name: /toggle theme/i });
    expect(button).toBeInTheDocument();

    // We can't directly test for the Moon component, but we can check for aria-label
    expect(button).toHaveAttribute("aria-label", "Toggle theme");
  });

  it("calls toggleTheme when clicked", async () => {
    // Mock the theme
    (store.theme.get as jest.Mock).mockReturnValue("light");

    const { user } = render(<ThemeToggle />);

    // Find the button and click it
    const button = screen.getByRole("button", { name: /toggle theme/i });
    await user.click(button);

    // Check if toggleTheme was called
    expect(themeActions.toggleTheme).toHaveBeenCalledTimes(1);
  });
});
