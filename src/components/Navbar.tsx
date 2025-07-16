import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, User, Menu, X, Search } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <h1 className="text-2xl font-luxury font-bold text-primary tracking-wide">
                Moira
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/marketplace" className="text-foreground hover:text-primary transition-colors font-medium">
              Collections
            </Link>
            <Link to="/marketplace" className="text-foreground hover:text-primary transition-colors font-medium">
              Women
            </Link>
            <Link to="/marketplace" className="text-foreground hover:text-primary transition-colors font-medium">
              Men
            </Link>
            <Link to="/marketplace" className="text-foreground hover:text-primary transition-colors font-medium">
              Accessories
            </Link>
            <Link to="/marketplace" className="text-foreground hover:text-primary transition-colors font-medium">
              Sale
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Link to="/dashboard">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </Link>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-primary">
                3
              </Badge>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              <a href="#" className="block px-3 py-2 text-foreground hover:text-primary font-medium">
                Collections
              </a>
              <a href="#" className="block px-3 py-2 text-foreground hover:text-primary font-medium">
                Women
              </a>
              <a href="#" className="block px-3 py-2 text-foreground hover:text-primary font-medium">
                Men
              </a>
              <a href="#" className="block px-3 py-2 text-foreground hover:text-primary font-medium">
                Accessories
              </a>
              <a href="#" className="block px-3 py-2 text-foreground hover:text-primary font-medium">
                Sale
              </a>
              <div className="flex items-center space-x-4 px-3 py-2">
                <Button variant="ghost" size="icon">
                  <Search className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingBag className="h-5 w-5" />
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-primary">
                    3
                  </Badge>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;