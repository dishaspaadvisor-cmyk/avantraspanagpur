"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Offer", href: "/offers" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${scrolled
          ? "bg-black/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
        }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo/Avantara spa nagpur.png"
            alt="Avantara Spa Nagpur"
            width={400}
            height={150}
            priority
            className="mb-5 h-20 w-auto object-contain md:h-24"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium uppercase tracking-wide text-white transition duration-300 hover:text-amber-400"
            >
              {link.name}
            </Link>
          ))}

          <a
            href="tel:+918624885133"
            className="flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-amber-400"
          >
            <Phone size={18} />
            Call Now
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white lg:hidden"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden bg-black/95 transition-all duration-300 lg:hidden ${isOpen ? "max-h-screen py-6" : "max-h-0"
          }`}
      >
        <nav className="flex flex-col items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg text-white transition hover:text-cyan-600"
            >
              {link.name}
            </Link>
          ))}

          <a
            href="tel:+919999999999"
            className="rounded-full hover:text-cyan-600 px-6 py-3 font-semibold text-black"
          >
            Call Now
          </a>
        </nav>
      </div>
    </header>
  );
}