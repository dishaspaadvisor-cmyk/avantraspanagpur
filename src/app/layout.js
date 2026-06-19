import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


import Navbar from "@/component/navigation";
import Footer from "@/app/footer/page";

export const metadata = {
  title: "Spa Services | Avantra Spa Nagpur",
  description:
    "Explore premium spa services at Avantra Spa Nagpur including Swedish Massage, Thai Massage, Deep Tissue Massage, Hot Oil Massage, Four Hand Massage, and Foot Reflexology.",
  keywords: [
    "Spa Services Nagpur",
    "Massage Spa Nagpur",
    "Swedish Massage",
    "Thai Massage",
    "Deep Tissue Massage",
    "Hot Oil Massage",
    "Luxury Spa Nagpur",
    "Wellness Center Nagpur",
  ],
  openGraph: {
    title: "Premium Spa Services | Avantra Spa Nagpur",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/favicon/apple-touch-icon.png",
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});





export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
      <meta name="google-site-verification" content="6pl5z04jRmpTPNbPShYAFAXS6uZx9lqhhqmOVVLyoS8" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
        {/* Bottom Bar */}

      </body>
    </html>
  );
}