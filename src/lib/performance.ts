/**
 * Performance Optimization Utilities
 *
 * This file contains utilities for optimizing JavaScript execution
 * and improving Core Web Vitals metrics like FID and INP.
 */

/**
 * Schedules a task to run during browser idle time
 * @param callback The function to execute during idle time
 * @param options Configuration options for requestIdleCallback
 */
export function scheduleIdleTask(callback: () => void, options: { timeout?: number } = {}): void {
  if (typeof window !== "undefined") {
    if ("requestIdleCallback" in window) {
      // @ts-ignore - TypeScript doesn't have types for requestIdleCallback
      window.requestIdleCallback(callback, options);
    } else {
      // Fallback for browsers that don't support requestIdleCallback
      setTimeout(callback, options.timeout || 1);
    }
  }
}

/**
 * Schedules a task to run in the next animation frame
 * @param callback The function to execute in the next animation frame
 */
export function scheduleAnimationTask(callback: () => void): void {
  if (typeof window !== "undefined") {
    window.requestAnimationFrame(callback);
  }
}

/**
 * Debounces a function to limit how often it can be called
 * @param func The function to debounce
 * @param wait The time to wait in milliseconds
 * @param immediate Whether to call the function immediately
 * @returns The debounced function
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
  immediate: boolean = false
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  return function (this: any, ...args: Parameters<T>): void {
    const context = this;

    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    const callNow = immediate && !timeout;

    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(later, wait);

    if (callNow) {
      func.apply(context, args);
    }
  };
}

/**
 * Throttles a function to limit how often it can be called
 * @param func The function to throttle
 * @param limit The time limit in milliseconds
 * @returns The throttled function
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean = false;
  let lastFunc: ReturnType<typeof setTimeout>;
  let lastRan: number;

  return function (this: any, ...args: Parameters<T>): void {
    const context = this;

    if (!inThrottle) {
      func.apply(context, args);
      lastRan = Date.now();
      inThrottle = true;

      setTimeout(() => {
        inThrottle = false;
      }, limit);
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(
        () => {
          if (Date.now() - lastRan >= limit) {
            func.apply(context, args);
            lastRan = Date.now();
          }
        },
        limit - (Date.now() - lastRan)
      );
    }
  };
}

/**
 * Breaks long tasks into smaller chunks to prevent main thread blocking
 * @param items The array of items to process
 * @param processor The function to process each item
 * @param chunkSize The number of items to process in each chunk
 */
export function processInChunks<T>(
  items: T[],
  processor: (item: T) => void,
  chunkSize: number = 5
): Promise<void> {
  return new Promise((resolve) => {
    if (items.length === 0) {
      resolve();
      return;
    }

    let index = 0;

    function processNextChunk() {
      const start = index;
      const end = Math.min(start + chunkSize, items.length);

      for (let i = start; i < end; i++) {
        processor(items[i]);
      }

      index = end;

      if (index < items.length) {
        // Schedule next chunk in the next idle period
        scheduleIdleTask(processNextChunk, { timeout: 1000 });
      } else {
        resolve();
      }
    }

    // Start processing the first chunk
    processNextChunk();
  });
}

/**
 * Optimizes event listeners to reduce main thread work
 * @param element The DOM element to attach the listener to
 * @param eventType The type of event to listen for
 * @param handler The event handler function
 * @param options Event listener options
 */
export function optimizedEventListener(
  element: HTMLElement | Window | Document,
  eventType: string,
  handler: EventListenerOrEventListenerObject,
  options?: boolean | AddEventListenerOptions
): () => void {
  // For scroll and resize events, use throttling
  if (eventType === "scroll" || eventType === "resize") {
    const throttledHandler =
      typeof handler === "function" ? throttle(handler as (...args: any[]) => any, 100) : handler;

    element.addEventListener(eventType, throttledHandler, options);

    return () => {
      element.removeEventListener(eventType, throttledHandler, options);
    };
  }

  // For input events, use debouncing
  if (eventType === "input") {
    const debouncedHandler =
      typeof handler === "function" ? debounce(handler as (...args: any[]) => any, 100) : handler;

    element.addEventListener(eventType, debouncedHandler, options);

    return () => {
      element.removeEventListener(eventType, debouncedHandler, options);
    };
  }

  // For other events, use passive listeners when possible
  const passiveOptions =
    (eventType === "touchstart" || eventType === "touchmove" || eventType === "wheel") &&
    typeof options !== "boolean"
      ? { passive: true, ...(options as AddEventListenerOptions) }
      : options;

  element.addEventListener(eventType, handler, passiveOptions);

  return () => {
    element.removeEventListener(eventType, handler, passiveOptions);
  };
}

/**
 * Measures the interaction time for performance monitoring
 * @param interactionName The name of the interaction to measure
 * @returns A function to call when the interaction is complete
 */
export function measureInteraction(interactionName: string): () => void {
  if (typeof window === "undefined" || !window.performance || !window.performance.mark) {
    return () => {}; // No-op if performance API is not available
  }

  const startMarkName = `${interactionName}_start`;
  window.performance.mark(startMarkName);

  return () => {
    const endMarkName = `${interactionName}_end`;
    window.performance.mark(endMarkName);

    try {
      window.performance.measure(interactionName, startMarkName, endMarkName);

      // Log interaction time in development
      if (process.env.NODE_ENV === "development") {
        const entries = window.performance.getEntriesByName(interactionName, "measure");
        if (entries.length > 0) {
          console.log(
            `Interaction time for ${interactionName}: ${entries[0].duration.toFixed(2)}ms`
          );
        }
      }
    } catch (e) {
      console.error("Error measuring interaction:", e);
    }
  };
}
