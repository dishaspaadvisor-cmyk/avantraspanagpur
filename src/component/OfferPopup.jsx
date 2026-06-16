"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, Phone, MessageCircle } from "lucide-react";

export default function OfferPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Show first popup after 5 seconds
    const firstTimer = setTimeout(() => {
      setOpen(true);
    }, 5000);

    // Repeat every 5 seconds
    const interval = setInterval(() => {
      setOpen(true);
    }, 5000);

    return () => {
      clearTimeout(firstTimer);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {open && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-yellow-500/20 bg-zinc-950 shadow-[0_0_60px_rgba(234,179,8,0.15)]">

            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute right-3 top-3 z-20 rounded-full bg-black/70 p-2 text-white transition hover:bg-black"
            >
              <X size={18} />
            </button>

            {/* Offer Image */}
            <div className="relative">
              <Image
                src="/offer/offerimages (2).png"
                alt="Special Spa Offer"
                width={800}
                height={1000}
                priority
                className="w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              <div className="absolute bottom-4 left-4 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-cyan-500-400 backdrop-blur-sm">
                Limited Time Offer
              </div>
            </div>

            {/* Content */}
            <div className="p-6 text-center">
              <h2 className="text-2xl font-bold text-white">
                Exclusive Spa Package
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                Relax, rejuvenate, and refresh with our premium wellness
                treatments. Book now and enjoy special discounts.
              </p>

              <div className="mt-6 flex flex-col gap-3">
                <a
                  href="tel:+918624885133"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-yellow-400"
                >
                  <Phone size={18} />
                  Call Now
                </a>

                <a
                  href="https://wa.me/918624885133"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-500"
                >
                  <MessageCircle size={18} />
                  WhatsApp Booking
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}