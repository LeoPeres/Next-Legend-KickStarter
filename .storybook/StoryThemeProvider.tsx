import React, { useEffect } from "react";
import { observer } from "@legendapp/state/react";
import { store, themeActions } from "./store-mock";

interface StoryThemeProviderProps {
  children: React.ReactNode;
  initialTheme?: "light" | "dark";
}

export const StoryThemeProvider = observer(
  ({ children, initialTheme = "light" }: StoryThemeProviderProps) => {
    const theme = store.theme.get();

    useEffect(() => {
      // Set initial theme
      themeActions.setTheme(initialTheme);
    }, [initialTheme]);

    // Update document class when theme changes
    useEffect(() => {
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(theme);
    }, [theme]);

    return <>{children}</>;
  }
);
