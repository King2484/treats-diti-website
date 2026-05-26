import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Treats Diti | Sweet Treats, Made with Love",
  description: "Freshly baked stuffed cookies made with premium ingredients. Order your box of happiness today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col font-sans relative cursor-none" suppressHydrationWarning>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
