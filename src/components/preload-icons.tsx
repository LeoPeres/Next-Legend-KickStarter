"use client";

import { useEffect } from "react";
import { preloadIcons } from "@/lib/icons";

/**
 * Component that preloads critical icons on the client side
 * This helps improve performance by loading commonly used icons early
 */
export function PreloadIcons() {
  useEffect(() => {
    // Preload the most commonly used icons
    preloadIcons([
      "user",
      "home",
      "settings",
      "search",
      "moon",
      "sun",
      "menu",
      "chevron-down",
      "chevron-right",
    ]);
  }, []);

  // This component doesn't render anything
  return null;
}
