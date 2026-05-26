"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import CloudShape from "@/components/ui/CloudShape";

export default function CookieBoxesBanner() {
  return (
    <section className="w-full px-[16px] md:px-[64px] py-[40px] bg-[#FFF5C4]">
      
      <div className="bg-[#F2C832] rounded-[24px] px-[20px] md:px-[56px] py-[40px] flex flex-col md:flex-row items-center justify-between relative shadow-sm">
        
        {/* LEFT (30%) - Cookie Box */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="w-full md:w-[30%] relative flex justify-center mt-[-60px] md:mt-[-80px]"
        >
          {/* Cloud Decorations Behind Box */}
          <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[300px] h-[200px] pointer-events-none z-0 opacity-80">
            <CloudShape className="w-full h-full" />
          </div>

          <div className="relative w-[280px] h-[280px] z-10 filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.1)]">
            <Image 
              src="/images/cookie-box.png" 
              alt="Cookie Box" 
              fill 
              className="object-contain"
            />
          </div>
        </motion.div>

        {/* CENTER (40%) - Text Content */}
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="w-full md:w-[40%] flex flex-col items-center md:items-start text-center md:text-left mt-[32px] md:mt-0"
        >
          <h2 className="font-[family-name:var(--font-fredoka)] text-[40px] md:text-[52px] text-white uppercase m-0 leading-tight drop-shadow-[3px_4px_0_rgba(160,100,0,0.2)]">
            COOKIE BOXES
          </h2>
          
          <p className="font-[family-name:var(--font-nunito)] font-semibold text-[16px] text-white max-w-[340px] mt-[12px]">
            Perfect for gifting (or keeping!). Choose your box size and make someone's day sweeter.
          </p>

          <button className="mt-[24px] bg-[#C8860A] hover:bg-[#A86E08] text-white font-[family-name:var(--font-nunito)] font-extrabold uppercase tracking-widest rounded-full px-[32px] py-[12px] transition-colors flex items-center shadow-md">
            SHOP BOXES 
            <svg viewBox="0 0 32 32" className="w-[14px] h-[14px] ml-[8px] inline-block">
              <path d="M16 28.5 C16 28.5 4 20 4 11 C4 6 8 4 12 4 C14.5 4 16 6 16 6 C16 6 17.5 4 20 4 C24 4 28 6 28 11 C28 20 16 28.5 16 28.5 Z" fill="white" />
            </svg>
          </button>
        </motion.div>

        {/* RIGHT (25%) - Cloud Badge */}
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="w-full md:w-[25%] flex justify-center mt-[32px] md:mt-0"
        >
          <div className="relative flex items-center justify-center w-[160px] h-[160px]">
            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full drop-shadow-sm" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="50" cy="50" rx="45" ry="35" fill="white" />
              <ellipse cx="30" cy="30" rx="25" ry="25" fill="white" />
              <ellipse cx="70" cy="30" rx="25" ry="25" fill="white" />
              <ellipse cx="25" cy="65" rx="20" ry="20" fill="white" />
              <ellipse cx="75" cy="65" rx="20" ry="20" fill="white" />
              <ellipse cx="50" cy="80" rx="30" ry="20" fill="white" />
            </svg>
            <div className="relative z-10 flex flex-col items-center justify-center text-center">
              <span className="font-[family-name:var(--font-fredoka)] text-[#C8860A] uppercase leading-[1.2] text-[18px]">
                PERFECT<br/>FOR GIFTS!
              </span>
              <span className="text-[#C8860A] text-[12px] mt-2">♥</span>
            </div>
          </div>
        </motion.div>

      </div>

    </section>
  );
}
