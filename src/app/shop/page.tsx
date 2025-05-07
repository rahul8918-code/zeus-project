'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useCart } from '../context/CartContext';
import toast from 'react-hot-toast';
import { formatPrice } from '../utils/currency';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description?: string;
}

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const { addToCart } = useCart();

  const products: Product[] = [
    // Dresses
    {
      id: 1,
      name: "Summer Floral Dress",
      price: 3999,
      category: "Dresses",
      image: "/images/products/dress1.jpg",
      description: "Beautiful summer dress with floral pattern"
    },
    {
      id: 2,
      name: "Elegant Evening Dress",
      price: 6999,
      category: "Dresses",
      image: "/images/products/dress2.jpg",
      description: "Stunning evening dress for special occasions"
    },
    {
      id: 3,
      name: "Casual Maxi Dress",
      price: 3499,
      category: "Dresses",
      image: "/images/products/dress3.jpg",
      description: "Comfortable maxi dress for everyday wear"
    },
    {
      id: 4,
      name: "Party Cocktail Dress",
      price: 5499,
      category: "Dresses",
      image: "/images/products/dress4.jpg",
      description: "Elegant cocktail dress for parties"
    },
    {
      id: 5,
      name: "Bohemian Summer Dress",
      price: 3799,
      category: "Dresses",
      image: "/images/products/dress5.jpg",
      description: "Free-spirited bohemian style dress"
    },

    // Men's Shirts
    {
      id: 6,
      name: "Classic White Shirt",
      price: 2999,
      category: "Men",
      image: "/images/products/shirt1.jpg",
      description: "Classic white shirt for any occasion"
    },
    {
      id: 7,
      name: "Casual Denim Shirt",
      price: 3499,
      category: "Men",
      image: "/images/products/shirt2.jpg",
      description: "Comfortable denim shirt for casual wear"
    },
    {
      id: 8,
      name: "Formal Blue Shirt",
      price: 3299,
      category: "Men",
      image: "/images/products/shirt3.jpg",
      description: "Professional blue shirt for formal occasions"
    },
    {
      id: 9,
      name: "Striped Casual Shirt",
      price: 2799,
      category: "Men",
      image: "/images/products/shirt4.jpg",
      description: "Stylish striped shirt for casual outings"
    },
    {
      id: 10,
      name: "Linen Summer Shirt",
      price: 3999,
      category: "Men",
      image: "/images/products/shirt5.jpg",
      description: "Light and breathable linen shirt"
    },

    // Men's Pants
    {
      id: 11,
      name: "Slim Fit Jeans",
      price: 4999,
      category: "Men",
      image: "/images/products/jeans1.jpg",
      description: "Modern slim fit jeans"
    },
    {
      id: 12,
      name: "Classic Chinos",
      price: 3499,
      category: "Men",
      image: "/images/products/jeans2.jpg",
      description: "Versatile chinos for any occasion"
    },
    {
      id: 13,
      name: "Formal Trousers",
      price: 3999,
      category: "Men",
      image: "/images/products/jeans3.jpg",
      description: "Professional formal trousers"
    },
    {
      id: 14,
      name: "Cargo Pants",
      price: 3799,
      category: "Men",
      image: "/images/products/jeans4.jpg",
      description: "Practical cargo pants with multiple pockets"
    },
    {
      id: 15,
      name: "Jogger Pants",
      price: 2999,
      category: "Men",
      image: "/images/products/jeans5.jpg",
      description: "Comfortable jogger pants for casual wear"
    },

    // Accessories
    {
      id: 16,
      name: "Leather Crossbody Bag",
      price: 4499,
      category: "Accessories",
      image: "/images/products/bag1.jpg",
      description: "Stylish leather bag for everyday use"
    },
    {
      id: 17,
      name: "Gold Hoop Earrings",
      price: 1999,
      category: "Accessories",
      image: "/images/products/earrings1.jpg",
      description: "Elegant gold hoop earrings"
    },
    {
      id: 18,
      name: "Summer Hat",
      price: 2499,
      category: "Accessories",
      image: "/images/products/hat1.jpg",
      description: "Stylish summer hat with wide brim"
    },
    {
      id: 19,
      name: "Leather Belt",
      price: 1799,
      category: "Accessories",
      image: "/images/products/belt1.jpg",
      description: "Classic leather belt"
    },
    {
      id: 20,
      name: "Sunglasses",
      price: 2999,
      category: "Accessories",
      image: "/images/products/sunglasses1.jpg",
      description: "Trendy sunglasses with UV protection"
    },

    // Women's Tops
    {
      id: 21,
      name: "Floral Blouse",
      price: 2799,
      category: "Women",
      image: "/images/products/top1.jpg",
      description: "Beautiful floral print blouse"
    },
    {
      id: 22,
      name: "Casual T-Shirt",
      price: 1499,
      category: "Women",
      image: "/images/products/top2.jpg",
      description: "Comfortable casual t-shirt"
    },
    {
      id: 23,
      name: "Silk Blouse",
      price: 3999,
      category: "Women",
      image: "/images/products/top3.jpg",
      description: "Elegant silk blouse for formal occasions"
    },
    {
      id: 24,
      name: "Crop Top",
      price: 1999,
      category: "Women",
      image: "/images/products/top4.jpg",
      description: "Trendy crop top for casual wear"
    },
    {
      id: 25,
      name: "Tank Top",
      price: 1299,
      category: "Women",
      image: "/images/products/top5.jpg",
      description: "Comfortable tank top for summer"
    },

    // Women's Bottoms
    {
      id: 26,
      name: "High-Waist Jeans",
      price: 4499,
      category: "Women",
      image: "/images/products/bottom1.jpg",
      description: "Stylish high-waist jeans"
    },
    {
      id: 27,
      name: "Pleated Skirt",
      price: 3299,
      category: "Women",
      image: "/images/products/bottom2.jpg",
      description: "Elegant pleated skirt"
    },
    {
      id: 28,
      name: "Culotte Pants",
      price: 3799,
      category: "Women",
      image: "/images/products/bottom3.jpg",
      description: "Modern culotte pants"
    },
    {
      id: 29,
      name: "Shorts",
      price: 2499,
      category: "Women",
      image: "/images/products/bottom4.jpg",
      description: "Comfortable summer shorts"
    },
    {
      id: 30,
      name: "Pencil Skirt",
      price: 3499,
      category: "Women",
      image: "/images/products/bottom5.jpg",
      description: "Professional pencil skirt"
    },

    // More Accessories
    {
      id: 31,
      name: "Statement Necklace",
      price: 2499,
      category: "Accessories",
      image: "/images/products/necklace1.jpg",
      description: "Bold statement necklace"
    },
    {
      id: 32,
      name: "Wristwatch",
      price: 5999,
      category: "Accessories",
      image: "/images/products/watch1.jpg",
      description: "Elegant wristwatch"
    },
    {
      id: 33,
      name: "Scarf",
      price: 1799,
      category: "Accessories",
      image: "/images/products/scarf1.jpg",
      description: "Stylish silk scarf"
    },
    {
      id: 34,
      name: "Backpack",
      price: 3999,
      category: "Accessories",
      image: "/images/products/backpack1.jpg",
      description: "Practical and stylish backpack"
    },
    {
      id: 35,
      name: "Hair Accessories",
      price: 999,
      category: "Accessories",
      image: "/images/products/hair1.jpg",
      description: "Set of decorative hair accessories"
    },

    // More Men's Items
    {
      id: 36,
      name: "Blazer",
      price: 7999,
      category: "Men",
      image: "/images/products/blazer1.jpg",
      description: "Classic formal blazer"
    },
    {
      id: 37,
      name: "Sweater",
      price: 4499,
      category: "Men",
      image: "/images/products/sweater1.jpg",
      description: "Warm and comfortable sweater"
    },
    {
      id: 38,
      name: "Jacket",
      price: 6999,
      category: "Men",
      image: "/images/products/jacket1.jpg",
      description: "Stylish casual jacket"
    },
    {
      id: 39,
      name: "Tie",
      price: 1499,
      category: "Men",
      image: "/images/products/tie1.jpg",
      description: "Elegant silk tie"
    },
    {
      id: 40,
      name: "Polo Shirt",
      price: 2499,
      category: "Men",
      image: "/images/products/polo1.jpg",
      description: "Classic polo shirt"
    },

    // More Women's Items
    {
      id: 41,
      name: "Cardigan",
      price: 3999,
      category: "Women",
      image: "/images/products/cardigan1.jpg",
      description: "Cozy knit cardigan"
    },
    {
      id: 42,
      name: "Blouse",
      price: 3299,
      category: "Women",
      image: "/images/products/blouse1.jpg",
      description: "Elegant silk blouse"
    },
    {
      id: 43,
      name: "Sweater",
      price: 3799,
      category: "Women",
      image: "/images/products/sweater2.jpg",
      description: "Warm and stylish sweater"
    },
    {
      id: 44,
      name: "Jacket",
      price: 5999,
      category: "Women",
      image: "/images/products/jacket2.jpg",
      description: "Trendy denim jacket"
    },
    {
      id: 45,
      name: "Scarf",
      price: 1999,
      category: "Women",
      image: "/images/products/scarf2.jpg",
      description: "Wool blend scarf"
    },

    // More Accessories
    {
      id: 46,
      name: "Bracelet",
      price: 1499,
      category: "Accessories",
      image: "/images/products/bracelet1.jpg",
      description: "Delicate gold bracelet"
    },
    {
      id: 47,
      name: "Wallet",
      price: 2999,
      category: "Accessories",
      image: "/images/products/wallet1.jpg",
      description: "Genuine leather wallet"
    },
    {
      id: 48,
      name: "Keychain",
      price: 799,
      category: "Accessories",
      image: "/images/products/keychain1.jpg",
      description: "Stylish keychain"
    },
    {
      id: 49,
      name: "Hair Clip",
      price: 599,
      category: "Accessories",
      image: "/images/products/hairclip1.jpg",
      description: "Decorative hair clip"
    },
    {
      id: 50,
      name: "Socks",
      price: 899,
      category: "Accessories",
      image: "/images/products/socks1.jpg",
      description: "Pack of 3 cotton socks"
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (product: Product) => {
    addToCart({ ...product, quantity: 1 });
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">Shop</h1>
          <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-field"
            />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="input-field"
            >
              <option value="all">All Categories</option>
              <option value="Dresses">Dresses</option>
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Accessories">Accessories</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-900">{formatPrice(product.price)}</span>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="btn-primary"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900">No products found</h3>
            <p className="mt-2 text-sm text-gray-500">
              Try adjusting your search or filter to find what you're looking for.
            </p>
          </div>
        )}
      </div>
    </div>
  );
} 