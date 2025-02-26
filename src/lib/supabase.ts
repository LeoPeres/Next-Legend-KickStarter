import { createClient } from "@supabase/supabase-js";
import { SUPABASE_URL, SUPABASE_ANON_KEY } from "./env";

// Create a single supabase client for interacting with your database
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
  },
  global: {
    headers: {
      "x-application-name": "next-legend-kickstarter",
    },
  },
});

// Storage bucket names
export const STORAGE_BUCKETS = {
  AVATARS: "avatars",
  DOCUMENTS: "documents",
  IMAGES: "images",
};

// Initialize storage buckets
export const initializeStorageBuckets = async () => {
  try {
    // Create avatars bucket if it doesn't exist
    const { data: avatarBucket, error: avatarError } = await supabase.storage.getBucket(
      STORAGE_BUCKETS.AVATARS
    );

    if (!avatarBucket) {
      await supabase.storage.createBucket(STORAGE_BUCKETS.AVATARS, {
        public: false,
        fileSizeLimit: 1024 * 1024 * 2, // 2MB
      });
    }

    // Create documents bucket if it doesn't exist
    const { data: docBucket, error: docError } = await supabase.storage.getBucket(
      STORAGE_BUCKETS.DOCUMENTS
    );

    if (!docBucket) {
      await supabase.storage.createBucket(STORAGE_BUCKETS.DOCUMENTS, {
        public: false,
        fileSizeLimit: 1024 * 1024 * 10, // 10MB
      });
    }

    // Create images bucket if it doesn't exist
    const { data: imgBucket, error: imgError } = await supabase.storage.getBucket(
      STORAGE_BUCKETS.IMAGES
    );

    if (!imgBucket) {
      await supabase.storage.createBucket(STORAGE_BUCKETS.IMAGES, {
        public: true,
        fileSizeLimit: 1024 * 1024 * 5, // 5MB
      });
    }

    console.log("Storage buckets initialized successfully");
  } catch (error) {
    console.error("Error initializing storage buckets:", error);
  }
};

// Legend State Supabase integration
export const initSupabasePlugin = () => {
  // This function will be called when the app starts
  console.log("Initializing Supabase integration with Legend State");

  // Initialize storage buckets
  initializeStorageBuckets();

  // In a real application, you would implement:
  // 1. Syncing specific parts of the state with Supabase
  // 2. Loading initial state from Supabase
  // 3. Setting up listeners for state changes
};
