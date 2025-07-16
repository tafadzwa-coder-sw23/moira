import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ProductShowcase />
      <Features />
      <Footer />
    </div>
  );
};

export default Index;
