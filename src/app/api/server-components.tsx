import { User } from "@/types/api/models";

/**
 * Fetches a list of users from the API
 * @returns A list of users
 */
export async function fetchUsers(): Promise<User[]> {
  try {
    const response = await fetch("/api/v1/users", {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    });

    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    const data = await response.json();
    return data.users;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
}

/**
 * Fetches a user by ID from the API
 * @param id The user ID
 * @returns The user or null if not found
 */
export async function fetchUserById(id: string): Promise<User | null> {
  try {
    const response = await fetch(`/api/v1/users/${id}`, {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    });

    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error("Failed to fetch user");
    }

    return await response.json();
  } catch (error) {
    console.error(`Error fetching user ${id}:`, error);
    return null;
  }
}

/**
 * Fetches the current user from the API
 * @returns The current user or null if not authenticated
 */
export async function fetchCurrentUser(): Promise<User | null> {
  try {
    const response = await fetch("/api/v1/users/me", {
      next: { revalidate: 0 }, // Always revalidate
    });

    if (!response.ok) {
      if (response.status === 401) {
        return null;
      }
      throw new Error("Failed to fetch current user");
    }

    return await response.json();
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
