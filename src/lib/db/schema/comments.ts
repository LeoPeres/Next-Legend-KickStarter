import { pgTable, uuid, timestamp, text, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";
import { users } from "./users";
import { posts } from "./posts";
import { relations } from "drizzle-orm";

/**
 * Comments Table Schema
 *
 * Defines the structure of the comments table in the database.
 */
export const comments = pgTable("comments", {
  id: uuid("id").primaryKey().defaultRandom(),
  content: text("content").notNull(),
  authorId: uuid("author_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  postId: uuid("post_id")
    .notNull()
    .references(() => posts.id, { onDelete: "cascade" }),
  parentId: uuid("parent_id"),
  approved: boolean("approved").default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Define relationships after the table is defined
export const commentsRelations = relations(comments, ({ one, many }) => {
  return {
    author: one(users, {
      fields: [comments.authorId],
      references: [users.id],
    }),
    post: one(posts, {
      fields: [comments.postId],
      references: [posts.id],
    }),
    parent: one(comments, {
      fields: [comments.parentId],
      references: [comments.id],
    }),
    replies: many(comments, { relationName: "parent" }),
  };
});

// Types for TypeScript
export type Comment = typeof comments.$inferSelect;
export type NewComment = typeof comments.$inferInsert;

// Zod schemas for validation
export const insertCommentSchema = createInsertSchema(comments);
export const selectCommentSchema = createSelectSchema(comments);

// Custom Zod schemas with additional validation
export const createCommentSchema = insertCommentSchema.extend({
  content: z.string().min(1).max(1000),
});
