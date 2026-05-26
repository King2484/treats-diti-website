"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "MADE WITH LOVE",
    desc: "Every cookie is baked with care and love.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#C8860A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    )
  },
  {
    title: "QUALITY INGREDIENTS",
    desc: "We use only the best ingredients.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#C8860A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </svg>
    )
  },
  {
    title: "FAST DELIVERY",
    desc: "Fresh cookies delivered right to your door.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#C8860A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
        <path d="M15 18H9" />
        <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
        <circle cx="17" cy="18" r="2" />
        <circle cx="7" cy="18" r="2" />
      </svg>
    )
  },
  {
    title: "HAPPINESS GUARANTEED",
    desc: "Not happy? We'll make it right.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#C8860A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    )
  }
];

export default function FeaturesStrip() {
  return (
    <section className="w-full bg-[#FFF5C4] border-t border-[#F0E0A0] py-[48px] px-[16px] md:px-[64px]">
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[32px]">
        {features.map((feature, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.12 }}
            className="flex flex-col items-start"
          >
            <div className="mb-[12px]">
              {feature.icon}
            </div>
            <h3 className="font-[family-name:var(--font-fredoka)] text-[15px] uppercase text-[#5A4010] mt-[12px] m-0 leading-tight">
              {feature.title}
            </h3>
            <p className="font-[family-name:var(--font-nunito)] font-normal text-[13px] text-[#7A5C10] mt-[4px] max-w-[160px] leading-snug">
              {feature.desc}
            </p>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
