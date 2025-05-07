import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import { CartProvider } from './context/CartContext';
import Link from 'next/link';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ZyraStore - Fashion E-commerce',
  description: 'Your one-stop shop for fashion and accessories.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <header className="bg-white shadow-sm">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
              <Link href="/" className="text-2xl font-bold text-indigo-600">
                ZyraStore
              </Link>
              <div className="flex items-center space-x-4">
                <Link href="/shop" className="text-gray-600 hover:text-gray-900">
                  Shop
                </Link>
                <Link href="/cart" className="text-gray-600 hover:text-gray-900">
                  🛒 Cart
                </Link>
              </div>
            </nav>
          </header>
          {children}
          <Footer />
        </CartProvider>
        <Toaster position="top-right" />
      </body>
    </html>
  );
} 