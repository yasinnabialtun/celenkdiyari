import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Star, Heart, Search, Filter } from "lucide-react";

export default function ProductsPage() {
  const products = [
    {
      id: 1,
      name: "Klasik Gül Çelengi",
      price: 299,
      image: "🌹",
      rating: 4.8,
      reviews: 24,
      inStock: true,
      category: "Düğün"
    },
    {
      id: 2,
      name: "Doğal Yeşillik Çelengi",
      price: 199,
      image: "🌿",
      rating: 4.6,
      reviews: 18,
      inStock: true,
      category: "Cenaze"
    },
    {
      id: 3,
      name: "Renkli Çiçek Çelengi",
      price: 349,
      image: "🌸",
      rating: 4.9,
      reviews: 31,
      inStock: true,
      category: "Kutlama"
    },
    {
      id: 4,
      name: "Lüks Orkide Çelengi",
      price: 499,
      image: "🌺",
      rating: 4.7,
      reviews: 15,
      inStock: false,
      category: "Özel Tasarım"
    },
    {
      id: 5,
      name: "Minimalist Çelenk",
      price: 179,
      image: "🍃",
      rating: 4.5,
      reviews: 22,
      inStock: true,
      category: "Düğün"
    },
    {
      id: 6,
      name: "Büyük Anma Çelengi",
      price: 399,
      image: "🌻",
      rating: 4.8,
      reviews: 28,
      inStock: true,
      category: "Cenaze"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Header */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Çelenk Ürünlerimiz</h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Doğanın en güzel hediyelerini keşfedin. Her özel gün için özel tasarım çelenklerimiz.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <div className="relative flex-1 lg:w-80">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Çelenk ara..."
                  className="pl-10 pr-4 py-2 w-full rounded-full border-gray-300 focus:border-green-500 focus:ring-green-500"
                />
              </div>
              <Button variant="outline" className="flex items-center space-x-2">
                <Filter className="h-4 w-4" />
                <span>Filtrele</span>
              </Button>
            </div>
            <div className="text-sm text-gray-600">
              {products.length} ürün bulundu
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="group hover-lift shadow-modern overflow-hidden">
                <div className="relative">
                  <div className="h-64 bg-gradient-to-br from-green-100 to-emerald-200 flex items-center justify-center">
                    <div className="text-8xl opacity-80 group-hover:scale-110 transition-transform duration-300">
                      {product.image}
                    </div>
                  </div>
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Stokta Yok
                      </span>
                    </div>
                  )}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4 bg-white/80 hover:bg-white text-gray-600 hover:text-red-500"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-green-600 font-medium">{product.category}</span>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">{product.rating}</span>
                      <span className="text-sm text-gray-400">({product.reviews})</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-green-600">
                      ₺{product.price}
                    </div>
                    <Button 
                      className="bg-green-600 hover:bg-green-700"
                      disabled={!product.inStock}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Sepete Ekle
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Özel Tasarım İstiyorsunuz?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Hayalinizdeki çelengi birlikte tasarlayalım. Kişiye özel çelenklerimiz için bizimle iletişime geçin.
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-green-50 text-lg px-8 py-6">
            Özel Tasarım Talep Et
          </Button>
        </div>
      </section>
    </div>
  );
}
