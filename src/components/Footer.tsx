import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-3xl font-luxury font-bold mb-4 tracking-wide">
              ATELIER
            </h3>
            <p className="text-accent-foreground/80 mb-6 max-w-md leading-relaxed">
              Curating luxury fashion for the discerning individual. Experience timeless 
              elegance with our carefully selected collection of premium pieces.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-accent-foreground/80 hover:text-accent-foreground">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-accent-foreground/80 hover:text-accent-foreground">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-accent-foreground/80 hover:text-accent-foreground">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-accent-foreground/80 hover:text-accent-foreground">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">Collections</a></li>
              <li><a href="#" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">New Arrivals</a></li>
              <li><a href="#" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">Sale</a></li>
              <li><a href="#" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">Gift Cards</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">Care Instructions</a></li>
              <li><a href="#" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-accent-foreground/20 pt-8 mb-8">
          <div className="max-w-md">
            <h4 className="font-semibold mb-4">Stay in the Know</h4>
            <p className="text-accent-foreground/80 mb-4 text-sm">
              Subscribe to receive updates on new collections and exclusive offers.
            </p>
            <div className="flex gap-2">
              <Input 
                placeholder="Enter your email" 
                className="bg-background/10 border-accent-foreground/20 text-accent-foreground placeholder:text-accent-foreground/60"
              />
              <Button variant="default" className="bg-primary hover:bg-primary/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-accent-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-accent-foreground/60 text-sm mb-4 md:mb-0">
            © 2024 Atelier. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-accent-foreground/60 hover:text-accent-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-accent-foreground/60 hover:text-accent-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-accent-foreground/60 hover:text-accent-foreground transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;