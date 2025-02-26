import { Suspense } from "react";
import { redirect } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";
import { getSession } from "@/lib/auth";
import DashboardClient from "@/components/dashboard/dashboard-client";
import { fetchCurrentUser } from "@/app/api/server-components";

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

// Server component for the dashboard page
export default async function DashboardPage() {
  // Check authentication on the server
  const { success, session } = await getSession();

  // If not authenticated, redirect to login
  if (!success || !session) {
    redirect("/login");
  }

  // Fetch user data on the server
  const user = await fetchCurrentUser();

  // If no user data, redirect to login
  if (!user) {
    redirect("/login");
  }

  // Convert the user to match the store's User type
  const storeUser = {
    ...user,
    id: String(user.id), // Convert id to string to match the store's User type
  };

  return (
    <Suspense fallback={<DashboardSkeleton />}>
      <DashboardClient initialUser={storeUser} />
    </Suspense>
  );
}
