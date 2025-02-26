import { observable, ObservableObject } from "@legendapp/state";
import { supabase } from "./supabase";
import { store, User } from "./store";

/**
 * Legend State with Supabase Integration
 *
 * This file provides integration between Legend State and Supabase,
 * allowing for real-time data synchronization and persistence.
 */

// Define types for Supabase data
export interface Post {
  id: string;
  user_id: string;
  title: string;
  content: string;
  published: boolean;
  created_at: string;
  updated_at: string;
}

export interface Comment {
  id: string;
  post_id: string;
  user_id: string;
  content: string;
  created_at: string;
  updated_at: string;
}

// Create observable stores for Supabase data
export const supabaseStore = observable({
  posts: {} as Record<string, Post>,
  comments: {} as Record<string, Comment>,
  isLoading: {
    posts: false,
    comments: false,
    user: false,
  },
  error: {
    posts: null as string | null,
    comments: null as string | null,
    user: null as string | null,
  },
});

// Authentication functions
export const authActions = {
  login: async (email: string, password: string) => {
    supabaseStore.isLoading.user.set(true);
    supabaseStore.error.user.set(null);

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

        store.user.set(user);
        store.isAuthenticated.set(true);
      }
    } catch (error: any) {
      supabaseStore.error.user.set(error.message);
      console.error("Login error:", error);
    } finally {
      supabaseStore.isLoading.user.set(false);
    }
  },

  logout: async () => {
    try {
      await supabase.auth.signOut();
      store.user.set(null);
      store.isAuthenticated.set(false);
    } catch (error: any) {
      console.error("Logout error:", error);
    }
  },

  signup: async (email: string, password: string, name?: string) => {
    supabaseStore.isLoading.user.set(true);
    supabaseStore.error.user.set(null);

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

      // Note: In Supabase, the user isn't fully authenticated until they confirm their email
      // So we don't set isAuthenticated to true here
    } catch (error: any) {
      supabaseStore.error.user.set(error.message);
      console.error("Signup error:", error);
    } finally {
      supabaseStore.isLoading.user.set(false);
    }
  },
};

// Posts CRUD operations
export const postsActions = {
  fetchPosts: async () => {
    supabaseStore.isLoading.posts.set(true);
    supabaseStore.error.posts.set(null);

    try {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        throw error;
      }

      // Convert array to record object with ID as key
      const postsRecord = data.reduce(
        (acc, post) => {
          acc[post.id] = post;
          return acc;
        },
        {} as Record<string, Post>
      );

      supabaseStore.posts.set(postsRecord);
    } catch (error: any) {
      supabaseStore.error.posts.set(error.message);
      console.error("Fetch posts error:", error);
    } finally {
      supabaseStore.isLoading.posts.set(false);
    }
  },

  createPost: async (title: string, content: string, published: boolean = false) => {
    const user = store.user.get();
    if (!user) {
      supabaseStore.error.posts.set("User not authenticated");
      return;
    }

    try {
      const { data, error } = await supabase
        .from("posts")
        .insert([
          {
            title,
            content,
            published,
            user_id: user.id,
          },
        ])
        .select()
        .single();

      if (error) {
        throw error;
      }

      // Add the new post to the store
      supabaseStore.posts[data.id].set(data);
    } catch (error: any) {
      console.error("Create post error:", error);
    }
  },

  updatePost: async (id: string, updates: Partial<Post>) => {
    try {
      const { data, error } = await supabase
        .from("posts")
        .update(updates)
        .eq("id", id)
        .select()
        .single();

      if (error) {
        throw error;
      }

      // Update the post in the store
      supabaseStore.posts[id].set(data);
    } catch (error: any) {
      console.error("Update post error:", error);
    }
  },

  deletePost: async (id: string) => {
    try {
      const { error } = await supabase.from("posts").delete().eq("id", id);

      if (error) {
        throw error;
      }

      // Remove the post from the store
      const posts = { ...supabaseStore.posts.get() };
      delete posts[id];
      supabaseStore.posts.set(posts);
    } catch (error: any) {
      console.error("Delete post error:", error);
    }
  },
};

// Comments CRUD operations
export const commentsActions = {
  fetchComments: async (postId: string) => {
    supabaseStore.isLoading.comments.set(true);
    supabaseStore.error.comments.set(null);

    try {
      const { data, error } = await supabase
        .from("comments")
        .select("*")
        .eq("post_id", postId)
        .order("created_at", { ascending: true });

      if (error) {
        throw error;
      }

      // Convert array to record object with ID as key
      const commentsRecord = data.reduce(
        (acc, comment) => {
          acc[comment.id] = comment;
          return acc;
        },
        {} as Record<string, Comment>
      );

      supabaseStore.comments.set(commentsRecord);
    } catch (error: any) {
      supabaseStore.error.comments.set(error.message);
      console.error("Fetch comments error:", error);
    } finally {
      supabaseStore.isLoading.comments.set(false);
    }
  },

  createComment: async (postId: string, content: string) => {
    const user = store.user.get();
    if (!user) {
      supabaseStore.error.comments.set("User not authenticated");
      return;
    }

    try {
      const { data, error } = await supabase
        .from("comments")
        .insert([
          {
            post_id: postId,
            content,
            user_id: user.id,
          },
        ])
        .select()
        .single();

      if (error) {
        throw error;
      }

      // Add the new comment to the store
      supabaseStore.comments[data.id].set(data);
    } catch (error: any) {
      console.error("Create comment error:", error);
    }
  },

  updateComment: async (id: string, content: string) => {
    try {
      const { data, error } = await supabase
        .from("comments")
        .update({ content })
        .eq("id", id)
        .select()
        .single();

      if (error) {
        throw error;
      }

      // Update the comment in the store
      supabaseStore.comments[id].set(data);
    } catch (error: any) {
      console.error("Update comment error:", error);
    }
  },

  deleteComment: async (id: string) => {
    try {
      const { error } = await supabase.from("comments").delete().eq("id", id);

      if (error) {
        throw error;
      }

      // Remove the comment from the store
      const comments = { ...supabaseStore.comments.get() };
      delete comments[id];
      supabaseStore.comments.set(comments);
    } catch (error: any) {
      console.error("Delete comment error:", error);
    }
  },
};

// Set up real-time subscriptions
export const setupRealtimeSubscriptions = () => {
  // Subscribe to posts changes
  const postsSubscription = supabase
    .channel("public:posts")
    .on(
      "postgres_changes",
      {
        event: "*",
        schema: "public",
        table: "posts",
      },
      (payload) => {
        // Handle different events
        if (payload.eventType === "INSERT") {
          const post = payload.new as Post;
          supabaseStore.posts[post.id].set(post);
        } else if (payload.eventType === "UPDATE") {
          const post = payload.new as Post;
          supabaseStore.posts[post.id].set(post);
        } else if (payload.eventType === "DELETE") {
          const oldPost = payload.old as Post;
          const posts = { ...supabaseStore.posts.get() };
          delete posts[oldPost.id];
          supabaseStore.posts.set(posts);
        }
      }
    )
    .subscribe();

  // Subscribe to comments changes
  const commentsSubscription = supabase
    .channel("public:comments")
    .on(
      "postgres_changes",
      {
        event: "*",
        schema: "public",
        table: "comments",
      },
      (payload) => {
        // Handle different events
        if (payload.eventType === "INSERT") {
          const comment = payload.new as Comment;
          supabaseStore.comments[comment.id].set(comment);
        } else if (payload.eventType === "UPDATE") {
          const comment = payload.new as Comment;
          supabaseStore.comments[comment.id].set(comment);
        } else if (payload.eventType === "DELETE") {
          const oldComment = payload.old as Comment;
          const comments = { ...supabaseStore.comments.get() };
          delete comments[oldComment.id];
          supabaseStore.comments.set(comments);
        }
      }
    )
    .subscribe();

  // Return a cleanup function to unsubscribe
  return () => {
    supabase.removeChannel(postsSubscription);
    supabase.removeChannel(commentsSubscription);
  };
};

// Initialize Legend State with Supabase
export const initLegendSupabase = () => {
  console.log("Initializing Legend State with Supabase integration");

  // Set up auth state change listener
  supabase.auth.onAuthStateChange((event, session) => {
    if (event === "SIGNED_IN" && session?.user) {
      const user: User = {
        id: session.user.id,
        email: session.user.email || "",
        name: (session.user.user_metadata.name as string) || undefined,
      };

      store.user.set(user);
      store.isAuthenticated.set(true);
    } else if (event === "SIGNED_OUT") {
      store.user.set(null);
      store.isAuthenticated.set(false);
    }
  });

  // Set up real-time subscriptions
  const cleanup = setupRealtimeSubscriptions();

  // Initial data fetch if user is authenticated
  if (store.isAuthenticated.get()) {
    postsActions.fetchPosts();
  }

  // Return cleanup function
  return cleanup;
};
