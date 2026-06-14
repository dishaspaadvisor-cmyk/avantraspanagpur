"use client";

import Image from "next/image";
import { Award, HeartHandshake, Sparkles, Users } from "lucide-react";

export default function AboutPage() {
  return (<section className="relative overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black py-24 text-white">
    {/* Background Glow */} <div className="absolute inset-0"> <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-amber-500/10 blur-[150px]" /> <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-amber-500/10 blur-[150px]" /> </div>

    ```
    <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
      {/* Section Header */}


      {/* Main Content */}
      <div className="grid items-center gap-16 lg:grid-cols-2">
        {/* Image Section */}
        <div className="relative">
          <div className="overflow-hidden rounded-[32px] border border-white/10">
            <Image
              src="/about/aboutimage.png"
              alt="Avantra Spa Nagpur"
              width={700}
              height={800}
              priority
              className="h-[600px] w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>

          {/* Floating Badge */}
          <div className="absolute -bottom-8 -right-8 rounded-3xl border border-amber-500/20 bg-black/90 px-8 py-6 backdrop-blur-xl shadow-[0_0_40px_rgba(245,158,11,0.2)]">
            <h3 className="text-5xl font-bold text-amber-400">5+</h3>
            <p className="mt-2 text-gray-300">
              Years of Wellness Excellence
            </p>
          </div>
        </div>

        {/* Content */}
        <div>
          <span className="rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-2 text-sm font-medium text-amber-400">
            Premium Spa Destination
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
            Discover Complete
            <span className="block text-amber-400">
              Relaxation & Rejuvenation
            </span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-gray-300">
            Avantra Spa Nagpur is a luxury wellness retreat designed for
            those seeking peace, comfort, and renewal. Our tranquil
            atmosphere and expert therapists ensure a memorable spa
            experience that leaves you refreshed and energized.
          </p>

          <p className="mt-5 text-lg leading-relaxed text-gray-300">
            We specialize in premium massage therapies including Swedish
            Massage, Deep Tissue Therapy, Thai Massage, Aromatherapy, Body
            Polishing, Hot Oil Treatments, and customized wellness
            experiences tailored to your needs.
          </p>

          <p className="mt-5 text-lg leading-relaxed text-gray-300">
            Whether you're looking to reduce stress, recover from physical
            fatigue, or simply indulge in luxury self-care, Avantra Spa
            Nagpur offers an environment dedicated to your wellbeing.
          </p>

          {/* Features */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
              <Award className="mb-3 text-amber-400" size={24} />
              <h4 className="font-semibold">Certified Therapists</h4>
              <p className="mt-2 text-sm text-gray-400">
                Skilled professionals delivering exceptional treatments.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
              <HeartHandshake className="mb-3 text-amber-400" size={24} />
              <h4 className="font-semibold">Personalized Care</h4>
              <p className="mt-2 text-sm text-gray-400">
                Customized therapies based on your wellness goals.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
              <Users className="mb-3 text-amber-400" size={24} />
              <h4 className="font-semibold">500+ Happy Clients</h4>
              <p className="mt-2 text-sm text-gray-400">
                Trusted by guests seeking premium wellness experiences.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
              <Sparkles className="mb-3 text-amber-400" size={24} />
              <h4 className="font-semibold">Luxury Ambience</h4>
              <p className="mt-2 text-sm text-gray-400">
                Elegant interiors crafted for ultimate relaxation.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10">
            <a
              href="tel:+918624885133"
              className="inline-flex items-center rounded-full bg-amber-500 px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-amber-400"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-28 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl">
          <h3 className="text-5xl font-bold text-amber-400">500+</h3>
          <p className="mt-3 text-gray-300">Happy Clients</p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl">
          <h3 className="text-5xl font-bold text-amber-400">5+</h3>
          <p className="mt-3 text-gray-300">Years Experience</p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl">
          <h3 className="text-5xl font-bold text-amber-400">20+</h3>
          <p className="mt-3 text-gray-300">Spa Treatments</p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl">
          <h3 className="text-5xl font-bold text-amber-400">4.9★</h3>
          <p className="mt-3 text-gray-300">Customer Rating</p>
        </div>
      </div>


    </div>
  </section>
 );
}
