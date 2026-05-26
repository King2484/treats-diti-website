"use client";

import { motion } from "framer-motion";
import { Heart, Leaf, Truck, Smile } from "lucide-react";

const features = [
  {
    icon: <Heart className="w-8 h-8 text-brand-primary" />,
    title: "MADE WITH LOVE",
    description: "Every cookie is baked with care and love.",
  },
  {
    icon: <Leaf className="w-8 h-8 text-brand-primary" />,
    title: "QUALITY INGREDIENTS",
    description: "We use only the best ingredients.",
  },
  {
    icon: <Truck className="w-8 h-8 text-brand-primary" />,
    title: "FAST DELIVERY",
    description: "Fresh cookies delivered right to your door.",
  },
  {
    icon: <Smile className="w-8 h-8 text-brand-primary" />,
    title: "HAPPINESS GUARANTEED",
    description: "Not happy? We'll make it right.",
  },
];

export default function Features() {
  return (
    <section className="py-16 bg-brand-light">
      <div className="container mx-auto px-6 lg:px-12 border-t border-b border-brand-yellow/50 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="flex flex-col md:flex-row items-center md:items-start gap-4 text-center md:text-left group"
            >
              <div className="bg-brand-yellow/30 p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <div>
                <h4 className="font-black text-brand-dark mb-1">{feature.title}</h4>
                <p className="text-sm text-brand-dark/70">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
