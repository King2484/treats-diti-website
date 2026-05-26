"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, ChevronDown } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const faqs = [
  { question: "How long do the cookies stay fresh?", answer: "Our cookies are best enjoyed within 3 days of delivery. For maximum freshness, keep them in an airtight container at room temperature." },
  { question: "Can I freeze the cookies?", answer: "Yes! You can freeze them in an airtight container for up to 2 months. When you're ready to eat, let them thaw at room temp, or warm them in the oven at 350°F for 3-5 minutes." },
  { question: "Do you offer vegan or gluten-free options?", answer: "Currently, we focus on our core recipes which include dairy and gluten. We hope to introduce specialized lines in the future!" },
  { question: "Do you cater for events?", answer: "Absolutely. We love sweetening up weddings, corporate events, and parties. Please use the contact form to discuss bulk orders." },
];

export default function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="flex min-h-screen flex-col bg-brand-light pt-24">
      <Navbar />
      
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-black text-bubble text-white drop-shadow-md mb-4" style={{ WebkitTextStroke: "2px #F3B33D" }}>
            SAY HELLO
          </h1>
          <p className="text-brand-dark/80 text-lg font-medium">We'd love to hear from you.</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 mb-24">
          {/* Contact Form */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white p-8 md:p-12 rounded-[40px] border border-brand-yellow/30 premium-shadow">
              <h2 className="text-2xl font-black text-brand-dark mb-8">DROP US A LINE</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-brand-dark mb-2">Name</label>
                  <input type="text" className="w-full bg-brand-light/50 border border-brand-yellow/50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-brand-dark mb-2">Email</label>
                  <input type="email" className="w-full bg-brand-light/50 border border-brand-yellow/50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-brand-dark mb-2">Message</label>
                  <textarea rows={4} className="w-full bg-brand-light/50 border border-brand-yellow/50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all"></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-brand-primary text-white font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  SEND MESSAGE
                </motion.button>
              </form>
            </div>
          </div>

          {/* Info & FAQ */}
          <div className="w-full lg:w-1/2">
            <div className="mb-12 space-y-6">
              <h2 className="text-2xl font-black text-brand-dark mb-6">VISIT US</h2>
              <div className="flex items-start gap-4">
                <div className="bg-brand-yellow p-3 rounded-full text-brand-dark"><MapPin className="w-6 h-6" /></div>
                <div>
                  <h4 className="font-bold text-brand-dark text-lg">Bakery HQ</h4>
                  <p className="text-brand-dark/70">123 Cookie Lane, Sweet City, SC 12345</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-brand-yellow p-3 rounded-full text-brand-dark"><Phone className="w-6 h-6" /></div>
                <div>
                  <h4 className="font-bold text-brand-dark text-lg">Phone</h4>
                  <p className="text-brand-dark/70">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-brand-yellow p-3 rounded-full text-brand-dark"><Mail className="w-6 h-6" /></div>
                <div>
                  <h4 className="font-bold text-brand-dark text-lg">Email</h4>
                  <p className="text-brand-dark/70">hello@treatsditi.com</p>
                </div>
              </div>
            </div>

            <hr className="border-brand-yellow/50 mb-12" />

            <div>
              <h2 className="text-2xl font-black text-brand-dark mb-6">FAQS</h2>
              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="bg-white rounded-2xl border border-brand-yellow/30 premium-shadow overflow-hidden">
                    <button 
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full flex items-center justify-between p-5 text-left font-bold text-brand-dark"
                    >
                      {faq.question}
                      <motion.div animate={{ rotate: openFaq === idx ? 180 : 0 }}>
                        <ChevronDown className="w-5 h-5 text-brand-primary" />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {openFaq === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="px-5 pb-5 text-brand-dark/70 font-medium"
                        >
                          {faq.answer}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
