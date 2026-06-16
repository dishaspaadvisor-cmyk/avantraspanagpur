import { siteData, services } from "@/data/site";
import ServiceCard from "@/component/ServiceCard";


export default function ServicesPage() {
  const { contact } = siteData;

  return (
    <section className="relative overflow-hidden bg-black py-16 sm:py-20 lg:py-24">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(234,179,8,0.15),transparent_50%)]" />
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="mb-16 text-center lg:mb-20">
          <span className="inline-flex items-center rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] bg-cyan-500-400">
            Premium Treatments
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Luxury Spa
            <span className="block bg-gradient-to-r bg-cyan-500 bg-clip-text text-transparent">
              Services
            </span>
          </h1>

          {/* <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-zinc-400 sm:text-lg md:text-xl">
            Experience premium massage therapies and wellness treatments
            crafted to restore balance, reduce stress, and rejuvenate your
            body and mind.
          </p> */}
        </div>


        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              phone={contact.phone}
              whatsapp={contact.whatsapp}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20">
          <div className="relative overflow-hidden rounded-[32px] border border-yellow-500/20 bg-gradient-to-br from-zinc-900 to-zinc-950 p-8 text-center shadow-[0_0_60px_rgba(234,179,8,0.08)] md:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(234,179,8,0.15),transparent_60%)]" />

            <div className="relative">
              <span className="inline-flex rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-sm font-semibold bg-cyan-500">
                Wellness & Rejuvenation
              </span>

              <h2 className="mt-6 text-3xl font-bold text-white md:text-5xl">
                Ready To Relax?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-zinc-400">
                Book your spa appointment today and enjoy a premium wellness
                experience designed to refresh your body and mind.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <a
                  href={`tel:${contact.phone}`}
                  className="rounded-full  bg-cyan-500 px-8 py-4 font-bold text-black transition-all duration-300 hover:scale-105"
                >
                  Call Now
                </a>

                <a
                  href={`https://wa.me/${contact.whatsapp.replace("+", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-green-600 px-8 py-4 font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-green-500"
                >
                  WhatsApp Booking
                </a>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-4 border-t border-zinc-800 pt-8">
                <div>
                  <h3 className="text-2xl font-bold bg-cyan-500-400">
                    6+
                  </h3>
                  <p className="text-sm text-zinc-500">
                    Premium Services
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold bg-cyan-500-400">
                    100%
                  </h3>
                  <p className="text-sm text-zinc-500">
                    Relaxation
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold bg-cyan-500-400">
                    Daily
                  </h3>
                  <p className="text-sm text-zinc-500">
                    10AM - 10PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SEO Content */}
        <div className="mx-auto mt-20 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white">
            Best Spa Services In Nagpur
          </h2>

          <p className="mt-6 leading-relaxed text-zinc-400">
            Avantra Spa Nagpur offers luxury massage therapies including
            Swedish Massage, Thai Massage, Deep Tissue Massage, Hot Oil
            Massage, Four Hand Massage, and Foot Reflexology. Our premium
            wellness treatments are designed to provide complete relaxation,
            stress relief, and rejuvenation in a luxurious environment.
          </p>
        </div>
      </div>
    </section>
  );
}