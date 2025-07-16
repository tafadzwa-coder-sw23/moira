import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-fashion.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Luxury Fashion" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-luxury font-bold text-white mb-6 tracking-wider">
            ATELIER
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light max-w-2xl mx-auto leading-relaxed">
            Curated luxury fashion for the discerning individual. Discover timeless elegance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/marketplace">
              <Button variant="luxury" size="xl" className="min-w-48">
                Explore Collection
              </Button>
            </Link>
            <Link to="/marketplace">
              <Button variant="hero" size="xl" className="min-w-48">
                New Arrivals
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;