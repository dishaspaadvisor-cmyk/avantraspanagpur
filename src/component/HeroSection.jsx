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
          className={`absolute inset-0 transition-opacity duration-1000 ${current === index ? "opacity-100" : "opacity-0"
            }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={index === 0}
            className={`object-cover transition-transform duration-[7000ms] ${current === index ? "scale-110" : "scale-100"
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
            <span className="mb-5 inline-flex rounded-full border border-amber-400/50 bg-black/20 px-5 py-2 text-sm font-medium tracking-wider bg-cyan-500 backdrop-blur-md">
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
                className="rounded-full  bg-cyan-500 px-8 py-4 text-center font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-amber-400"
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
          
          {/* stats */}
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                { value: "4.9★", label: "Google Rating" },
                { value: "500+", label: "Happy Clients" },
                { value: "10+", label: "Spa Services" },
                { value: "24/7", label: "Support" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-slate-900/90 to-black/90 p-6 text-center backdrop-blur-lg transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]"
                >
                  {/* Aqua Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-cyan-400/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <h3 className="relative text-3xl font-bold text-cyan-400">
                    {item.value}
                  </h3>

                  <p className="relative mt-2 text-sm tracking-wide text-slate-300">
                    {item.label}
                  </p>

                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-cyan-400 to-teal-400 transition-all duration-500 group-hover:w-full" />
                </div>
              ))}
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
            className={`h-3 w-3 rounded-full transition-all duration-300 ${current === index
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