"use client";

import { useEffect } from "react";
import { preloadIcons, IconName } from "@/lib/icons";

/**
 * Component that preloads critical icons on the client side
 * This helps improve performance by loading commonly used icons early
 * Uses requestIdleCallback when available for better performance
 */
export function PreloadIcons() {
  useEffect(() => {
    // Define the icons to preload
    const iconsToPreload: IconName[] = [
      "user",
      "home",
      "settings",
      "search",
      "moon",
      "sun",
      "menu",
      "chevron-down",
      "chevron-right",
    ];

    // Use requestIdleCallback if available, otherwise use setTimeout
    if (typeof window !== "undefined") {
      if ("requestIdleCallback" in window) {
        // @ts-ignore - TypeScript doesn't have types for requestIdleCallback
        window.requestIdleCallback(() => {
          preloadIcons(iconsToPreload);
        });
      } else {
        // Fallback for browsers that don't support requestIdleCallback
        setTimeout(() => {
          preloadIcons(iconsToPreload);
        }, 200); // Small delay to not block main thread during initial render
      }
    }
  }, []);

  // This component doesn't render anything
  return null;
}
