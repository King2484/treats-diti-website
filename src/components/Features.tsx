"use client";

import { motion } from "framer-motion";
import { Heart, Leaf, Truck, Smile } from "lucide-react";

const features = [
  {
    icon: <Heart className="w-8 h-8 text-brand-primary" strokeWidth={1.5} />,
    title: "MADE WITH LOVE",
    desc: "Every cookie is baked with care and love.",
  },
  {
    icon: <Leaf className="w-8 h-8 text-brand-primary" strokeWidth={1.5} />,
    title: "QUALITY INGREDIENTS",
    desc: "We use only the best ingredients.",
  },
  {
    icon: <Truck className="w-8 h-8 text-brand-primary" strokeWidth={1.5} />,
    title: "FAST DELIVERY",
    desc: "Fresh cookies delivered right to your door.",
  },
  {
    icon: <Smile className="w-8 h-8 text-brand-primary" strokeWidth={1.5} />,
    title: "HAPPINESS GUARANTEED",
    desc: "Not happy? We'll make it right.",
  },
];

export default function Features() {
  return (
    <section className="py-16 bg-brand-light">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          {features.map((feat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-start gap-4 flex-1"
            >
              <div className="shrink-0 mt-1">
                {feat.icon}
              </div>
              <div>
                <h3 className="font-black text-brand-dark text-sm tracking-widest mb-1">{feat.title}</h3>
                <p className="text-brand-dark/70 text-sm font-medium leading-tight">
                  {feat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
