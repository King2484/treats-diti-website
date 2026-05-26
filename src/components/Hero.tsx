"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background blobs/clouds */}
      <motion.div
        animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 -left-10 w-64 h-64 bg-brand-yellow rounded-full mix-blend-multiply filter blur-2xl opacity-70"
      />
      <motion.div
        animate={{ y: [0, 20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-10 right-10 w-96 h-96 bg-[#FFCBA4] rounded-full mix-blend-multiply filter blur-3xl opacity-60"
      />

      <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* Text Content */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left z-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col relative"
          >
            {/* Cloud decorative element behind text */}
            <div className="absolute -top-12 -left-10 w-32 h-20 bg-white rounded-full blur-xl opacity-80" />
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-bubble text-white tracking-wide leading-none z-10 drop-shadow-lg">
              SWEET<br />TREATS,<br />
              <span className="text-brand-light">MADE WITH</span><br />
              L<span className="text-brand-primary drop-shadow-[0_0_10px_rgba(243,179,61,0.8)]">♥</span>VE
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-6 text-xl md:text-2xl text-brand-dark/80 font-medium max-w-lg"
          >
            Soft, delicious, and baked to perfection. Cookies that make every moment sweeter.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(243, 179, 61, 0.4), 0 10px 10px -5px rgba(243, 179, 61, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 bg-brand-primary text-white font-bold text-xl py-4 px-10 rounded-full shadow-[0_10px_20px_rgba(243,179,61,0.3)] transition-all flex items-center gap-3"
          >
            SHOP NOW <span className="text-2xl">♥</span>
          </motion.button>
        </div>

        {/* Hero Image */}
        <div className="w-full md:w-1/2 mt-16 md:mt-0 relative flex justify-center items-center">
           {/* Pedestal Graphic */}
          <motion.div
             initial={{ opacity: 0, scale: 0.5 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1, ease: "easeOut" }}
             className="absolute bottom-0 w-[120%] h-48 bg-brand-yellow rounded-[100%] shadow-inner -z-10"
             style={{ transform: "perspective(500px) rotateX(60deg)" }}
          />

          {/* Floating Sticker */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotate: 10 }}
            animate={{ opacity: 1, x: 0, rotate: 10 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute -top-10 -right-4 md:top-0 md:right-10 bg-white text-brand-primary font-bold text-lg px-6 py-8 rounded-full shadow-lg border-4 border-dashed border-brand-yellow z-30 flex flex-col items-center justify-center transform rotate-12"
          >
             <span className="text-bubble text-xl text-brand-dark">FRESHLY</span>
             <span className="text-bubble text-xl text-brand-dark">BAKED</span>
             <span className="text-bubble text-xl text-brand-dark">EVERYDAY!</span>
             <span className="mt-1 text-2xl">♥</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative w-full max-w-lg aspect-square"
          >
            <motion.div
              animate={{ y: [-15, 15, -15] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-full relative drop-shadow-2xl mix-blend-multiply"
            >
              <Image
                src="/images/cookie_stack_1779828483043.png"
                alt="Stack of soft-baked chocolate chip cookies"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
