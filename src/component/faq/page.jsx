"use client";

import { useState } from "react";
import {
  ChevronDown,
  Phone,
  MessageCircle,
  Sparkles,
} from "lucide-react";

export default function FAQSection({
  faqs = [],
  phone = "+918624885133",
  whatsapp = "918624885133",
}) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (<section
    id="faq"
    className="relative overflow-hidden bg-black py-16 lg:py-20"
  >
    {/* Background Glow */} <div className="absolute inset-0 overflow-hidden"> <div className="absolute left-0 top-0 h-60 w-60 rounded-full bg-yellow-500/10 blur-[120px]" /> <div className="absolute bottom-0 right-0 h-60 w-60 rounded-full bg-yellow-500/10 blur-[120px]" /> </div>
    
    <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
      {/* Header */}
      <div className="mb-12 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-sm font-medium text-yellow-400">
          <Sparkles size={14} />
          Frequently Asked Questions
        </div>

        <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
          Spa FAQs &
          <span className="block text-yellow-400">
            Wellness Information
          </span>
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-gray-400">
          Everything you need to know about our spa therapies,
          wellness treatments, and booking experience.
        </p>
      </div>

      {/* FAQ Items */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`overflow-hidden rounded-2xl border transition-all duration-300 ${activeIndex === index
                ? "border-yellow-500/40 bg-zinc-900"
                : "border-white/10 bg-zinc-950"
              }`}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex w-full items-center justify-between gap-4 p-5 text-left"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500 text-xs font-bold text-black">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="text-base font-semibold text-white md:text-lg">
                  {faq.question}
                </h3>
              </div>

              <ChevronDown
                size={20}
                className={`flex-shrink-0 text-yellow-400 transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""
                  }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${activeIndex === index
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
                }`}
            >
              <p className="px-5 pb-5 pl-16 text-sm leading-relaxed text-gray-400 md:text-base">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-12 rounded-3xl border border-yellow-500/20 bg-gradient-to-br from-zinc-900 to-black p-6 text-center md:p-8">
        <h3 className="text-2xl font-bold text-white md:text-3xl">
          Still Have Questions?
        </h3>

        <p className="mx-auto mt-3 max-w-xl text-gray-400">
          Our wellness consultants are ready to help you choose the perfect
          treatment and schedule your appointment.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href={`tel:${phone}`}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-yellow-500 px-6 py-3 font-semibold text-black transition hover:bg-yellow-400"
          >
            <Phone size={18} />
            Call Now
          </a>

          <a
            href={`https://wa.me/${whatsapp.replace("+", "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-500"
          >
            <MessageCircle size={18} />
            WhatsApp Us
          </a>
        </div>
      </div>
    </div>
  </section>
  );
}
