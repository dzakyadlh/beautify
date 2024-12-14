'use client';

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function CartPage() {
  // Mock data for the cart items
  const [cartItems, setCartItems] = useState([
    // Sample product data
    {
      id: 1,
      image: '/images/skincare1.jpg',
      title: 'Facial Cleanser',
      feature: 'Gentle formula for all skin types',
      category: 'Skincare',
      price: 100000,
      quantity: 1,
    },
    {
      id: 2,
      image: '/images/skincare2.jpg',
      title: 'Moisturizer',
      feature: 'Hydrates and soothes dry skin',
      category: 'Skincare',
      price: 100000,
      quantity: 1,
    },
    {
      id: 3,
      image: '/images/skincare5.jpg',
      title: 'Lip Balm',
      feature: 'Nourishes and protects your lips',
      category: 'Lip Care',
      price: 100000,
      quantity: 1,
    },
    {
      id: 4,
      image: '/images/skincare4.jpg',
      title: 'Sunscreen',
      feature: 'SPF 50+ for ultimate sun protection',
      category: 'Sun Care',
      price: 100000,
      quantity: 1,
    },
  ]);

  // Calculate the total price
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Handle quantity change
  const updateQuantity = (id, increment) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + increment) }
          : item
      )
    );
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <React.Fragment>
      <div className="min-h-screen w-full flex flex-col lg:flex-row gap-5 px-5 lg:px-20 py-10 pt-28 bg-gray-100">
        {/* Cart Items Section */}
        <div className="w-full lg:w-2/3 flex flex-col p-5 bg-white shadow-lg rounded-lg gap-5">
          <h2 className="text-2xl font-bold">Your Cart</h2>
          <ul className="flex flex-col gap-4">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between border-b pb-4 gap-5"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 rounded-md object-cover"
                  />
                  <div>
                    <h3 className="">{item.title}</h3>
                    <p className="font-semibold">
                      IDR {item.price.toLocaleString()}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <button
                    className="p-2 text-black rounded hover:bg-tertiary transition duration-300"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                  <div className="flex items-center gap-2 rounded border">
                    <button
                      className={`p-2 rounded transition duration-300 ${
                        item.quantity == 1
                          ? 'text-gray-300'
                          : 'text-black hover:bg-tertiary'
                      }`}
                      onClick={() => updateQuantity(item.id, -1)}
                      disabled={item.quantity == 1}
                    >
                      <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="p-2 rounded hover:bg-tertiary transition duration-300"
                      onClick={() => updateQuantity(item.id, 1)}
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Checkout Section */}
        <div className="h-fit w-full lg:w-1/3 flex flex-col bg-beige border border-black shadow-lg rounded-lg p-5">
          <h2 className="text-xl font-bold mb-5">Checkout Summary</h2>
          <ul className="flex flex-col gap-4">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex justify-between border-b border-black pb-2"
              >
                <span className="text-sm">{item.title}</span>
                <span className="text-sm">
                  IDR {(item.price * item.quantity).toLocaleString()}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-5">
            <div className="flex justify-between font-medium text-lg">
              <span>Total</span>
              <span>IDR {totalPrice.toLocaleString()}</span>
            </div>
            <Link href="/checkout">
              <button
                className={`w-full mt-5 flex items-center justify-center gap-4 border border-black rounded-md py-2 transition duration-300 ${
                  cartItems.length > 0
                    ? 'bg-tertiary text-black hover:bg-darkbeige'
                    : 'bg-gray-300 text-gray-600 cursor-not-allowed'
                }`}
                disabled={cartItems.length === 0}
              >
                <p className="font-semibold">Checkout</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
