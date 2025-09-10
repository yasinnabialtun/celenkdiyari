'use client';

import { useState, useMemo } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Grid, List } from "lucide-react";
import { products, categories } from '@/data/products';
import ProductCard from '@/components/product-card';

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);

  const allCategories = [
    { id: 'all', name: 'Tümü', count: products.length },
    ...categories.map(cat => ({
      id: cat.slug,
      name: cat.name,
      count: products.filter(p => p.category === cat.name).length
    }))
  ];

  const filteredProducts = useMemo(() => {
    const filtered = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || 
                             product.category.toLowerCase().includes(selectedCategory.toLowerCase());
      
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      
      return matchesSearch && matchesCategory && matchesPrice;
    });

    // Sort products
    switch (sortBy) {
      case 'price-low':
        return [...filtered].sort((a, b) => a.price - b.price);
      case 'price-high':
        return [...filtered].sort((a, b) => b.price - a.price);
      case 'rating':
        return [...filtered].sort((a, b) => b.rating - a.rating);
      case 'newest':
        return [...filtered].sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
      default:
        return [...filtered].sort((a, b) => a.name.localeCompare(b.name, 'tr'));
    }
  }, [searchTerm, selectedCategory, sortBy, priceRange]);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Ürünlerimiz</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Doğanın en güzel hallerini evinize getiren özel tasarım çelenklerimizi keşfedin.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardContent className="p-6 space-y-6">
                {/* Search */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Arama</h3>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      placeholder="Ürün ara..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Categories */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Kategoriler</h3>
                  <div className="space-y-2">
                    {allCategories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                          selectedCategory === category.id
                            ? 'bg-green-100 text-green-700'
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        {category.name} ({category.count})
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Fiyat Aralığı</h3>
                  <div className="space-y-3">
                    <div className="flex gap-2">
                      <Input
                        type="number"
                        placeholder="Min"
                        value={priceRange[0]}
                        onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                        className="text-sm"
                      />
                      <Input
                        type="number"
                        placeholder="Max"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                        className="text-sm"
                      />
                    </div>
                    <div className="text-xs text-gray-500">
                      ₺{priceRange[0]} - ₺{priceRange[1]}
                    </div>
                  </div>
                </div>

                {/* Sort */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Sıralama</h3>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  >
                    <option value="name">İsme Göre</option>
                    <option value="price-low">Fiyat (Düşük-Yüksek)</option>
                    <option value="price-high">Fiyat (Yüksek-Düşük)</option>
                    <option value="rating">Değerlendirme</option>
                    <option value="newest">En Yeni</option>
                  </select>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Products */}
          <div className="lg:col-span-3">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <p className="text-gray-600">
                  {filteredProducts.length} ürün bulundu
                </p>
                <div className="flex border border-gray-300 rounded-md">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    className="rounded-r-none"
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                    className="rounded-l-none"
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3' 
                  : 'grid-cols-1'
              }`}>
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Search className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Ürün Bulunamadı
                </h3>
                <p className="text-gray-600 mb-4">
                  Aradığınız kriterlere uygun ürün bulunamadı. Filtreleri değiştirmeyi deneyin.
                </p>
                <Button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setPriceRange([0, 500]);
                  }}
                  variant="outline"
                >
                  Filtreleri Temizle
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <section className="mt-16 py-16 bg-gradient-to-r from-green-600 to-emerald-700 text-white rounded-lg">
          <div className="text-center">
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
    </div>
  );
}
