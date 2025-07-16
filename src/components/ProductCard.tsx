import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingBag } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
}

const ProductCard = ({ 
  id, 
  name, 
  price, 
  originalPrice, 
  image, 
  category, 
  isNew = false, 
  isSale = false 
}: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="group cursor-pointer overflow-hidden border-0 shadow-card hover:shadow-hover transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {isNew && (
            <Badge className="bg-primary text-primary-foreground">
              New
            </Badge>
          )}
          {isSale && (
            <Badge className="bg-destructive text-destructive-foreground">
              Sale
            </Badge>
          )}
        </div>

        {/* Wishlist Button */}
        <Button
          variant="ghost"
          size="icon"
          className={`absolute top-4 right-4 bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
          onClick={(e) => {
            e.stopPropagation();
            setIsWishlisted(!isWishlisted);
          }}
        >
          <Heart 
            className={`h-4 w-4 transition-colors ${
              isWishlisted ? 'fill-primary text-primary' : 'text-foreground'
            }`} 
          />
        </Button>

        {/* Quick Add Button */}
        <div className={`absolute bottom-4 left-4 right-4 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <Button variant="elegant" className="w-full">
            <ShoppingBag className="h-4 w-4 mr-2" />
            Quick Add
          </Button>
        </div>
      </div>

      <div className="p-6">
        <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">
          {category}
        </p>
        <h3 className="font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
          {name}
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold text-foreground">
            ${price.toFixed(2)}
          </span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;