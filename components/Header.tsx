"use client";

import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navLinks = [
  { name: "Accueil", href: "/" },
  { name: "À propos", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed w-full z-50 bg-gray-900 shadow-xl border-b border-indigo-900/50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="shrink-0">
          <Link
            href="/"
            className="text-2xl font-light tracking-wider text-white hover:text-indigo-400 transition"
          >
            Taramtech
          </Link>
        </div>

        <div className="hidden md:flex space-x-8">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-indigo-400 font-medium transition duration-150 relative group"
            >
              {item.name}
              <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-400 hover:text-white transition duration-150 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? (<XMarkIcon className="h-6 w-6" />) : (<Bars3Icon className="h-6 w-6" />)}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-gray-900 border-t border-indigo-900/50 absolute w-full shadow-lg"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={toggleMenu}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-indigo-700 hover:text-white transition duration-150"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
