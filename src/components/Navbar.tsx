"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-[20px] md:px-[60px] py-[22px] relative z-50">
      
      {/* LEFT: Logo */}
      <div className="flex items-center">
        <span className="text-[#B8760A] text-[18px] mr-1">✦</span>
        <Link href="/" className="flex flex-col items-center leading-[0.8] font-[family-name:var(--font-fredoka)] text-[#B8760A]">
          <span className="text-[32px] tracking-wide">TREATS</span>
          <span className="text-[28px] tracking-wide">Diti</span>
        </Link>
        <span className="text-[#B8760A] text-[18px] ml-1">✦</span>
      </div>

      {/* CENTER: Navigation Links */}
      <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 gap-8 font-[family-name:var(--font-nunito)] font-bold text-[#7A5C10] text-[16px]">
        <Link href="/" className="text-[#C8860A]">Home</Link>
        <Link href="/shop" className="hover:text-[#C8860A] transition-colors">Shop</Link>
        <Link href="/about" className="hover:text-[#C8860A] transition-colors">About</Link>
        <Link href="/faq" className="hover:text-[#C8860A] transition-colors">FAQ</Link>
        <Link href="/contact" className="hover:text-[#C8860A] transition-colors">Contact</Link>
      </div>

      {/* RIGHT: Icons */}
      <div className="flex items-center gap-6">
        <button aria-label="User account" className="text-[#5A4010] hover:text-[#C8860A] transition-colors">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </button>
        
        <button aria-label="Shopping Cart" className="relative text-[#5A4010] hover:text-[#C8860A] transition-colors">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
            <path d="M3 6h18" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
          <span className="absolute -top-1.5 -right-2 bg-[#C8860A] text-white text-[10px] font-black w-[18px] h-[18px] rounded-full flex items-center justify-center font-[family-name:var(--font-nunito)]">
            2
          </span>
        </button>
      </div>

    </nav>
  );
}
