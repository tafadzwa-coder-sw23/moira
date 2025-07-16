import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard from "./ProductCard";
import dress1 from "@/assets/dress-1.jpg";
import blazer1 from "@/assets/blazer-1.jpg";
import bag1 from "@/assets/bag-1.jpg";

const ProductShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const products = [
    {
      id: "1",
      name: "Midnight Elegance Dress",
      price: 899,
      originalPrice: 1299,
      image: dress1,
      category: "Women",
      isNew: true,
      isSale: true,
    },
    {
      id: "2",
      name: "Executive Blazer",
      price: 1299,
      image: blazer1,
      category: "Men",
      isNew: true,
    },
    {
      id: "3",
      name: "Heritage Leather Bag",
      price: 2499,
      image: bag1,
      category: "Accessories",
    },
    {
      id: "4",
      name: "Cashmere Turtleneck",
      price: 459,
      image: dress1,
      category: "Women",
    },
    {
      id: "5",
      name: "Italian Leather Shoes",
      price: 899,
      image: blazer1,
      category: "Men",
      isNew: true,
    },
    {
      id: "6",
      name: "Silk Scarf Collection",
      price: 199,
      originalPrice: 299,
      image: bag1,
      category: "Accessories",
      isSale: true,
    },
  ];

  const categories = ["all", "Women", "Men", "Accessories"];

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-luxury font-bold text-foreground mb-6">
          Curated Collection
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Discover our carefully selected pieces that embody timeless elegance and contemporary sophistication.
        </p>
      </div>

      {/* Category Filter */}
      <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-12">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 h-12">
          {categories.map((category) => (
            <TabsTrigger 
              key={category} 
              value={category}
              className="capitalize font-medium"
            >
              {category === "all" ? "All" : category}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      {/* Load More */}
      <div className="text-center">
        <Button variant="elegant" size="lg">
          Load More Products
        </Button>
      </div>
    </section>
  );
};

export default ProductShowcase;