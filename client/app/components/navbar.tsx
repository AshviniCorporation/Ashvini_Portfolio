"use client";
import React, { useState } from 'react';
import { CircleDotDashed, Menu, X } from 'lucide-react';
import { montserrat, outfit } from '../fonts/font'; // Assuming fonts are here based on previous code

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Navigation Links Data
  const navLinks = [
    { name: 'Venture', href: '#' },
    { name: 'Service', href: '#' },
    { name: 'Portfolio', href: '#' },
    { name: 'More', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto sm:px-8">
        <div className="flex justify-between items-center h-20">
          
          <div className="flex gap-2 items-center cursor-pointer group px-6">
            <CircleDotDashed className="w-6 h-6 sm:w-7 sm:h-7 text-black transition-transform duration-500 group-hover:rotate-180" />
            <span className={`${montserrat.className} text-lg sm:text-xl font-bold tracking-wide`}>
              Ashvini Corp.
            </span>
          </div>

          {/* --- DESKTOP MENU --- */}
          <div className="hidden md:block">
            <ul className={`${outfit.className} flex gap-8 lg:gap-10 text-sm font-medium text-gray-600`}>
              {navLinks.map((link) => (
                <li key={link.name} className="relative cursor-pointer group hover:text-black transition-colors">
                  {link.name}
                  {/* Animated Underline */}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                </li>
              ))}
            </ul>
          </div>

          {/* --- DESKTOP CTA BUTTON --- */}
          <div className="hidden md:block">
            <button className={`${outfit.className} text-xs font-bold border border-black px-6 py-2.5 rounded-full hover:bg-black hover:text-white transition-all duration-300 active:scale-95`}>
              CONTACT ASHWINI
            </button>
          </div>

          {/* --- MOBILE MENU TOGGLE --- */}
          <div className="md:hidden flex items-center px-6">
            <button onClick={() => setIsOpen(!isOpen)} className="text-black focus:outline-none">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE MENU OVERLAY --- */}
      {/* This creates a smooth slide-down effect */}
      <div
        className={`md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className={`${outfit.className} flex flex-col items-center gap-6 py-8 text-base font-medium`}>
          {navLinks.map((link) => (
            <li key={link.name} className="cursor-pointer hover:text-gray-500 transition-colors">
              {link.name}
            </li>
          ))}
          <li className="pt-2">
            <button className="text-xs font-bold bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-all">
              CONTACT ASHWINI
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;