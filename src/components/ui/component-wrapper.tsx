import React from "react";
import { cn } from "@/lib/utils";

interface ComponentWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
  headerClassName?: string;
  showHeader?: boolean;
}

/**
 * ComponentWrapper provides a consistent container for UI components
 * with optional title and description.
 *
 * @example
 * <ComponentWrapper
 *   title="User Profile"
 *   description="Manage your account settings and preferences."
 * >
 *   <ProfileForm />
 * </ComponentWrapper>
 */
export function ComponentWrapper({
  title,
  description,
  children,
  className,
  contentClassName,
  headerClassName,
  showHeader = true,
  ...props
}: ComponentWrapperProps) {
  return (
    <div className={cn("w-full", className)} {...props}>
      {showHeader && (title || description) && (
        <div className={cn("mb-4", headerClassName)}>
          {title && <h3 className="text-lg font-medium">{title}</h3>}
          {description && <p className="mt-1 text-sm text-muted-foreground">{description}</p>}
        </div>
      )}
      <div className={cn("w-full", contentClassName)}>{children}</div>
    </div>
  );
}

/**
 * FormComponentWrapper provides a consistent container specifically for form components
 * with label, description, and error handling.
 *
 * @example
 * <FormComponentWrapper
 *   label="Email Address"
 *   description="We'll never share your email with anyone else."
 *   error="Please enter a valid email address"
 * >
 *   <Input placeholder="Enter your email" />
 * </FormComponentWrapper>
 */
export function FormComponentWrapper({
  label,
  description,
  error,
  children,
  className,
  required = false,
  ...props
}: {
  label?: string;
  description?: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
  required?: boolean;
}) {
  const id = React.useId();

  return (
    <div className={cn("w-full space-y-2", className)} {...props}>
      {label && (
        <label
          htmlFor={id}
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {label}
          {required && <span className="text-destructive ml-1">*</span>}
        </label>
      )}
      {description && <p className="text-xs text-muted-foreground">{description}</p>}
      {React.isValidElement(children)
        ? React.cloneElement(children as React.ReactElement<any>, {
            id,
            "aria-describedby": description ? `${id}-description` : undefined,
            "aria-invalid": error ? true : undefined,
          })
        : children}
      {error && (
        <p className="text-xs text-destructive" id={`${id}-error`}>
          {error}
        </p>
      )}
    </div>
  );
}
