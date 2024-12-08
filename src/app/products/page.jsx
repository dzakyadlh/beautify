'use client';

import React, { useState } from 'react';
import { ProductCard } from '@/components/customCards';

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');
  const [products, setProducts] = useState([
    // Sample product data
    {
      id: 1,
      image: '/images/product1.jpg',
      title: 'Facial Cleanser',
      feature: 'Gentle formula for all skin types',
      category: 'Skincare',
    },
    {
      id: 2,
      image: '/images/product2.jpg',
      title: 'Moisturizer',
      feature: 'Hydrates and soothes dry skin',
      category: 'Skincare',
    },
    {
      id: 3,
      image: '/images/product3.jpg',
      title: 'Lip Balm',
      feature: 'Nourishes and protects your lips',
      category: 'Lip Care',
    },
    {
      id: 4,
      image: '/images/product4.jpg',
      title: 'Sunscreen',
      feature: 'SPF 50+ for ultimate sun protection',
      category: 'Sun Care',
    },
  ]);

  // Filter products based on search term and category
  const filteredProducts = products.filter(
    (product) =>
      (category === 'All' || product.category === category) &&
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <React.Fragment>
      <div className="w-full min-h-screen p-10 bg-gray-100 flex flex-col gap-10 pt-28">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
          <h1 className="text-3xl font-bold text-gray-800">Our Products</h1>
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search for products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:w-1/2 px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Categories */}
        <div className="flex gap-5 overflow-x-auto">
          {['All', 'Skincare', 'Lip Care', 'Sun Care'].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-full ${
                category === cat
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                title={product.title}
                feature={product.feature}
              />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No products found.
            </p>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}
