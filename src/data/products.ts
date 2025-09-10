import { Product, ProductCategory } from '@/types/product';

export const categories: ProductCategory[] = [
  {
    id: '1',
    name: 'Doğal Çelenkler',
    description: 'Taze ve doğal malzemelerle hazırlanmış çelenkler',
    image: '/images/categories/natural-wreaths.jpg',
    slug: 'dogal-celenkler',
    productCount: 12
  },
  {
    id: '2',
    name: 'Özel Tasarım Çelenkler',
    description: 'Özel günler için tasarlanmış lüks çelenkler',
    image: '/images/categories/designer-wreaths.jpg',
    slug: 'ozel-tasarim-celenkler',
    productCount: 8
  },
  {
    id: '3',
    name: 'Mevsimsel Çelenkler',
    description: 'Mevsimlere özel hazırlanmış çelenkler',
    image: '/images/categories/seasonal-wreaths.jpg',
    slug: 'mevsimsel-celenkler',
    productCount: 15
  },
  {
    id: '4',
    name: 'Düğün Çelenkleri',
    description: 'Düğün ve nikah törenleri için özel çelenkler',
    image: '/images/categories/wedding-wreaths.jpg',
    slug: 'dugun-celenkleri',
    productCount: 6
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Doğal Lavanta Çelengi',
    description: 'Taze lavanta dalları ve doğal malzemelerle hazırlanmış, evinize huzur getirecek güzel kokulu çelenk.',
    price: 89.99,
    originalPrice: 119.99,
    images: [
      '/images/products/lavender-wreath-1.jpg',
      '/images/products/lavender-wreath-2.jpg',
      '/images/products/lavender-wreath-3.jpg'
    ],
    category: 'Doğal Çelenkler',
    tags: ['lavanta', 'doğal', 'kokulu', 'huzur'],
    inStock: true,
    rating: 4.8,
    reviewCount: 24,
    features: [
      'Taze lavanta dalları',
      'Doğal kurdele',
      'Uzun ömürlü',
      'Güzel koku'
    ],
    dimensions: {
      width: 35,
      height: 35,
      depth: 8
    },
    weight: 0.8,
    materials: ['Lavanta dalları', 'Doğal kurdele', 'Tel çerçeve'],
    careInstructions: [
      'Serin ve kuru yerde saklayın',
      'Direkt güneş ışığından kaçının',
      'Hafifçe sallayarak tozunu alın'
    ],
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15')
  },
  {
    id: '2',
    name: 'Lüks Gül Çelengi',
    description: 'Premium güller ve lüks malzemelerle hazırlanmış, özel günler için ideal çelenk.',
    price: 149.99,
    originalPrice: 199.99,
    images: [
      '/images/products/rose-wreath-1.jpg',
      '/images/products/rose-wreath-2.jpg',
      '/images/products/rose-wreath-3.jpg'
    ],
    category: 'Özel Tasarım Çelenkler',
    tags: ['gül', 'lüks', 'özel günler', 'premium'],
    inStock: true,
    rating: 4.9,
    reviewCount: 18,
    features: [
      'Premium güller',
      'Lüks kurdele',
      'Özel tasarım',
      'Hediye kutusu'
    ],
    dimensions: {
      width: 40,
      height: 40,
      depth: 10
    },
    weight: 1.2,
    materials: ['Premium güller', 'Lüks kurdele', 'Altın tel'],
    careInstructions: [
      'Serin yerde saklayın',
      'Nemi koruyun',
      'Dikkatli taşıyın'
    ],
    createdAt: new Date('2024-01-20'),
    updatedAt: new Date('2024-01-20')
  },
  {
    id: '3',
    name: 'Sonbahar Mevsim Çelengi',
    description: 'Sonbahar renklerinde, mevsim meyveleri ve yapraklarıyla süslenmiş çelenk.',
    price: 79.99,
    images: [
      '/images/products/autumn-wreath-1.jpg',
      '/images/products/autumn-wreath-2.jpg',
      '/images/products/autumn-wreath-3.jpg'
    ],
    category: 'Mevsimsel Çelenkler',
    tags: ['sonbahar', 'mevsim', 'doğal', 'renkli'],
    inStock: true,
    rating: 4.7,
    reviewCount: 31,
    features: [
      'Sonbahar yaprakları',
      'Mevsim meyveleri',
      'Doğal renkler',
      'Uzun ömürlü'
    ],
    dimensions: {
      width: 38,
      height: 38,
      depth: 9
    },
    weight: 1.0,
    materials: ['Sonbahar yaprakları', 'Mevsim meyveleri', 'Doğal ip'],
    careInstructions: [
      'Kuru yerde saklayın',
      'Hafifçe temizleyin',
      'Nemden koruyun'
    ],
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-10')
  },
  {
    id: '4',
    name: 'Düğün Çiçek Çelengi',
    description: 'Beyaz çiçekler ve zarif tasarımla düğünler için özel olarak hazırlanmış çelenk.',
    price: 199.99,
    images: [
      '/images/products/wedding-wreath-1.jpg',
      '/images/products/wedding-wreath-2.jpg',
      '/images/products/wedding-wreath-3.jpg'
    ],
    category: 'Düğün Çelenkleri',
    tags: ['düğün', 'beyaz', 'zarif', 'özel'],
    inStock: true,
    rating: 5.0,
    reviewCount: 12,
    features: [
      'Beyaz çiçekler',
      'Zarif tasarım',
      'Özel ambalaj',
      'Hediye kartı'
    ],
    dimensions: {
      width: 45,
      height: 45,
      depth: 12
    },
    weight: 1.5,
    materials: ['Beyaz çiçekler', 'Zarif kurdele', 'Gümüş tel'],
    careInstructions: [
      'Serin yerde saklayın',
      'Nemi koruyun',
      'Dikkatli kullanın'
    ],
    createdAt: new Date('2024-01-25'),
    updatedAt: new Date('2024-01-25')
  },
  {
    id: '5',
    name: 'Kış Çam Çelengi',
    description: 'Kış ayları için çam dalları ve kırmızı meyvelerle süslenmiş çelenk.',
    price: 69.99,
    images: [
      '/images/products/winter-wreath-1.jpg',
      '/images/products/winter-wreath-2.jpg',
      '/images/products/winter-wreath-3.jpg'
    ],
    category: 'Mevsimsel Çelenkler',
    tags: ['kış', 'çam', 'kırmızı', 'noel'],
    inStock: true,
    rating: 4.6,
    reviewCount: 28,
    features: [
      'Çam dalları',
      'Kırmızı meyveler',
      'Kış teması',
      'Uzun ömürlü'
    ],
    dimensions: {
      width: 36,
      height: 36,
      depth: 8
    },
    weight: 0.9,
    materials: ['Çam dalları', 'Kırmızı meyveler', 'Doğal ip'],
    careInstructions: [
      'Serin yerde saklayın',
      'Hafifçe temizleyin',
      'Nemden koruyun'
    ],
    createdAt: new Date('2024-01-05'),
    updatedAt: new Date('2024-01-05')
  },
  {
    id: '6',
    name: 'Bahar Çiçek Çelengi',
    description: 'Baharın gelişini müjdeleyen renkli çiçeklerle süslenmiş neşeli çelenk.',
    price: 89.99,
    images: [
      '/images/products/spring-wreath-1.jpg',
      '/images/products/spring-wreath-2.jpg',
      '/images/products/spring-wreath-3.jpg'
    ],
    category: 'Mevsimsel Çelenkler',
    tags: ['bahar', 'çiçek', 'renkli', 'neşeli'],
    inStock: true,
    rating: 4.8,
    reviewCount: 22,
    features: [
      'Bahar çiçekleri',
      'Renkli tasarım',
      'Neşeli görünüm',
      'Taze görünüm'
    ],
    dimensions: {
      width: 37,
      height: 37,
      depth: 9
    },
    weight: 1.1,
    materials: ['Bahar çiçekleri', 'Renkli kurdele', 'Doğal tel'],
    careInstructions: [
      'Serin yerde saklayın',
      'Hafifçe temizleyin',
      'Nemden koruyun'
    ],
    createdAt: new Date('2024-01-12'),
    updatedAt: new Date('2024-01-12')
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.rating >= 4.8);
};

export const getNewProducts = (): Product[] => {
  return products
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
    .slice(0, 4);
};
