"use client";
import { useState } from "react";
import Link from "next/link";
import { CircleDotDashed, Menu, X, ChevronDown } from "lucide-react";
import { montserrat, outfit } from "../fonts/font";

const primaryLinks = [
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Ventures", href: "/ventures" },
  { name: "Events", href: "/events" },
  { name: "Contact", href: "/contact" },
];

const dropdownLinks = [
  { name: "About", href: "/about" },
  { name: "Blogs", href: "/blogs" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "FAQ", href: "/faq" },
  { name: "Team Members", href: "/team" },
  { name: "Courses", href: "/courses" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex gap-2 items-center cursor-pointer group"
          >
            <CircleDotDashed className="w-6 h-6 sm:w-7 sm:h-7 text-black transition-transform duration-500 group-hover:rotate-180" />
            <span
              className={`${montserrat.className} text-lg sm:text-xl font-bold tracking-wide`}
            >
              Ashvini Corp.
            </span>
          </Link>

          {/* --- DESKTOP MENU --- */}
          <div className="hidden md:block">
            <ul
              className={`${outfit.className} flex gap-8 lg:gap-10 text-sm font-medium text-gray-600`}
            >
              {primaryLinks.map((link) => (
                <li key={link.name} className="relative">
                  <Link
                    href={link.href}
                    className="group flex flex-col items-center text-gray-600 transition-colors hover:text-black"
                  >
                    {link.name}
                    <span className="h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}

              {/* More (desktop dropdown) */}
              <li
                className="relative"
                onMouseEnter={() => setIsMoreOpen(true)}
                onMouseLeave={() => setIsMoreOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setIsMoreOpen((prev) => !prev)}
                  className="group flex flex-col items-center text-gray-600 transition-colors hover:text-black"
                  aria-haspopup="true"
                  aria-expanded={isMoreOpen}
                >
                  <div className="flex items-center gap-1">
                    <span>More</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isMoreOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  <span className="h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full" />
                </button>

                <div
                  className={`absolute right-0 top-full pt-4 w-48 transition-all duration-200 ${
                    isMoreOpen
                      ? "pointer-events-auto opacity-100 translate-y-0"
                      : "pointer-events-none opacity-0 translate-y-2"
                  }`}
                >
                  <div className="rounded-2xl border border-gray-100 bg-white p-2 shadow-xl">
                    {dropdownLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="flex items-center rounded-xl px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-black"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className={`${outfit.className} text-xs font-bold border border-black px-6 py-2.5 rounded-full hover:bg-black hover:text-white transition-all duration-300 active:scale-95`}
            >
              CONTACT ASHWINI
            </Link>
          </div>

          {/* --- MOBILE TOGGLE BUTTON --- */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE MENU (NO DROPDOWN) --- */}
      <div
        className={`md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-200 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className={`${outfit.className} flex flex-col gap-6 px-8 py-8 text-base font-medium`}
        >
          {/* Primary links */}
          {primaryLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-700"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          {/* More section – just plain links, NOT a dropdown */}
          <div className="rounded-2xl bg-gray-50 p-4">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
              More
            </p>
            <div className="mt-3 flex flex-col gap-2">
              {dropdownLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-gray-600"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile CTA */}
          <Link
            href="/contact"
            className="text-xs font-bold bg-black text-white px-8 py-3 rounded-full text-center hover:bg-gray-800 transition-all"
            onClick={() => setIsOpen(false)}
          >
            CONTACT ASHWINI
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
