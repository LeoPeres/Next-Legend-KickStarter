import type { Metadata } from "next";
import "./globals.css";
import { fontVariables } from "@/lib/fonts";
import { ThemeProvider } from "@/components/theme-provider";
import { AuthProvider } from "@/components/auth-provider";
import { SupabaseProvider } from "@/components/supabase-provider";
import { EnvChecker } from "@/components/env-checker";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AnalyticsProvider } from "@/components/analytics-provider";
import { PreloadIcons } from "@/components/preload-icons";

export const metadata: Metadata = {
  title: "Next-Legend-KickStarter",
  description:
    "A modern web application built with Next.js, TypeScript, Tailwind CSS, and Legend State",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontVariables} antialiased min-h-screen flex flex-col`}>
        <SupabaseProvider>
          <ThemeProvider>
            <AuthProvider>
              <AnalyticsProvider>
                <PreloadIcons />
                <Header />
                <main className="flex-1">{children}</main>
                <Footer />
                <EnvChecker />
              </AnalyticsProvider>
            </AuthProvider>
          </ThemeProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
