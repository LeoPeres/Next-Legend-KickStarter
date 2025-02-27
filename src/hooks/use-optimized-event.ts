"use client";

import { useEffect, useRef } from "react";
import { optimizedEventListener, measureInteraction } from "@/lib/performance";

type EventHandler = (event: Event) => void;
type EventTarget = HTMLElement | Window | Document | null;

/**
 * Custom hook for optimized event handling in React components
 *
 * This hook helps improve FID and INP by:
 * 1. Using passive event listeners when possible
 * 2. Throttling scroll and resize events
 * 3. Debouncing input events
 * 4. Measuring interaction times for performance monitoring
 *
 * @param element The element to attach the event listener to (defaults to window)
 * @param eventType The type of event to listen for
 * @param handler The event handler function
 * @param options Event listener options
 * @param measureName Optional name for performance measurement
 */
export function useOptimizedEvent(
  eventType: string,
  handler: EventHandler,
  options?: boolean | AddEventListenerOptions,
  element?: EventTarget,
  measureName?: string
): void {
  // Keep a reference to the handler to avoid unnecessary re-renders
  const handlerRef = useRef<EventHandler>(handler);

  // Update the handler reference when it changes
  useEffect(() => {
    handlerRef.current = handler;
  }, [handler]);

  useEffect(() => {
    // Use window as the default element if none is provided
    const targetElement = element || window;

    // Create a wrapper handler that measures interaction time if needed
    const wrappedHandler = (event: Event) => {
      if (measureName) {
        const endMeasurement = measureInteraction(measureName);
        handlerRef.current(event);
        endMeasurement();
      } else {
        handlerRef.current(event);
      }
    };

    // Attach the optimized event listener
    const removeListener = optimizedEventListener(
      targetElement as HTMLElement | Window | Document,
      eventType,
      wrappedHandler,
      options
    );

    // Clean up the event listener when the component unmounts
    return removeListener;
  }, [eventType, element, options, measureName]);
}

/**
 * Custom hook for optimized scroll event handling
 */
export function useOptimizedScroll(
  handler: EventHandler,
  options?: boolean | AddEventListenerOptions,
  element?: EventTarget
): void {
  useOptimizedEvent("scroll", handler, options, element, "scroll_interaction");
}

/**
 * Custom hook for optimized resize event handling
 */
export function useOptimizedResize(
  handler: EventHandler,
  options?: boolean | AddEventListenerOptions
): void {
  useOptimizedEvent("resize", handler, options, window as EventTarget, "resize_interaction");
}

/**
 * Custom hook for optimized click event handling
 */
export function useOptimizedClick(
  handler: EventHandler,
  element: EventTarget,
  options?: boolean | AddEventListenerOptions
): void {
  useOptimizedEvent("click", handler, options, element, "click_interaction");
}

/**
 * Custom hook for optimized input event handling
 */
export function useOptimizedInput(
  handler: EventHandler,
  element: EventTarget,
  options?: boolean | AddEventListenerOptions
): void {
  useOptimizedEvent("input", handler, options, element, "input_interaction");
}
