// Theme configuration for shadcn components
// This file provides consistent theming for all shadcn components

import { type ClassValue } from "clsx";
import { cn } from "@/lib/utils";

// Button variants that match our design system
export const buttonVariants = {
  // Primary buttons with brand colors
  primary: "bg-primary text-primary-foreground hover:bg-primary/90",
  // Secondary buttons with muted styling
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  // Outline buttons for less emphasis
  outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
  // Ghost buttons for minimal visual impact
  ghost: "hover:bg-accent hover:text-accent-foreground",
  // Link buttons that look like text links
  link: "text-primary underline-offset-4 hover:underline",
  // Destructive buttons for dangerous actions
  destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
};

// Card variants that match our design system
export const cardVariants = {
  // Default card styling
  default: "bg-card text-card-foreground",
  // Bordered card with more emphasis
  bordered: "bg-card text-card-foreground border border-border",
  // Elevated card with shadow
  elevated: "bg-card text-card-foreground shadow-md",
  // Interactive card that responds to hover
  interactive: "bg-card text-card-foreground hover:bg-accent/50 transition-colors",
};

// Dialog/modal variants
export const dialogVariants = {
  // Default dialog styling
  default: "bg-background text-foreground",
  // Dialog with border
  bordered: "bg-background text-foreground border border-border",
};

// Input field variants
export const inputVariants = {
  // Default input styling
  default: "bg-background border border-input",
  // Filled input style
  filled: "bg-muted border-0",
  // Underlined input style
  underlined: "border-0 border-b border-input bg-transparent px-0 rounded-none",
};

// Helper function to apply theme variants to components
export function applyVariant(
  baseClass: ClassValue,
  variants: Record<string, string>,
  variant: string = "default",
  size?: string,
  sizeVariants?: Record<string, string>,
  className?: string
) {
  const variantClass = variants[variant] || variants.default;
  const sizeClass = size && sizeVariants ? sizeVariants[size] || "" : "";

  return cn(baseClass, variantClass, sizeClass, className);
}
