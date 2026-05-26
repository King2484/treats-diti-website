"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart } from "lucide-react";

// Exact Cloud SVGs for Background
const BackgroundCloud = ({ className, width, height }: { className?: string, width: string, height: string }) => (
  <svg viewBox="0 0 100 50" fill="white" className={className} width={width} height={height}>
    <path d="M 25 50 A 20 20 0 0 1 25 10 A 25 25 0 0 1 70 5 A 20 20 0 0 1 80 40 A 15 15 0 0 1 75 50 Z" />
  </svg>
);

// The exact "FRESHLY BAKED EVERYDAY!" badge from the mockup (cloud shape)
const FreshlyBakedBadge = () => (
  <div className="absolute top-16 -right-8 z-40 animate-[pulse_4s_ease-in-out_infinite]">
    <div className="relative w-48 h-48 drop-shadow-xl">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Exact puffy cloud shape with stroke */}
        <path d="M 50 10 A 15 15 0 0 0 35 20 A 18 18 0 0 0 15 35 A 15 15 0 0 0 15 65 A 18 18 0 0 0 35 80 A 15 15 0 0 0 50 90 A 15 15 0 0 0 65 80 A 18 18 0 0 0 85 65 A 15 15 0 0 0 85 35 A 18 18 0 0 0 65 20 A 15 15 0 0 0 50 10 Z" 
              fill="white" 
              stroke="#EAB243" 
              strokeWidth="2.5" 
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 -mt-2">
        <span className="text-bubble font-black text-[#EAB243] text-[16px] leading-tight tracking-wide drop-shadow-sm">
          FRESHLY<br/>BAKED<br/>EVERYDAY!
        </span>
        <Heart className="w-4 h-4 text-[#EAB243] fill-[#EAB243] mt-1" />
      </div>
    </div>
  </div>
);

// Sparkle highlight for the glossy text effect
const TextSparkle = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 20 20" fill="white" className={`absolute w-6 h-6 z-50 ${className}`}>
    <path d="M10 0 C10 5 15 10 20 10 C15 10 10 15 10 20 C10 15 5 10 0 10 C5 10 10 5 10 0 Z" opacity="0.9" />
  </svg>
);

// Puffy Heart for L<Heart>VE
const PuffyHeart = () => (
  <svg viewBox="0 0 32 32" className="w-[1.2em] h-[1.2em] mx-1 -mb-1 inline-block drop-shadow-[5px_5px_0px_#FDE792]">
    <path d="M16 28.5 C16 28.5 4 20 4 11 C4 6 8 4 12 4 C14.5 4 16 6 16 6 C16 6 17.5 4 20 4 C24 4 28 6 28 11 C28 20 16 28.5 16 28.5 Z" 
          fill="white" 
          stroke="#EAB243" 
          strokeWidth="3" 
    />
  </svg>
);

export default function Hero() {
  return (
    <section className="relative w-full pt-40 pb-0 overflow-hidden bg-[#FFF7DB]">
      
      {/* Background Decorative Clouds */}
      <BackgroundCloud className="absolute top-32 right-[2%] opacity-90 hidden md:block" width="120px" height="80px" />
      <BackgroundCloud className="absolute top-52 left-[5%] opacity-90 hidden md:block" width="90px" height="60px" />

      {/* Massive Overlapping Bottom Clouds */}
      <div className="absolute -bottom-20 -left-10 w-full h-[250px] z-50 pointer-events-none flex justify-between">
        <BackgroundCloud className="opacity-100" width="400px" height="250px" />
        <BackgroundCloud className="opacity-100 ml-auto -mr-20" width="500px" height="300px" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-30 pb-32">
        <div className="flex flex-col md:flex-row items-center pt-8">
          
          {/* Left Text */}
          <div className="w-full md:w-1/2 z-30 mb-20 md:mb-0 text-center md:text-left flex flex-col items-center md:items-start relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="text-[5.5rem] md:text-[7rem] leading-[0.85] flex flex-col items-center md:items-start w-full relative"
            >
              <TextSparkle className="-top-4 left-10" />
              <TextSparkle className="top-16 right-20 w-4 h-4" />
              <TextSparkle className="top-40 left-[40%]" />
              
              <div className="flex w-full justify-center md:justify-start pl-4 md:pl-0">
                <span className="text-3d whitespace-nowrap">SWEET</span>
              </div>
              <div className="flex w-full justify-center md:justify-start -ml-2 md:-ml-6 mt-3">
                <span className="text-3d whitespace-nowrap">TREATS,</span>
              </div>
              <div className="flex w-full justify-center md:justify-start mt-3 pl-2 md:pl-0">
                <span className="text-3d whitespace-nowrap">MADE WITH</span>
              </div>
              <div className="flex w-full justify-center md:justify-start mt-3 items-center ml-2 md:ml-4">
                <span className="text-3d">L</span>
                <PuffyHeart />
                <span className="text-3d">VE</span>
              </div>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-12 text-[#7A5230] font-medium text-[21px] max-w-sm leading-relaxed"
            >
              Soft, delicious, and baked to perfection. Cookies that make every moment sweeter.
            </motion.p>
            
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-10 bg-[#EAB243] text-white font-black text-xl px-12 py-4 rounded-full flex items-center justify-center gap-3 hover:bg-[#D89B27] transition-all btn-shadow active:btn-shadow w-full md:w-auto"
            >
              SHOP NOW <Heart className="w-6 h-6 fill-white" />
            </motion.button>
          </div>

          {/* Right Image & Pedestal Group */}
          <div className="w-full md:w-1/2 relative flex justify-center items-end h-[600px] mt-10 md:mt-0 right-0 md:-right-10">
            
            {/* Massive Background Arch */}
            <div className="absolute bottom-10 w-[550px] h-[650px] bg-[#FDE792] rounded-t-[275px] -z-10" />
            
            {/* Scalloped Badge overlaying everything */}
            <FreshlyBakedBadge />

            {/* Pedestal & Cookies Group */}
            <div className="relative flex flex-col items-center justify-end w-full pb-0 z-20">
              
              {/* Cookies Image */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", bounce: 0.4, duration: 1 }}
                className="relative z-30 w-[450px] h-[450px] -mb-16 drop-shadow-[0_20px_20px_rgba(0,0,0,0.25)]"
              >
                <Image 
                  src="/images/cookie_stack_isolated.png" 
                  alt="Perfect stack of cookies" 
                  fill 
                  className="object-contain" 
                  priority
                />
              </motion.div>

              {/* Massive 3D Yellow Pedestal */}
              <div className="relative z-10 -mb-20">
                <svg width="600" height="200" viewBox="0 0 600 200">
                  {/* Cylinder Body */}
                  <path d="M 0 100 L 0 200 A 300 40 0 0 0 600 200 L 600 100 Z" fill="#FDE792" />
                  {/* Cylinder Top (Lighter) */}
                  <ellipse cx="300" cy="100" rx="300" ry="50" fill="#FEF08A" />
                </svg>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
