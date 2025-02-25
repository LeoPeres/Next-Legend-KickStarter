"use client";

import { useEffect } from "react";
import { initSupabasePlugin } from "@/lib/supabase";

interface SupabaseProviderProps {
  children: React.ReactNode;
}

export const SupabaseProvider = ({ children }: SupabaseProviderProps) => {
  useEffect(() => {
    // Initialize the Supabase plugin for Legend State
    initSupabasePlugin();
  }, []);

  return <>{children}</>;
};
