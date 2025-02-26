"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function AuthCallbackPage() {
  const router = useRouter();

  useEffect(() => {
    // Exchange the code for a session
    const handleAuthCallback = async () => {
      const { error } = await supabase.auth.exchangeCodeForSession(window.location.search);

      if (error) {
        console.error("Error exchanging code for session:", error.message);
        router.push("/login?error=Authentication%20failed");
        return;
      }

      // Redirect to the dashboard or home page
      router.push("/dashboard");
    };

    handleAuthCallback();
  }, [router]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="w-full max-w-md space-y-8 p-10 rounded-xl shadow-lg bg-card">
        <div className="flex flex-col items-center space-y-2 text-center">
          <h1 className="text-2xl font-bold">Completing authentication...</h1>
          <p className="text-muted-foreground">Please wait while we log you in.</p>
        </div>
        <div className="flex justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-primary"></div>
        </div>
      </div>
    </div>
  );
}
