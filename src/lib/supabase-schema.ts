/**
 * Supabase Database Schema
 *
 * This file documents the database schema for the application.
 * It serves as a reference for the tables, relationships, and constraints.
 */

/**
 * Users Table
 *
 * Stores user information and profile data.
 * This extends the default Supabase auth.users table.
 */
export const usersTableSchema = `
CREATE TABLE public.users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL UNIQUE,
  name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Automatically create a profile when a new user signs up
CREATE OR REPLACE FUNCTION public.handle_new_user() 
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.users (id, email)
  VALUES (new.id, new.email);
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger the function every time a user is created
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();
`;

/**
 * Posts Table
 *
 * Stores user-created posts.
 */
export const postsTableSchema = `
CREATE TABLE public.posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  published BOOLEAN DEFAULT false NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Add indexes for performance
CREATE INDEX posts_user_id_idx ON public.posts (user_id);
CREATE INDEX posts_created_at_idx ON public.posts (created_at DESC);
`;

/**
 * Comments Table
 *
 * Stores comments on posts.
 */
export const commentsTableSchema = `
CREATE TABLE public.comments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id UUID NOT NULL REFERENCES public.posts(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Add indexes for performance
CREATE INDEX comments_post_id_idx ON public.comments (post_id);
CREATE INDEX comments_user_id_idx ON public.comments (user_id);
`;

/**
 * Tags Table
 *
 * Stores tags that can be applied to posts.
 */
export const tagsTableSchema = `
CREATE TABLE public.tags (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);
`;

/**
 * Post Tags Table
 *
 * Junction table for the many-to-many relationship between posts and tags.
 */
export const postTagsTableSchema = `
CREATE TABLE public.post_tags (
  post_id UUID NOT NULL REFERENCES public.posts(id) ON DELETE CASCADE,
  tag_id UUID NOT NULL REFERENCES public.tags(id) ON DELETE CASCADE,
  PRIMARY KEY (post_id, tag_id)
);

-- Add indexes for performance
CREATE INDEX post_tags_post_id_idx ON public.post_tags (post_id);
CREATE INDEX post_tags_tag_id_idx ON public.post_tags (tag_id);
`;

/**
 * Likes Table
 *
 * Stores user likes on posts.
 */
export const likesTableSchema = `
CREATE TABLE public.likes (
  user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  post_id UUID NOT NULL REFERENCES public.posts(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  PRIMARY KEY (user_id, post_id)
);

-- Add indexes for performance
CREATE INDEX likes_post_id_idx ON public.likes (post_id);
`;

/**
 * Followers Table
 *
 * Stores user follow relationships.
 */
export const followersTableSchema = `
CREATE TABLE public.followers (
  follower_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  following_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  PRIMARY KEY (follower_id, following_id)
);

-- Add indexes for performance
CREATE INDEX followers_following_id_idx ON public.followers (following_id);
`;

/**
 * Database Schema Diagram
 *
 * This is a textual representation of the entity-relationship diagram.
 * In a real application, you would use a tool like dbdiagram.io, Lucidchart, or draw.io.
 */
export const databaseDiagram = `
// Users Table
Table users {
  id UUID [pk, ref: > auth.users.id]
  email TEXT [not null, unique]
  name TEXT
  avatar_url TEXT
  created_at TIMESTAMP [not null, default: 'now()']
  updated_at TIMESTAMP [not null, default: 'now()']
}

// Posts Table
Table posts {
  id UUID [pk]
  user_id UUID [not null, ref: > users.id]
  title TEXT [not null]
  content TEXT [not null]
  published BOOLEAN [not null, default: false]
  created_at TIMESTAMP [not null, default: 'now()']
  updated_at TIMESTAMP [not null, default: 'now()']
}

// Comments Table
Table comments {
  id UUID [pk]
  post_id UUID [not null, ref: > posts.id]
  user_id UUID [not null, ref: > users.id]
  content TEXT [not null]
  created_at TIMESTAMP [not null, default: 'now()']
  updated_at TIMESTAMP [not null, default: 'now()']
}

// Tags Table
Table tags {
  id UUID [pk]
  name TEXT [not null, unique]
  created_at TIMESTAMP [not null, default: 'now()']
}

// Post Tags Table (Junction)
Table post_tags {
  post_id UUID [not null, ref: > posts.id]
  tag_id UUID [not null, ref: > tags.id]
  
  Indexes {
    (post_id, tag_id) [pk]
  }
}

// Likes Table
Table likes {
  user_id UUID [not null, ref: > users.id]
  post_id UUID [not null, ref: > posts.id]
  created_at TIMESTAMP [not null, default: 'now()']
  
  Indexes {
    (user_id, post_id) [pk]
  }
}

// Followers Table
Table followers {
  follower_id UUID [not null, ref: > users.id]
  following_id UUID [not null, ref: > users.id]
  created_at TIMESTAMP [not null, default: 'now()']
  
  Indexes {
    (follower_id, following_id) [pk]
  }
}
`;

// Function to create all tables
export const createAllTables = async () => {
  console.log("This function would create all tables in a real application.");
  console.log(
    "In a real application, you would use Supabase migrations or the dashboard SQL editor."
  );

  // List of all table schemas
  const allSchemas = [
    usersTableSchema,
    postsTableSchema,
    commentsTableSchema,
    tagsTableSchema,
    postTagsTableSchema,
    likesTableSchema,
    followersTableSchema,
  ];

  // Log the schemas for documentation
  allSchemas.forEach((schema, index) => {
    console.log(`Schema ${index + 1}:`);
    console.log(schema);
    console.log("-----------------------------------");
  });

  console.log("Database diagram:");
  console.log(databaseDiagram);
};
