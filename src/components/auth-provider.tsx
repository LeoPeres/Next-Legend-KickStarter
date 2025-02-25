"use client";

import { useEffect } from "react";
import { observer } from "@legendapp/state/react";
import { supabase } from "@/lib/supabase";
import { store, authActions, User } from "@/lib/store";

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = observer(({ children }: AuthProviderProps) => {
  useEffect(() => {
    // Check for existing session
    const checkSession = async () => {
      authActions.setLoading(true);

      try {
        const { data, error } = await supabase.auth.getSession();

        if (error) {
          console.error("Error getting session:", error.message);
          return;
        }

        if (data.session) {
          const { user } = data.session;

          const userData: User = {
            id: user.id,
            email: user.email || "",
            name: user.user_metadata.name,
          };

          authActions.login(userData);
        }
      } catch (error) {
        console.error("Unexpected error during session check:", error);
      } finally {
        authActions.setLoading(false);
      }
    };

    checkSession();

    // Set up auth state change listener
    const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === "SIGNED_IN" && session) {
        const userData: User = {
          id: session.user.id,
          email: session.user.email || "",
          name: session.user.user_metadata.name,
        };

        authActions.login(userData);
      } else if (event === "SIGNED_OUT") {
        authActions.logout();
      }
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  return <>{children}</>;
});
