import { Inter, Roboto_Mono } from "next/font/google";

/**
 * Inter font configuration
 * Used as the primary font for the application
 */
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
});

/**
 * Roboto Mono font configuration
 * Used for code blocks and monospace text
 */
export const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  preload: true,
  fallback: ["monospace"],
});

/**
 * Font variables to be applied to the HTML element
 */
export const fontVariables = `${inter.variable} ${robotoMono.variable}`;
