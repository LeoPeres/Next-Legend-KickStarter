"use client";

import { observer } from "@legendapp/state/react";
import { store } from "@/lib/store";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { signOut } from "@/lib/auth";
import { useRouter } from "next/navigation";

const DashboardContent = observer(() => {
  const router = useRouter();
  const user = store.user.get();

  const handleLogout = async () => {
    await signOut();
    router.push("/login");
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Welcome, {user?.name || user?.email}</CardTitle>
            <CardDescription>Your personal dashboard</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              This is a protected route that only authenticated users can access.
            </p>
            <Button variant="outline" onClick={handleLogout}>
              Logout
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Account Information</CardTitle>
            <CardDescription>Your account details</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div>
                <span className="font-medium">Email:</span> {user?.email}
              </div>
              <div>
                <span className="font-medium">User ID:</span> {user?.id}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Actions</CardTitle>
            <CardDescription>Quick actions for your account</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button className="w-full" variant="outline" onClick={() => router.push("/profile")}>
              Edit Profile
            </Button>
            <Button className="w-full" variant="outline" onClick={() => router.push("/settings")}>
              Settings
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
});

export default DashboardContent;
