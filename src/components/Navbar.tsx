"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { User, ShoppingBag } from "lucide-react";

// The sparkles next to "Diti"
const LeftSparkles = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#EAB243" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
    <path d="M12 2 L8 10" />
    <path d="M4 12 L10 14" />
    <path d="M6 20 L11 16" />
  </svg>
);

const RightSparkles = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#EAB243" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
    <path d="M12 2 L16 10" />
    <path d="M20 12 L14 14" />
    <path d="M18 20 L13 16" />
  </svg>
);

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="absolute top-0 w-full z-50 py-6"
    >
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        
        {/* Logo matching exact mockup */}
        <Link href="/" className="flex flex-col items-center leading-none mt-2 relative hover:scale-105 transition-transform group">
          <span className="text-[2.5rem] md:text-[3.2rem] text-3d tracking-wider drop-shadow-md">TREATS</span>
          <div className="flex items-center -mt-2">
            <LeftSparkles />
            <span className="text-[2rem] md:text-[2.5rem] text-3d tracking-wider">Diti</span>
            <RightSparkles />
          </div>
        </Link>

        {/* Centered Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <Link href="/" className="text-[#7A5230] font-black text-[15px] hover:text-[#EAB243] transition-colors">Home</Link>
          <Link href="/shop" className="text-[#7A5230] font-black text-[15px] hover:text-[#EAB243] transition-colors">Shop</Link>
          <Link href="/about" className="text-[#7A5230] font-black text-[15px] hover:text-[#EAB243] transition-colors">About</Link>
          <Link href="/faq" className="text-[#7A5230] font-black text-[15px] hover:text-[#EAB243] transition-colors">FAQ</Link>
          <Link href="/contact" className="text-[#7A5230] font-black text-[15px] hover:text-[#EAB243] transition-colors">Contact</Link>
        </div>

        {/* Right Icons with exact cart badge */}
        <div className="flex items-center gap-6">
          <button className="text-[#7A5230] hover:text-[#EAB243] transition-colors">
            <User className="w-6 h-6" strokeWidth={2.5} />
          </button>
          <button className="text-[#7A5230] hover:text-[#EAB243] transition-colors relative group">
            <ShoppingBag className="w-6 h-6" strokeWidth={2.5} />
            <span className="absolute -top-1 -right-2 bg-[#EAB243] text-white text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center border border-white group-hover:scale-110 transition-transform">
              2
            </span>
          </button>
        </div>

      </div>
    </motion.nav>
  );
}
