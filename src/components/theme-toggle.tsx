import { observer } from "@legendapp/state/react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { store, themeActions } from "@/lib/store";

export const ThemeToggle = observer(() => {
  const theme = store.theme.get();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => themeActions.toggleTheme()}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </Button>
  );
});
