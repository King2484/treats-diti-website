import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import PromoBanner from "@/components/PromoBanner";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import InstagramFeed from "@/components/InstagramFeed";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-brand-light">
      <Navbar />
      <Hero />
      <ProductGrid />
      <PromoBanner />
      <Testimonials />
      <InstagramFeed />
      <Features />
      <Footer />
    </main>
  );
}
