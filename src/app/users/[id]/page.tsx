import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { fetchUserById } from "@/app/api/server-components";
import { Skeleton } from "@/components/ui/skeleton";

// Loading component for user details
function UserLoading() {
  return (
    <div className="container mx-auto py-10">
      <Skeleton className="h-10 w-48 mb-6" />
      <Card>
        <CardHeader>
          <Skeleton className="h-8 w-64 mb-2" />
          <Skeleton className="h-4 w-48" />
        </CardHeader>
        <CardContent className="space-y-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </CardContent>
        <CardFooter>
          <Skeleton className="h-10 w-24" />
        </CardFooter>
      </Card>
    </div>
  );
}

// Server component to fetch and display user details
async function UserDetails({ id }: { id: string }) {
  // Fetch user data on the server
  const user = await fetchUserById(id);

  // If user not found, show 404 page
  if (!user) {
    notFound();
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">User Profile</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>{user.name || "Unnamed User"}</CardTitle>
          <CardDescription>{user.email}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="font-medium">User ID:</p>
            <p className="text-muted-foreground">{user.id}</p>
          </div>
          {user.role && (
            <div>
              <p className="font-medium">Role:</p>
              <p className="text-muted-foreground">{user.role}</p>
            </div>
          )}
          {user.createdAt && (
            <div>
              <p className="font-medium">Member Since:</p>
              <p className="text-muted-foreground">
                {new Date(user.createdAt).toLocaleDateString()}
              </p>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button asChild variant="outline">
            <Link href="/users">Back to Users</Link>
          </Button>
          <Button asChild>
            <Link href={`/users/${id}/edit`}>Edit User</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

// Page component with suspense boundary
export default function UserPage({ params }: { params: { id: string } }) {
  return (
    <Suspense fallback={<UserLoading />}>
      <UserDetails id={params.id} />
    </Suspense>
  );
}
