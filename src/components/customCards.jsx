'use client';

import { Avatar, Card, CardBody } from '@chakra-ui/react';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faOutlineHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { useState } from 'react';

export function ProductCard({ product }) {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <motion.div className="w-full flex flex-col shadow-md p-3 pb-5 gap-1 rounded-lg border hover:bg-cream hover:border-browncream transition duration-200">
      <img
        src={product['image']}
        alt={product['title']}
        className="rounded-lg mb-2 w-full object-cover h-48"
      />
      <div className="flex justify-between items-center">
        <h4 className="text-lg font-semibold line-clamp-1">
          {product['title']}
        </h4>
        <button
          onClick={() => {
            setIsFavorite(!isFavorite);
          }}
        >
          {isFavorite ? (
            <FontAwesomeIcon icon={faHeart} className="text-pink-500" />
          ) : (
            <FontAwesomeIcon icon={faOutlineHeart} />
          )}
        </button>
      </div>
      <p className="text-sm line-clamp-2">{product['feature']}</p>
      <p className="font-semibold text-green-500 mt-auto">$50</p>
    </motion.div>
  );
}

export function ReviewCard({ image, name, rate, title, review }) {
  return (
    <div className="w-full md:w-1/3 flex flex-col items-center shadow-md p-5 gap-4 rounded-lg border hover:border-browncream transition duration-300">
      <Avatar src={image} size="lg" />
      <p className="text-center font-semibold text-lg">{name}</p>
      <p className="text-center font-medium">{title}</p>
      <p className="text-center text-sm leading-relaxed">"{review}"</p>
    </div>
  );
}

export function StatsCard({ stats }) {
  return (
    <motion.div
      whileHover={{ scale: '1.05' }}
      className="flex flex-col items-center gap-5 text-center rounded-lg border border-browncream p-10 transition duration-300"
    >
      <h2 className="text-3xl font-medium">{stats['title']}</h2>
      <p className="text-6xl font-bold text-browncream">
        {stats['percentage']}%
      </p>
      <p className="text-xl">{stats['description']}</p>
    </motion.div>
  );
}

export function AddressCard({ address }) {
  return (
    <div className="w-full flex flex-col shadow-md rounded-lg border hover:border-browncream transition duration-300">
      <p className="font-medium p-5 border-b bg-cream">{address.name}</p>
      <p className="text-sm p-5">{`${address.address}, ${
        address.district ?? ''
      }, ${address.city}, ${address.state}, ${address.country}, ${
        address.postalCode
      }`}</p>
    </div>
  );
}
