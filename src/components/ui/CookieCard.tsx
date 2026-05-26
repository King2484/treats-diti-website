"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

interface CookieCardProps {
  image: string;
  name: string;
  description: string;
  price: string;
  index: number;
}

export default function CookieCard({ image, name, description, price, index }: CookieCardProps) {
  const { addToCart } = useCart();

  return (
    <motion.div 
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -6, boxShadow: "0 8px 24px rgba(180,130,0,0.15)" }}
      className="bg-white rounded-2xl border border-[#F0E0A0] p-[20px] flex flex-col h-full transition-shadow duration-300"
      style={{ boxShadow: "0 2px 12px rgba(180,130,0,0.08)" }}
    >
      <div className="relative w-[180px] h-[180px] mx-auto mb-[16px]">
        <span className="absolute -top-2 -left-2 text-[#C8860A] text-[18px]">✦</span>
        <span className="absolute -top-2 -right-2 text-[#C8860A] text-[18px]">✦</span>
        <span className="absolute -bottom-2 -left-2 text-[#C8860A] text-[18px]">✦</span>
        <span className="absolute -bottom-2 -right-2 text-[#C8860A] text-[18px]">✦</span>
        
        <div className="w-full h-full rounded-full overflow-hidden border border-[#F0E0A0]/30 relative bg-[#FFF5C4]/20">
          <Image src={image} alt={name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 180px" />
        </div>
      </div>

      <h3 className="font-[family-name:var(--font-fredoka)] text-[20px] uppercase text-[#5A4010] text-center mt-[16px]">
        {name}
      </h3>
      
      <p className="font-[family-name:var(--font-nunito)] font-normal text-[13px] text-[#7A5C10] text-center mt-[4px] min-h-[60px]">
        {description}
      </p>
      
      <p className="font-[family-name:var(--font-fredoka)] text-[22px] text-[#C8860A] text-center mt-[12px] mb-[16px]">
        {price}
      </p>

      <div className="mt-auto">
        <button 
          onClick={addToCart}
          className="w-full bg-[#C8860A] hover:bg-[#A86E08] transition-colors text-white font-[family-name:var(--font-nunito)] font-bold rounded-full py-[10px] flex justify-center items-center gap-[8px]"
        >
          ADD TO CART
          <svg width="16" height="16" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>
        </button>
      </div>
    </motion.div>
  );
}
