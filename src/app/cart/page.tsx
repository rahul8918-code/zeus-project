'use client';

import { useCart } from '../context/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { formatPrice } from '../utils/currency';

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, total } = useCart();
  const router = useRouter();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Add some items to your cart to continue shopping.</p>
            <Link href="/shop" className="btn-primary">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="divide-y divide-gray-200">
            {items.map((item) => (
              <div key={item.id} className="p-6 flex items-center">
                <div className="relative h-24 w-24 flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <div className="ml-6 flex-1">
                  <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{formatPrice(item.price)}</p>
                  <div className="mt-4 flex items-center">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      -
                    </button>
                    <span className="mx-4 text-gray-900">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="ml-6 text-red-600 hover:text-red-800"
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div className="ml-6">
                  <p className="text-lg font-medium text-gray-900">
                    {formatPrice(item.price * item.quantity)}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-6 bg-gray-50">
            <div className="flex justify-between text-lg font-medium text-gray-900 mb-4">
              <p>Total</p>
              <p>{formatPrice(total)}</p>
            </div>
            <button
              onClick={() => router.push('/checkout')}
              className="w-full btn-primary"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 