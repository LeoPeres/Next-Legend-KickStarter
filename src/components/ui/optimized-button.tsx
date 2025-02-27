"use client";

import React, { useState, useRef, useCallback } from "react";
import { Button, ButtonProps } from "@/components/ui/button";
import { useOptimizedClick } from "@/hooks/use-optimized-event";
import { cn } from "@/lib/utils";
import { measureInteraction } from "@/lib/performance";

interface OptimizedButtonProps extends ButtonProps {
  /**
   * Optional feedback color when button is clicked
   */
  feedbackColor?: string;

  /**
   * Whether to show a ripple effect on click
   */
  showRipple?: boolean;

  /**
   * Name for performance measurement
   */
  measureName?: string;
}

/**
 * OptimizedButton component
 *
 * An enhanced button component that improves interaction responsiveness
 * for better FID/INP metrics by:
 *
 * 1. Using optimized event listeners
 * 2. Providing visual feedback immediately on interaction
 * 3. Using CSS properties that don't trigger layout
 * 4. Measuring interaction performance
 */
export function OptimizedButton({
  children,
  className,
  feedbackColor,
  showRipple = true,
  measureName,
  onClick,
  ...props
}: OptimizedButtonProps) {
  // State for ripple effect
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([]);
  const nextRippleId = useRef(0);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Handle click with optimized event listener
  const handleClick = useCallback(
    (e: Event) => {
      if (!(e instanceof MouseEvent)) return;

      // Start performance measurement if name is provided
      const endMeasurement = measureName ? measureInteraction(measureName) : null;

      // Show ripple effect if enabled
      if (showRipple && buttonRef.current) {
        const button = buttonRef.current;
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const id = nextRippleId.current++;

        setRipples((prev) => [...prev, { x, y, id }]);

        // Remove ripple after animation completes
        setTimeout(() => {
          setRipples((prev) => prev.filter((ripple) => ripple.id !== id));
        }, 600);
      }

      // Call the original onClick handler if provided
      if (onClick) {
        // Create a synthetic React mouse event from the native event
        // This is a simplified version that works for our purposes
        const syntheticEvent = {
          ...e,
          preventDefault: () => e.preventDefault(),
          stopPropagation: () => e.stopPropagation(),
          target: e.target,
          currentTarget: buttonRef.current,
          nativeEvent: e,
          isDefaultPrevented: () => e.defaultPrevented,
          isPropagationStopped: () => false,
          persist: () => {},
        } as unknown as React.MouseEvent<HTMLButtonElement>;

        onClick(syntheticEvent);
      }

      // End performance measurement
      if (endMeasurement) {
        endMeasurement();
      }
    },
    [onClick, showRipple, measureName]
  );

  // Use optimized click event
  useOptimizedClick(handleClick as EventListener, buttonRef.current);

  return (
    <Button
      ref={buttonRef}
      className={cn(
        "relative overflow-hidden transition-transform active:scale-[0.98]",
        "touch-none", // Prevent double-tap zoom on mobile
        className
      )}
      onClick={undefined} // We handle clicks with our optimized handler
      style={
        {
          // Use CSS variables for dynamic values to avoid layout thrashing
          "--feedback-color": feedbackColor || "rgba(255, 255, 255, 0.1)",
        } as React.CSSProperties
      }
      {...props}
    >
      {children}

      {/* Ripple effects */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute rounded-full bg-white/20 pointer-events-none animate-ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
            transform: "translate(-50%, -50%)",
            width: "200%",
            aspectRatio: "1/1",
          }}
        />
      ))}
    </Button>
  );
}
