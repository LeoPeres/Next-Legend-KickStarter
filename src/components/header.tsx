"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { observer } from "@legendapp/state/react";
import { store, authActions } from "@/lib/store";
import { OptimizedImage } from "@/components/optimized-image";

export const Header = observer(() => {
  const isAuthenticated = store.isAuthenticated.get();
  const user = store.user.get();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-bold text-xl flex items-center gap-2" prefetch={true}>
            <div className="w-8 h-8">
              <OptimizedImage
                src="/logo.svg"
                alt="Next-Legend Logo"
                fill
                sizes="32px"
                className="object-contain"
                priority
                aspectRatio="1:1"
              />
            </div>
            <span>Next-Legend</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary" prefetch={true}>
              Home
            </Link>
            <Link
              href="/features"
              className="text-sm font-medium hover:text-primary"
              prefetch={true}
            >
              Features
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary" prefetch={true}>
              About
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <div className="min-w-[150px] flex justify-end">
            {isAuthenticated ? (
              <div className="flex items-center gap-4">
                <span className="text-sm">Hello, {user?.name || user?.email}</span>
                <Button variant="outline" size="sm" onClick={() => authActions.logout()}>
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/login" prefetch={true}>
                    Login
                  </Link>
                </Button>
                <Button size="sm" asChild>
                  <Link href="/register" prefetch={true}>
                    Register
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
});
