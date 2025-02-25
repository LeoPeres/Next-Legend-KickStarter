import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { AuthProvider } from "@/components/auth-provider";
import { SupabaseProvider } from "@/components/supabase-provider";
import { EnvChecker } from "@/components/env-checker";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

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
      <body className={`${inter.variable} antialiased min-h-screen flex flex-col`}>
        <SupabaseProvider>
          <ThemeProvider>
            <AuthProvider>
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
              <EnvChecker />
            </AuthProvider>
          </ThemeProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
