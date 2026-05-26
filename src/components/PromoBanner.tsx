"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function PromoBanner() {
  return (
    <section className="py-20 bg-brand-light relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-brand-yellow rounded-[40px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between relative overflow-hidden"
        >
          {/* Background Cloud Accents inside the banner */}
          <div className="absolute -bottom-10 -left-10 w-48 h-32 bg-white rounded-full opacity-40 blur-xl" />
          <div className="absolute top-10 right-20 w-32 h-20 bg-white rounded-full opacity-50 blur-xl" />

          {/* Left Side: Image */}
          <div className="w-full md:w-1/2 flex justify-center relative z-10 mb-10 md:mb-0">
             <motion.div
               animate={{ y: [-10, 10, -10] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
               className="relative w-72 h-72 lg:w-96 lg:h-96 drop-shadow-2xl mix-blend-multiply"
             >
                <Image
                  src="/images/cookie_box_1779828457569.png"
                  alt="Treats Diti Cookie Box"
                  fill
                  className="object-contain"
                />
             </motion.div>
          </div>

          {/* Right Side: Text */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left z-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-bubble text-white drop-shadow-md mb-6" style={{ WebkitTextStroke: "1px #F3B33D" }}>
              COOKIE BOXES
            </h2>
            <p className="text-brand-dark/80 font-medium text-lg max-w-md mb-8">
              Perfect for gifting (or keeping!). Choose your box size and make someone's day sweeter.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand-primary text-white font-bold text-lg py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
            >
              SHOP BOXES <span>♥</span>
            </motion.button>
          </div>

          {/* Floating Sticker */}
          <motion.div
             initial={{ scale: 0, rotate: -45 }}
             whileInView={{ scale: 1, rotate: 12 }}
             viewport={{ once: true }}
             transition={{ type: "spring", delay: 0.4 }}
             className="hidden lg:flex absolute top-12 right-12 bg-white rounded-[100%] px-6 py-8 shadow-lg items-center justify-center border-4 border-brand-light flex-col"
          >
              <span className="text-bubble text-brand-dark font-bold text-lg leading-tight">PERFECT</span>
              <span className="text-bubble text-brand-dark font-bold text-lg leading-tight">FOR GIFTS!</span>
              <span className="text-brand-primary mt-1">♥</span>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
