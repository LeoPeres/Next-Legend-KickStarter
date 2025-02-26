import { pgTable, uuid, varchar, timestamp, text, primaryKey } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";
import { relations } from "drizzle-orm";
import { posts } from "./posts";

/**
 * Tags Table Schema
 *
 * Defines the structure of the tags table in the database.
 */
export const tags = pgTable("tags", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  description: text("description"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

/**
 * Posts-Tags Join Table Schema
 *
 * Defines the many-to-many relationship between posts and tags.
 */
export const postsTags = pgTable(
  "posts_tags",
  {
    postId: uuid("post_id")
      .notNull()
      .references(() => posts.id, { onDelete: "cascade" }),
    tagId: uuid("tag_id")
      .notNull()
      .references(() => tags.id, { onDelete: "cascade" }),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.postId, t.tagId] }),
  })
);

// Define relationships
export const tagsRelations = relations(tags, ({ many }) => ({
  posts: many(postsTags),
}));

export const postsTagsRelations = relations(postsTags, ({ one }) => ({
  post: one(posts, {
    fields: [postsTags.postId],
    references: [posts.id],
  }),
  tag: one(tags, {
    fields: [postsTags.tagId],
    references: [tags.id],
  }),
}));

// Types for TypeScript
export type Tag = typeof tags.$inferSelect;
export type NewTag = typeof tags.$inferInsert;
export type PostTag = typeof postsTags.$inferSelect;
export type NewPostTag = typeof postsTags.$inferInsert;

// Zod schemas for validation
export const insertTagSchema = createInsertSchema(tags);
export const selectTagSchema = createSelectSchema(tags);
export const insertPostTagSchema = createInsertSchema(postsTags);
export const selectPostTagSchema = createSelectSchema(postsTags);

// Custom Zod schemas with additional validation
export const createTagSchema = insertTagSchema.extend({
  name: z.string().min(2).max(50),
  slug: z.string().min(2).max(50),
});
