"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CloudShape from "@/components/ui/CloudShape";
import FreshlyBadge from "@/components/ui/FreshlyBadge";

export default function Hero() {
  const lineVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section className="relative w-full min-h-[calc(100vh-100px)] flex flex-col md:flex-row items-center justify-between px-[16px] md:px-[64px] pb-0 overflow-hidden bg-[#FFF5C4]">
      
      {/* Cloud Decorations */}
      <div className="absolute -bottom-[20px] -left-[40px] w-[220px] pointer-events-none z-10">
        <CloudShape className="w-full h-auto" />
      </div>
      
      <div className="absolute top-[42%] -left-[20px] w-[130px] pointer-events-none z-0">
        <CloudShape className="w-full h-auto" />
      </div>

      <div className="absolute top-[60px] right-[38%] w-[110px] pointer-events-none z-0">
        <CloudShape className="w-full h-auto" />
      </div>

      <div className="absolute top-[45%] right-[30px] w-[80px] pointer-events-none z-0">
        <CloudShape className="w-full h-auto" />
      </div>

      {/* LEFT COLUMN (52%) */}
      <div className="w-full md:w-[52%] z-20 pt-[40px] md:pt-0">
        <motion.h1 
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.1 }}
          className="bubble-text text-[60px] md:text-[110px] leading-[0.92] uppercase m-0 p-0 flex flex-col drop-shadow-[4px_5px_0_rgba(160,100,0,0.3)]"
        >
          <motion.span variants={lineVariants}>SWEET</motion.span>
          <motion.span variants={lineVariants}>TREATS,</motion.span>
          <motion.span variants={lineVariants}>MADE WITH</motion.span>
          <motion.span variants={lineVariants} className="flex items-center">
            L
            <svg viewBox="0 0 32 32" className="w-[0.8em] h-[0.8em] mx-1 inline-block drop-shadow-sm">
              <path d="M16 28.5 C16 28.5 4 20 4 11 C4 6 8 4 12 4 C14.5 4 16 6 16 6 C16 6 17.5 4 20 4 C24 4 28 6 28 11 C28 20 16 28.5 16 28.5 Z" 
                    fill="white" 
                    stroke="#B8720A" 
                    strokeWidth="3" 
              />
            </svg>
            VE
          </motion.span>
        </motion.h1>
        
        <p className="mt-[24px] font-[family-name:var(--font-nunito)] font-semibold text-[17px] text-[#5A4010] max-w-[300px] leading-relaxed">
          Soft, delicious, and baked to perfection. Cookies that make every moment sweeter.
        </p>
        
        <motion.button 
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="mt-[32px] bg-[#C8860A] text-white font-[family-name:var(--font-nunito)] font-extrabold uppercase tracking-widest rounded-full px-[40px] py-[16px] transition-colors flex items-center justify-center shadow-lg"
        >
          SHOP NOW 
          <svg viewBox="0 0 32 32" className="w-[16px] h-[16px] ml-[8px] inline-block">
            <path d="M16 28.5 C16 28.5 4 20 4 11 C4 6 8 4 12 4 C14.5 4 16 6 16 6 C16 6 17.5 4 20 4 C24 4 28 6 28 11 C28 20 16 28.5 16 28.5 Z" fill="white" />
          </svg>
        </motion.button>
      </div>

      {/* RIGHT COLUMN (48%) */}
      <div className="w-full md:w-[48%] h-[580px] relative flex justify-center items-end z-20 mt-[40px] md:mt-0">
        
        <div className="absolute bottom-0 bg-[#F0D050] w-[340px] h-[500px] rounded-t-[170px] rounded-b-none flex items-center justify-center">
          
          {/* Cookie Image sitting in/on the arch */}
          <div className="absolute bottom-[20px] w-[320px] h-[400px]">
            <Image 
              src="/images/cookies.png" 
              alt="Cookies" 
              fill 
              className="object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
              priority
            />
          </div>

          <div className="absolute top-[80px] right-[-20px] w-[130px] h-[110px] z-10">
            <FreshlyBadge className="w-full h-full" />
          </div>

        </div>

      </div>

    </section>
  );
}
