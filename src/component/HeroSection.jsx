"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function HeroSection({
  slides = [],
  contact = {},
}) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!slides.length) return;

    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(slider);
  }, [slides]);

  if (!slides.length) {
    return (
      <section className="flex h-screen items-center justify-center bg-black text-white">
        <h2>No Hero Slides Found</h2>
      </section>
    );
  }

  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            current === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={index === 0}
            className={`object-cover transition-transform duration-[7000ms] ${
              current === index ? "scale-110" : "scale-100"
            }`}
          />
        </div>
      ))}

      {/* Luxury Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            {/* Badge */}
            <span className="mb-5 inline-flex rounded-full border border-amber-400/50 bg-black/20 px-5 py-2 text-sm font-medium tracking-wider text-amber-400 backdrop-blur-md">
               Best Spa in Nagpur
            </span>            

            {/* Heading */}
            <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
              {slides[current].title}
            </h1>

            {/* Description */}
            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-gray-200 md:text-xl">
              Expert Staff Available. Our experienced therapists provide
              personalized treatments for complete wellness, relaxation,
              and rejuvenation.
            </p>

            {/* CTA Buttons */}
            <div className="mb-12 flex flex-col gap-4 sm:flex-row">
              <a
                href={`tel:${contact.phone}`}
                className="rounded-full bg-amber-500 px-8 py-4 text-center font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-amber-400"
              >
                 Call now
              </a>

              <a
                href={`https://wa.me/${contact.whatsapp?.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/40 bg-white/10 px-8 py-4 text-center font-semibold text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white hover:text-black"
              >
                WhatsApp
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-5 text-center backdrop-blur-md">
                <h3 className="text-2xl font-bold text-amber-400">
                  4.9★
                </h3>
                <p className="mt-1 text-sm text-gray-300">
                  Google Rating
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-5 text-center backdrop-blur-md">
                <h3 className="text-2xl font-bold text-amber-400">
                  500+
                </h3>
                <p className="mt-1 text-sm text-gray-300">
                  Happy Clients
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-5 text-center backdrop-blur-md">
                <h3 className="text-2xl font-bold text-amber-400">
                  10+
                </h3>
                <p className="mt-1 text-sm text-gray-300">
                  Spa Services
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-5 text-center backdrop-blur-md">
                <h3 className="text-2xl font-bold text-amber-400">
                  24/7
                </h3>
                <p className="mt-1 text-sm text-gray-300">
                  Support
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slider Dots */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              current === index
                ? "bg-amber-500 w-8"
                : "bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 right-6 hidden text-white lg:block">
        <div className="flex flex-col items-center">
          <span className="mb-2 text-xs uppercase tracking-widest">
            Scroll
          </span>
          <div className="h-10 w-[2px] bg-white/50"></div>
        </div>
      </div>
    </section>
  );
}