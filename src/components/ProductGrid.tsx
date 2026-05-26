"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";

const cookies = [
  {
    id: 1,
    name: "CHOCOLATE CHIP",
    description: "The classic favorite. Soft, chewy, and packed with chocolate chips.",
    price: "$3.00",
    image: "/images/cookie_stack_1779828483043.png",
  },
  {
    id: 2,
    name: "DOUBLE CHOCOLATE",
    description: "Rich cocoa dough with chocolate chips. For the chocolate lover.",
    price: "$3.25",
    image: "/images/oreo_cookie_1779828733576.png",
  },
  {
    id: 3,
    name: "WHITE CHOC MACADAMIA",
    description: "Creamy white chocolate and crunchy macadamia nuts.",
    price: "$3.25",
    image: "/images/cookie_stack_1779828483043.png",
  },
  {
    id: 4,
    name: "RED VELVET",
    description: "Rich red velvet dough packed with white chocolate chips.",
    price: "$3.50",
    image: "/images/red_velvet_cookie_1779828718660.png",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

export default function ProductGrid() {
  return (
    <section id="shop" className="py-24 relative w-full bg-brand-light">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 text-brand-primary mb-4"
          >
            <span className="text-2xl">🌿</span>
            <h2 className="text-5xl md:text-6xl font-black text-bubble text-white drop-shadow-[0_2px_2px_rgba(92,64,51,0.2)]" style={{ WebkitTextStroke: "2px #F3B33D" }}>
              OUR COOKIES
            </h2>
            <span className="text-2xl">🌿</span>
          </motion.div>
          <p className="text-brand-dark/80 font-medium max-w-md mx-auto">
            Made with the best ingredients for the best flavor.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {cookies.map((cookie) => (
            <motion.div
              key={cookie.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-[32px] p-6 pb-8 border border-brand-yellow/30 premium-shadow flex flex-col items-center text-center relative group"
            >
              {/* Star Sparkles */}
              <div className="absolute top-6 left-6 text-brand-yellow opacity-0 group-hover:opacity-100 transition-opacity">✨</div>
              <div className="absolute top-10 right-8 text-brand-yellow opacity-0 group-hover:opacity-100 transition-opacity">✨</div>

              {/* Image */}
              <div className="relative w-48 h-48 mb-6 drop-shadow-xl group-hover:scale-110 transition-transform duration-500 mix-blend-multiply" style={{ filter: "contrast(1.1)" }}>
                <Image
                  src={cookie.image}
                  alt={cookie.name}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Text */}
              <h3 className="font-black text-xl text-brand-dark mb-2 uppercase tracking-wide">
                {cookie.name}
              </h3>
              <p className="text-sm text-brand-dark/70 mb-6 flex-grow">
                {cookie.description}
              </p>

              {/* Price & Action */}
              <div className="w-full mt-auto flex flex-col items-center">
                <p className="text-brand-primary font-black text-2xl mb-4">{cookie.price}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-brand-yellow hover:bg-brand-primary hover:text-white transition-colors text-brand-dark font-bold py-3 px-6 rounded-full flex items-center justify-center gap-2"
                >
                  ADD TO CART <ShoppingBag className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <div className="mt-16 flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-brand-primary font-bold text-lg border-b-2 border-brand-primary pb-1 hover:text-brand-dark hover:border-brand-dark transition-colors"
            >
              View All Flavors &rarr;
            </motion.button>
        </div>
      </div>
    </section>
  );
}
