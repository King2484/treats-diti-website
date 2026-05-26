"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShoppingBag, Search, Filter } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const allCookies = [
  { id: 1, name: "CHOCOLATE CHIP", category: "Classic", price: "$3.00", image: "/images/cookie_stack_1779828483043.png" },
  { id: 2, name: "DOUBLE CHOCOLATE", category: "Chocolate", price: "$3.25", image: "/images/oreo_cookie_1779828733576.png" },
  { id: 3, name: "WHITE CHOC MACADAMIA", category: "Nutty", price: "$3.25", image: "/images/cookie_stack_1779828483043.png" },
  { id: 4, name: "RED VELVET", category: "Stuffed", price: "$3.50", image: "/images/red_velvet_cookie_1779828718660.png" },
  { id: 5, name: "OREO STUFFED", category: "Stuffed", price: "$3.50", image: "/images/oreo_cookie_1779828733576.png" },
  { id: 6, name: "PISTACHIO", category: "Nutty", price: "$3.75", image: "/images/cookie_stack_1779828483043.png" },
];

const categories = ["All", "Classic", "Chocolate", "Stuffed", "Nutty"];

export default function Shop() {
  return (
    <main className="flex min-h-screen flex-col bg-brand-light pt-24">
      <Navbar />
      
      <div className="container mx-auto px-6 lg:px-12 py-12 flex-grow">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-black text-bubble text-white drop-shadow-[0_2px_2px_rgba(92,64,51,0.2)] mb-12 text-center"
          style={{ WebkitTextStroke: "2px #F3B33D" }}
        >
          SHOP ALL TREATS
        </motion.h1>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar / Filters */}
          <div className="w-full lg:w-1/4">
            <div className="bg-white p-6 rounded-3xl border border-brand-yellow/30 premium-shadow sticky top-32">
              <div className="flex items-center gap-2 font-bold text-brand-dark mb-6 text-xl">
                <Filter className="w-5 h-5" /> Filters
              </div>
              
              <div className="relative mb-6">
                <input 
                  type="text" 
                  placeholder="Search flavors..." 
                  className="w-full bg-brand-light rounded-full py-3 px-4 pl-10 outline-none focus:ring-2 focus:ring-brand-primary border-none"
                />
                <Search className="absolute left-3 top-3.5 w-5 h-5 text-brand-dark/50" />
              </div>

              <div className="space-y-3">
                <h3 className="font-bold text-brand-dark mb-3 uppercase text-sm tracking-wider">Categories</h3>
                {categories.map(cat => (
                  <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                    <div className="w-5 h-5 rounded-md border-2 border-brand-yellow flex items-center justify-center group-hover:border-brand-primary transition-colors">
                      {cat === "All" && <div className="w-3 h-3 bg-brand-primary rounded-sm" />}
                    </div>
                    <span className="font-medium text-brand-dark/80 group-hover:text-brand-primary transition-colors">{cat}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="w-full lg:w-3/4">
            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {allCookies.map((cookie) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -5 }}
                  key={cookie.id}
                  className="bg-white rounded-[32px] p-6 pb-8 border border-brand-yellow/30 premium-shadow flex flex-col items-center text-center group"
                >
                  <div className="relative w-40 h-40 mb-4 drop-shadow-xl group-hover:scale-110 transition-transform duration-500 mix-blend-multiply" style={{ filter: "contrast(1.1)" }}>
                    <Image src={cookie.image} alt={cookie.name} fill className="object-contain" />
                  </div>
                  <h3 className="font-black text-lg text-brand-dark mb-1 uppercase tracking-wide">{cookie.name}</h3>
                  <p className="text-brand-primary font-black text-xl mb-4">{cookie.price}</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-brand-yellow hover:bg-brand-primary hover:text-white transition-colors text-brand-dark font-bold py-3 px-6 rounded-full flex items-center justify-center gap-2 mt-auto"
                  >
                    ADD <ShoppingBag className="w-4 h-4" />
                  </motion.button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
