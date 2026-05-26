"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart } from "lucide-react";

// Precise Cloud SVGs to match the design
const Cloud1 = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 60" fill="white" className={className}>
    <path d="M 25 60 A 20 20 0 0 1 25 20 A 25 25 0 0 1 70 15 A 20 20 0 0 1 80 50 A 15 15 0 0 1 75 60 Z" />
  </svg>
);

const Cloud2 = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 60" fill="white" className={className}>
    <path d="M 30 60 A 15 15 0 0 1 30 30 A 25 25 0 0 1 70 20 A 20 20 0 0 1 85 50 A 10 10 0 0 1 80 60 Z" />
  </svg>
);

// The exact "FRESHLY BAKED EVERYDAY!" badge from the mockup
const FreshlyBakedBadge = () => (
  <div className="absolute top-10 -right-4 md:-right-12 z-40 animate-[pulse_4s_ease-in-out_infinite]">
    <div className="relative w-40 h-40 drop-shadow-xl">
      <svg viewBox="0 0 140 140" fill="white" className="w-full h-full">
        {/* Scalloped edge to match the mockup perfectly */}
        <path d="M70,5 C85,5 95,15 95,15 C110,10 125,20 125,35 C125,35 135,45 130,60 C135,75 125,90 125,90 C125,105 110,115 95,110 C95,110 85,120 70,120 C55,120 45,110 45,110 C30,115 15,105 15,90 C15,90 5,75 10,60 C5,45 15,35 15,35 C15,20 30,10 45,15 C45,15 55,5 70,5 Z" 
              fill="white" 
              stroke="#EAB243" 
              strokeWidth="2" 
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 -mt-2">
        <span className="text-bubble font-black text-[#EAB243] text-[15px] leading-tight tracking-wide drop-shadow-sm">
          FRESHLY<br/>BAKED<br/>EVERYDAY!
        </span>
        <Heart className="w-4 h-4 text-[#EAB243] fill-[#EAB243] mt-1" />
      </div>
    </div>
  </div>
);

export default function Hero() {
  return (
    <section className="relative w-full pt-32 pb-20 overflow-visible bg-brand-light">
      {/* Background Decorative Clouds */}
      <Cloud1 className="absolute top-24 right-[5%] w-36 h-24 opacity-100 hidden md:block" />
      <Cloud2 className="absolute top-48 left-[2%] w-28 h-20 opacity-100 hidden md:block" />
      <Cloud1 className="absolute bottom-10 left-[8%] w-56 h-40 opacity-100 z-20" />
      <Cloud2 className="absolute -bottom-16 right-0 w-80 h-60 opacity-100 z-20" />

      <div className="container mx-auto px-6 lg:px-12 relative z-30">
        <div className="flex flex-col md:flex-row items-center pt-8">
          
          {/* Left Text */}
          <div className="w-full md:w-1/2 z-30 mb-20 md:mb-0 text-center md:text-left flex flex-col items-center md:items-start">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="text-[4.5rem] md:text-[6rem] leading-[0.9] flex flex-col items-center md:items-start w-full"
            >
              <div className="flex w-full justify-center md:justify-start">
                <span className="text-3d whitespace-nowrap">SWEET</span>
              </div>
              <div className="flex w-full justify-center md:justify-start ml-0 md:-ml-4 mt-2">
                <span className="text-3d whitespace-nowrap">TREATS,</span>
              </div>
              <div className="flex w-full justify-center md:justify-start mt-2">
                <span className="text-3d whitespace-nowrap">MADE WITH</span>
              </div>
              <div className="flex w-full justify-center md:justify-start mt-2 items-center">
                <span className="text-3d">L</span>
                <Heart className="w-[1em] h-[1em] mx-1 mb-2 text-white fill-white stroke-[2px] stroke-brand-primary drop-shadow-[3px_3px_0px_var(--color-brand-yellow)]" />
                <span className="text-3d">VE</span>
              </div>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-10 text-brand-dark font-medium text-[19px] max-w-sm leading-relaxed"
            >
              Soft, delicious, and baked to perfection. Cookies that make every moment sweeter.
            </motion.p>
            
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 bg-[#EAB243] text-white font-black uppercase text-lg tracking-wider px-10 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-[#D89B27] transition-all btn-shadow active:btn-shadow w-full md:w-auto"
            >
              SHOP NOW <Heart className="w-5 h-5 fill-white" />
            </motion.button>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 relative flex justify-center items-end h-[500px] mt-10 md:mt-0">
            {/* The exact background arch */}
            <div className="absolute top-0 md:-top-10 w-[450px] h-[550px] bg-[#FDE792] rounded-t-[225px] -z-10" />
            
            {/* Scalloped Badge overlaying the cookies and arch */}
            <FreshlyBakedBadge />

            {/* Pedestal & Cookies Group */}
            <div className="relative flex flex-col items-center justify-end w-full pb-10">
              
              {/* Cookies Image */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", bounce: 0.4, duration: 1 }}
                className="relative z-20 w-[350px] h-[350px] -mb-16 mix-blend-multiply"
              >
                <Image 
                  src="/images/cookie_stack_isolated.png" 
                  alt="Perfect stack of cookies" 
                  fill 
                  className="object-contain drop-shadow-2xl" 
                  priority
                />
              </motion.div>

              {/* 3D Yellow Pedestal */}
              <div className="relative z-10">
                <svg width="450" height="150" viewBox="0 0 450 150">
                  {/* Cylinder Body */}
                  <path d="M 0 75 L 0 120 A 225 30 0 0 0 450 120 L 450 75 Z" fill="#EAB243" />
                  {/* Cylinder Top */}
                  <ellipse cx="225" cy="75" rx="225" ry="40" fill="#FDE792" />
                </svg>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
