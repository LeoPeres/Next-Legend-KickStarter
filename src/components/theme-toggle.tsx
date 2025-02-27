import { observer } from "@legendapp/state/react";
import { store, themeActions } from "@/lib/store";
import { Icon } from "@/lib/icons";
import { OptimizedButton } from "@/components/ui/optimized-button";

export const ThemeToggle = observer(() => {
  const theme = store.theme.get();

  return (
    <OptimizedButton
      variant="ghost"
      size="sm"
      onClick={() => themeActions.toggleTheme()}
      aria-label="Toggle theme"
      measureName="theme-toggle"
      showRipple={false}
    >
      {theme === "dark" ? (
        <Icon name="sun" className="h-5 w-5" />
      ) : (
        <Icon name="moon" className="h-5 w-5" />
      )}
    </OptimizedButton>
  );
});
