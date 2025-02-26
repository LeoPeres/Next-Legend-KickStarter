import { supabase } from "./supabase";
import { store, authActions, User } from "./store";

/**
 * Authentication Utilities
 *
 * This file contains utilities for handling authentication with Supabase.
 */

/**
 * Sign in with email and password
 */
export const signInWithEmail = async (email: string, password: string) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      throw error;
    }

    if (data.user) {
      const user: User = {
        id: data.user.id,
        email: data.user.email || "",
        name: (data.user.user_metadata.name as string) || undefined,
      };

      authActions.login(user);
      return { success: true, user };
    }

    return { success: false, error: "No user returned" };
  } catch (error: any) {
    console.error("Login error:", error);
    return { success: false, error: error.message };
  }
};

/**
 * Sign up with email and password
 */
export const signUpWithEmail = async (email: string, password: string, name?: string) => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { name },
      },
    });

    if (error) {
      throw error;
    }

    return {
      success: true,
      user: data.user,
      message: "Please check your email to confirm your account",
    };
  } catch (error: any) {
    console.error("Signup error:", error);
    return { success: false, error: error.message };
  }
};

/**
 * Sign in with OAuth provider
 */
export const signInWithOAuth = async (provider: "google" | "github" | "facebook" | "twitter") => {
  try {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      throw error;
    }

    return { success: true, url: data.url };
  } catch (error: any) {
    console.error(`${provider} login error:`, error);
    return { success: false, error: error.message };
  }
};

/**
 * Sign out the current user
 */
export const signOut = async () => {
  try {
    await supabase.auth.signOut();
    authActions.logout();
    return { success: true };
  } catch (error: any) {
    console.error("Logout error:", error);
    return { success: false, error: error.message };
  }
};

/**
 * Reset password
 */
export const resetPassword = async (email: string) => {
  try {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/reset-password`,
    });

    if (error) {
      throw error;
    }

    return {
      success: true,
      message: "Password reset instructions have been sent to your email",
    };
  } catch (error: any) {
    console.error("Password reset error:", error);
    return { success: false, error: error.message };
  }
};

/**
 * Update password
 */
export const updatePassword = async (password: string) => {
  try {
    const { error } = await supabase.auth.updateUser({
      password,
    });

    if (error) {
      throw error;
    }

    return {
      success: true,
      message: "Password has been updated successfully",
    };
  } catch (error: any) {
    console.error("Update password error:", error);
    return { success: false, error: error.message };
  }
};

/**
 * Get the current session
 */
export const getSession = async () => {
  try {
    // Check if we're on the server
    const isServer = typeof window === "undefined";

    if (isServer) {
      // For server-side, we need to use createServerSupabaseClient
      const { createServerComponentClient } = await import("@supabase/auth-helpers-nextjs");
      const { cookies } = await import("next/headers");

      const supabase = createServerComponentClient({
        cookies,
      });

      const { data, error } = await supabase.auth.getSession();

      if (error) {
        throw error;
      }

      return {
        success: true,
        session: data.session,
      };
    } else {
      // For client-side, use the regular supabase client
      const { data, error } = await supabase.auth.getSession();

      if (error) {
        throw error;
      }

      return {
        success: true,
        session: data.session,
      };
    }
  } catch (error: any) {
    console.error("Get session error:", error);
    return { success: false, error: error.message };
  }
};
