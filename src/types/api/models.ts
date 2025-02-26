import { z } from "zod";

// User models
export const UserSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  role: z.enum(["admin", "user"]).optional(),
  createdAt: z.string().datetime().optional(),
  lastLogin: z.string().datetime().optional(),
});

export const CreateUserSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(8),
});

export const UpdateUserSchema = z.object({
  name: z.string().min(2).optional(),
  email: z.string().email().optional(),
});

export type User = z.infer<typeof UserSchema>;
export type CreateUser = z.infer<typeof CreateUserSchema>;
export type UpdateUser = z.infer<typeof UpdateUserSchema>;

// Project models
export const ProjectSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string().optional(),
  ownerId: z.number(),
  createdAt: z.string().datetime().optional(),
  updatedAt: z.string().datetime().optional(),
});

export const CreateProjectSchema = z.object({
  name: z.string().min(2),
  description: z.string().optional(),
});

export const UpdateProjectSchema = z.object({
  name: z.string().min(2).optional(),
  description: z.string().optional(),
});

export type Project = z.infer<typeof ProjectSchema>;
export type CreateProject = z.infer<typeof CreateProjectSchema>;
export type UpdateProject = z.infer<typeof UpdateProjectSchema>;

// Task models
export const TaskSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string().optional(),
  status: z.enum(["todo", "in_progress", "done"]),
  projectId: z.number(),
  assigneeId: z.number().optional(),
  createdAt: z.string().datetime().optional(),
  updatedAt: z.string().datetime().optional(),
});

export const CreateTaskSchema = z.object({
  title: z.string().min(2),
  description: z.string().optional(),
  status: z.enum(["todo", "in_progress", "done"]).default("todo"),
  projectId: z.number(),
  assigneeId: z.number().optional(),
});

export const UpdateTaskSchema = z.object({
  title: z.string().min(2).optional(),
  description: z.string().optional(),
  status: z.enum(["todo", "in_progress", "done"]).optional(),
  assigneeId: z.number().optional(),
});

export type Task = z.infer<typeof TaskSchema>;
export type CreateTask = z.infer<typeof CreateTaskSchema>;
export type UpdateTask = z.infer<typeof UpdateTaskSchema>;

// API response models
export const PaginationSchema = z.object({
  total: z.number(),
  page: z.number(),
  limit: z.number(),
});

export const ErrorResponseSchema = z.object({
  error: z.string(),
});

export type Pagination = z.infer<typeof PaginationSchema>;
export type ErrorResponse = z.infer<typeof ErrorResponseSchema>;
