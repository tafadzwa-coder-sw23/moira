import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  ShoppingBag, 
  DollarSign, 
  TrendingUp,
  Package,
  AlertTriangle,
  Star,
  Eye,
  Edit,
  Trash2,
  Plus
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Dummy analytics data
  const analytics = {
    totalRevenue: 125450,
    totalOrders: 1247,
    totalCustomers: 892,
    conversionRate: 3.2,
    monthlyGrowth: 12.5,
    topCategories: [
      { name: "Women", sales: 45230, percentage: 45 },
      { name: "Men", sales: 32150, percentage: 32 },
      { name: "Accessories", sales: 23070, percentage: 23 }
    ]
  };

  // Dummy recent orders
  const recentOrders = [
    {
      id: "ORD-001",
      customer: "Isabella Rodriguez",
      date: "2024-07-15",
      status: "processing",
      total: 1299,
      items: 2
    },
    {
      id: "ORD-002",
      customer: "James Wilson", 
      date: "2024-07-15",
      status: "shipped",
      total: 899,
      items: 1
    },
    {
      id: "ORD-003",
      customer: "Emma Thompson",
      date: "2024-07-14",
      status: "delivered",
      total: 2499,
      items: 3
    },
    {
      id: "ORD-004",
      customer: "Michael Chen",
      date: "2024-07-14", 
      status: "cancelled",
      total: 599,
      items: 1
    }
  ];

  // Dummy products
  const products = [
    {
      id: "PROD-001",
      name: "Midnight Elegance Dress",
      category: "Women",
      price: 899,
      stock: 15,
      sales: 89,
      status: "active",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=150&h=200&fit=crop"
    },
    {
      id: "PROD-002",
      name: "Executive Blazer",
      category: "Men",
      price: 1299,
      stock: 8,
      sales: 124,
      status: "active",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=200&fit=crop"
    },
    {
      id: "PROD-003",
      name: "Heritage Leather Bag",
      category: "Accessories",
      price: 2499,
      stock: 3,
      sales: 67,
      status: "low_stock",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=150&h=200&fit=crop"
    },
    {
      id: "PROD-004",
      name: "Vintage Watch Collection",
      category: "Accessories",
      price: 3299,
      stock: 0,
      sales: 23,
      status: "out_of_stock",
      image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=150&h=200&fit=crop"
    }
  ];

  // Dummy customers
  const customers = [
    {
      id: "CUST-001",
      name: "Isabella Rodriguez",
      email: "isabella@example.com",
      joinDate: "2023-03-15",
      orders: 24,
      totalSpent: 12450,
      tier: "Platinum"
    },
    {
      id: "CUST-002", 
      name: "James Wilson",
      email: "james@example.com",
      joinDate: "2023-05-22",
      orders: 18,
      totalSpent: 8930,
      tier: "Gold"
    },
    {
      id: "CUST-003",
      name: "Emma Thompson", 
      email: "emma@example.com",
      joinDate: "2023-08-10",
      orders: 12,
      totalSpent: 5670,
      tier: "Silver"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered": return "bg-green-100 text-green-800";
      case "shipped": return "bg-blue-100 text-blue-800";
      case "processing": return "bg-yellow-100 text-yellow-800";
      case "cancelled": return "bg-red-100 text-red-800";
      case "active": return "bg-green-100 text-green-800";
      case "low_stock": return "bg-yellow-100 text-yellow-800";
      case "out_of_stock": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getTierColor = (tier: string) => {
    switch (tier) {
      case "Platinum": return "bg-purple-100 text-purple-800";
      case "Gold": return "bg-yellow-100 text-yellow-800";
      case "Silver": return "bg-gray-100 text-gray-800";
      default: return "bg-blue-100 text-blue-800";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto py-8 px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-luxury font-bold text-foreground mb-2">
            Admin Dashboard
          </h1>
          <p className="text-muted-foreground">
            Manage your fashion empire with comprehensive insights and controls
          </p>
        </div>

        {/* Analytics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 shadow-card">
            <div className="flex items-center gap-3">
              <DollarSign className="h-8 w-8 text-primary" />
              <div>
                <p className="text-2xl font-bold text-foreground">
                  ${analytics.totalRevenue.toLocaleString()}
                </p>
                <p className="text-sm text-muted-foreground">Total Revenue</p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="h-3 w-3 text-green-600" />
                  <span className="text-xs text-green-600">+{analytics.monthlyGrowth}%</span>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 shadow-card">
            <div className="flex items-center gap-3">
              <ShoppingBag className="h-8 w-8 text-primary" />
              <div>
                <p className="text-2xl font-bold text-foreground">{analytics.totalOrders}</p>
                <p className="text-sm text-muted-foreground">Total Orders</p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="h-3 w-3 text-green-600" />
                  <span className="text-xs text-green-600">+8.2%</span>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 shadow-card">
            <div className="flex items-center gap-3">
              <Users className="h-8 w-8 text-primary" />
              <div>
                <p className="text-2xl font-bold text-foreground">{analytics.totalCustomers}</p>
                <p className="text-sm text-muted-foreground">Total Customers</p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="h-3 w-3 text-green-600" />
                  <span className="text-xs text-green-600">+15.3%</span>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 shadow-card">
            <div className="flex items-center gap-3">
              <Star className="h-8 w-8 text-primary" />
              <div>
                <p className="text-2xl font-bold text-foreground">{analytics.conversionRate}%</p>
                <p className="text-sm text-muted-foreground">Conversion Rate</p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="h-3 w-3 text-green-600" />
                  <span className="text-xs text-green-600">+0.8%</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full max-w-lg grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="customers">Customers</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Recent Orders */}
              <Card className="p-6 shadow-card">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <Package className="h-5 w-5" />
                    Recent Orders
                  </h3>
                  <Button variant="outline" size="sm">View All</Button>
                </div>
                <div className="space-y-4">
                  {recentOrders.slice(0, 5).map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                      <div>
                        <p className="font-medium">{order.id}</p>
                        <p className="text-sm text-muted-foreground">{order.customer}</p>
                        <p className="text-xs text-muted-foreground">{order.date}</p>
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

              {/* Category Performance */}
              <Card className="p-6 shadow-card">
                <h3 className="text-xl font-semibold mb-4">Category Performance</h3>
                <div className="space-y-4">
                  {analytics.topCategories.map((category) => (
                    <div key={category.name} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{category.name}</span>
                        <span className="text-muted-foreground">
                          ${category.sales.toLocaleString()} ({category.percentage}%)
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all"
                          style={{ width: `${category.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="orders" className="mt-8">
            <Card className="p-6 shadow-card">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-semibold">Order Management</h3>
                <div className="flex gap-2">
                  <Button variant="outline">Export</Button>
                  <Button>New Order</Button>
                </div>
              </div>
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold">{order.id}</h4>
                        <p className="text-sm text-muted-foreground">{order.customer}</p>
                        <p className="text-xs text-muted-foreground">{order.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">${order.total}</p>
                        <p className="text-sm text-muted-foreground">{order.items} items</p>
                        <Badge className={getStatusColor(order.status)}>
                          {order.status}
                        </Badge>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="products" className="mt-8">
            <Card className="p-6 shadow-card">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-semibold">Product Management</h3>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Product
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <div key={product.id} className="border rounded-lg overflow-hidden">
                    <img 
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline">{product.category}</Badge>
                        <Badge className={getStatusColor(product.status)}>
                          {product.status.replace('_', ' ')}
                        </Badge>
                      </div>
                      <h4 className="font-semibold mb-2">{product.name}</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Price:</span>
                          <span className="font-medium">${product.price}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Stock:</span>
                          <span className={product.stock < 5 ? "text-red-600" : "text-foreground"}>
                            {product.stock}
                            {product.stock < 5 && <AlertTriangle className="h-3 w-3 inline ml-1" />}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Sales:</span>
                          <span>{product.sales}</span>
                        </div>
                      </div>
                      <div className="flex gap-2 mt-4">
                        <Button variant="outline" size="sm" className="flex-1">
                          <Edit className="h-3 w-3 mr-1" />
                          Edit
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="customers" className="mt-8">
            <Card className="p-6 shadow-card">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-semibold">Customer Management</h3>
                <Button variant="outline">Export Data</Button>
              </div>
              <div className="space-y-4">
                {customers.map((customer) => (
                  <div key={customer.id} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold">{customer.name}</h4>
                        <p className="text-sm text-muted-foreground">{customer.email}</p>
                        <p className="text-xs text-muted-foreground">Joined: {customer.joinDate}</p>
                      </div>
                      <div className="text-right">
                        <Badge className={getTierColor(customer.tier)}>
                          {customer.tier}
                        </Badge>
                        <p className="text-sm mt-1">{customer.orders} orders</p>
                        <p className="font-semibold">${customer.totalSpent.toLocaleString()}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default AdminDashboard;