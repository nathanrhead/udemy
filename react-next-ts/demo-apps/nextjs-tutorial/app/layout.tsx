import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { navItems } from "@/data/navItems";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next.js Tutorial from Udemy",
  description: "A tutorial for Next.js",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar items={navItems} />
        <main className="flex min-h-screen max-w-[80%] mx-auto flex-col items-center justify-between p-24">
          {children}
        </main>
      </body>
    </html>
  );
}
