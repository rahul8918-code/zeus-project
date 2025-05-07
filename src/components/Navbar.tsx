import Link from 'next/link';
import { ShoppingCartIcon, UserIcon, HeartIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary">
              ZyraStore
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/products" className="text-gray-700 hover:text-primary">
              Products
            </Link>
            <Link href="/categories" className="text-gray-700 hover:text-primary">
              Categories
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary">
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/wishlist" className="text-gray-700 hover:text-primary">
              <HeartIcon className="h-6 w-6" />
            </Link>
            <Link href="/cart" className="text-gray-700 hover:text-primary">
              <ShoppingCartIcon className="h-6 w-6" />
            </Link>
            <Link href="/account" className="text-gray-700 hover:text-primary">
              <UserIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 