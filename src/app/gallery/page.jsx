"use client";

import { useState } from "react";
import Image from "next/image";
import GalleryCard from "@/component/GalleryCard";
import {
  X,
  Images,
  Sparkles,
  Camera,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { galleryImages } from "@/data/site";

export default function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const nextImage = () => {
    setSelectedIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-black">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(234,179,8,0.12),transparent_55%)]" />
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-yellow-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-yellow-500/10 blur-3xl" />

      {/* Hero */}
      <section className="relative px-4 pt-24 pb-16 sm:px-6 lg:px-8 lg:pt-32">
        <div className="mx-auto max-w-7xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] bg-cyan-500-400">
            <Images size={16} />
            Luxury Spa Gallery
          </div>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Explore Our
            <span className="block  bg-clip-text bg-cyan-500">
              Wellness Sanctuary
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-zinc-400 sm:text-lg md:text-xl">
            Discover the elegance of our spa interiors, luxury treatment
            rooms, calming atmosphere, and premium wellness experiences
            crafted for complete relaxation and rejuvenation.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="relative px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 grid max-w-7xl gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6 backdrop-blur-sm">
            <Sparkles className="mb-4 bg-cyan-500-400" size={28} />
            <h3 className="text-xl font-semibold text-white">
              Luxury Interiors
            </h3>
            <p className="mt-3 text-zinc-400">
              Elegant spaces designed to deliver peace, comfort, and
              sophistication.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6 backdrop-blur-sm">
            <Camera className="mb-4 bg-cyan-500-400" size={28} />
            <h3 className="text-xl font-semibold text-white">
              Premium Experience
            </h3>
            <p className="mt-3 text-zinc-400">
              Every corner reflects luxury wellness and exceptional care.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6 backdrop-blur-sm">
            <Images className="mb-4 bg-cyan-500-400" size={28} />
            <h3 className="text-xl font-semibold text-white">
              Relaxing Environment
            </h3>
            <p className="mt-3 text-zinc-400">
              A tranquil atmosphere created for complete rejuvenation.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="relative px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="columns-1 gap-6 sm:columns-2 lg:columns-4">
            {galleryImages.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setSelectedIndex(index)}
                className="group relative mb-6 cursor-pointer overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900"
              >
                <Image
                  src={item.image}
                  alt={`Spa Gallery ${item.id}`}
                  width={600}
                  height={800}
                  className="h-auto w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="rounded-full  bg-cyan-500 px-5 py-3 font-semibold text-black">
                    View Image
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Luxury Spa Gallery in Nagpur
          </h2>

          <p className="mt-6 leading-relaxed text-zinc-400">
            Browse through our collection of spa interiors, wellness
            treatment rooms, relaxation spaces, and premium facilities.
            Every detail at Avantra Spa is designed to provide a calm,
            elegant, and rejuvenating experience for our guests.
          </p>
        </div>
      </section>

      {/* Modal */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-md">
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute right-4 top-4 rounded-full bg-white p-3 text-black transition hover:scale-110"
          >
            <X size={24} />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-3 rounded-full bg-white/10 p-3 text-white backdrop-blur-md transition hover:bg-white/20"
          >
            <ChevronLeft size={30} />
          </button>

          <div className="relative h-[80vh] w-full max-w-6xl">
            <Image
              src={galleryImages[selectedIndex].image}
              alt="Gallery Preview"
              fill
              priority
              className="object-contain"
            />
          </div>

          <button
            onClick={nextImage}
            className="absolute right-3 rounded-full bg-white/10 p-3 text-white backdrop-blur-md transition hover:bg-white/20"
          >
            <ChevronRight size={30} />
          </button>
        </div>
      )}
    </main>
  );
}