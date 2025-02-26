import type { Preview } from "@storybook/react";
import "../src/app/globals.css"; // Import your Tailwind CSS styles
import "./storybook.css"; // Import Storybook-specific styles
import "./shadcn-reset.css"; // Import Shadcn-specific resets
import { StoryThemeProvider } from "./StoryThemeProvider";
import { ThemeToggle } from "./ThemeToggle";
import React, { useEffect } from "react";
import { Inter } from "next/font/google";

// Initialize the Inter font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Create a decorator that ensures proper styling
const withTheme = (StoryFn: any) => {
  // Effect to apply the font variable to the document
  useEffect(() => {
    // Apply font variable
    document.documentElement.classList.add(inter.variable);

    // Ensure CSS variables are properly applied
    document.documentElement.style.setProperty("--radius", "0.5rem");

    return () => {
      document.documentElement.classList.remove(inter.variable);
    };
  }, []);

  return (
    <StoryThemeProvider initialTheme="light">
      <div className="font-sans antialiased bg-background text-foreground p-6 min-h-screen">
        <ThemeToggle />
        <div className="max-w-4xl mx-auto">
          <StoryFn />
        </div>
      </div>
    </StoryThemeProvider>
  );
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      // Configure docs addon
      source: {
        state: "open",
      },
    },
    a11y: {
      // Configure a11y addon
      element: "#storybook-root",
      manual: false,
    },
    backgrounds: {
      default: "transparent",
      values: [
        { name: "transparent", value: "transparent" },
        { name: "light", value: "hsl(0 0% 100%)" },
        { name: "dark", value: "hsl(224 71% 4%)" },
      ],
    },
    layout: "fullscreen",
  },
  decorators: [withTheme],
};

export default preview;
