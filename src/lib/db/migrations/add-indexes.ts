import { db } from "..";
import { sql } from "drizzle-orm";

/**
 * Migration to add indexes to database tables for better query performance
 */
export async function addIndexes() {
  console.log("Adding database indexes for performance optimization...");
  const startTime = performance.now();

  try {
    // Add indexes to posts table
    await db.execute(sql`
      -- Add index for posts by author
      CREATE INDEX IF NOT EXISTS idx_posts_author_id ON posts (author_id);
      
      -- Add index for posts by category
      CREATE INDEX IF NOT EXISTS idx_posts_category_id ON posts (category_id);
      
      -- Add index for posts by published status and date
      CREATE INDEX IF NOT EXISTS idx_posts_published_date ON posts (published, published_at DESC);
      
      -- Add index for posts by slug (for faster lookups by slug)
      CREATE INDEX IF NOT EXISTS idx_posts_slug ON posts (slug);
      
      -- Add full-text search index for post content
      CREATE INDEX IF NOT EXISTS idx_posts_content_gin ON posts USING gin(to_tsvector('english', content));
      
      -- Add full-text search index for post title
      CREATE INDEX IF NOT EXISTS idx_posts_title_gin ON posts USING gin(to_tsvector('english', title));
    `);

    // Add indexes to comments table
    await db.execute(sql`
      -- Add index for comments by post
      CREATE INDEX IF NOT EXISTS idx_comments_post_id ON comments (post_id);
      
      -- Add index for comments by author
      CREATE INDEX IF NOT EXISTS idx_comments_author_id ON comments (author_id);
      
      -- Add index for comments by creation date
      CREATE INDEX IF NOT EXISTS idx_comments_created_at ON comments (created_at DESC);
    `);

    // Add indexes to users table
    await db.execute(sql`
      -- Add index for users by email
      CREATE INDEX IF NOT EXISTS idx_users_email ON users (email);
      
      -- Add index for users by username
      CREATE INDEX IF NOT EXISTS idx_users_username ON users (username);
    `);

    // Add indexes to profiles table
    await db.execute(sql`
      -- Add index for profiles by user
      CREATE INDEX IF NOT EXISTS idx_profiles_user_id ON profiles (user_id);
    `);

    // Add indexes to tags table
    await db.execute(sql`
      -- Add index for tags by name
      CREATE INDEX IF NOT EXISTS idx_tags_name ON tags (name);
    `);

    // Add indexes to posts_tags table
    await db.execute(sql`
      -- Add index for posts_tags by post
      CREATE INDEX IF NOT EXISTS idx_posts_tags_post_id ON posts_tags (post_id);
      
      -- Add index for posts_tags by tag
      CREATE INDEX IF NOT EXISTS idx_posts_tags_tag_id ON posts_tags (tag_id);
    `);

    const endTime = performance.now();
    console.log(`Database indexes added successfully in ${(endTime - startTime).toFixed(2)}ms`);
  } catch (error) {
    console.error("Error adding database indexes:", error);
    throw error;
  }
}

/**
 * Migration to remove indexes from database tables
 */
export async function removeIndexes() {
  console.log("Removing database indexes...");

  try {
    // Remove indexes from posts table
    await db.execute(sql`
      DROP INDEX IF EXISTS idx_posts_author_id;
      DROP INDEX IF EXISTS idx_posts_category_id;
      DROP INDEX IF EXISTS idx_posts_published_date;
      DROP INDEX IF EXISTS idx_posts_slug;
      DROP INDEX IF EXISTS idx_posts_content_gin;
      DROP INDEX IF EXISTS idx_posts_title_gin;
    `);

    // Remove indexes from comments table
    await db.execute(sql`
      DROP INDEX IF EXISTS idx_comments_post_id;
      DROP INDEX IF EXISTS idx_comments_author_id;
      DROP INDEX IF EXISTS idx_comments_created_at;
    `);

    // Remove indexes from users table
    await db.execute(sql`
      DROP INDEX IF EXISTS idx_users_email;
      DROP INDEX IF EXISTS idx_users_username;
    `);

    // Remove indexes from profiles table
    await db.execute(sql`
      DROP INDEX IF EXISTS idx_profiles_user_id;
    `);

    // Remove indexes from tags table
    await db.execute(sql`
      DROP INDEX IF EXISTS idx_tags_name;
    `);

    // Remove indexes from posts_tags table
    await db.execute(sql`
      DROP INDEX IF EXISTS idx_posts_tags_post_id;
      DROP INDEX IF EXISTS idx_posts_tags_tag_id;
    `);

    console.log("Database indexes removed successfully");
  } catch (error) {
    console.error("Error removing database indexes:", error);
    throw error;
  }
}
