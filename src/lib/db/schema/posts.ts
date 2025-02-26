import { pgTable, uuid, varchar, timestamp, text, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";
import { users } from "./users";
import { relations } from "drizzle-orm";
import { categories } from "./categories";
import { comments } from "./comments";
import { postsTags } from "./tags";

/**
 * Posts Table Schema
 *
 * Defines the structure of the posts table in the database.
 */
export const posts = pgTable("posts", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: varchar("title", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  content: text("content"),
  excerpt: text("excerpt"),
  featuredImage: text("featured_image"),
  authorId: uuid("author_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  categoryId: uuid("category_id").references(() => categories.id),
  published: boolean("published").default(false),
  publishedAt: timestamp("published_at"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Define relationships
export const postsRelations = relations(posts, ({ one, many }) => ({
  author: one(users, {
    fields: [posts.authorId],
    references: [users.id],
  }),
  category: one(categories, {
    fields: [posts.categoryId],
    references: [categories.id],
  }),
  comments: many(comments),
  tags: many(postsTags),
}));

// Types for TypeScript
export type Post = typeof posts.$inferSelect;
export type NewPost = typeof posts.$inferInsert;

// Zod schemas for validation
export const insertPostSchema = createInsertSchema(posts);
export const selectPostSchema = createSelectSchema(posts);

// Custom Zod schemas with additional validation
export const createPostSchema = insertPostSchema.extend({
  title: z.string().min(3).max(255),
  content: z.string().min(10).optional(),
});
