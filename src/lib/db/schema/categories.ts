import { pgTable, uuid, varchar, timestamp, text } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";
import { relations } from "drizzle-orm";
import { posts } from "./posts";

/**
 * Categories Table Schema
 *
 * Defines the structure of the categories table in the database.
 */
export const categories = pgTable("categories", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  description: text("description"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Define relationships
export const categoriesRelations = relations(categories, ({ many }) => ({
  posts: many(posts),
}));

// Types for TypeScript
export type Category = typeof categories.$inferSelect;
export type NewCategory = typeof categories.$inferInsert;

// Zod schemas for validation
export const insertCategorySchema = createInsertSchema(categories);
export const selectCategorySchema = createSelectSchema(categories);

// Custom Zod schemas with additional validation
export const createCategorySchema = insertCategorySchema.extend({
  name: z.string().min(2).max(50),
  slug: z.string().min(2).max(50),
});
