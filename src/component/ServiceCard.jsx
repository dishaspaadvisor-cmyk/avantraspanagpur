"use client";

import Image from "next/image";

export default function ServiceCard({
  service,
  phone,
  whatsapp,
}) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">
      
      {/* Image */}
      <div className="relative h-72 overflow-hidden">
        <Image
          src={service.image}
          alt={service.name}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <h3 className="absolute bottom-5 left-5 text-2xl font-bold text-white">
          {service.name}
        </h3>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="mb-6 text-gray-600">
          {service.description}
        </p>

        <div className="flex gap-3">
          <a
            href={`tel:${phone}`}
            className="flex-1 rounded-full bg-cyan-500 py-3 text-center font-semibold text-black transition hover:bg-amber-400"
          >
             Call
          </a>

          <a
            href={`https://wa.me/${whatsapp.replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-full bg-green-500 py-3 text-center font-semibold text-white transition hover:bg-green-600"
          >
             WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}