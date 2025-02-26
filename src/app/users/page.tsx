import { Suspense } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { fetchUsers } from "@/app/api/server-components";
import { Skeleton } from "@/components/ui/skeleton";

// Loading component for users list
function UsersLoading() {
  return (
    <div className="container mx-auto py-10">
      <Skeleton className="h-10 w-48 mb-6" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Skeleton key={i} className="h-40 w-full rounded-lg" />
        ))}
      </div>
    </div>
  );
}

// Server component to fetch and display users
async function UsersList() {
  // Fetch users data on the server
  const users = await fetchUsers();

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Users</h1>

      {users.length === 0 ? (
        <p className="text-muted-foreground">No users found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <Card key={user.id}>
              <CardHeader>
                <CardTitle>{user.name || "Unnamed User"}</CardTitle>
                <CardDescription>{user.email}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">User ID: {user.id}</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" size="sm">
                  <Link href={`/users/${user.id}`}>View Profile</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}

      <div className="mt-8">
        <Button asChild>
          <Link href="/dashboard">Back to Dashboard</Link>
        </Button>
      </div>
    </div>
  );
}

// Page component with suspense boundary
export default function UsersPage() {
  return (
    <Suspense fallback={<UsersLoading />}>
      <UsersList />
    </Suspense>
  );
}
