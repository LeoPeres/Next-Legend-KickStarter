# Theming and Customization Guide

This document provides a comprehensive guide for theming and customizing the UI components in the Next-Legend-KickStarter project.

## Theme System Overview

The project uses a CSS variables-based theming system implemented with Tailwind CSS. This approach allows for:

- Easy switching between light and dark modes
- Consistent color usage across the application
- Simple customization of the entire theme by changing a few variables

## Theme Configuration

The theme is configured in `tailwind.config.ts` and uses CSS variables defined in the global CSS file (`src/app/globals.css`).

### Color Palette

The color system is based on HSL (Hue, Saturation, Lightness) values, which makes it easy to create cohesive color schemes:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  
  --secondary: 210 40% 96.1%;
  --secondary-foreground: 222.2 47.4% 11.2%;
  
  /* Additional color variables... */
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  
  --primary: 210 40% 98%;
  --primary-foreground: 222.2 47.4% 11.2%;
  
  --secondary: 217.2 32.6% 17.5%;
  --secondary-foreground: 210 40% 98%;
  
  /* Additional dark mode color variables... */
}
```

### Accessing Theme Colors in Tailwind

The theme colors are accessible in Tailwind classes:

```jsx
<div className="bg-background text-foreground">
  <button className="bg-primary text-primary-foreground">
    Primary Button
  </button>
  <button className="bg-secondary text-secondary-foreground">
    Secondary Button
  </button>
</div>
```

### Color Shades

Each primary color has multiple shades (50-950) for creating depth and hierarchy:

```jsx
<div className="bg-primary-50">Very Light Primary</div>
<div className="bg-primary-100">Light Primary</div>
<div className="bg-primary-500">Medium Primary</div>
<div className="bg-primary-900">Dark Primary</div>
```

## Typography

The typography system is defined in the Tailwind configuration:

```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
      },
      fontWeight: {
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
      },
    },
  },
};
```

## Spacing and Layout

The spacing system is based on a 4px grid:

```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      spacing: {
        0: "0px",
        0.5: "0.125rem", // 2px
        1: "0.25rem",    // 4px
        1.5: "0.375rem", // 6px
        2: "0.5rem",     // 8px
        2.5: "0.625rem", // 10px
        3: "0.75rem",    // 12px
        3.5: "0.875rem", // 14px
        4: "1rem",       // 16px
        // ... and so on
      },
    },
  },
};
```

## Border Radius

The border radius system provides consistent rounding across the UI:

```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      borderRadius: {
        none: "0",
        sm: "0.125rem",   // 2px
        DEFAULT: "0.25rem", // 4px
        md: "0.375rem",   // 6px
        lg: "0.5rem",     // 8px
        xl: "0.75rem",    // 12px
        "2xl": "1rem",    // 16px
        "3xl": "1.5rem",  // 24px
        full: "9999px",
      },
    },
  },
};
```

## Shadows

The shadow system provides consistent elevation across the UI:

```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      boxShadow: {
        sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
        "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
        inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
        none: "none",
      },
    },
  },
};
```

## Component Variants

Components use the `class-variance-authority` (CVA) library to define variants. This allows for consistent styling across different component states.

### Button Variants

The button component has several variants defined:

```typescript
// src/components/ui/button.tsx
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
```

## Customizing the Theme

### Modifying the Default Theme

To modify the default theme, update the CSS variables in `src/app/globals.css`:

```css
:root {
  /* Change the primary color to blue */
  --primary: 210 100% 50%;
  --primary-foreground: 0 0% 100%;
  
  /* Change the secondary color to purple */
  --secondary: 270 100% 50%;
  --secondary-foreground: 0 0% 100%;
}
```

### Creating a Custom Theme

To create a completely custom theme:

1. Create a new CSS file with your theme variables
2. Import it in your layout or page component
3. Apply a class to the root element to activate your theme

```css
/* src/styles/custom-theme.css */
.custom-theme {
  --background: 0 0% 95%;
  --foreground: 240 10% 10%;
  
  --primary: 220 100% 50%;
  --primary-foreground: 0 0% 100%;
  
  /* Additional theme variables... */
}
```

```tsx
// src/app/layout.tsx
import '@/styles/custom-theme.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="custom-theme">
      <body>{children}</body>
    </html>
  );
}
```

### Dynamic Theming

The project includes a theme provider that allows for dynamic theme switching:

```tsx
// src/components/theme-provider.tsx
import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

const ThemeContext = createContext({
  theme: "system" as Theme,
  setTheme: (theme: Theme) => {},
});

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState<Theme>("system");
  
  // Implementation details...
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
```

To use the theme provider:

```tsx
// src/app/layout.tsx
import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
```

To toggle the theme:

```tsx
// src/components/theme-toggle.tsx
import { useTheme } from "@/components/theme-provider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  
  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      Toggle Theme
    </button>
  );
}
```

## Component Customization

### Using the className Prop

All components accept a `className` prop that allows for additional styling:

```tsx
<Button className="bg-gradient-to-r from-purple-500 to-pink-500">
  Gradient Button
</Button>
```

### Using Component Variants

Components with variants can be customized using the variant props:

```tsx
<Button variant="outline" size="lg">
  Large Outline Button
</Button>
```

### Creating Custom Variants

You can create custom variants for components using the `cva` function:

```tsx
import { cva } from "class-variance-authority";

const customButtonVariants = cva(
  "base-button-styles",
  {
    variants: {
      variant: {
        primary: "bg-blue-500 text-white",
        secondary: "bg-gray-200 text-gray-800",
        success: "bg-green-500 text-white",
      },
      size: {
        small: "text-sm py-1 px-2",
        medium: "text-base py-2 px-4",
        large: "text-lg py-3 px-6",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  }
);

function CustomButton({ variant, size, className, ...props }) {
  return (
    <button className={customButtonVariants({ variant, size, className })} {...props} />
  );
}
```

## Best Practices

### Consistent Color Usage

- Use semantic color variables (`primary`, `secondary`, etc.) instead of hardcoded colors
- Use color shades appropriately (lighter shades for backgrounds, darker for text)
- Ensure sufficient contrast for accessibility

### Responsive Design

- Use the responsive variants in Tailwind (`sm:`, `md:`, `lg:`, etc.)
- Test components at all breakpoints
- Consider mobile-first design

### Theme Switching

- Ensure all components work well in both light and dark modes
- Use the CSS variables for colors instead of hardcoded values
- Test theme switching to ensure smooth transitions

### Performance

- Minimize the use of custom CSS in favor of Tailwind utilities
- Use the JIT (Just-In-Time) mode of Tailwind for smaller CSS bundles
- Consider code splitting for large theme files

## Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [class-variance-authority Documentation](https://cva.style/docs)
- [Radix UI Documentation](https://www.radix-ui.com/docs/primitives/overview/introduction) 