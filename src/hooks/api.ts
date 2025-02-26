import { useState, useEffect, useCallback } from "react";
import { User, CreateUser, UpdateUser } from "@/types/api/models";

interface FetchState<T> {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
}

/**
 * Custom hook for fetching data from the API
 * @param url The API URL to fetch from
 * @param options Fetch options
 * @returns The fetch state
 */
export function useFetch<T>(url: string, options?: RequestInit): FetchState<T> {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);

        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }

        const data = await response.json();
        setState({ data, isLoading: false, error: null });
      } catch (error) {
        setState({
          data: null,
          isLoading: false,
          error: error instanceof Error ? error : new Error(String(error)),
        });
      }
    };

    fetchData();
  }, [url, options]);

  return state;
}

/**
 * Custom hook for fetching a list of users
 * @returns The users fetch state
 */
export function useUsers() {
  return useFetch<{ users: User[]; pagination: { total: number; page: number; limit: number } }>(
    "/api/v1/users"
  );
}

/**
 * Custom hook for fetching a user by ID
 * @param id The user ID
 * @returns The user fetch state
 */
export function useUser(id: string) {
  return useFetch<User>(`/api/v1/users/${id}`);
}

/**
 * Custom hook for fetching the current user
 * @returns The current user fetch state
 */
export function useCurrentUser() {
  return useFetch<User>("/api/v1/users/me");
}

/**
 * Custom hook for creating a user
 * @returns The create user state and function
 */
export function useCreateUser() {
  const [state, setState] = useState<FetchState<User>>({
    data: null,
    isLoading: false,
    error: null,
  });

  const createUser = useCallback(async (userData: CreateUser) => {
    setState({ data: null, isLoading: true, error: null });

    try {
      const response = await fetch("/api/v1/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      setState({ data, isLoading: false, error: null });
      return data;
    } catch (error) {
      setState({
        data: null,
        isLoading: false,
        error: error instanceof Error ? error : new Error(String(error)),
      });
      throw error;
    }
  }, []);

  return { ...state, createUser };
}

/**
 * Custom hook for updating a user
 * @param id The user ID
 * @returns The update user state and function
 */
export function useUpdateUser(id: string) {
  const [state, setState] = useState<FetchState<User>>({
    data: null,
    isLoading: false,
    error: null,
  });

  const updateUser = useCallback(
    async (userData: UpdateUser) => {
      setState({ data: null, isLoading: true, error: null });

      try {
        const response = await fetch(`/api/v1/users/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });

        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }

        const data = await response.json();
        setState({ data, isLoading: false, error: null });
        return data;
      } catch (error) {
        setState({
          data: null,
          isLoading: false,
          error: error instanceof Error ? error : new Error(String(error)),
        });
        throw error;
      }
    },
    [id]
  );

  return { ...state, updateUser };
}

/**
 * Custom hook for deleting a user
 * @param id The user ID
 * @returns The delete user state and function
 */
export function useDeleteUser(id: string) {
  const [state, setState] = useState<FetchState<{ message: string }>>({
    data: null,
    isLoading: false,
    error: null,
  });

  const deleteUser = useCallback(async () => {
    setState({ data: null, isLoading: true, error: null });

    try {
      const response = await fetch(`/api/v1/users/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      setState({ data, isLoading: false, error: null });
      return data;
    } catch (error) {
      setState({
        data: null,
        isLoading: false,
        error: error instanceof Error ? error : new Error(String(error)),
      });
      throw error;
    }
  }, [id]);

  return { ...state, deleteUser };
}
