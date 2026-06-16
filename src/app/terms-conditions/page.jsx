export const metadata = {
  title: "Terms & Conditions | Avanta Spa Nagpur",
  description: "Terms and Conditions for Avanta Spa Nagpur.",
};

export default function TermsConditionsPage() {
  const sections = [
    {
      title: "Services",
      content:
        "Avanta Spa Nagpur provides wellness and spa services. All services are subject to availability and may be modified or discontinued without prior notice.",
    },
    {
      title: "Appointments & Bookings",
      list: [
        "Appointments should be booked in advance.",
        "Please arrive on time for your scheduled appointment.",
        "Late arrivals may result in reduced service time.",
        "Cancellation policies may apply.",
      ],
    },
    {
      title: "User Responsibilities",
      content:
        "Users agree to provide accurate information and use the website only for lawful purposes.",
    },
    {
      title: "Intellectual Property",
      content:
        "All content on this website, including text, images, logos, and graphics, is the property of Avanta Spa Nagpur and may not be copied or reproduced without permission.",
    },
    {
      title: "Limitation of Liability",
      content:
        "Avanta Spa Nagpur is not liable for any indirect, incidental, or consequential damages arising from the use of this website or our services.",
    },
    {
      title: "Changes to Terms",
      content:
        "We reserve the right to update these Terms & Conditions at any time. Continued use of the website constitutes acceptance of any changes.",
    },
    {
      title: "Contact Information",
      content:
        "For any questions regarding these Terms & Conditions, please contact us through our contact page.",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-slate-950 to-black text-white">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-16 text-center">
 

          <h1 className="mt-6 text-4xl font-bold md:text-6xl">
            Terms & Conditions
          </h1>

          <div className="mx-auto mt-4 h-1 w-24 rounded bg-gradient-to-r from-amber-400 to-yellow-600" />

          <p className="mx-auto mt-6 max-w-3xl text-slate-400">
            By accessing and using the Avanta Spa Nagpur website, you agree to
            comply with these Terms & Conditions.
          </p>
        </div>

        <div className="space-y-6">
          {sections.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition duration-300 hover:border-amber-500/40 hover:bg-white/10"
            >
              <h2 className="mb-4 text-2xl font-semibold text-amber-400">
                {item.title}
              </h2>

              {item.content && (
                <p className="leading-relaxed text-slate-300">
                  {item.content}
                </p>
              )}

              {item.list && (
                <ul className="space-y-3 text-slate-300">
                  {item.list.map((point, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-amber-400">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-amber-500/20 bg-amber-500/5 p-6 text-center">
          <p className="text-sm text-slate-400">
            Last Updated: June 2026
          </p>
        </div>
      </section>
    </main>
  );
}