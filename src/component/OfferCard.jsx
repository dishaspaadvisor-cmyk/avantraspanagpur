import Image from "next/image";
import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";
export default function OfferCard({ image, phone, whatsapp, id }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 transition-all duration-500 hover:-translate-y-3 hover:border-yellow-500/50 hover:shadow-[0_20px_50px_rgba(234,179,8,0.2)] ">
      {/* Offer Image */}
      <div className="relative h-[500px] sm:h-[550px] lg:h-[600px] overflow-hidden bg-black">
        <Image
          src={image}
          alt={`Offer ${id}`}
          fill
          priority
          quality={100}
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
          className="object-contain transition duration-700 group-hover:scale-105"
        />
      </div>

      {/* Desktop Hover Overlay */}
      <div className="absolute inset-0 hidden items-end justify-center bg-black/60 p-6 opacity-0 transition-all duration-500 group-hover:opacity-100 md:flex">
        <div className="flex w-full gap-3">
          <Link
            href={`https://wa.me/${whatsapp.replace("+", "")}`}
            target="_blank"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700"
          >
            <MessageCircle size={20} />
            WhatsApp
          </Link>

          <Link
            href={`tel:${phone}`}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-yellow-500 py-3 font-semibold text-black transition hover:bg-yellow-400"
          >
            <Phone size={20} />
            Call Now
          </Link>
        </div>
      </div>

      {/* Mobile Buttons */}
      <div className="flex gap-3 p-5 md:hidden">
        <Link
          href={`https://wa.me/${whatsapp.replace("+", "")}`}
          target="_blank"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-green-600 py-3 text-sm font-semibold text-white"
        >
          <MessageCircle size={18} />
          WhatsApp
        </Link>

        <Link
          href={`tel:${phone}`}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-yellow-500 py-3 text-sm font-semibold text-black"
        >
          <Phone size={18} />
          Call Now
        </Link>
      </div>
    </div>
  );
}