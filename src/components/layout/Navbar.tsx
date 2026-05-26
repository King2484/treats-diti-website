"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { cartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`w-full flex items-center justify-between px-[56px] py-[20px] sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#FFF5C4]/90 backdrop-blur-sm" : "bg-[#FFF5C4]"}`}>
      
      {/* LEFT: Logo */}
      <div className="flex-shrink-0">
        <Link href="/">
          <Image 
            src="/images/logo.png" 
            alt="Treats Diti" 
            width={120} 
            height={60} 
            className="object-contain"
          />
        </Link>
      </div>

      {/* CENTER: Navigation Links */}
      <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 gap-[44px] font-[family-name:var(--font-nunito)] font-bold text-[#7A5C10] text-[16px]">
        <Link href="/" className="text-[#C8860A]">Home</Link>
        <Link href="/shop" className="hover:text-[#C8860A] transition-colors">Shop</Link>
        <Link href="/about" className="hover:text-[#C8860A] transition-colors">About</Link>
        <Link href="/faq" className="hover:text-[#C8860A] transition-colors">FAQ</Link>
        <Link href="/contact" className="hover:text-[#C8860A] transition-colors">Contact</Link>
      </div>

      {/* RIGHT: Icons */}
      <div className="flex items-center gap-[16px]">
        <button aria-label="User account" className="text-[#7A5C10] hover:text-[#C8860A] transition-colors">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </button>
        
        <button aria-label="Shopping Cart" className="relative text-[#7A5C10] hover:text-[#C8860A] transition-colors">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
            <path d="M3 6h18" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
          <span className="absolute -top-[6px] -right-[6px] bg-[#C8860A] text-white text-[9px] font-extrabold w-[16px] h-[16px] rounded-full flex items-center justify-center font-[family-name:var(--font-nunito)]">
            {cartCount}
          </span>
        </button>
      </div>

    </nav>
  );
}
