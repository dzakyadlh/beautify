'use client';

import { Avatar } from '@chakra-ui/react';
import {
  faBars,
  faBell,
  faCartShopping,
  faMultiply,
} from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { NavIcon, NavLink } from './navlink';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      offset: 100, // offset from the viewport
    });
    AOS.refresh();
  }, []);

  return (
    <nav className="bg-beige fixed top-0 left-0 right-0 z-10 flex items-center justify-between px-10 py-5 border-black border-b">
      <div className="flex items-center">
        <img src="/icons/beautify.png" className="h-8" alt="Beautify Logo" />
        <NavLink href="" text="Beautify" />
      </div>
      <ul className="max-lg:hidden flex items-center gap-10">
        <li>
          <NavLink href="/" text="Home" />
        </li>
        <li>
          <NavLink href="/products" text="Products" />
        </li>
        <li>
          <NavLink href="/about-us" text="About Us" />
        </li>
        <li>
          <NavLink href="/community" text="Community" />
        </li>
        <li>
          <NavLink href="/blogs" text="Blogs" />
        </li>
      </ul>
      <div className="flex items-center gap-5">
        <Link href="/cart">
          <NavIcon icon={faCartShopping} />
        </Link>
        <Link href="/profile" className="max-lg:hidden">
          <Avatar size="sm" name="" src="/images/kaslana3.jpg" />
        </Link>
        <button
          className="lg:hidden"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          <NavIcon icon={faBars} />
        </button>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-5 right-5 bg-beige flex flex-col rounded-md border border-black"
          >
            <button
              className="absolute top-0 right-0"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <NavIcon icon={faMultiply} />
            </button>
            <div className="flex items-center gap-4 p-5 pr-20 border-b border-black">
              <Avatar size="md" name="" src="/images/kaslana3.jpg" />
              <div className="flex flex-col">
                <p className="font-semibold">Hello, User!</p>
                <Link href="/profile" className="text-xs text-blue-500">
                  View profile
                </Link>
              </div>
            </div>
            <ul className="flex flex-col">
              <li>
                <NavLink href="/" text="Home" />
              </li>
              <li>
                <NavLink href="/products" text="Products" />
              </li>
              <li>
                <NavLink href="/about-us" text="About Us" />
              </li>
              <li>
                <NavLink href="/community" text="Community" />
              </li>
              <li>
                <NavLink href="/blogs" text="Blogs" />
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
