"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, X } from "lucide-react";

import AboutPage from "./about/page";
import ContactPage from "./contact/page";

import HeroSection from "@/component/HeroSection";
import ServiceCard from "@/component/ServiceCard";
import OfferCard from "@/component/OfferCard";
import GalleryCard from "@/component/GalleryCard";
import OfferPopup from "@/component/OfferPopup";

import {
  siteData,
  services,
  faqs,
  galleryImages,
  offers,
} from "@/data/site";

export default function Home() {
  const { contact } = siteData;
  const { phone, whatsapp } = contact;

  const [selectedImage, setSelectedImage] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <OfferPopup />
      {/* Hero Section */}
      <HeroSection
        slides={siteData.heroSlides}
        contact={contact}
      />

      {/* About Section */}
      <AboutPage />

      {/* Services Section */}
      <section
        id="services"
        className="bg-black py-24"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mt-5 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Our Spa Services
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-gray-400">
              Indulge in luxurious spa experiences crafted to restore balance,
              relieve stress, and rejuvenate your body and mind.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                phone={phone}
                whatsapp={whatsapp}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section
        id="gallery"
        className="bg-black py-24"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mt-5 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Our Spa Gallery
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {galleryImages.map((item) => (
              <GalleryCard
                key={item.id}
                image={item.image}
                onView={() => setSelectedImage(item.image)}
              />
            ))}
          </div>

          {selectedImage && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute right-5 top-5 rounded-full bg-white p-2 text-black"
              >
                <X size={24} />
              </button>

              <div className="relative h-[80vh] w-full max-w-6xl">
                <Image
                  src={selectedImage}
                  alt="Gallery Preview"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Offer Section */}
      <section className="relative overflow-hidden bg-black py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">
              Limited Time Offers
            </span>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        className="bg-black py-20"
      >
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-14 text-center">
            <h2 className="text-4xl font-bold text-white md:text-5xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-5">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-yellow-500/20 bg-zinc-900"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <h3 className="pr-4 text-white">
                    {faq.question}
                  </h3>

                  <ChevronDown
                    className={`h-5 w-5 text-yellow-400 transition-transform ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    activeIndex === index
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-gray-400">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactPage />
    </>
  );
}