import { store, User } from "./store";

/**
 * Role-Based Access Control (RBAC) System
 *
 * This file provides utilities for implementing role-based access control.
 */

// Define user roles
export enum UserRole {
  GUEST = "guest",
  USER = "user",
  EDITOR = "editor",
  ADMIN = "admin",
}

// Define permissions
export enum Permission {
  // Content permissions
  READ_CONTENT = "read:content",
  CREATE_CONTENT = "create:content",
  UPDATE_CONTENT = "update:content",
  DELETE_CONTENT = "delete:content",

  // User management permissions
  READ_USERS = "read:users",
  CREATE_USERS = "create:users",
  UPDATE_USERS = "update:users",
  DELETE_USERS = "delete:users",

  // Settings permissions
  READ_SETTINGS = "read:settings",
  UPDATE_SETTINGS = "update:settings",
}

// Define role-permission mappings
export const rolePermissions: Record<UserRole, Permission[]> = {
  [UserRole.GUEST]: [Permission.READ_CONTENT],
  [UserRole.USER]: [Permission.READ_CONTENT, Permission.CREATE_CONTENT, Permission.UPDATE_CONTENT],
  [UserRole.EDITOR]: [
    Permission.READ_CONTENT,
    Permission.CREATE_CONTENT,
    Permission.UPDATE_CONTENT,
    Permission.DELETE_CONTENT,
    Permission.READ_USERS,
  ],
  [UserRole.ADMIN]: [
    Permission.READ_CONTENT,
    Permission.CREATE_CONTENT,
    Permission.UPDATE_CONTENT,
    Permission.DELETE_CONTENT,
    Permission.READ_USERS,
    Permission.CREATE_USERS,
    Permission.UPDATE_USERS,
    Permission.DELETE_USERS,
    Permission.READ_SETTINGS,
    Permission.UPDATE_SETTINGS,
  ],
};

/**
 * Get the user's role from metadata
 */
export const getUserRole = (user: User | null): UserRole => {
  if (!user) {
    return UserRole.GUEST;
  }

  // In a real application, the role would be stored in the user's metadata
  // For now, we'll assume all authenticated users have the USER role
  return UserRole.USER;
};

/**
 * Check if the current user has a specific permission
 */
export const hasPermission = (permission: Permission): boolean => {
  const user = store.user.get();
  const userRole = getUserRole(user);

  // Get permissions for the user's role
  const permissions = rolePermissions[userRole] || [];

  // Check if the permission is included in the user's role permissions
  return permissions.includes(permission);
};

/**
 * Check if the current user has a specific role
 */
export const hasRole = (role: UserRole): boolean => {
  const user = store.user.get();
  const userRole = getUserRole(user);

  // Check if the user's role is at least the required role
  // This assumes roles have a hierarchy (e.g., ADMIN > EDITOR > USER > GUEST)
  const roleHierarchy = [UserRole.GUEST, UserRole.USER, UserRole.EDITOR, UserRole.ADMIN];
  const userRoleIndex = roleHierarchy.indexOf(userRole);
  const requiredRoleIndex = roleHierarchy.indexOf(role);

  return userRoleIndex >= requiredRoleIndex;
};
