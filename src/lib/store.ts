import { observable } from "@legendapp/state";

// Define the app state types
export interface User {
  id: string;
  email: string;
  name?: string;
}

export interface AppState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  theme: "light" | "dark";
}

// Create the initial state
const initialState: AppState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  theme: "light",
};

// Create the store
export const store = observable(initialState);

// Auth actions
export const authActions = {
  login: (user: User) => {
    store.user.set(user);
    store.isAuthenticated.set(true);
  },
  logout: () => {
    store.user.set(null);
    store.isAuthenticated.set(false);
  },
  setLoading: (isLoading: boolean) => {
    store.isLoading.set(isLoading);
  },
};

// Theme actions
export const themeActions = {
  toggleTheme: () => {
    const currentTheme = store.theme.get();
    store.theme.set(currentTheme === "light" ? "dark" : "light");
  },
  setTheme: (theme: "light" | "dark") => {
    store.theme.set(theme);
  },
};
