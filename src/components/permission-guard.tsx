"use client";

import React from "react";
import { Permission, hasPermission, UserRole, hasRole } from "@/lib/rbac";

interface PermissionGuardProps {
  permission: Permission;
  fallback?: React.ReactNode;
  children: React.ReactNode;
}

export function PermissionGuard({ permission, fallback = null, children }: PermissionGuardProps) {
  if (hasPermission(permission)) {
    return <>{children}</>;
  }
  return <>{fallback}</>;
}

interface RoleGuardProps {
  role: UserRole;
  fallback?: React.ReactNode;
  children: React.ReactNode;
}

export function RoleGuard({ role, fallback = null, children }: RoleGuardProps) {
  if (hasRole(role)) {
    return <>{children}</>;
  }
  return <>{fallback}</>;
}
