"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";

interface OptimizedImageProps extends Omit<ImageProps, "onLoadingComplete"> {
  aspectRatio?: "16:9" | "4:3" | "1:1" | "auto";
  wrapperClassName?: string;
}

/**
 * OptimizedImage component
 *
 * A wrapper around Next.js Image component that helps prevent CLS
 * by maintaining aspect ratio and showing a placeholder until the image loads.
 */
export function OptimizedImage({
  src,
  alt,
  fill,
  width,
  height,
  className,
  wrapperClassName,
  aspectRatio = "auto",
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  // Determine the aspect ratio class
  let aspectRatioClass = "";
  if (aspectRatio === "16:9") {
    aspectRatioClass = "aspect-ratio-16-9";
  } else if (aspectRatio === "4:3") {
    aspectRatioClass = "aspect-ratio-4-3";
  } else if (aspectRatio === "1:1") {
    aspectRatioClass = "aspect-ratio-1-1";
  }

  // If fill is true, we need to use the aspect-ratio-container
  if (fill) {
    return (
      <div
        className={cn(
          "image-container",
          aspectRatio !== "auto" && "aspect-ratio-container",
          aspectRatioClass,
          wrapperClassName
        )}
      >
        <Image
          src={src}
          alt={alt}
          fill={fill}
          className={cn(
            "transition-opacity duration-300",
            isLoaded ? "opacity-100" : "opacity-0",
            aspectRatio !== "auto" && "aspect-ratio-content",
            className
          )}
          onLoad={() => setIsLoaded(true)}
          {...props}
        />
      </div>
    );
  }

  // If width and height are provided, use them directly
  return (
    <div
      className={cn("image-container", wrapperClassName)}
      style={{
        width: width ? `${width}px` : "auto",
        height: height ? `${height}px` : "auto",
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={cn(
          "transition-opacity duration-300",
          isLoaded ? "opacity-100" : "opacity-0",
          className
        )}
        onLoad={() => setIsLoaded(true)}
        {...props}
      />
    </div>
  );
}
