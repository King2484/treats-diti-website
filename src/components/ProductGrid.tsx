"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";

const cookies = [
  {
    id: 1,
    name: "CHOCOLATE CHIP",
    desc: "The classic favorite. Soft, chewy, and packed with chocolate chips.",
    price: "$3.00",
    image: "/images/cookie_stack_1779828483043.png",
  },
  {
    id: 2,
    name: "DOUBLE CHOCOLATE",
    desc: "Rich cocoa dough with chocolate chips. For the chocolate lover.",
    price: "$3.25",
    image: "/images/oreo_cookie_1779828733576.png",
  },
  {
    id: 3,
    name: "RED VELVET",
    desc: "Creamy white chocolate and soft red velvet dough. Perfectly rich.",
    price: "$3.25",
    image: "/images/red_velvet_cookie_1779828718660.png",
  },
  {
    id: 4,
    name: "BIRTHDAY CAKE",
    desc: "Vanilla cookie with rainbow sprinkles. A party in every bite!",
    price: "$3.00",
    image: "/images/birthday_cake.png",
  },
];

const LeafAccents = () => (
  <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block mx-4">
    <path d="M10,10 Q20,0 30,10 Q20,20 10,10 Z" fill="#EAB243" opacity="0.8" />
    <path d="M0,5 Q10,-5 20,5 Q10,15 0,5 Z" fill="#FDE792" />
    <path d="M20,15 Q30,5 40,15 Q30,25 20,15 Z" fill="#FDE792" />
  </svg>
);

const Sparkles = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="absolute top-4 left-4 z-10">
    <path d="M10,0 Q10,10 0,10 Q10,10 10,20 Q10,10 20,10 Q10,10 10,0 Z" fill="#EAB243" />
    <path d="M30,15 Q30,20 25,20 Q30,20 30,25 Q30,20 35,20 Q30,20 30,15 Z" fill="#FDE792" />
  </svg>
);

export default function ProductGrid() {
  return (
    <section className="py-24 bg-brand-light relative z-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl text-3d mb-2 flex items-center justify-center">
            <span className="transform -scale-x-100"><LeafAccents /></span>
            OUR COOKIES
            <LeafAccents />
          </h2>
          <p className="text-brand-dark font-medium mt-4">Made with the best ingredients for the best flavor.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cookies.map((cookie, idx) => (
            <motion.div
              key={cookie.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-6 border-2 border-brand-border card-shadow relative flex flex-col items-center text-center group"
            >
              <Sparkles />
              
              <div className="relative w-40 h-40 mb-6 mt-4 mix-blend-multiply group-hover:scale-110 transition-transform duration-300">
                <Image src={cookie.image} alt={cookie.name} fill className="object-contain" />
              </div>
              
              <h3 className="font-black text-brand-dark text-lg mb-2 leading-tight">{cookie.name}</h3>
              <p className="text-brand-dark/70 text-sm font-medium mb-4 flex-grow">{cookie.desc}</p>
              <p className="text-brand-primary font-black text-xl mb-6">{cookie.price}</p>
              
              <button className="w-full bg-brand-yellow text-white font-black py-3 px-4 rounded-full flex items-center justify-center gap-2 hover:bg-brand-primary transition-colors btn-shadow active:btn-shadow" style={{ WebkitTextStroke: "1px #EAB243", color: "#FFF" }}>
                ADD TO CART <ShoppingBag className="w-4 h-4 text-brand-primary stroke-[3px]" style={{ stroke: "#EAB243" }} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
