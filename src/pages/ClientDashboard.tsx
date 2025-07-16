import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ShoppingBag, 
  Heart, 
  Package, 
  User, 
  CreditCard,
  Star,
  MapPin,
  Calendar,
  TrendingUp
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ClientDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Dummy user data
  const user = {
    name: "Isabella Rodriguez",
    email: "isabella@example.com",
    memberSince: "March 2023",
    tier: "Platinum",
    points: 2450,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b372?w=150&h=150&fit=crop&crop=face"
  };

  // Dummy orders
  const orders = [
    {
      id: "ORD-001",
      date: "2024-07-10",
      status: "delivered",
      total: 1299,
      items: ["Midnight Elegance Dress", "Silk Scarf Collection"],
      trackingNumber: "ATL789123456"
    },
    {
      id: "ORD-002", 
      date: "2024-07-05",
      status: "shipped",
      total: 899,
      items: ["Executive Blazer"],
      trackingNumber: "ATL789123457"
    },
    {
      id: "ORD-003",
      date: "2024-06-28",
      status: "processing",
      total: 2499,
      items: ["Heritage Leather Bag", "Cashmere Turtleneck"],
      trackingNumber: "ATL789123458"
    }
  ];

  // Dummy wishlist
  const wishlist = [
    {
      id: "1",
      name: "Autumn Collection Coat",
      price: 1899,
      image: "https://images.unsplash.com/photo-1551515238-ce7b0b9cd0cf?w=300&h=400&fit=crop",
      inStock: true
    },
    {
      id: "2", 
      name: "Diamond Watch",
      price: 3299,
      image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=300&h=400&fit=crop",
      inStock: false
    },
    {
      id: "3",
      name: "Luxury Sunglasses",
      price: 599,
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=300&h=400&fit=crop",
      inStock: true
    }
  ];

  // Dummy addresses
  const addresses = [
    {
      id: "1",
      type: "Home",
      name: "Isabella Rodriguez",
      street: "123 Fashion Avenue",
      city: "New York",
      state: "NY",
      zip: "10001",
      isDefault: true
    },
    {
      id: "2",
      type: "Office", 
      name: "Isabella Rodriguez",
      street: "456 Business Plaza",
      city: "New York",
      state: "NY", 
      zip: "10002",
      isDefault: false
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered": return "bg-green-100 text-green-800";
      case "shipped": return "bg-blue-100 text-blue-800";
      case "processing": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto py-8 px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-6 mb-6">
            <img 
              src={user.avatar}
              alt={user.name}
              className="w-20 h-20 rounded-full object-cover shadow-card"
            />
            <div>
              <h1 className="text-3xl font-luxury font-bold text-foreground mb-2">
                Welcome back, {user.name}
              </h1>
              <p className="text-muted-foreground">
                {user.tier} Member since {user.memberSince}
              </p>
              <div className="flex items-center gap-4 mt-2">
                <Badge className="bg-primary text-primary-foreground">
                  {user.points} Points
                </Badge>
                <Badge variant="outline">
                  {user.tier} Tier
                </Badge>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <Card className="p-6 shadow-card">
              <div className="flex items-center gap-3">
                <ShoppingBag className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-2xl font-bold text-foreground">24</p>
                  <p className="text-sm text-muted-foreground">Total Orders</p>
                </div>
              </div>
            </Card>
            <Card className="p-6 shadow-card">
              <div className="flex items-center gap-3">
                <Heart className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-2xl font-bold text-foreground">12</p>
                  <p className="text-sm text-muted-foreground">Wishlist Items</p>
                </div>
              </div>
            </Card>
            <Card className="p-6 shadow-card">
              <div className="flex items-center gap-3">
                <Star className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-2xl font-bold text-foreground">{user.points}</p>
                  <p className="text-sm text-muted-foreground">Reward Points</p>
                </div>
              </div>
            </Card>
            <Card className="p-6 shadow-card">
              <div className="flex items-center gap-3">
                <TrendingUp className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-2xl font-bold text-foreground">$12,450</p>
                  <p className="text-sm text-muted-foreground">Total Spent</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full max-w-md grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Recent Orders */}
              <Card className="p-6 shadow-card">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Package className="h-5 w-5" />
                  Recent Orders
                </h3>
                <div className="space-y-4">
                  {orders.slice(0, 3).map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                      <div>
                        <p className="font-medium">{order.id}</p>
                        <p className="text-sm text-muted-foreground">{order.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">${order.total}</p>
                        <Badge className={getStatusColor(order.status)}>
                          {order.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Wishlist Preview */}
              <Card className="p-6 shadow-card">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Heart className="h-5 w-5" />
                  Wishlist Highlights
                </h3>
                <div className="space-y-4">
                  {wishlist.slice(0, 3).map((item) => (
                    <div key={item.id} className="flex items-center gap-4">
                      <img 
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-20 object-cover rounded"
                      />
                      <div className="flex-1">
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-muted-foreground">${item.price}</p>
                        <Badge variant={item.inStock ? "default" : "secondary"}>
                          {item.inStock ? "In Stock" : "Out of Stock"}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="orders" className="mt-8">
            <Card className="p-6 shadow-card">
              <h3 className="text-2xl font-semibold mb-6">Order History</h3>
              <div className="space-y-6">
                {orders.map((order) => (
                  <div key={order.id} className="border rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="text-lg font-semibold">{order.id}</h4>
                        <p className="text-muted-foreground flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {order.date}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold">${order.total}</p>
                        <Badge className={getStatusColor(order.status)}>
                          {order.status}
                        </Badge>
                      </div>
                    </div>
                    <div className="mb-4">
                      <p className="text-sm text-muted-foreground mb-2">Items:</p>
                      <ul className="list-disc list-inside space-y-1">
                        {order.items.map((item, index) => (
                          <li key={index} className="text-sm">{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-muted-foreground">
                        Tracking: {order.trackingNumber}
                      </p>
                      <Button variant="outline" size="sm">
                        Track Package
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="wishlist" className="mt-8">
            <Card className="p-6 shadow-card">
              <h3 className="text-2xl font-semibold mb-6">My Wishlist</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {wishlist.map((item) => (
                  <div key={item.id} className="border rounded-lg overflow-hidden">
                    <img 
                      src={item.image}
                      alt={item.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-4">
                      <h4 className="font-semibold mb-2">{item.name}</h4>
                      <p className="text-lg font-bold text-primary mb-3">${item.price}</p>
                      <div className="flex gap-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          disabled={!item.inStock}
                          className="flex-1"
                        >
                          {item.inStock ? "Add to Cart" : "Out of Stock"}
                        </Button>
                        <Button variant="ghost" size="sm">
                          Remove
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="profile" className="mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Personal Information */}
              <Card className="p-6 shadow-card">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Personal Information
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Full Name</label>
                    <p className="text-foreground">{user.name}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <p className="text-foreground">{user.email}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Phone</label>
                    <p className="text-foreground">+1 (555) 123-4567</p>
                  </div>
                  <Button variant="outline" className="w-full">
                    Edit Profile
                  </Button>
                </div>
              </Card>

              {/* Addresses */}
              <Card className="p-6 shadow-card">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Saved Addresses
                </h3>
                <div className="space-y-4">
                  {addresses.map((address) => (
                    <div key={address.id} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant={address.isDefault ? "default" : "secondary"}>
                          {address.type}
                        </Badge>
                        {address.isDefault && (
                          <Badge variant="outline">Default</Badge>
                        )}
                      </div>
                      <p className="font-medium">{address.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {address.street}<br />
                        {address.city}, {address.state} {address.zip}
                      </p>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full">
                    Add New Address
                  </Button>
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default ClientDashboard;