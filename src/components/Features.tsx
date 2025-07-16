import { Truck, Shield, RotateCcw, CreditCard } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Truck,
      title: "Free Worldwide Shipping",
      description: "Complimentary shipping on orders over $500. Express delivery available.",
    },
    {
      icon: Shield,
      title: "Authenticity Guarantee",
      description: "Every piece is authenticated by our experts. 100% genuine guarantee.",
    },
    {
      icon: RotateCcw,
      title: "30-Day Returns",
      description: "Easy returns within 30 days. No questions asked policy.",
    },
    {
      icon: CreditCard,
      title: "Secure Payment",
      description: "Your transactions are protected with enterprise-grade security.",
    },
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-none bg-transparent">
              <CardContent className="text-center p-6">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;