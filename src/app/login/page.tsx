"use client";

import { Suspense, lazy } from "react";
import { Skeleton } from "@/components/ui/skeleton";

// Lazy load the login form component
const LoginForm = lazy(() => import("@/components/auth/login-form"));

// Loading fallback component
const LoginSkeleton = () => (
  <div className="flex min-h-screen flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <Skeleton className="w-full max-w-md h-[500px] rounded-lg" />
  </div>
);

export default function LoginPage() {
  return (
    <Suspense fallback={<LoginSkeleton />}>
      <LoginForm />
    </Suspense>
  );
}
