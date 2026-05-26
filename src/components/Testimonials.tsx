"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  { name: "Sarah J.", text: "Best stuffed cookies I've ever had. Period." },
  { name: "Mike T.", text: "The Red Velvet changed my life. So gooey!" },
  { name: "Emily R.", text: "Bought a box for a party, they were gone in 5 minutes." },
  { name: "David L.", text: "Premium ingredients really make a difference." },
  { name: "Anna K.", text: "My weekly treat. Can't get enough of the Pistachio." },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-brand-yellow overflow-hidden relative">
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-black text-bubble text-white drop-shadow-md" style={{ WebkitTextStroke: "1px #5C4033" }}>
          SWEET WORDS
        </h2>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full flex overflow-hidden group">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
        >
          {/* Double the list for infinite scroll effect */}
          {[...reviews, ...reviews].map((review, idx) => (
            <div 
              key={idx} 
              className="inline-block bg-white rounded-3xl p-8 mx-4 w-80 whitespace-normal premium-shadow hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex gap-1 text-brand-primary mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-brand-dark/80 font-medium italic mb-4">"{review.text}"</p>
              <p className="font-bold text-brand-dark">- {review.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
