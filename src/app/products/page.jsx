'use client';

import React, { useState } from 'react';
import { ProductCard } from '@/components/customCards';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

export default function ProductsPage() {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');
  const [products, setProducts] = useState([
    // Sample product data
    {
      id: 1,
      image: '/images/skincare1.jpg',
      title: 'Facial Cleanser',
      feature: 'Gentle formula for all skin types',
      category: 'Skincare',
    },
    {
      id: 2,
      image: '/images/skincare2.jpg',
      title: 'Moisturizer',
      feature: 'Hydrates and soothes dry skin',
      category: 'Skincare',
    },
    {
      id: 3,
      image: '/images/skincare5.jpg',
      title: 'Lip Balm',
      feature: 'Nourishes and protects your lips',
      category: 'Lip Care',
    },
    {
      id: 4,
      image: '/images/skincare4.jpg',
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
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-5">
          <h1 className="text-4xl font-bold text-gray-800">Our Products</h1>
          {/* Search Bar */}
          <div className="w-full xl:w-1/2 flex items-center justify-end gap-2">
            {isSearchExpanded ? (
              <motion.input
                initial={{ opacity: 0, x: 110 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 110 }}
                type="text"
                placeholder="Search for products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full sm:w-1/2 px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:border-tertiary"
              />
            ) : (
              <div className="hidden"></div>
            )}
            <button
              className="px-3 py-2 hover:bg-tertiary rounded-lg transition duration-300"
              onClick={() => {
                setIsSearchExpanded(!isSearchExpanded);
              }}
            >
              <FontAwesomeIcon icon={faSearch} className="text-xl" />
            </button>
          </div>
        </div>

        {/* Categories */}
        <div className="flex gap-5 overflow-x-auto">
          {['All', 'Skincare', 'Lip Care', 'Sun Care'].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-full ${
                category === cat
                  ? 'bg-tertiary text-black'
                  : 'bg-gray-200 text-gray-800 hover:bg-tertiary hover:text-black'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product List */}
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 3xl: gap-5">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
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
