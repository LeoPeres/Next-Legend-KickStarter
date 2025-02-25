import { createClient } from "@supabase/supabase-js";
import { SUPABASE_URL, SUPABASE_ANON_KEY } from "./env";

// Create a single supabase client for interacting with your database
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Legend State Supabase integration
export const initSupabasePlugin = () => {
  // This function will be called when the app starts
  console.log("Initializing Supabase integration with Legend State");

  // In a real application, you would implement:
  // 1. Syncing specific parts of the state with Supabase
  // 2. Loading initial state from Supabase
  // 3. Setting up listeners for state changes

  // For now, this is just a placeholder that demonstrates
  // the integration point between Legend State and Supabase
};
