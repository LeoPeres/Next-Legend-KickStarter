import { pgTable, uuid, varchar, timestamp, text, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";
import { users } from "./users";
import { relations } from "drizzle-orm";

/**
 * Profiles Table Schema
 *
 * Defines the structure of the profiles table in the database.
 * This table extends user information with additional profile data.
 */
export const profiles = pgTable("profiles", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  bio: text("bio"),
  website: varchar("website", { length: 255 }),
  location: varchar("location", { length: 255 }),
  avatarUrl: text("avatar_url"),
  coverImageUrl: text("cover_image_url"),
  preferences: jsonb("preferences").$type<Record<string, unknown>>(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Define relationships
export const profilesRelations = relations(profiles, ({ one }) => ({
  user: one(users, {
    fields: [profiles.userId],
    references: [users.id],
  }),
}));

// Types for TypeScript
export type Profile = typeof profiles.$inferSelect;
export type NewProfile = typeof profiles.$inferInsert;

// Zod schemas for validation
export const insertProfileSchema = createInsertSchema(profiles);
export const selectProfileSchema = createSelectSchema(profiles);

// Custom Zod schemas with additional validation
export const createProfileSchema = insertProfileSchema.extend({
  website: z.string().url().optional().nullable(),
});
