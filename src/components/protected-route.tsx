"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { observer } from "@legendapp/state/react";
import { store } from "@/lib/store";
import { getSession } from "@/lib/auth";

interface ProtectedRouteProps {
  children: React.ReactNode;
  fallbackUrl?: string;
}

export const ProtectedRoute = observer(
  ({ children, fallbackUrl = "/login" }: ProtectedRouteProps) => {
    const router = useRouter();
    const pathname = usePathname();
    const [isChecking, setIsChecking] = useState(true);
    const isAuthenticated = store.isAuthenticated.get();
    const isLoading = store.isLoading.get();

    useEffect(() => {
      const checkAuth = async () => {
        // If we already know the user is authenticated, no need to check
        if (isAuthenticated) {
          setIsChecking(false);
          return;
        }

        // Check for a valid session
        const { success, session } = await getSession();

        if (!success || !session) {
          // Redirect to login with a return URL
          const returnUrl = encodeURIComponent(pathname);
          router.push(`${fallbackUrl}?returnUrl=${returnUrl}`);
          return;
        }

        setIsChecking(false);
      };

      checkAuth();
    }, [isAuthenticated, router, pathname, fallbackUrl]);

    // Show nothing while checking authentication or loading
    if (isChecking || isLoading) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-primary"></div>
          <p className="mt-4 text-muted-foreground">Loading...</p>
        </div>
      );
    }

    // If authenticated, render the children
    return <>{children}</>;
  }
);
