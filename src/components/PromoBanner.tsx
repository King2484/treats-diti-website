"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart } from "lucide-react";

const CloudBadge = () => (
  <div className="absolute top-1/2 right-10 -translate-y-1/2 z-20 animate-pulse hidden md:block">
    <svg width="160" height="160" viewBox="0 0 140 140" className="drop-shadow-lg">
      <path d="M70,5 C85,5 95,15 95,15 C110,10 125,20 125,35 C125,35 135,45 130,60 C135,75 125,90 125,90 C125,105 110,115 95,110 C95,110 85,120 70,120 C55,120 45,110 45,110 C30,115 15,105 15,90 C15,90 5,75 10,60 C5,45 15,35 15,35 C15,20 30,10 45,15 C45,15 55,5 70,5 Z" fill="white" />
    </svg>
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 -mt-2">
      <span className="font-black text-brand-primary text-base leading-tight tracking-wide">PERFECT<br/>FOR GIFTS!</span>
      <Heart className="w-4 h-4 text-brand-primary fill-brand-primary mt-1" />
    </div>
  </div>
);

const BackgroundClouds = () => (
  <>
    <svg viewBox="0 0 100 50" className="absolute -left-10 bottom-10 w-40 h-20 fill-brand-light opacity-80 z-0">
       <path d="M 25 50 A 20 20 0 0 1 25 10 A 25 25 0 0 1 70 5 A 20 20 0 0 1 80 40 A 15 15 0 0 1 75 50 Z" />
    </svg>
    <svg viewBox="0 0 100 50" className="absolute -right-10 top-10 w-32 h-16 fill-brand-light opacity-80 z-0">
       <path d="M 25 50 A 20 20 0 0 1 25 10 A 25 25 0 0 1 70 5 A 20 20 0 0 1 80 40 A 15 15 0 0 1 75 50 Z" />
    </svg>
  </>
);

export default function PromoBanner() {
  return (
    <section className="py-12 bg-brand-light">
      <div className="container mx-auto px-6 lg:px-12">
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-[#F3CD67] rounded-[40px] px-8 py-16 md:py-20 flex flex-col md:flex-row items-center justify-center border-4 border-brand-yellow card-shadow overflow-hidden"
        >
          <BackgroundClouds />
          
          {/* Left: Box Image */}
          <div className="w-full md:w-1/3 flex justify-center relative z-10 mb-10 md:mb-0">
            <div className="relative w-80 h-64 -ml-0 md:-ml-20 drop-shadow-2xl hover:scale-105 transition-transform duration-500">
              <Image 
                src="/images/cookie_box_1779828457569.png" 
                alt="Cookie Box" 
                fill 
                className="object-contain mix-blend-multiply" 
              />
            </div>
          </div>

          {/* Center: Text & CTA */}
          <div className="w-full md:w-1/2 relative z-10 text-center md:text-left flex flex-col items-center md:items-start pl-0 md:pl-10">
            <h2 className="text-4xl md:text-5xl text-3d mb-4">COOKIE BOXES</h2>
            <p className="text-brand-dark text-lg font-medium mb-8 max-w-sm">
              Perfect for gifting (or keeping!). Choose your box size and make someone's day sweeter.
            </p>
            <button className="bg-brand-primary text-white font-black uppercase px-8 py-3.5 rounded-full flex items-center gap-2 btn-shadow hover:brightness-110 transition-all active:btn-shadow" style={{ WebkitTextStroke: "1px #EAB243", color: "#FFF" }}>
              SHOP BOXES <Heart className="w-4 h-4 fill-white" />
            </button>
          </div>

          <CloudBadge />
        </motion.div>
      </div>
    </section>
  );
}
