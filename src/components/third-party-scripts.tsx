"use client";

import { useEffect } from "react";
import { ScriptAttributes, loadScriptsInParallel } from "@/lib/script-loader";

// Define your third-party scripts here
const thirdPartyScripts: ScriptAttributes[] = [
  // Example: Google Analytics
  // {
  //   id: "google-analytics",
  //   src: "https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID",
  //   strategy: "async",
  //   onLoad: () => {
  //     window.dataLayer = window.dataLayer || [];
  //     function gtag(...args: any[]) {
  //       window.dataLayer.push(args);
  //     }
  //     gtag("js", new Date());
  //     gtag("config", "YOUR_GA_ID");
  //   },
  // },
  // Example: Hotjar
  // {
  //   id: "hotjar",
  //   src: "https://static.hotjar.com/c/hotjar-XXXXXXX.js?sv=X",
  //   strategy: "async",
  // },
  // Example: Intercom
  // {
  //   id: "intercom",
  //   src: "https://widget.intercom.io/widget/YOUR_APP_ID",
  //   strategy: "defer",
  // },
  // Add your actual third-party scripts here
];

export function ThirdPartyScripts() {
  useEffect(() => {
    // Only load scripts in production to avoid unnecessary requests during development
    if (process.env.NODE_ENV === "production" && thirdPartyScripts.length > 0) {
      loadScriptsInParallel(thirdPartyScripts).catch((error) => {
        console.error("Failed to load third-party scripts:", error);
      });
    }
  }, []);

  return null;
}
