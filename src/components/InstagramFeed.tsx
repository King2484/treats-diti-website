"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Camera } from "lucide-react";

const feed = [
  "/images/cookie_stack_1779828483043.png",
  "/images/oreo_cookie_1779828733576.png",
  "/images/red_velvet_cookie_1779828718660.png",
  "/images/cookie_box_1779828457569.png",
];

export default function InstagramFeed() {
  return (
    <section className="py-24 bg-brand-light">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 bg-brand-yellow px-6 py-2 rounded-full mb-4"
          >
            <Camera className="w-5 h-5 text-brand-dark" />
            <span className="font-bold text-brand-dark uppercase tracking-widest text-sm">@TreatsDiti</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black text-brand-dark">
            JOIN THE <span className="text-brand-primary">OBSESSION</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {feed.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer border-4 border-white premium-shadow bg-brand-yellow/20"
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-brand-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                 <Camera className="w-10 h-10 text-white transform scale-50 group-hover:scale-100 transition-transform duration-300" />
              </div>
              <Image 
                src={img} 
                alt={`Instagram feed image ${idx + 1}`} 
                fill 
                className="object-cover mix-blend-multiply group-hover:scale-110 transition-transform duration-700" 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
