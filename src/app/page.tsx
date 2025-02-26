import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 py-8 md:py-16">
      {/* Hero Section */}
      <section className="container flex flex-col items-center text-center gap-8">
        <div className="relative w-32 h-32 mb-4">
          <Image
            src="/logo.svg"
            alt="Next-Legend KickStarter Logo"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 128px"
            className="object-contain"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Next-Legend <span className="text-primary">KickStarter</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-[700px]">
          A modern web application built with Next.js, TypeScript, Tailwind CSS, and Legend State
          for state management.
        </p>
        <div className="flex gap-4">
          <Button asChild size="lg">
            <Link href="/docs">Get Started</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="https://github.com/yourusername/next-legend-kickstarter" target="_blank">
              GitHub
            </Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-8 md:py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Key Features</h2>
          <p className="text-muted-foreground max-w-[700px] mx-auto">
            Everything you need to build modern web applications with the latest technologies.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <div className="relative w-12 h-12 mb-2">
                <Image
                  src="/next.svg"
                  alt="Next.js Logo"
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <CardTitle>Next.js App Router</CardTitle>
              <CardDescription>Built on the latest Next.js App Router architecture</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Leverage the power of React Server Components, streaming, and the latest Next.js
                features.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" asChild size="sm">
                <Link href="/docs/nextjs">Learn more</Link>
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <div className="relative w-12 h-12 mb-2">
                <Image
                  src="/globe.svg"
                  alt="Legend State Logo"
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <CardTitle>Legend State</CardTitle>
              <CardDescription>Reactive state management for React</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Simple, powerful, and flexible state management with automatic reactivity and
                persistence.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" asChild size="sm">
                <Link href="/docs/legend-state">Learn more</Link>
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <div className="relative w-12 h-12 mb-2">
                <Image
                  src="/file.svg"
                  alt="Supabase Logo"
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <CardTitle>Supabase Integration</CardTitle>
              <CardDescription>Built-in authentication and database</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Ready-to-use authentication and database with Supabase, the open-source Firebase
                alternative.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" asChild size="sm">
                <Link href="/docs/supabase">Learn more</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground max-w-[600px] mx-auto mb-8">
            Start building your next project with Next-Legend KickStarter today.
          </p>
          <Button size="lg" asChild>
            <Link href="/docs">Get Started</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
