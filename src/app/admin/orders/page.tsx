'use client';

import { useState } from 'react';
import { formatPrice } from '../../utils/currency';

interface Order {
  id: string;
  customerName: string;
  email: string;
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  date: string;
  items: {
    name: string;
    quantity: number;
    price: number;
  }[];
}

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([
    {
      id: 'ORD001',
      customerName: 'John Doe',
      email: 'john@example.com',
      total: 6999,
      status: 'pending',
      date: '2024-03-15',
      items: [
        {
          name: 'Elegant Evening Dress',
          quantity: 1,
          price: 6999
        }
      ]
    },
    {
      id: 'ORD002',
      customerName: 'Jane Smith',
      email: 'jane@example.com',
      total: 9498,
      status: 'processing',
      date: '2024-03-14',
      items: [
        {
          name: 'Classic White Shirt',
          quantity: 2,
          price: 2999
        },
        {
          name: 'Leather Crossbody Bag',
          quantity: 1,
          price: 4499
        }
      ]
    }
  ]);

  const updateOrderStatus = (orderId: string, newStatus: Order['status']) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Orders</h1>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Order ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {order.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div>{order.customerName}</div>
                      <div className="text-xs">{order.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {order.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatPrice(order.total)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${order.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : ''}
                        ${order.status === 'processing' ? 'bg-blue-100 text-blue-800' : ''}
                        ${order.status === 'shipped' ? 'bg-purple-100 text-purple-800' : ''}
                        ${order.status === 'delivered' ? 'bg-green-100 text-green-800' : ''}
                      `}>
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <select
                        value={order.status}
                        onChange={(e) => updateOrderStatus(order.id, e.target.value as Order['status'])}
                        className="input-field text-sm"
                      >
                        <option value="pending">Pending</option>
                        <option value="processing">Processing</option>
                        <option value="shipped">Shipped</option>
                        <option value="delivered">Delivered</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
} 