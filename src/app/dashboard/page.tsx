"use client";

import { observer } from "@legendapp/state/react";
import { store } from "@/lib/store";
import { ProtectedRoute } from "@/components/protected-route";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { signOut } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { Suspense, lazy } from "react";
import { Skeleton } from "@/components/ui/skeleton";

// Lazy load the dashboard content
const DashboardContent = lazy(() => import("@/components/dashboard/dashboard-content"));

// Loading fallback component
const DashboardSkeleton = () => (
  <div className="container mx-auto py-10">
    <Skeleton className="h-10 w-48 mb-6" />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3].map((i) => (
        <Skeleton key={i} className="h-64 w-full rounded-lg" />
      ))}
    </div>
  </div>
);

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <Suspense fallback={<DashboardSkeleton />}>
        <DashboardContent />
      </Suspense>
    </ProtectedRoute>
  );
}
