'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-green-900">
      <div className="mx-6 ">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center my-4">
            <Link href="/">
              <Image
                src="/logoFarm.png" // Replace with your image path
                alt="FarmHelp Logo"
                width={170}
                height={120}
                className="mr-2"
              />
            </Link>
          </div>
          <div className="hidden md:flex justify-end flex-1">
            <div className="ml-10 flex items-baseline space-x-6 text-xl">
              <Link href="/" className="text-white hover:text-gray-300">
                Home
              </Link>
              <Link href="/about" className="text-white hover:text-gray-300">
                About
              </Link>
              <Link href="/Services" className="text-white hover:text-gray-300">
                Services
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            {/* Mobile menu button */}
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`transition-transform duration-300 ease-in-out transform ${isMobileMenuOpen ? 'rotate-90' : 'rotate-0'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                style={{ transitionProperty: 'transform' }} // Add smooth transition
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, toggle classes based on menu state */}
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
          <Link href="/" className="text-white block hover:text-gray-300">
            Home
          </Link>
          <Link href="/about" className="text-white block hover:text-gray-300">
            About
          </Link>
          <Link href="/services" className="text-white block hover:text-gray-300">
            Services
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
