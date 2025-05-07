'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from './context/CartContext';
import toast from 'react-hot-toast';
import { formatPrice } from './utils/currency';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description?: string;
}

export default function HomePage() {
  const { addToCart } = useCart();

  const featuredProducts: Product[] = [
    {
      id: 1,
      name: "Summer Floral Dress",
      price: 3999,
      category: "Dresses",
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&auto=format&fit=crop&q=60",
      description: "Beautiful summer dress with floral pattern"
    },
    {
      id: 2,
      name: "Elegant Evening Dress",
      price: 6999,
      category: "Dresses",
      image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&auto=format&fit=crop&q=60",
      description: "Stunning evening dress for special occasions"
    },
    {
      id: 3,
      name: "Classic White Shirt",
      price: 2999,
      category: "Men",
      image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=800&auto=format&fit=crop&q=60",
      description: "Classic white shirt for any occasion"
    },
    {
      id: 4,
      name: "Casual Denim Shirt",
      price: 3499,
      category: "Men",
      image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=800&auto=format&fit=crop&q=60",
      description: "Comfortable denim shirt for casual wear"
    }
  ];

  const handleAddToCart = (product: Product) => {
    addToCart({ ...product, quantity: 1 });
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[600px]">
        <Image
          src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=1920&auto=format&fit=crop&q=60"
          alt="Fashion Collection"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Summer Collection 2024</h1>
            <p className="text-xl mb-8">Discover the latest trends in fashion</p>
            <Link href="/shop" className="btn-primary text-lg px-8 py-3">
              Shop Now
            </Link>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link href="/shop?category=women" className="group relative h-80 overflow-hidden rounded-lg">
            <Image
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&auto=format&fit=crop&q=60"
              alt="Women's Fashion"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <h3 className="text-2xl font-bold text-white">Women</h3>
            </div>
          </Link>
          <Link href="/shop?category=men" className="group relative h-80 overflow-hidden rounded-lg">
            <Image
              src="https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&auto=format&fit=crop&q=60"
              alt="Men's Fashion"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <h3 className="text-2xl font-bold text-white">Men</h3>
            </div>
          </Link>
          <Link href="/shop?category=accessories" className="group relative h-80 overflow-hidden rounded-lg">
            <Image
              src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&auto=format&fit=crop&q=60"
              alt="Accessories"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <h3 className="text-2xl font-bold text-white">Accessories</h3>
            </div>
          </Link>
        </div>
      </div>

      {/* Featured Products */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
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
          <div className="text-center mt-12">
            <Link href="/shop" className="btn-primary text-lg px-8 py-3">
              View All Products
            </Link>
          </div>
        </div>
      </div>

      {/* Special Offers */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-indigo-600 rounded-lg overflow-hidden">
          <div className="px-6 py-12 sm:px-12 lg:px-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Special Offer
              </h2>
              <p className="text-xl text-indigo-100 mb-8">
                Get 20% off on your first purchase
              </p>
              <Link href="/shop" className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-md font-semibold hover:bg-indigo-50 transition-colors">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-lg font-semibold mb-2">Free Shipping</h3>
              <p className="text-gray-600">On orders above ₹4999</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-lg font-semibold mb-2">Easy Returns</h3>
              <p className="text-gray-600">30 days return policy</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-lg font-semibold mb-2">Secure Payments</h3>
              <p className="text-gray-600">100% secure checkout</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 