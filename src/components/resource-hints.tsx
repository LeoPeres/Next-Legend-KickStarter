import { ReactNode } from "react";

interface ResourceHint {
  href: string;
  type: "preconnect" | "prefetch" | "preload" | "dns-prefetch";
  as?: string;
  crossOrigin?: "anonymous" | "use-credentials";
  media?: string;
  importance?: "high" | "low" | "auto";
}

/**
 * Common external domains that might be used in the application
 * These will be preconnected to improve performance
 */
const PRECONNECT_DOMAINS: ResourceHint[] = [
  // Add domains that your app frequently connects to
  { href: "https://fonts.googleapis.com", type: "preconnect" },
  { href: "https://fonts.gstatic.com", type: "preconnect", crossOrigin: "anonymous" },
  // Supabase preconnect for faster auth and API calls
  { href: "https://supabase.co", type: "preconnect" },
  // Add CDN preconnect if you're using one
  { href: "https://cdn.jsdelivr.net", type: "preconnect", crossOrigin: "anonymous" },
];

/**
 * Critical resources that should be preloaded
 * These are resources that are needed early in the page lifecycle
 */
const PRELOAD_RESOURCES: ResourceHint[] = [
  // Preload the logo which is likely the LCP element
  { href: "/logo.svg", type: "preload", as: "image", importance: "high" },
  // Preload critical fonts if you're using custom fonts
  { href: "/fonts/inter-var.woff2", type: "preload", as: "font", crossOrigin: "anonymous" },
  // Preload critical CSS
  { href: "/styles/critical.css", type: "preload", as: "style" },
];

/**
 * Resources that should be prefetched for future navigation
 * These are resources that will likely be needed soon
 */
const PREFETCH_RESOURCES: ResourceHint[] = [
  // Add resources for likely navigation paths
  { href: "/docs", type: "prefetch" },
  { href: "/login", type: "prefetch" },
  { href: "/register", type: "prefetch" },
  // Prefetch common images that might be needed soon
  { href: "/next.svg", type: "prefetch", as: "image" },
  { href: "/globe.svg", type: "prefetch", as: "image" },
  { href: "/file.svg", type: "prefetch", as: "image" },
];

/**
 * Domains that should have DNS prefetched
 * This is a lighter alternative to preconnect
 */
const DNS_PREFETCH_DOMAINS: ResourceHint[] = [
  // Add domains that might be used later
  { href: "https://api.example.com", type: "dns-prefetch" },
];

/**
 * Component that adds resource hints to improve performance
 * This helps with faster page loads by establishing early connections
 * and loading critical resources ahead of time
 */
export function ResourceHints() {
  // Combine all resource hints
  const allHints = [
    ...PRECONNECT_DOMAINS,
    ...PRELOAD_RESOURCES,
    ...PREFETCH_RESOURCES,
    ...DNS_PREFETCH_DOMAINS,
  ];

  return (
    <>
      {allHints.map((hint, index) => {
        const { href, type, as, crossOrigin, media, importance } = hint;

        return (
          <link
            key={`${type}-${index}-${href}`}
            rel={type}
            href={href}
            {...(as && { as })}
            {...(crossOrigin && { crossOrigin })}
            {...(media && { media })}
            {...(importance && { importance })}
          />
        );
      })}
    </>
  );
}
