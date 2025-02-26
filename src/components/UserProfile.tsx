"use client";

import { useState } from "react";
import { useCurrentUser, useUpdateUser } from "@/hooks/api";
import { UpdateUser } from "@/types/api/models";

export default function UserProfile() {
  const { data: user, isLoading, error } = useCurrentUser();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<UpdateUser>({
    name: "",
    email: "",
  });

  const {
    updateUser,
    isLoading: isUpdating,
    error: updateError,
  } = useUpdateUser(user?.id?.toString() || "");

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await updateUser(formData);
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  // Start editing with current user data
  const handleEdit = () => {
    if (user) {
      setFormData({
        name: user.name,
        email: user.email,
      });
      setIsEditing(true);
    }
  };

  if (isLoading) {
    return <div className="p-4">Loading profile...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-500">Error loading profile: {error.message}</div>;
  }

  if (!user) {
    return <div className="p-4">Please log in to view your profile.</div>;
  }

  return (
    <div className="p-4 border rounded max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Your Profile</h2>

      {isEditing ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {updateError && <div className="text-red-500 text-sm">{updateError.message}</div>}

          <div className="flex space-x-2">
            <button
              type="submit"
              disabled={isUpdating}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
            >
              {isUpdating ? "Saving..." : "Save"}
            </button>
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="px-4 py-2 border rounded hover:bg-gray-100"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <div className="space-y-2">
          <div>
            <span className="font-semibold">Name:</span> {user.name}
          </div>
          <div>
            <span className="font-semibold">Email:</span> {user.email}
          </div>
          {user.role && (
            <div>
              <span className="font-semibold">Role:</span> {user.role}
            </div>
          )}
          {user.createdAt && (
            <div>
              <span className="font-semibold">Member since:</span>{" "}
              {new Date(user.createdAt).toLocaleDateString()}
            </div>
          )}

          <button
            onClick={handleEdit}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Edit Profile
          </button>
        </div>
      )}
    </div>
  );
}
