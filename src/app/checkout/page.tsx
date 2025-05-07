'use client';

import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { formatPrice } from '../utils/currency';

export default function CheckoutPage() {
  const { items, total, clearCart } = useCart();
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateCard = (cardNumber: string) => {
    const firstDigit = cardNumber.charAt(0);
    if (firstDigit === '4') {
      return 'visa';
    } else if (firstDigit === '5') {
      return 'mastercard';
    }
    return null;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const cardType = validateCard(formData.cardNumber);
    if (!cardType) {
      toast.error('Please enter a valid Visa or Mastercard number');
      return;
    }

    // Here you would typically integrate with a payment processor
    router.push('/payment-processing');
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Add some items to your cart to proceed to checkout.</p>
            <button
              onClick={() => router.push('/shop')}
              className="btn-primary"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-6">Shipping Information</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="input-field mt-1"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="input-field mt-1"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="input-field mt-1"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <input
                  type="text"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  className="input-field mt-1"
                />
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">City</label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="input-field mt-1"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">State</label>
                  <input
                    type="text"
                    name="state"
                    required
                    value={formData.state}
                    onChange={handleChange}
                    className="input-field mt-1"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">ZIP Code</label>
                  <input
                    type="text"
                    name="zipCode"
                    required
                    value={formData.zipCode}
                    onChange={handleChange}
                    className="input-field mt-1"
                  />
                </div>
              </div>

              <h2 className="text-xl font-semibold mt-8 mb-6">Payment Information</h2>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Card Number</label>
                <input
                  type="text"
                  name="cardNumber"
                  required
                  value={formData.cardNumber}
                  onChange={handleChange}
                  className="input-field mt-1"
                  placeholder="1234 5678 9012 3456"
                  maxLength={16}
                />
                <p className="text-sm text-gray-500 mt-1">
                  Enter a Visa (starts with 4) or Mastercard (starts with 5) number
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
                  <input
                    type="text"
                    name="expiryDate"
                    required
                    value={formData.expiryDate}
                    onChange={handleChange}
                    className="input-field mt-1"
                    placeholder="MM/YY"
                    maxLength={5}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">CVV</label>
                  <input
                    type="text"
                    name="cvv"
                    required
                    value={formData.cvv}
                    onChange={handleChange}
                    className="input-field mt-1"
                    placeholder="123"
                    maxLength={3}
                  />
                </div>
              </div>

              <button type="submit" className="w-full btn-primary mt-8">
                Place Order
              </button>
            </form>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                  </div>
                  <p className="font-medium">{formatPrice(item.price * item.quantity)}</p>
                </div>
              ))}
              <div className="border-t pt-4">
                <div className="flex justify-between text-lg font-bold">
                  <p>Total</p>
                  <p>{formatPrice(total)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 