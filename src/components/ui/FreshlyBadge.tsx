export default function FreshlyBadge({ className }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Cloud SVG Background */}
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="50" cy="50" rx="45" ry="35" fill="white" />
        <ellipse cx="30" cy="30" rx="25" ry="25" fill="white" />
        <ellipse cx="70" cy="30" rx="25" ry="25" fill="white" />
        <ellipse cx="25" cy="65" rx="20" ry="20" fill="white" />
        <ellipse cx="75" cy="65" rx="20" ry="20" fill="white" />
        <ellipse cx="50" cy="80" rx="30" ry="20" fill="white" />
      </svg>
      {/* Text Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center mt-[-4px]">
        <span className="font-[family-name:var(--font-fredoka)] text-[#C8860A] uppercase leading-[1.3] text-[13px]">
          FRESHLY<br/>BAKED<br/>EVERYDAY!
        </span>
        <span className="text-[#C8860A] text-[10px] mt-1">♥</span>
      </div>
    </div>
  );
}
