import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, Star, Truck, Shield, Heart } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-green-600 to-emerald-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Çelenk Diyarı
                <span className="block text-3xl lg:text-4xl font-normal mt-2">
                  Doğanın En Güzel Hali
                </span>
              </h1>
              <p className="text-xl text-green-100 leading-relaxed">
                Özel günlerinizde sevdiklerinizi mutlu edecek, doğal ve taze çelenkler. 
                Profesyonel tasarım ve kaliteli hizmet garantisi.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-green-600 hover:bg-green-50 text-lg px-8 py-6">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Ürünleri İncele
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 text-lg px-8 py-6">
                  Hakkımızda
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 animate-float">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                      <Heart className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Doğal Çelenkler</h3>
                    <p className="text-green-100 text-sm">Taze ve doğal malzemelerle hazırlanmış</p>
                  </CardContent>
                </Card>
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 animate-float" style={{ animationDelay: '1s' }}>
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                      <Truck className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Hızlı Teslimat</h3>
                    <p className="text-green-100 text-sm">Aynı gün teslimat imkanı</p>
                  </CardContent>
                </Card>
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 animate-float" style={{ animationDelay: '2s' }}>
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                      <Shield className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Güvenli Alışveriş</h3>
                    <p className="text-green-100 text-sm">SSL sertifikası ile korumalı</p>
                  </CardContent>
                </Card>
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 animate-float" style={{ animationDelay: '3s' }}>
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                      <Star className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Kaliteli Hizmet</h3>
                    <p className="text-green-100 text-sm">Müşteri memnuniyeti odaklı</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Neden Çelenk Diyarı?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Doğanın en güzel hediyelerini sevdiklerinize ulaştırıyoruz
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover-lift shadow-modern">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl">Doğal Malzemeler</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg">
                  Sadece en taze ve doğal çiçekler kullanılarak hazırlanan çelenklerimiz
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center hover-lift shadow-modern">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl">Hızlı Teslimat</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg">
                  Aynı gün teslimat imkanı ile özel günlerinizi kaçırmayın
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center hover-lift shadow-modern">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl">Kaliteli Hizmet</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg">
                  Profesyonel tasarım ve müşteri memnuniyeti odaklı hizmet anlayışımız
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Çelenk Kategorileri</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Her özel gün için özel tasarım çelenklerimiz
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Düğün Çelenkleri", description: "Özel gününüz için tasarım çelenkler", image: "💐" },
              { title: "Cenaze Çelenkleri", description: "Saygı ve sevgi dolu anma çelenkleri", image: "🌹" },
              { title: "Kutlama Çelenkleri", description: "Mutlu günler için renkli çelenkler", image: "🎉" },
              { title: "Özel Tasarım", description: "Kişiye özel tasarım çelenkler", image: "✨" }
            ].map((category, index) => (
              <Card key={index} className="group cursor-pointer hover-lift shadow-modern overflow-hidden">
                <div className="relative h-48 bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                  <div className="text-6xl opacity-80 group-hover:scale-110 transition-transform duration-300">
                    {category.image}
                  </div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                    <p className="text-sm opacity-90">{category.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Hemen Sipariş Verin</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Özel günlerinizde sevdiklerinizi mutlu edecek çelenklerimizi keşfedin
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-green-50 text-lg px-8 py-6">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Ürünleri Görüntüle
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 text-lg px-8 py-6">
              İletişime Geç
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}