"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Search, Menu, X, User, Heart } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">Ç</span>
            </div>
            <span className="text-xl font-bold gradient-text">Çelenk Diyarı</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              Ana Sayfa
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              Ürünler
            </Link>
            <Link href="/categories" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              Kategoriler
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              Hakkımızda
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              İletişim
            </Link>
          </div>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Çelenk ara..."
                className="pl-10 pr-4 py-2 w-64 rounded-full border-gray-300 focus:border-green-500 focus:ring-green-500"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Button>
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <User className="h-5 w-5" />
            </Button>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <div className="relative px-4">
                <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Çelenk ara..."
                  className="pl-10 pr-4 py-2 w-full rounded-full border-gray-300 focus:border-green-500 focus:ring-green-500"
                />
              </div>
              <Link
                href="/"
                className="text-gray-700 hover:text-green-600 font-medium transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Ana Sayfa
              </Link>
              <Link
                href="/products"
                className="text-gray-700 hover:text-green-600 font-medium transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Ürünler
              </Link>
              <Link
                href="/categories"
                className="text-gray-700 hover:text-green-600 font-medium transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Kategoriler
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-green-600 font-medium transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Hakkımızda
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-green-600 font-medium transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                İletişim
              </Link>
              <div className="flex items-center space-x-4 px-4 pt-4 border-t border-gray-200">
                <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                  <Heart className="h-4 w-4" />
                  <span>Favoriler</span>
                </Button>
                <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>Giriş</span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
