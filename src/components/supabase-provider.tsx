"use client";

import { useEffect } from "react";
import { initSupabasePlugin } from "@/lib/supabase";
import { documentSecurityPolicies } from "@/lib/supabase-policies";
import { initLegendSupabase } from "@/lib/legend-supabase";
import { createAllTables } from "@/lib/supabase-schema";

interface SupabaseProviderProps {
  children: React.ReactNode;
}

export const SupabaseProvider = ({ children }: SupabaseProviderProps) => {
  useEffect(() => {
    // Initialize the Supabase plugin for Legend State
    initSupabasePlugin();

    // Initialize Legend State with Supabase integration
    const cleanup = initLegendSupabase();

    // Document security policies (for development reference)
    if (process.env.NODE_ENV === "development") {
      documentSecurityPolicies();
      createAllTables(); // Log database schema for reference
    }

    // Cleanup function
    return () => {
      cleanup();
    };
  }, []);

  return <>{children}</>;
};
