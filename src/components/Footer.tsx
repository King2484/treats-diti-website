import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-light pt-16 pb-8 border-t border-brand-yellow/30 overflow-hidden relative">
      {/* Decorative Cloud Bottom Border */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-[calc(100%+1.3px)] h-[30px]"
          style={{ transform: "rotate(180deg)" }}
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#FFEAA7"
            opacity="0.5"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & Socials */}
          <div className="flex flex-col items-start">
             <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="text-3xl font-black text-bubble text-brand-dark">
                TREATS
                <br />
                <span className="text-xl">Diti</span>
              </div>
            </Link>
            <p className="text-brand-dark/70 mb-6">
              Making the world a sweeter place, one cookie at a time.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="px-4 py-2 bg-brand-yellow rounded-full text-brand-dark font-bold hover:bg-brand-primary hover:text-white transition-colors">
                IG
              </Link>
              <Link href="#" className="px-4 py-2 bg-brand-yellow rounded-full text-brand-dark font-bold hover:bg-brand-primary hover:text-white transition-colors">
                FB
              </Link>
              <Link href="#" className="px-4 py-2 bg-brand-yellow rounded-full text-brand-dark font-bold hover:bg-brand-primary hover:text-white transition-colors">
                X
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-bold text-brand-dark mb-6 text-lg uppercase">Quick Links</h4>
            <ul className="space-y-3 font-medium text-brand-dark/80">
              <li><Link href="#shop" className="hover:text-brand-primary transition-colors">Shop All</Link></li>
              <li><Link href="#" className="hover:text-brand-primary transition-colors">Cookie Boxes</Link></li>
              <li><Link href="#about" className="hover:text-brand-primary transition-colors">About Us</Link></li>
              <li><Link href="#contact" className="hover:text-brand-primary transition-colors">Contact</Link></li>
              <li><Link href="#faq" className="hover:text-brand-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Column 3: Help */}
          <div>
            <h4 className="font-bold text-brand-dark mb-6 text-lg uppercase">Help</h4>
            <ul className="space-y-3 font-medium text-brand-dark/80">
              <li><Link href="#" className="hover:text-brand-primary transition-colors">Shipping & Delivery</Link></li>
              <li><Link href="#" className="hover:text-brand-primary transition-colors">Returns & Refunds</Link></li>
              <li><Link href="#" className="hover:text-brand-primary transition-colors">Terms & Conditions</Link></li>
              <li><Link href="#" className="hover:text-brand-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="font-bold text-brand-dark mb-6 text-lg uppercase">Stay Sweet!</h4>
            <p className="text-brand-dark/70 mb-4">
              Subscribe to get updates on new flavors and offers.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-4 py-3 rounded-l-full outline-none focus:ring-2 focus:ring-brand-primary border border-r-0 border-brand-yellow/50 bg-white"
              />
              <button 
                type="submit"
                className="bg-brand-primary text-white px-6 py-3 rounded-r-full font-bold hover:bg-brand-dark transition-colors"
              >
                ♥
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-brand-yellow/50 text-brand-dark/60 font-medium">
          <p>&copy; {new Date().getFullYear()} Treats Diti. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
