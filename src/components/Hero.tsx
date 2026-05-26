"use client";

import Image from "next/image";
import CloudShape from "./CloudShape";
import FreshlyBadge from "./FreshlyBadge";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[calc(100vh-100px)] flex flex-col md:flex-row items-end justify-between px-[20px] md:px-[60px] pb-0 md:pb-0 overflow-hidden">
      
      {/* CLOUD DECORATIONS (absolute positioned, pointer-events none) */}
      {/* Bottom-left: large white cloud SVG, opacity 0.85 */}
      <div className="absolute -bottom-10 -left-20 w-[400px] h-[200px] opacity-85 pointer-events-none z-10">
        <CloudShape className="w-full h-full" />
      </div>
      
      {/* Mid-left: medium cloud SVG, opacity 0.7 */}
      <div className="absolute top-[30%] -left-10 w-[200px] h-[100px] opacity-70 pointer-events-none z-0">
        <CloudShape className="w-full h-full" />
      </div>

      {/* Top-right (near center): small cloud, opacity 0.7 */}
      <div className="absolute top-[15%] right-[40%] w-[120px] h-[60px] opacity-70 pointer-events-none z-0">
        <CloudShape className="w-full h-full" />
      </div>

      {/* LEFT COLUMN (52% width) */}
      <div className="w-full md:w-[52%] z-20 pb-[80px] md:pb-[120px] pt-[40px] md:pt-0">
        
        <h1 className="hero-title text-[64px] md:text-[108px] leading-[0.95] uppercase m-0 p-0 flex flex-col">
          <span>SWEET</span>
          <span>TREATS,</span>
          <span>MADE WITH</span>
          <span className="flex items-center">
            L
            <svg viewBox="0 0 32 32" className="w-[0.8em] h-[0.8em] mx-1 inline-block drop-shadow-sm">
              <path d="M16 28.5 C16 28.5 4 20 4 11 C4 6 8 4 12 4 C14.5 4 16 6 16 6 C16 6 17.5 4 20 4 C24 4 28 6 28 11 C28 20 16 28.5 16 28.5 Z" 
                    fill="white" 
                    stroke="#B8720A" 
                    strokeWidth="3" 
              />
            </svg>
            VE
          </span>
        </h1>
        
        <p className="mt-[30px] font-[family-name:var(--font-nunito)] font-semibold text-[18px] text-[#5A4010] max-w-[340px] leading-[1.4]">
          Soft, delicious, and baked to perfection. Cookies that make every moment sweeter.
        </p>
        
        <button className="mt-[40px] bg-[#C8860A] text-white font-[family-name:var(--font-nunito)] font-extrabold uppercase tracking-[2px] rounded-[50px] px-[44px] py-[16px] hover:bg-[#B8720A] transition-all hover:-translate-y-[2px] shadow-lg">
          SHOP NOW ♥
        </button>
      </div>

      {/* RIGHT COLUMN (46% width, height 540px) */}
      <div className="w-full md:w-[46%] h-[540px] relative flex justify-center items-end z-20 mt-[40px] md:mt-0">
        
        {/* Yellow arch anchored to bottom */}
        <div className="relative bg-[#F0D050] w-[340px] h-[500px] rounded-t-[170px] rounded-b-none flex items-center justify-center pt-8">
          
          {/* Inside the arch: white rounded rectangle frame */}
          <div className="relative bg-white w-[280px] h-[370px] rounded-[30px] overflow-hidden shadow-sm mt-[-40px]">
            <Image 
              src="/images/cookies.png" 
              alt="cookies" 
              fill 
              className="object-cover"
              priority
            />
          </div>

          {/* Freshly Baked Everyday! badge */}
          <div className="absolute top-[-20px] right-[-40px] w-[140px] h-[140px]">
            <FreshlyBadge className="w-full h-full" />
          </div>

        </div>

      </div>

    </section>
  );
}
