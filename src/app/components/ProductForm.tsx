'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ProductFormProps {
  onSubmit: (product: any) => void;
  initialData?: any;
}

export default function ProductForm({ onSubmit, initialData }: ProductFormProps) {
  const [formData, setFormData] = useState({
    name: initialData?.name || '',
    price: initialData?.price || '',
    category: initialData?.category || '',
    description: initialData?.description || '',
  });
  const [imagePreview, setImagePreview] = useState<string | null>(initialData?.image || null);
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formDataToSubmit = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSubmit.append(key, value);
    });
    if (imageFile) {
      formDataToSubmit.append('image', imageFile);
    }
    onSubmit(formDataToSubmit);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Product Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="mt-1 input-field"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Price</label>
        <input
          type="number"
          step="0.01"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          className="mt-1 input-field"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Category</label>
        <select
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          className="mt-1 input-field"
          required
        >
          <option value="">Select a category</option>
          <option value="Dresses">Dresses</option>
          <option value="Men">Men</option>
          <option value="Accessories">Accessories</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="mt-1 input-field"
          rows={3}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Product Image</label>
        <div className="mt-1 flex items-center space-x-4">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
            id="image-upload"
          />
          <label
            htmlFor="image-upload"
            className="cursor-pointer bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Choose Image
          </label>
          {imagePreview && (
            <div className="relative h-20 w-20">
              <Image
                src={imagePreview}
                alt="Product preview"
                fill
                className="object-cover rounded-md"
              />
            </div>
          )}
        </div>
      </div>

      <button type="submit" className="btn-primary">
        {initialData ? 'Update Product' : 'Add Product'}
      </button>
    </form>
  );
} 