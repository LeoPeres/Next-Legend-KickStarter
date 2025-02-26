"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { useObservable } from "@legendapp/state/react";
import { store } from "@/lib/store";
import {
  signInWithEmail,
  signUpWithEmail,
  signInWithOAuth,
  signOut,
  resetPassword,
  updatePassword,
} from "@/lib/auth";
import { User } from "@/lib/store";

export const useAuth = () => {
  const router = useRouter();
  const isAuthenticated = store.isAuthenticated.get();
  const isLoading = store.isLoading.get();
  const user = store.user.get();

  // Local state for form handling
  const formState = useObservable({
    email: "",
    password: "",
    name: "",
    error: null as string | null,
    success: null as string | null,
    loading: false,
  });

  // Login with email and password
  const login = useCallback(
    async (email: string, password: string, redirectTo = "/dashboard") => {
      formState.loading.set(true);
      formState.error.set(null);

      const result = await signInWithEmail(email, password);

      if (result.success) {
        router.push(redirectTo);
      } else {
        formState.error.set(result.error);
      }

      formState.loading.set(false);
      return result;
    },
    [router, formState]
  );

  // Register with email and password
  const register = useCallback(
    async (email: string, password: string, name?: string) => {
      formState.loading.set(true);
      formState.error.set(null);

      const result = await signUpWithEmail(email, password, name);

      if (result.success) {
        formState.success.set(
          result.message || "Account created successfully. Please check your email."
        );
      } else {
        formState.error.set(result.error);
      }

      formState.loading.set(false);
      return result;
    },
    [formState]
  );

  // Login with OAuth provider
  const loginWithProvider = useCallback(
    async (provider: "google" | "github" | "facebook" | "twitter") => {
      formState.loading.set(true);
      formState.error.set(null);

      const result = await signInWithOAuth(provider);

      if (!result.success) {
        formState.error.set(result.error);
        formState.loading.set(false);
      }

      return result;
    },
    [formState]
  );

  // Logout
  const logout = useCallback(
    async (redirectTo = "/login") => {
      const result = await signOut();

      if (result.success) {
        router.push(redirectTo);
      }

      return result;
    },
    [router]
  );

  // Reset password
  const forgotPassword = useCallback(
    async (email: string) => {
      formState.loading.set(true);
      formState.error.set(null);

      const result = await resetPassword(email);

      if (result.success) {
        formState.success.set(
          result.message || "Password reset instructions have been sent to your email."
        );
      } else {
        formState.error.set(result.error);
      }

      formState.loading.set(false);
      return result;
    },
    [formState]
  );

  // Update password
  const changePassword = useCallback(
    async (password: string) => {
      formState.loading.set(true);
      formState.error.set(null);

      const result = await updatePassword(password);

      if (result.success) {
        formState.success.set(result.message || "Password has been updated successfully.");
      } else {
        formState.error.set(result.error);
      }

      formState.loading.set(false);
      return result;
    },
    [formState]
  );

  return {
    // Auth state
    isAuthenticated,
    isLoading,
    user,

    // Form state
    formState,

    // Auth methods
    login,
    register,
    loginWithProvider,
    logout,
    forgotPassword,
    changePassword,
  };
};
