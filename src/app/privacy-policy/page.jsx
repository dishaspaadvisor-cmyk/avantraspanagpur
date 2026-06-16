export const metadata = {
  title: "Privacy Policy | Avanta Spa Nagpur",
  description: "Privacy Policy for Avanta Spa Nagpur.",
};

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: "Information We Collect",
      content:
        "We may collect personal information such as your name, phone number, email address, and appointment details when you contact us or book a service.",
    },
    {
      title: "How We Use Your Information",
      list: [
        "To manage appointments and bookings.",
        "To respond to inquiries and customer requests.",
        "To improve our services and website experience.",
        "To send service updates and promotional offers.",
      ],
    },
    {
      title: "Data Protection",
      content:
        "We implement appropriate security measures to protect your personal information from unauthorized access, disclosure, or misuse.",
    },
    {
      title: "Third-Party Services",
      content:
        "Our website may contain links to third-party websites. We are not responsible for the privacy practices of those websites.",
    },
    {
      title: "Cookies",
      content:
        "We may use cookies to improve user experience and analyze website traffic. You can disable cookies through your browser settings.",
    },
    {
      title: "Contact Us",
      content:
        "If you have any questions regarding this Privacy Policy, please contact Avanta Spa Nagpur through our contact page.",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-slate-950 to-black text-white">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-16 text-center">

          <h1 className="mt-6 text-4xl font-bold md:text-6xl">
            Privacy Policy
          </h1>

          <div className="mx-auto mt-4 h-1 w-24 rounded bg-gradient-to-r from-amber-400 to-yellow-600" />

          <p className="mx-auto mt-6 max-w-3xl text-slate-400">
            At Avanta Spa Nagpur, we value your privacy and are committed to
            protecting your personal information.
          </p>
        </div>

        <div className="space-y-6">
          {sections.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition duration-300 hover:border-amber-500/40 hover:bg-white/10"
            >
              <h2 className="mb-4 text-2xl font-semibol">
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
                      <span className="">•</span>
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