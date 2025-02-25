"use client";

import { useEffect, useState } from "react";
import { validateEnv, getEnvInfo } from "@/lib/env";

/**
 * A component that checks if all required environment variables are set
 * Only shown in development mode
 */
export const EnvChecker = () => {
  const [isValid, setIsValid] = useState(true);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Only check in development mode
    if (process.env.NODE_ENV === "development") {
      const valid = validateEnv();
      setIsValid(valid);
    }
  }, []);

  // Don't render anything in production or if all env vars are valid
  if (process.env.NODE_ENV !== "development" || isValid) {
    return null;
  }

  const envInfo = getEnvInfo();

  return (
    <div className="fixed bottom-4 right-4 z-50 p-4 bg-destructive text-destructive-foreground rounded-lg shadow-lg max-w-md">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-bold">⚠️ Missing Environment Variables</h3>
          <p className="text-sm mt-1">
            Some required environment variables are missing. Check your .env.local file.
          </p>
        </div>
        <button onClick={() => setShowDetails(!showDetails)} className="text-xs underline">
          {showDetails ? "Hide Details" : "Show Details"}
        </button>
      </div>

      {showDetails && (
        <div className="mt-3 text-sm">
          <h4 className="font-semibold mb-1">Required Variables:</h4>
          <ul className="list-disc pl-5 space-y-1">
            {envInfo
              .filter((env) => env.required)
              .map((env) => (
                <li key={env.name}>
                  <code>{env.name}</code> - {env.description}
                </li>
              ))}
          </ul>

          <h4 className="font-semibold mt-3 mb-1">Optional Variables:</h4>
          <ul className="list-disc pl-5 space-y-1">
            {envInfo
              .filter((env) => !env.required)
              .map((env) => (
                <li key={env.name}>
                  <code>{env.name}</code> - {env.description}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};
