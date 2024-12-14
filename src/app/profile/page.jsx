'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faShoppingCart,
  faReceipt,
  faCog,
  faInfoCircle,
  faUser,
  faSignOut,
  faUserGroup,
  faComment,
  faPhone,
  faShieldHalved,
} from '@fortawesome/free-solid-svg-icons';
import MenuItem from '@/components/menuItem';
import Link from 'next/link';

export default function ProfilePage() {
  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    avatar: '/images/kaslana3.jpg', // Replace with your avatar source
  };

  const profileItems = [
    { label: 'Edit Profile', icon: faUser },
    { label: 'Wishlists', icon: faHeart },
    { label: 'Cart', icon: faShoppingCart },
    { label: 'Transactions', icon: faReceipt },
  ];

  const otherItems = [
    { label: 'Community', icon: faUserGroup },
    { label: 'Post a Review', icon: faComment },
    { label: 'Customer Service', icon: faPhone },
    { label: 'Privacy Policy', icon: faShieldHalved },
    { label: 'About', icon: faInfoCircle },
  ];

  return (
    <React.Fragment>
      <div className="pt-28 min-h-screen w-full flex flex-col items-center bg-gray-100 py-10 gap-10">
        {/* Profile Section */}
        <div className="w-full max-w-xl bg-beige border border-black shadow-md rounded-lg p-5 flex flex-col items-center">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-24 h-24 rounded-full object-cover mb-4"
          />
          <h2 className="text-xl font-semibold">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
        </div>

        <div className="w-full max-w-xl flex flex-col gap-5">
          <h3 className="text-xl font-semibold">Profile</h3>
          <div className="w-full flex flex-col bg-white rounded-lg">
            {profileItems.map((item, index) => (
              <Link key={index} href={item.label.toLowerCase()}>
                <MenuItem key={index} item={item} />
              </Link>
            ))}
          </div>
        </div>

        <div className="w-full max-w-xl flex flex-col gap-5">
          <h3 className="text-xl font-semibold">Others</h3>
          <div className="w-full flex flex-col bg-white rounded-lg">
            {otherItems.map((item, index) => (
              <Link key={index} href={item.label.toLowerCase()}>
                <MenuItem item={item} />
              </Link>
            ))}
          </div>
        </div>

        <div className="w-full max-w-xl flex flex-col gap-5">
          <button className="w-full flex items-center justify-between bg-white rounded-lg px-5 py-3 hover:bg-tertiary hover:border border-black transition duration-300">
            <div className="flex items-center gap-4">
              <div className="w-8">
                <FontAwesomeIcon
                  icon={faSignOut}
                  className="text-xl text-primary"
                />
              </div>
              <span className="text font-medium">Sign Out</span>
            </div>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}
