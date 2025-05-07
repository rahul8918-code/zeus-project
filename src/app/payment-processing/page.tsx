'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function PaymentProcessingPage() {
  const router = useRouter();

  useEffect(() => {
    // Simulate payment processing
    const timeout = setTimeout(() => {
      router.push('/order-success');
    }, 3000);

    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-indigo-600 mx-auto mb-4"></div>
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Processing Payment</h1>
        <p className="text-gray-600">
          Please wait while we process your payment...
        </p>
      </div>
    </div>
  );
} 