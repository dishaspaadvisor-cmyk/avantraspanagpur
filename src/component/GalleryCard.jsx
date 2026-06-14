"use client";

import Image from "next/image";
import { Eye } from "lucide-react";

export default function GalleryCard({ image, onView }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-zinc-900">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt="Spa Gallery"
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 transition duration-500 group-hover:opacity-100">
        <button
          onClick={onView}
          className="flex items-center gap-2 rounded-full bg-yellow-500 px-5 py-3 font-semibold text-black transition hover:scale-105"
        >
          <Eye size={18} />
          View
        </button>
      </div>
    </div>
  );
}