import type { Metadata } from "next";
import { DynaPuff, Inter } from "next/font/google";
import "./globals.css";

const dynaPuff = DynaPuff({
  variable: "--font-bubble",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Treats Diti | Sweet Treats, Made with Love",
  description: "Freshly baked stuffed cookies made with premium ingredients. Order your box of happiness today!",
};

import CustomCursor from "@/components/CustomCursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dynaPuff.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col font-sans relative cursor-none" suppressHydrationWarning>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
