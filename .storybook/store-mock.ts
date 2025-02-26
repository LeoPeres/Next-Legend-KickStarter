// Mock store for Storybook
import { observable } from "@legendapp/state";

// Create a simple mock store for Storybook
export const store = {
  theme: observable("light"),
};

export const themeActions = {
  setTheme: (theme: "light" | "dark") => {
    store.theme.set(theme);
  },
  toggleTheme: () => {
    const currentTheme = store.theme.get();
    store.theme.set(currentTheme === "light" ? "dark" : "light");
  },
};
