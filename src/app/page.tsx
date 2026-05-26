"use client";

import { motion, useScroll } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import OurCookies from "@/components/sections/OurCookies";
import CookieBoxesBanner from "@/components/sections/CookieBoxesBanner";
import FeaturesStrip from "@/components/sections/FeaturesStrip";
import Footer from "@/components/layout/Footer";

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-[#C8860A] origin-left z-[100]"
        style={{ scaleX: scrollYProgress }}
      />
      
      <main className="relative w-full min-h-screen">
        <Navbar />
        <Hero />
        <OurCookies />
        <CookieBoxesBanner />
        <FeaturesStrip />
        <Footer />
      </main>
    </>
  );
}
