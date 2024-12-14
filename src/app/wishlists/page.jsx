'use client';

import React, { useState } from 'react';
import { ProductCard } from '@/components/customCards';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

export default function WishlistsPage() {
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

  return (
    <React.Fragment>
      <div className="w-full min-h-screen p-10 bg-gray-100 flex flex-col gap-10 pt-28">
        {/* Header */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-5">
          <h1 className="text-4xl font-bold text-gray-800">Your Wishlists</h1>
        </div>

        {/* Product List */}
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 3xl: gap-5">
          {products.length > 0 ? (
            products.map((product) => (
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
