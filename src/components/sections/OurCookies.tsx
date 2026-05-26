"use client";

import CookieCard from "@/components/ui/CookieCard";

const cookies = [
  {
    name: "CHOCOLATE CHIP",
    desc: "The classic favorite. Soft, chewy, and packed with chocolate chips.",
    price: "$3.00",
    image: "/images/cookie-choc-chip.png",
  },
  {
    name: "DOUBLE CHOCOLATE",
    desc: "Rich cocoa dough with chocolate chips. For the chocolate lover.",
    price: "$3.25",
    image: "/images/cookie-double-choc.png",
  },
  {
    name: "WHITE CHOCOLATE MACADAMIA",
    desc: "Creamy white chocolate and crunchy macadamia nuts.",
    price: "$3.25",
    image: "/images/cookie-white-choc.png",
  },
  {
    name: "BIRTHDAY CAKE",
    desc: "Vanilla cookie with rainbow sprinkles. A party in every bite!",
    price: "$3.00",
    image: "/images/cookie-birthday.png",
  },
];

export default function OurCookies() {
  return (
    <section className="bg-[#FFF5C4] py-[80px] px-[16px] md:px-[64px]">
      
      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="font-[family-name:var(--font-fredoka)] text-[56px] text-[#C8860A] uppercase m-0 leading-tight">
          ≈ OUR COOKIES ≈
        </h2>
        <p className="font-[family-name:var(--font-nunito)] font-semibold text-[16px] text-[#7A5C10] mt-[8px]">
          Made with the best ingredients for the best flavor.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px] mt-[48px]">
        {cookies.map((cookie, i) => (
          <CookieCard 
            key={i}
            index={i}
            name={cookie.name}
            description={cookie.desc}
            price={cookie.price}
            image={cookie.image}
          />
        ))}
      </div>

    </section>
  );
}
