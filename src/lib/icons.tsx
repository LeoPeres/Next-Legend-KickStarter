import React from "react";
import dynamic from "next/dynamic";
import { LucideProps } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Icon component props
 */
export interface IconProps extends LucideProps {
  name: IconName;
}

/**
 * List of available icons
 * Add new icons to this list as needed
 */
export type IconName =
  | "user"
  | "settings"
  | "logout"
  | "login"
  | "home"
  | "calendar"
  | "search"
  | "plus"
  | "edit"
  | "trash"
  | "check"
  | "x"
  | "chevron-down"
  | "chevron-up"
  | "chevron-left"
  | "chevron-right"
  | "menu"
  | "moon"
  | "sun"
  | "bell"
  | "mail";

/**
 * Dynamically import icons to reduce bundle size
 * This creates a separate chunk for each icon
 */
const iconComponents = {
  user: dynamic(() => import("lucide-react").then((mod) => mod.User)),
  settings: dynamic(() => import("lucide-react").then((mod) => mod.Settings)),
  logout: dynamic(() => import("lucide-react").then((mod) => mod.LogOut)),
  login: dynamic(() => import("lucide-react").then((mod) => mod.LogIn)),
  home: dynamic(() => import("lucide-react").then((mod) => mod.Home)),
  calendar: dynamic(() => import("lucide-react").then((mod) => mod.Calendar)),
  search: dynamic(() => import("lucide-react").then((mod) => mod.Search)),
  plus: dynamic(() => import("lucide-react").then((mod) => mod.Plus)),
  edit: dynamic(() => import("lucide-react").then((mod) => mod.Edit)),
  trash: dynamic(() => import("lucide-react").then((mod) => mod.Trash)),
  check: dynamic(() => import("lucide-react").then((mod) => mod.Check)),
  x: dynamic(() => import("lucide-react").then((mod) => mod.X)),
  "chevron-down": dynamic(() => import("lucide-react").then((mod) => mod.ChevronDown)),
  "chevron-up": dynamic(() => import("lucide-react").then((mod) => mod.ChevronUp)),
  "chevron-left": dynamic(() => import("lucide-react").then((mod) => mod.ChevronLeft)),
  "chevron-right": dynamic(() => import("lucide-react").then((mod) => mod.ChevronRight)),
  menu: dynamic(() => import("lucide-react").then((mod) => mod.Menu)),
  moon: dynamic(() => import("lucide-react").then((mod) => mod.Moon)),
  sun: dynamic(() => import("lucide-react").then((mod) => mod.Sun)),
  bell: dynamic(() => import("lucide-react").then((mod) => mod.Bell)),
  mail: dynamic(() => import("lucide-react").then((mod) => mod.Mail)),
};

/**
 * Icon component that dynamically loads the requested icon
 * This helps reduce the initial bundle size by code-splitting icons
 */
export function Icon({ name, className, ...props }: IconProps) {
  const IconComponent = iconComponents[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return <IconComponent className={cn("h-4 w-4", className)} {...props} />;
}

/**
 * Preload specific icons that are used frequently
 * This helps improve performance for commonly used icons
 */
export function preloadIcons(icons: IconName[]) {
  icons.forEach((icon) => {
    const IconComponent = iconComponents[icon];
    if (IconComponent) {
      // @ts-ignore - This is a dynamic import
      IconComponent.preload();
    }
  });
}
