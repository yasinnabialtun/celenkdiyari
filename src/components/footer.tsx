import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">Ç</span>
              </div>
              <span className="text-xl font-bold">Çelenk Diyarı</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Doğanın en güzel hediyelerini sevdiklerinize ulaştırıyoruz. 
              Taze ve doğal çelenklerle özel günlerinizi unutulmaz kılıyoruz.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Hızlı Linkler</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-green-400 transition-colors">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-green-400 transition-colors">
                  Ürünler
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-gray-300 hover:text-green-400 transition-colors">
                  Kategoriler
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-green-400 transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-green-400 transition-colors">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Kategoriler</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/categories/wedding" className="text-gray-300 hover:text-green-400 transition-colors">
                  Düğün Çelenkleri
                </Link>
              </li>
              <li>
                <Link href="/categories/funeral" className="text-gray-300 hover:text-green-400 transition-colors">
                  Cenaze Çelenkleri
                </Link>
              </li>
              <li>
                <Link href="/categories/celebration" className="text-gray-300 hover:text-green-400 transition-colors">
                  Kutlama Çelenkleri
                </Link>
              </li>
              <li>
                <Link href="/categories/custom" className="text-gray-300 hover:text-green-400 transition-colors">
                  Özel Tasarım
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">İletişim</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">İstanbul, Türkiye</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">+90 (212) 123 45 67</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">info@celenkdiyari.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>© 2024 Çelenk Diyarı. Tüm hakları saklıdır.</span>
            </div>
            <div className="flex items-center space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                Gizlilik Politikası
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                Kullanım Şartları
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                Çerez Politikası
              </Link>
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="text-gray-400 text-sm flex items-center justify-center space-x-1">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>in Turkey</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
