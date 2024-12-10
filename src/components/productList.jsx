'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ProductCard } from './customCards';
import { useRef } from 'react';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

export function ProductList({ products = [], error = null }) {
  const listRef = useRef(null);

  const scrollLeft = () => {
    if (listRef.current) {
      listRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (listRef.current) {
      listRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  if (error) {
    return (
      <div className="w-full flex flex-col px-5 md:px-20 mb-10">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">{title}</h2>
        <p className="text-red-500 font-semibold">{error}</p>
        <p className="text-red-500 text-sm italic">Try refreshing the page.</p>
      </div>
    );
  }

  return (
    <section className="w-full flex flex-col items-start">
      <div className="relative w-full">
        <button
          className="absolute -left-5 top-1/2 p-2 rounded-full bg-browncream hover:bg-brown text-white transition"
          onClick={scrollLeft}
          aria-label="Scroll Left"
        >
          <FontAwesomeIcon icon={faChevronLeft} className="text-lg" />
        </button>
        <button
          className="absolute -right-5 top-1/2 p-2 rounded-full bg-browncream hover:bg-brown text-white transition"
          onClick={scrollRight}
          aria-label="Scroll Right"
        >
          <FontAwesomeIcon icon={faChevronRight} className="text-lg" />
        </button>
        <ul
          ref={listRef}
          className="w-full flex justify-start gap-5 overflow-x-auto no-scrollbar whitespace-nowrap"
        >
          {products.length ? (
            products.map((product, index) => (
              <li key={index} className="flex-shrink-0 py-2">
                <motion.div className="w-60 h-80 flex flex-col shadow-md p-4 gap-2 rounded-lg border hover:bg-cream hover:border-browncream transition duration-200 overflow-clip">
                  <img
                    src={product?.image || '/images/default-product.jpg'}
                    alt={product?.title || 'Product'}
                    className="rounded-lg mb-4 w-full object-cover h-40"
                  />
                  <h4 className="text-lg font-semibold line-clamp-1">
                    {product?.title || 'Untitled Product'}
                  </h4>
                  <p className="text-sm text-wrap line-clamp-3">
                    {product?.feature || 'No description available.'}
                  </p>
                </motion.div>
              </li>
            ))
          ) : (
            <p className="text-center text-gray-500">No products available</p>
          )}
        </ul>
      </div>
    </section>
  );
}
