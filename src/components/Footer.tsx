"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Camera, Globe, Heart } from "lucide-react";

// Using a custom TikTok SVG since Lucide doesn't have a perfect match
const TikTokIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const CloudDivider = () => (
  <div className="w-full overflow-hidden leading-none mb-12">
    <svg className="relative block w-[calc(100%+1.3px)] h-[40px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C73.23,3.6,145.49,15.68,215.11,35.48,251.68,45.8,287.49,52.33,321.39,56.44Z" fill="#FFFFFF"></path>
    </svg>
  </div>
);

export default function Footer() {
  return (
    <footer className="bg-brand-light pb-8">
      {/* Top Cloud Divider */}
      <CloudDivider />
      
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & Social */}
          <div>
            <Link href="/" className="flex flex-col items-start leading-none group mb-6">
              <span className="text-3xl text-3d tracking-wide transform -rotate-2 group-hover:rotate-0 transition-transform">TREATS</span>
              <span className="text-2xl text-3d tracking-wide ml-4 transform rotate-2 group-hover:rotate-0 transition-transform text-brand-primary" style={{WebkitTextStroke: "1px white", color: "#FDE792", textShadow: "none"}}>Diti</span>
            </Link>
            <p className="text-brand-dark/80 text-sm font-medium leading-relaxed mb-6">
              Making the world a<br/>
              sweeter place,<br/>
              one cookie at a time.
            </p>
            <div className="flex gap-4 text-brand-dark">
              <Link href="#" className="hover:text-brand-primary transition-colors"><Camera className="w-5 h-5" /></Link>
              <Link href="#" className="hover:text-brand-primary transition-colors"><Globe className="w-5 h-5" /></Link>
              <Link href="#" className="hover:text-brand-primary transition-colors"><TikTokIcon /></Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-black text-brand-primary text-sm tracking-widest uppercase mb-6">QUICK LINKS</h4>
            <ul className="space-y-4 text-brand-dark/80 text-sm font-medium">
              <li><Link href="/shop" className="hover:text-brand-primary transition-colors">Shop All</Link></li>
              <li><Link href="/boxes" className="hover:text-brand-primary transition-colors">Cookie Boxes</Link></li>
              <li><Link href="/about" className="hover:text-brand-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-brand-primary transition-colors">Contact</Link></li>
              <li><Link href="/faq" className="hover:text-brand-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Column 3: Help */}
          <div>
            <h4 className="font-black text-brand-primary text-sm tracking-widest uppercase mb-6">HELP</h4>
            <ul className="space-y-4 text-brand-dark/80 text-sm font-medium">
              <li><Link href="#" className="hover:text-brand-primary transition-colors">Shipping & Delivery</Link></li>
              <li><Link href="#" className="hover:text-brand-primary transition-colors">Returns & Refunds</Link></li>
              <li><Link href="#" className="hover:text-brand-primary transition-colors">Terms & Conditions</Link></li>
              <li><Link href="#" className="hover:text-brand-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="font-black text-brand-primary text-sm tracking-widest uppercase mb-6">STAY SWEET!</h4>
            <p className="text-brand-dark/80 text-sm font-medium mb-6">
              Subscribe to get updates<br/>on new flavors and offers.
            </p>
            <div className="flex bg-white rounded-full p-1 border border-brand-yellow card-shadow">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-transparent px-4 py-2 outline-none text-sm text-brand-dark placeholder:text-brand-dark/40"
              />
              <button className="bg-brand-primary p-2.5 rounded-full text-white hover:brightness-110 transition-colors">
                <Heart className="w-4 h-4 fill-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="text-center text-brand-dark/60 text-xs font-medium pt-8">
          <p>© 2024 Treats Diti. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
