import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#FFF5C4] border-t-2 border-[#F0E0A0] pt-[64px] pb-[32px] px-[64px]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-[32px] items-start">
        
        {/* COL 1 - Brand */}
        <div>
          <Image src="/images/logo.png" alt="Treats Diti" width={160} height={80} className="object-contain" />
          <p className="font-[family-name:var(--font-nunito)] font-normal text-[13px] text-[#7A5C10] mt-[12px] max-w-[180px]">
            Making the world a sweeter place, one cookie at a time.
          </p>
          <div className="flex items-center gap-[16px] mt-[20px]">
            <Link href="#" className="text-[#7A5C10] hover:text-[#C8860A] transition-colors">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </Link>
            <Link href="#" className="text-[#7A5C10] hover:text-[#C8860A] transition-colors">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </Link>
            <Link href="#" className="text-[#7A5C10] hover:text-[#C8860A] transition-colors">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
            </Link>
          </div>
        </div>

        {/* COL 2 - Quick Links */}
        <div>
          <h4 className="font-[family-name:var(--font-fredoka)] text-[16px] text-[#C8860A] uppercase mb-[16px]">QUICK LINKS</h4>
          <ul className="flex flex-col gap-[12px] font-[family-name:var(--font-nunito)] font-normal text-[14px] text-[#7A5C10]">
            <li><Link href="#" className="hover:text-[#C8860A] transition-colors">Shop All</Link></li>
            <li><Link href="#" className="hover:text-[#C8860A] transition-colors">Cookie Boxes</Link></li>
            <li><Link href="#" className="hover:text-[#C8860A] transition-colors">About Us</Link></li>
            <li><Link href="#" className="hover:text-[#C8860A] transition-colors">Contact</Link></li>
            <li><Link href="#" className="hover:text-[#C8860A] transition-colors">FAQ</Link></li>
          </ul>
        </div>

        {/* COL 3 - Help */}
        <div>
          <h4 className="font-[family-name:var(--font-fredoka)] text-[16px] text-[#C8860A] uppercase mb-[16px]">HELP</h4>
          <ul className="flex flex-col gap-[12px] font-[family-name:var(--font-nunito)] font-normal text-[14px] text-[#7A5C10]">
            <li><Link href="#" className="hover:text-[#C8860A] transition-colors">Shipping & Delivery</Link></li>
            <li><Link href="#" className="hover:text-[#C8860A] transition-colors">Returns & Refunds</Link></li>
            <li><Link href="#" className="hover:text-[#C8860A] transition-colors">Terms & Conditions</Link></li>
            <li><Link href="#" className="hover:text-[#C8860A] transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* COL 4 - Stay Sweet */}
        <div>
          <h4 className="font-[family-name:var(--font-fredoka)] text-[16px] text-[#C8860A] uppercase mb-[16px]">STAY SWEET!</h4>
          <p className="font-[family-name:var(--font-nunito)] font-normal text-[13px] text-[#7A5C10] mb-[12px]">
            Subscribe to get updates on new flavors and offers.
          </p>
          <form className="flex w-full" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 rounded-full px-[16px] py-[10px] bg-white border border-[#F0E0A0] outline-none font-[family-name:var(--font-nunito)] font-normal text-[14px] placeholder:text-[#7A5C10]/50 text-[#7A5C10]"
            />
            <button className="flex-shrink-0 w-[40px] h-[40px] rounded-full bg-[#C8860A] hover:bg-[#A86E08] transition-colors flex items-center justify-center ml-[8px]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            </button>
          </form>
        </div>

      </div>

      <div className="border-t border-[#F0E0A0] mt-[40px] mb-[24px]"></div>
      <p className="text-center font-[family-name:var(--font-nunito)] font-normal text-[13px] text-[#9A7C30]">
        © 2024 Treats Diti. All rights reserved.
      </p>
    </footer>
  );
}
