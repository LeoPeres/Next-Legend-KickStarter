import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Layout utility functions
export const layoutStyles = {
  container: "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
  section: "py-12 md:py-16 lg:py-24",
  innerSection: "py-8 md:py-12",
  pageHeader: "mb-8 md:mb-12 lg:mb-16",
  pageContent: "mb-12 md:mb-16",
};

// Flexbox utility functions
export const flexStyles = {
  center: "flex items-center justify-center",
  between: "flex items-center justify-between",
  start: "flex items-center justify-start",
  end: "flex items-center justify-end",
  col: "flex flex-col",
  colCenter: "flex flex-col items-center",
  colStart: "flex flex-col items-start",
  colEnd: "flex flex-col items-end",
};

// Grid utility functions
export const gridStyles = {
  cards: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
  features: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
  form: "grid grid-cols-1 gap-4",
  formCols: "grid grid-cols-1 sm:grid-cols-2 gap-4",
};

// Typography utility functions
export const textStyles = {
  h1: "text-4xl lg:text-5xl font-heading font-semibold tracking-tight",
  h2: "text-3xl lg:text-4xl font-heading font-semibold tracking-tight",
  h3: "text-2xl lg:text-3xl font-heading font-semibold tracking-tight",
  h4: "text-xl lg:text-2xl font-heading font-semibold tracking-tight",
  h5: "text-lg lg:text-xl font-heading font-semibold tracking-tight",
  h6: "text-base lg:text-lg font-heading font-semibold tracking-tight",
  lead: "text-xl text-muted-foreground",
  large: "text-lg font-semibold",
  small: "text-sm font-medium",
  muted: "text-sm text-muted-foreground",
};

// Spacing utility functions
export const spacingStyles = {
  mt: {
    sm: "mt-2",
    md: "mt-4",
    lg: "mt-8",
    xl: "mt-12",
  },
  mb: {
    sm: "mb-2",
    md: "mb-4",
    lg: "mb-8",
    xl: "mb-12",
  },
  mx: {
    sm: "mx-2",
    md: "mx-4",
    lg: "mx-8",
    xl: "mx-12",
    auto: "mx-auto",
  },
  my: {
    sm: "my-2",
    md: "my-4",
    lg: "my-8",
    xl: "my-12",
    auto: "my-auto",
  },
  p: {
    sm: "p-2",
    md: "p-4",
    lg: "p-8",
    xl: "p-12",
  },
};

// Animation utility functions
export const animationStyles = {
  fadeIn: "animate-fade-in",
  fadeOut: "animate-fade-out",
  slideInRight: "animate-slide-in-right",
  slideOutRight: "animate-slide-out-right",
  spin: "animate-spin",
  pulse: "animate-pulse",
  bounce: "animate-bounce",
};
