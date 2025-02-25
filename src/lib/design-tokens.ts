/**
 * Design Tokens
 *
 * This file defines the core design tokens used throughout the application.
 * These tokens ensure consistency in spacing, elevation, animations, and other
 * design properties across the entire UI.
 */

// Spacing tokens - used for margins, paddings, and layout spacing
export const spacing = {
  // Base spacing unit (4px)
  unit: 4,

  // Named spacing values
  xs: "0.25rem", // 4px
  sm: "0.5rem", // 8px
  md: "1rem", // 16px
  lg: "1.5rem", // 24px
  xl: "2rem", // 32px
  "2xl": "2.5rem", // 40px
  "3xl": "3rem", // 48px
  "4xl": "4rem", // 64px

  // Component-specific spacing
  container: {
    xs: "1rem", // 16px
    sm: "1.5rem", // 24px
    md: "2rem", // 32px
    lg: "4rem", // 64px
    xl: "6rem", // 96px
  },

  // Section spacing
  section: {
    xs: "1.5rem", // 24px
    sm: "2rem", // 32px
    md: "3rem", // 48px
    lg: "5rem", // 80px
    xl: "8rem", // 128px
  },

  // Layout spacing
  layout: {
    gutter: "1rem", // 16px
    sidebarWidth: "16rem", // 256px
    topbarHeight: "4rem", // 64px
  },
};

// Elevation tokens - used for shadows and z-index
export const elevation = {
  // Z-index scale
  z: {
    negative: -1,
    base: 0,
    raised: 1,
    dropdown: 10,
    sticky: 100,
    overlay: 200,
    modal: 300,
    popover: 400,
    tooltip: 500,
    toast: 600,
    max: 9999,
  },

  // Shadow levels
  shadow: {
    none: "none",
    xs: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    sm: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
  },
};

// Animation tokens - used for transitions and animations
export const animation = {
  // Duration values
  duration: {
    fastest: "50ms",
    faster: "100ms",
    fast: "150ms",
    normal: "200ms",
    slow: "300ms",
    slower: "400ms",
    slowest: "500ms",
  },

  // Easing functions
  easing: {
    // Standard easing curves
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",

    // Custom cubic-bezier curves
    emphasized: "cubic-bezier(0.2, 0.0, 0, 1.0)",
    decelerated: "cubic-bezier(0.0, 0.0, 0.2, 1.0)",
    accelerated: "cubic-bezier(0.4, 0.0, 1, 1)",
  },

  // Animation presets
  preset: {
    fadeIn: "fade-in 0.3s ease-in-out",
    fadeOut: "fade-out 0.3s ease-in-out",
    slideInRight: "slide-in-right 0.3s ease-in-out",
    slideOutRight: "slide-out-right 0.3s ease-in-out",
    scaleIn: "scale-in 0.2s ease-out",
    scaleOut: "scale-out 0.2s ease-in",
  },
};

// Border radius tokens
export const radius = {
  none: "0",
  xs: "0.125rem", // 2px
  sm: "0.25rem", // 4px
  md: "0.375rem", // 6px
  lg: "0.5rem", // 8px
  xl: "0.75rem", // 12px
  "2xl": "1rem", // 16px
  "3xl": "1.5rem", // 24px
  full: "9999px",
};

// Typography scale tokens
export const typography = {
  // Font families
  fontFamily: {
    sans: "var(--font-sans)",
    heading: "var(--font-heading)",
    mono: "var(--font-mono)",
  },

  // Font weights
  fontWeight: {
    thin: "100",
    extralight: "200",
    light: "300",
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
    black: "900",
  },

  // Font sizes
  fontSize: {
    "2xs": "0.625rem", // 10px
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    md: "1rem", // 16px
    lg: "1.125rem", // 18px
    xl: "1.25rem", // 20px
    "2xl": "1.5rem", // 24px
    "3xl": "1.875rem", // 30px
    "4xl": "2.25rem", // 36px
    "5xl": "3rem", // 48px
    "6xl": "3.75rem", // 60px
    "7xl": "4.5rem", // 72px
    "8xl": "6rem", // 96px
    "9xl": "8rem", // 128px
  },

  // Line heights
  lineHeight: {
    none: "1",
    tight: "1.25",
    snug: "1.375",
    normal: "1.5",
    relaxed: "1.625",
    loose: "2",
  },

  // Letter spacing
  letterSpacing: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0em",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
};
