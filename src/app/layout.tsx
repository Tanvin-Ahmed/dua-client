import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/utils";
import { Suspense } from "react";
import AppContext from "@/components/context/AppContext";
import "react-loading-skeleton/dist/skeleton.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Load local fonts
const me_quran = localFont({
  src: "./fonts/me_quran Regular.ttf",
  variable: "--font-me-quran",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Dua & Ruqyah || All Duas Collection",
  description: "Collection of all duas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          me_quran.variable,
          inter.variable,
          "antialiased, bg-[#EBEEF2]"
        )}
      >
        <Suspense>
          <AppContext>{children}</AppContext>
        </Suspense>
      </body>
    </html>
  );
}
