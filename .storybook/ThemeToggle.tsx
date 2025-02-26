import React from "react";
import { observer } from "@legendapp/state/react";
import { store, themeActions } from "./store-mock";

export const ThemeToggle = observer(() => {
  const theme = store.theme.get();

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={() => themeActions.toggleTheme()}
        className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md"
      >
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  );
});
