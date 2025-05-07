'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function OrderSuccessPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to home after 10 seconds
    const timeout = setTimeout(() => {
      router.push('/');
    }, 10000);

    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 text-center">
        <div className="text-6xl mb-4">🎉</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Order Placed Successfully!</h1>
        <p className="text-gray-600 mb-8">
          Thank you for your purchase. You will receive an email confirmation shortly.
        </p>
        <div className="space-y-4">
          <Link href="/" className="btn-primary block">
            Continue Shopping
          </Link>
          <p className="text-sm text-gray-500">
            You will be redirected to the homepage in 10 seconds...
          </p>
        </div>
      </div>
    </div>
  );
} 