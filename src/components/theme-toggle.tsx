import { observer } from "@legendapp/state/react";
import { Button } from "@/components/ui/button";
import { store, themeActions } from "@/lib/store";
import { Icon } from "@/lib/icons";

export const ThemeToggle = observer(() => {
  const theme = store.theme.get();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => themeActions.toggleTheme()}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Icon name="sun" className="h-5 w-5" />
      ) : (
        <Icon name="moon" className="h-5 w-5" />
      )}
    </Button>
  );
});
