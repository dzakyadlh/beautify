'use client';

import {
  faDiscord,
  faFacebookF,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { NavIcon, NavLink } from './navbar/navlink';

export default function Footer() {
  return (
    <footer className="bg-beige border-t border-black pb-5 px-5">
      <div className="mx-auto w-full max-w-screen-xl py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          {/* Brand Logo */}
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              <img
                src="/icons/beautify.png"
                className="h-8 me-3"
                alt="Beautify Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">
                Beautify
              </span>
            </a>
          </div>

          {/* Navigation Sections */}
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            {/* Explore Section */}
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-black">
                Explore
              </h2>
              <ul className="text-black font-medium">
                <li className="mb-4">
                  <NavLink href="/shop" text="Shop" />
                </li>
                <li>
                  <NavLink href="/skincare-tips" text="Skincare Tips" />
                </li>
              </ul>
            </div>

            {/* Community Section */}
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-black">
                Community
              </h2>
              <ul className="text-black font-medium">
                <li className="mb-4">
                  <NavLink href="/about-us" text="About Us" />
                </li>
                <li>
                  <NavLink href="/contact" text="Contact Us" />
                </li>
              </ul>
            </div>

            {/* Legal Section */}
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-black">
                Legal
              </h2>
              <ul className="text-black font-medium">
                <li className="mb-4">
                  <NavLink href="/privacy-policy" text="Privacy Policy" />
                </li>
                <li>
                  <NavLink
                    href="/terms-and-conditions"
                    text="Terms & Conditions"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 sm:mx-auto border-black lg:my-8" />

        {/* Footer Bottom Section */}
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm sm:text-center text-black">
            © 2024{' '}
            <a href="#" className="">
              Beautify
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            {/* Social Media Links */}
            <a
              href="#facebook"
              className="flex items-center text-black hover:text-white"
            >
              <NavIcon icon={faFacebookF} />
              <span className="sr-only">Facebook page</span>
            </a>
            <a
              href="#twitter"
              className="flex items-center text-black hover:text-white ms-5"
            >
              <NavIcon icon={faTwitter} />
              <span className="sr-only">Twitter page</span>
            </a>
            <a
              href="#instagram"
              className="flex items-center text-black hover:text-white ms-5"
            >
              <NavIcon icon={faInstagram} />
              <span className="sr-only">Instagram page</span>
            </a>
            <a
              href="#discord"
              className="flex items-center text-black hover:text-white ms-5"
            >
              <NavIcon icon={faDiscord} />
              <span className="sr-only">Discord community</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
