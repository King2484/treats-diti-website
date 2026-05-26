import type { Metadata } from "next";
import { Fredoka, Nunito } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Treats Diti | Sweet Treats, Made with Love",
  description: "Freshly baked stuffed cookies made with premium ingredients.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fredoka.variable} ${nunito.variable}`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col font-sans relative cursor-none" suppressHydrationWarning>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
