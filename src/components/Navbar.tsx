"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, User, Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { title: "Home", href: "/" },
  { title: "Shop", href: "#shop" },
  { title: "About", href: "#about" },
  { title: "FAQ", href: "#faq" },
  { title: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: "spring", bounce: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <motion.div
            whileHover={{ scale: 1.05, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
            className="text-3xl font-black text-bubble text-white drop-shadow-md"
          >
            TREATS
            <br />
            <span className="text-xl">Diti</span>
          </motion.div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-bold text-brand-dark">
          {navLinks.map((link) => (
            <Link key={link.title} href={link.href} className="relative group">
              <span className="hover:text-brand-primary transition-colors">
                {link.title}
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary transition-all group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Icons */}
        <div className="hidden md:flex items-center gap-6 text-brand-dark">
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <User className="w-6 h-6 hover:text-brand-primary transition-colors" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="relative"
          >
            <ShoppingBag className="w-6 h-6 hover:text-brand-primary transition-colors" />
            <span className="absolute -top-2 -right-2 bg-brand-primary text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
              0
            </span>
          </motion.button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-brand-dark"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-light/95 backdrop-blur-md border-t border-brand-yellow/30 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 space-y-4 font-bold text-brand-dark text-lg">
              {navLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-brand-primary"
                >
                  {link.title}
                </Link>
              ))}
              <div className="flex items-center gap-6 pt-4 border-t border-brand-yellow/30">
                <button className="flex items-center gap-2 hover:text-brand-primary">
                  <User className="w-6 h-6" /> Account
                </button>
                <button className="flex items-center gap-2 hover:text-brand-primary">
                  <div className="relative">
                    <ShoppingBag className="w-6 h-6" />
                    <span className="absolute -top-2 -right-2 bg-brand-primary text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                      0
                    </span>
                  </div>
                  Cart
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
