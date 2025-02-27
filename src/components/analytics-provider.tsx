"use client";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { ReactNode, useEffect } from "react";
import { reportWebVitals } from "@/lib/web-vitals";

interface AnalyticsProviderProps {
  children: ReactNode;
}

export function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  useEffect(() => {
    // Initialize web vitals reporting
    reportWebVitals();
  }, []);

  return (
    <>
      {children}
      <Analytics />
      <SpeedInsights />
    </>
  );
}
