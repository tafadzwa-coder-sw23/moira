import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Search, 
  Filter, 
  Heart, 
  ShoppingBag, 
  Star,
  Grid3X3,
  List,
  SlidersHorizontal
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

const Marketplace = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("featured");
  const [viewMode, setViewMode] = useState("grid");
  const [showFilters, setShowFilters] = useState(false);

  // Extended dummy products
  const products = [
    {
      id: "1",
      name: "Midnight Elegance Dress",
      price: 899,
      originalPrice: 1299,
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=600&fit=crop",
      category: "Women",
      isNew: true,
      isSale: true,
      rating: 4.8,
      reviews: 124,
      colors: ["black", "navy"],
      sizes: ["XS", "S", "M", "L", "XL"]
    },
    {
      id: "2",
      name: "Executive Blazer",
      price: 1299,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
      category: "Men",
      isNew: true,
      rating: 4.6,
      reviews: 89,
      colors: ["navy", "charcoal", "black"],
      sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
      id: "3",
      name: "Heritage Leather Bag",
      price: 2499,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=600&fit=crop",
      category: "Accessories",
      rating: 4.9,
      reviews: 156,
      colors: ["brown", "black", "tan"],
      sizes: ["One Size"]
    },
    {
      id: "4",
      name: "Cashmere Turtleneck",
      price: 459,
      image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=600&fit=crop",
      category: "Women",
      rating: 4.7,
      reviews: 203,
      colors: ["beige", "black", "white", "navy"],
      sizes: ["XS", "S", "M", "L"]
    },
    {
      id: "5",
      name: "Italian Leather Shoes",
      price: 899,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=600&fit=crop",
      category: "Men",
      isNew: true,
      rating: 4.5,
      reviews: 67,
      colors: ["black", "brown"],
      sizes: ["40", "41", "42", "43", "44", "45"]
    },
    {
      id: "6",
      name: "Silk Scarf Collection",
      price: 199,
      originalPrice: 299,
      image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=600&fit=crop",
      category: "Accessories",
      isSale: true,
      rating: 4.4,
      reviews: 91,
      colors: ["multicolor", "gold", "silver"],
      sizes: ["One Size"]
    },
    {
      id: "7",
      name: "Luxury Watch Collection",
      price: 3299,
      image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=600&fit=crop",
      category: "Accessories",
      rating: 4.9,
      reviews: 78,
      colors: ["gold", "silver", "black"],
      sizes: ["One Size"]
    },
    {
      id: "8",
      name: "Summer Linen Shirt",
      price: 289,
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=600&fit=crop",
      category: "Men",
      rating: 4.3,
      reviews: 134,
      colors: ["white", "blue", "beige"],
      sizes: ["S", "M", "L", "XL"]
    },
    {
      id: "9",
      name: "Designer Sunglasses",
      price: 599,
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=600&fit=crop",
      category: "Accessories",
      isNew: true,
      rating: 4.6,
      reviews: 89,
      colors: ["black", "gold", "silver"],
      sizes: ["One Size"]
    },
    {
      id: "10",
      name: "Evening Gown",
      price: 1899,
      originalPrice: 2299,
      image: "https://images.unsplash.com/photo-1566479179817-c0c0f12b9e8f?w=400&h=600&fit=crop",
      category: "Women",
      isSale: true,
      rating: 4.8,
      reviews: 167,
      colors: ["black", "navy", "red"],
      sizes: ["XS", "S", "M", "L"]
    },
    {
      id: "11",
      name: "Wool Coat",
      price: 1599,
      image: "https://images.unsplash.com/photo-1551515238-ce7b0b9cd0cf?w=400&h=600&fit=crop",
      category: "Women",
      rating: 4.7,
      reviews: 112,
      colors: ["camel", "black", "gray"],
      sizes: ["XS", "S", "M", "L", "XL"]
    },
    {
      id: "12",
      name: "Sneaker Collection",
      price: 399,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=600&fit=crop",
      category: "Men",
      rating: 4.4,
      reviews: 245,
      colors: ["white", "black", "gray"],
      sizes: ["40", "41", "42", "43", "44", "45"]
    }
  ];

  const categories = ["All", "Women", "Men", "Accessories"];
  const sizes = ["XS", "S", "M", "L", "XL", "XXL", "One Size", "40", "41", "42", "43", "44", "45"];
  const colors = ["black", "white", "navy", "brown", "beige", "gray", "red", "gold", "silver", "tan", "camel", "blue", "multicolor"];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesSize = selectedSizes.length === 0 || selectedSizes.some(size => product.sizes?.includes(size));
    const matchesColor = selectedColors.length === 0 || selectedColors.some(color => product.colors?.includes(color));
    
    return matchesSearch && matchesCategory && matchesPrice && matchesSize && matchesColor;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low": return a.price - b.price;
      case "price-high": return b.price - a.price;
      case "rating": return (b.rating || 0) - (a.rating || 0);
      case "newest": return a.isNew ? -1 : 1;
      default: return 0;
    }
  });

  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    }
  };

  const handleSizeChange = (size: string, checked: boolean) => {
    if (checked) {
      setSelectedSizes([...selectedSizes, size]);
    } else {
      setSelectedSizes(selectedSizes.filter(s => s !== size));
    }
  };

  const handleColorChange = (color: string, checked: boolean) => {
    if (checked) {
      setSelectedColors([...selectedColors, color]);
    } else {
      setSelectedColors(selectedColors.filter(c => c !== color));
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto py-8 px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-luxury font-bold text-foreground mb-4">
            Fashion Marketplace
          </h1>
          <p className="text-lg text-muted-foreground">
            Discover our complete collection of luxury fashion and accessories
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2"
              >
                <SlidersHorizontal className="h-4 w-4" />
                Filters
              </Button>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border rounded-md bg-background"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest</option>
              </select>
              <div className="flex border rounded-md">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Filters Panel */}
          {showFilters && (
            <Card className="p-6 shadow-card">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Categories */}
                <div>
                  <h3 className="font-semibold mb-3">Categories</h3>
                  <div className="space-y-2">
                    {categories.slice(1).map((category) => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox
                          id={category}
                          checked={selectedCategories.includes(category)}
                          onCheckedChange={(checked) => handleCategoryChange(category, !!checked)}
                        />
                        <label htmlFor={category} className="text-sm">
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h3 className="font-semibold mb-3">Price Range</h3>
                  <div className="space-y-2">
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      max={5000}
                      step={50}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>
                </div>

                {/* Sizes */}
                <div>
                  <h3 className="font-semibold mb-3">Sizes</h3>
                  <div className="grid grid-cols-3 gap-2 max-h-32 overflow-y-auto">
                    {sizes.map((size) => (
                      <div key={size} className="flex items-center space-x-2">
                        <Checkbox
                          id={size}
                          checked={selectedSizes.includes(size)}
                          onCheckedChange={(checked) => handleSizeChange(size, !!checked)}
                        />
                        <label htmlFor={size} className="text-xs">
                          {size}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Colors */}
                <div>
                  <h3 className="font-semibold mb-3">Colors</h3>
                  <div className="grid grid-cols-3 gap-2 max-h-32 overflow-y-auto">
                    {colors.map((color) => (
                      <div key={color} className="flex items-center space-x-2">
                        <Checkbox
                          id={color}
                          checked={selectedColors.includes(color)}
                          onCheckedChange={(checked) => handleColorChange(color, !!checked)}
                        />
                        <label htmlFor={color} className="text-xs capitalize">
                          {color}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          )}
        </div>

        {/* Results Info */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-muted-foreground">
            Showing {sortedProducts.length} of {products.length} products
          </p>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">View:</span>
          </div>
        </div>

        {/* Products Grid/List */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {sortedProducts.map((product) => (
              <Card key={product.id} className="p-6 shadow-card">
                <div className="flex gap-6">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-32 h-40 object-cover rounded"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold">{product.name}</h3>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-primary">${product.price}</p>
                        {product.originalPrice && (
                          <p className="text-sm text-muted-foreground line-through">
                            ${product.originalPrice}
                          </p>
                        )}
                      </div>
                    </div>
                    <Badge variant="outline" className="mb-2">{product.category}</Badge>
                    {product.rating && (
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="ml-1 text-sm">{product.rating}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                      </div>
                    )}
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <div>
                        <span className="font-medium">Colors:</span> {product.colors?.join(", ")}
                      </div>
                      <div>
                        <span className="font-medium">Sizes:</span> {product.sizes?.join(", ")}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button className="flex-1">
                        <ShoppingBag className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                      <Button variant="outline" size="icon">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Products
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Marketplace;