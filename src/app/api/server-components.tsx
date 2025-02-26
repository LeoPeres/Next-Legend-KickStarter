import { User } from "@/types/api/models";
import { notFound } from "next/navigation";

/**
 * Fetch all users with caching
 * This function is used by server components
 */
export async function fetchUsers(): Promise<User[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/users`, {
      next: {
        revalidate: 60, // Cache for 60 seconds
        tags: ["users"],
      },
    });

    if (!res.ok) {
      console.error("Failed to fetch users:", await res.text());
      return [];
    }

    const data = await res.json();
    return data.users || [];
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
}

/**
 * Fetch a user by ID with caching
 * This function is used by server components
 */
export async function fetchUserById(id: string): Promise<User | null> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/${id}`, {
      next: {
        revalidate: 60, // Cache for 60 seconds
        tags: ["users", `user-${id}`],
      },
    });

    if (!res.ok) {
      if (res.status === 404) {
        return notFound();
      }
      console.error("Failed to fetch user:", await res.text());
      return null;
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
}

/**
 * Fetch the current user
 * This function is used by server components
 * No caching for current user to ensure we always have the latest data
 */
export async function fetchCurrentUser(): Promise<User | null> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/me`, {
      next: {
        revalidate: 0, // No cache - always fetch the latest
        tags: ["current-user"],
      },
    });

    if (!res.ok) {
      console.error("Failed to fetch current user:", await res.text());
      return null;
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching current user:", error);
    return null;
  }
}

/**
 * Server component that displays a list of users
 */
export async function UserList() {
  const users = await fetchUsers();

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Users</h2>
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <ul className="space-y-2">
          {users.map((user) => (
            <li key={user.id} className="p-4 border rounded">
              <h3 className="font-semibold">{user.name}</h3>
              <p className="text-sm text-gray-600">{user.email}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/**
 * Server component that displays a user's details
 */
export async function UserDetails({ id }: { id: string }) {
  const user = await fetchUserById(id);

  if (!user) {
    return <p>User not found.</p>;
  }

  return (
    <div className="p-4 border rounded">
      <h2 className="text-xl font-bold mb-4">{user.name}</h2>
      <div className="space-y-2">
        <p>
          <span className="font-semibold">Email:</span> {user.email}
        </p>
        {user.role && (
          <p>
            <span className="font-semibold">Role:</span> {user.role}
          </p>
        )}
        {user.createdAt && (
          <p>
            <span className="font-semibold">Created:</span>{" "}
            {new Date(user.createdAt).toLocaleDateString()}
          </p>
        )}
      </div>
    </div>
  );
}

/**
 * Server component that displays the current user's details
 */
export async function CurrentUserDetails() {
  const user = await fetchCurrentUser();

  if (!user) {
    return <p>Not authenticated.</p>;
  }

  return (
    <div className="p-4 border rounded">
      <h2 className="text-xl font-bold mb-4">Your Profile</h2>
      <div className="space-y-2">
        <p>
          <span className="font-semibold">Name:</span> {user.name}
        </p>
        <p>
          <span className="font-semibold">Email:</span> {user.email}
        </p>
        {user.role && (
          <p>
            <span className="font-semibold">Role:</span> {user.role}
          </p>
        )}
        {user.lastLogin && (
          <p>
            <span className="font-semibold">Last Login:</span>{" "}
            {new Date(user.lastLogin).toLocaleString()}
          </p>
        )}
      </div>
    </div>
  );
}
