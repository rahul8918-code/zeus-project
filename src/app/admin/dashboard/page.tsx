'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { formatPrice } from '../../utils/currency';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description?: string;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([
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
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: '',
    description: '',
    image: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.price || !formData.category) {
      toast.error('Please fill in all required fields');
      return;
    }

    const price = parseFloat(formData.price);
    if (isNaN(price) || price <= 0) {
      toast.error('Please enter a valid price');
      return;
    }

    const newProduct: Product = {
      id: editingProduct?.id || products.length + 1,
      name: formData.name,
      price: price,
      category: formData.category,
      description: formData.description,
      image: formData.image || '/images/products/placeholder.jpg'
    };

    if (editingProduct) {
      setProducts(products.map(p => p.id === editingProduct.id ? newProduct : p));
      toast.success('Product updated successfully');
    } else {
      setProducts([...products, newProduct]);
      toast.success('Product added successfully');
    }

    // Reset form and state
    setShowForm(false);
    setEditingProduct(null);
    setFormData({
      name: '',
      price: '',
      category: '',
      description: '',
      image: ''
    });
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      price: product.price.toString(),
      category: product.category,
      description: product.description || '',
      image: product.image
    });
    setShowForm(true);
  };

  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter(product => product.id !== id));
      toast.success('Product deleted successfully');
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingProduct(null);
    setFormData({
      name: '',
      price: '',
      category: '',
      description: '',
      image: ''
    });
  };

  const handleLogout = () => {
    router.push('/admin/login');
    toast.success('Logged out successfully');
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = '/images/products/placeholder.jpg';
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <div className="flex space-x-4">
            <Link href="/admin/orders" className="btn-primary">
              View Orders
            </Link>
            <button
              onClick={() => {
                setEditingProduct(null);
                setFormData({
                  name: '',
                  price: '',
                  category: '',
                  description: '',
                  image: ''
                });
                setShowForm(true);
              }}
              className="btn-primary"
            >
              Add Product
            </button>
            <button
              onClick={handleLogout}
              className="btn-secondary"
            >
              Logout
            </button>
          </div>
        </div>

        {showForm && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">
              {editingProduct ? 'Edit Product' : 'Add New Product'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="input-field mt-1"
                  placeholder="Enter product name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Price (₹) *</label>
                <input
                  type="number"
                  name="price"
                  required
                  min="0"
                  step="0.01"
                  value={formData.price}
                  onChange={handleChange}
                  className="input-field mt-1"
                  placeholder="Enter price"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Category *</label>
                <select
                  name="category"
                  required
                  value={formData.category}
                  onChange={handleChange}
                  className="input-field mt-1"
                >
                  <option value="">Select a category</option>
                  <option value="Dresses">Dresses</option>
                  <option value="Men">Men</option>
                  <option value="Women">Women</option>
                  <option value="Accessories">Accessories</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="input-field mt-1"
                  rows={3}
                  placeholder="Enter product description"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Image URL</label>
                <input
                  type="text"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  className="input-field mt-1"
                  placeholder="/images/products/example.jpg"
                />
                {formData.image && (
                  <div className="mt-2">
                    <p className="text-sm text-gray-500 mb-2">Image Preview:</p>
                    <div className="relative h-32 w-32">
                      <Image
                        src={formData.image}
                        alt="Preview"
                        fill
                        className="object-cover rounded-lg"
                        onError={handleImageError}
                      />
                    </div>
                  </div>
                )}
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="btn-secondary"
                >
                  Cancel
                </button>
                <button type="submit" className="btn-primary">
                  {editingProduct ? 'Update Product' : 'Add Product'}
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {products.map((product) => (
                <tr key={product.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-16 w-16 flex-shrink-0 relative">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="rounded-lg object-cover"
                          onError={handleImageError}
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {product.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {product.description}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {product.category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatPrice(product.price)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={() => handleEdit(product)}
                      className="text-indigo-600 hover:text-indigo-900 mr-4"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 