"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { User, ShoppingBag } from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 py-6"
    >
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col items-center leading-none z-50 group">
          <span className="text-4xl text-3d tracking-wide transform -rotate-2 group-hover:rotate-0 transition-transform">TREATS</span>
          <span className="text-3xl text-3d tracking-wide ml-4 transform rotate-2 group-hover:rotate-0 transition-transform text-brand-primary" style={{WebkitTextStroke: "1px white", color: "#FDE792", textShadow: "none"}}>Diti</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {["Home", "Shop", "About", "FAQ", "Contact"].map((item) => (
            <Link 
              key={item} 
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="text-brand-dark font-black text-sm uppercase tracking-wide hover:text-brand-primary transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-6 z-50 text-brand-dark">
          <button className="hover:text-brand-primary transition-colors">
            <User className="w-6 h-6 stroke-[2.5]" />
          </button>
          <button className="relative hover:text-brand-primary transition-colors">
            <ShoppingBag className="w-6 h-6 stroke-[2.5]" />
            <span className="absolute -top-2 -right-2 bg-brand-primary text-white text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center border-2 border-brand-light">0</span>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
