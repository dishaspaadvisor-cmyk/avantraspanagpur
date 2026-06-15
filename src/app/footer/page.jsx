"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaPinterestP } from "react-icons/fa";

export default function Footer() {
  return (<footer className="relative overflow-hidden border-t border-amber-500/10 bg-black text-white">
    {/* Subtle Glow */} <div className="absolute inset-0"> <div className="absolute left-0 top-0 h-52 w-52 rounded-full bg-amber-500/5 blur-[100px]" /> <div className="absolute right-0 bottom-0 h-52 w-52 rounded-full bg-amber-500/5 blur-[100px]" /> </div>

    ```
    <div className="relative mx-auto max-w-7xl px-6 py-10">
      <div className="grid gap-8 md:grid-cols-3">
        {/* Logo & About */}
        <div>
          <Image
            src="/logo/Avantara spa nagpur.png"
            alt="Avantara Spa Nagpur"
            width={500}
            height={200}
            priority
            className="mb-4 h-16 w-auto object-contain"
          />

          <p className="max-w-sm text-sm leading-relaxed text-gray-400">
            Luxury wellness therapies, relaxing massages, and rejuvenating spa
            experiences crafted to refresh your body and mind.
          </p>

          {/* Social */}
        
          <div className="mt-5 flex gap-2">
            <a
              href="https://www.facebook.com/Avantra.Nagpur/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-blue-500 hover:text-blue-500"
            >
              <FaFacebookF size={16} />
            </a>

            <a
              href="https://www.linkedin.com/in/avantra-spa-nagpur/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-blue-600 hover:text-blue-600"
            >
              <FaLinkedinIn size={16} />
            </a>

            <a
              href="https://in.pinterest.com/avantraspa/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-red-600 hover:text-red-600"
            >
              <FaPinterestP size={16} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-4 text-base font-semibold text-amber-400">
            Quick Links
          </h3>

          <div className="grid grid-cols-2 gap-y-3 text-sm text-gray-400">
            <Link href="/" className="hover:text-amber-400">
              Home
            </Link>

            <Link href="/about" className="hover:text-amber-400">
              About
            </Link>

            <Link href="/services" className="hover:text-amber-400">
              Services
            </Link>

            <Link href="/gallery" className="hover:text-amber-400">
              Gallery
            </Link>

            <Link href="/offercard" className="hover:text-amber-400">
              Offers
            </Link>

            <Link href="/faqsection" className="hover:text-amber-400">
              FAQs
            </Link>

            <Link href="/contact" className="hover:text-amber-400">
              Contact
            </Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-4 text-base font-semibold text-amber-400">
            Contact
          </h3>

          <div className="space-y-4 text-sm text-gray-400">
            <div className="flex gap-3">
              <MapPin
                size={16}
                className="mt-0.5 flex-shrink-0 text-amber-400"
              />
              <p>
                Office No. 202, 2nd Floor, Gomti Apartment,
                <br />
                Plot No. 39,
                Khasra No. 31, Aura Building,
                <br />
                Law College Square, Dharampeth Road, Nagpur, Maharashtra 440001
              </p>
            </div>

            <div className="flex gap-3">
              <Phone
                size={16}
                className="mt-0.5 flex-shrink-0 text-amber-400"
              />

              <div>
                <a
                  href="tel:+918624885133"
                  className="block hover:text-amber-400"
                >
                  +918624885133
                </a>

                <a
                  href="tel:+917447448271"
                  className="block hover:text-amber-400"
                >
                  +7447448271
                </a>
              </div>
            </div>

            <div className="flex gap-3">
              <Mail
                size={16}
                className="mt-0.5 flex-shrink-0 text-amber-400"
              />

              <a
                href="mailto:avantraspa@gmail.com"
                className="hover:text-amber-400"
              >
                avantraspa@gmail.com
              </a>
            </div>


          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 border-t border-white/10 pt-4">
        <div className="flex flex-col items-center justify-between gap-2 text-center md:flex-row">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Avantara Spa Nagpur. All Rights
            Reserved.
          </p>

          <p className="text-xs tracking-[0.25em] text-amber-400/80">
            LUXURY • WELLNESS • RELAXATION
          </p>
        </div>
      </div>
    </div>
  </footer>
  );
}
