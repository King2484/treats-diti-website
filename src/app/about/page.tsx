"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col bg-brand-light pt-24 overflow-hidden">
      <Navbar />
      
      {/* Hero */}
      <section className="relative w-full h-[60vh] flex items-center justify-center bg-brand-yellow overflow-hidden">
        <div className="absolute inset-0 opacity-20">
            {/* Pattern overlay placeholder */}
            <div className="w-full h-full" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%235c4033\\' fill-opacity=\\'1\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-6xl md:text-8xl font-black text-bubble text-white drop-shadow-md mb-6" style={{ WebkitTextStroke: "2px #F3B33D" }}>
            OUR STORY
          </h1>
          <p className="text-2xl font-bold text-brand-dark max-w-2xl mx-auto">
            Baking happiness since 2024.
          </p>
        </motion.div>
      </section>

      {/* Content */}
      <section className="py-24 container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center gap-16 mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full md:w-1/2"
          >
            <div className="relative w-full aspect-square rounded-[40px] overflow-hidden shadow-2xl border-8 border-white transform -rotate-3">
              <div className="absolute inset-0 bg-brand-primary/20 mix-blend-overlay z-10" />
              <Image src="/images/cookie_stack_1779828483043.png" alt="Baking cookies" fill className="object-cover" />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full md:w-1/2 space-y-6"
          >
            <h2 className="text-4xl font-black text-brand-dark mb-4">THE SECRET INGREDIENT? <span className="text-brand-primary">OBSESSION.</span></h2>
            <p className="text-lg text-brand-dark/80 leading-relaxed font-medium">
              It started in a small kitchen with a simple goal: create the ultimate stuffed cookie. Not just a cookie, but an experience. We spent months perfecting the dough, ensuring it was thick enough to hold the generous fillings but soft enough to melt in your mouth.
            </p>
            <p className="text-lg text-brand-dark/80 leading-relaxed font-medium">
              Every single Treats Diti cookie is rolled by hand, stuffed with premium chocolates and spreads, and baked fresh every morning. 
            </p>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
