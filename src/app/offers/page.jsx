"use client";

import { Sparkles, Gift, Crown } from "lucide-react";
import { offers, siteData } from "@/data/site";
import OfferCard from "@/component/OfferCard";

export default function OfferPage() {
  const { phone, whatsapp } = siteData.contact;

  return (
    <section
      id="offercard"
      className="relative overflow-hidden bg-black py-16 sm:py-20 lg:py-24"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(234,179,8,0.12),transparent_50%)]" />
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-yellow-500/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-yellow-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-4xl text-center sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-wider bg-cyan-500-400">
            <Sparkles size={16} />
            Special Spa Offers
          </div>

          <h2 className="mt-6 text-2xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-4xl">
            Exclusive Luxury
            <span className="block bg-cyan-500-400">
              Wellness Packages
            </span>
          </h2>
        </div>

        {/* Features */}
        <div className="mb-12 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5 text-center">
            <Gift className="mx-auto mb-3 bg-cyan-500-400" size={28} />
            <h3 className="font-semibold text-white">
              Exclusive Discounts
            </h3>
            <p className="mt-2 text-sm text-zinc-400">
              Premium spa services at special prices.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5 text-center">
            <Sparkles className="mx-auto mb-3 bg-cyan-500-400" size={28} />
            <h3 className="font-semibold text-white">
              Luxury Experience
            </h3>
            <p className="mt-2 text-sm text-zinc-400">
              Relax in a peaceful and elegant environment.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5 text-center">
            <Crown className="mx-auto mb-3 bg-cyan-500-400" size={28} />
            <h3 className="font-semibold text-white">
              Expert Therapists
            </h3>
            <p className="mt-2 text-sm text-zinc-400">
              Professional treatments tailored to your needs.
            </p>
          </div>
        </div>

        {/* Offer Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {offers.map((offer) => (
            <OfferCard
              key={offer.id}
              id={offer.id}
              image={offer.image}
              phone={phone}
              whatsapp={whatsapp}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 rounded-3xl border border-yellow-500/20 bg-zinc-900/70 p-6 text-center backdrop-blur-sm sm:p-8 lg:p-10">
          <h3 className="text-2xl font-bold text-white sm:text-3xl">
            Book Your Wellness Experience Today
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            Limited-time spa offers are available. Reserve your appointment
            now and enjoy a premium relaxation experience.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href={`tel:${phone}`}
              className="rounded-full bg-cyan-500 px-8 py-3 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-yellow-400"
            >
              Call Now
            </a>

            <a
              href={`https://wa.me/${whatsapp.replace("+", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-green-500 bg-green-600 px-8 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-green-500"
            >
              WhatsApp Booking
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}