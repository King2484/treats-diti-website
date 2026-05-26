export default function FreshlyBadge({ className }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Cloud SVG Background */}
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
        <path d="M 50 10 A 15 15 0 0 0 35 20 A 18 18 0 0 0 15 35 A 15 15 0 0 0 15 65 A 18 18 0 0 0 35 80 A 15 15 0 0 0 50 90 A 15 15 0 0 0 65 80 A 18 18 0 0 0 85 65 A 15 15 0 0 0 85 35 A 18 18 0 0 0 65 20 A 15 15 0 0 0 50 10 Z" 
              fill="white" 
        />
      </svg>
      {/* Text Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center mt-[-4px]">
        <span className="font-[family-name:var(--font-fredoka)] text-[#C8860A] uppercase leading-[1.1] text-[14px]">
          FRESHLY<br/>BAKED<br/>EVERYDAY!
        </span>
        <span className="text-[#C8860A] text-[12px] mt-1">♥</span>
      </div>
    </div>
  );
}
