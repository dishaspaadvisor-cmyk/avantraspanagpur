"use client";

import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";

export default function ContactPage() {
    return (<section
        id="contact"
        className="relative overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black py-24 px-4"
    >
        {/* Background Glow */} <div className="absolute inset-0 pointer-events-none"> <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-yellow-500/10 blur-[140px]" /> <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-yellow-500/10 blur-[140px]" /> </div>

        ```
        <div className="relative max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
                <span className="inline-block px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 bg-cyan-500-400 text-sm font-semibold tracking-wide uppercase">
                    Contact Us
                </span>

                <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                    Book Your{" "}
                    <span className="bg-gradient-to-r bg-cyan-500 bg-clip-text text-transparent">
                        Spa Experience
                    </span>
                </h1>

                <p className="mt-6 max-w-3xl mx-auto text-gray-400 text-lg leading-relaxed">
                    Contact our wellness experts and schedule your relaxing spa
                    treatment today. Experience premium massage therapies, wellness
                    treatments, and complete rejuvenation at Avantra Spa Nagpur.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-10">
                {/* Contact Info */}
                <div className="space-y-6">
                    {/* Address */}
                    <div className="bg-gradient-to-br from-zinc-900 to-black rounded-3xl p-6 border border-yellow-500/20 backdrop-blur-xl shadow-[0_0_40px_rgba(234,179,8,0.08)] hover:shadow-[0_0_50px_rgba(234,179,8,0.15)] transition-all duration-300">
                        <div className="flex items-start gap-4">
                            <MapPin className= "bg-cyan-500-400 w-7 h-7 mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="font-bold text-xl text-white">
                                    Visit Our Spa
                                </h3>
                                <p className= "bg-cyan-500-400 font-semibold mt-1">
                                    Avantra Spa Nagpur
                                </p>
                                <p className="text-gray-400 mt-3 leading-relaxed">
                                    Premium Wellness & Relaxation Center
                                    <br />
                                    Office No. 202, 2nd Floor, Gomti Apartment, Plot No. 39,
                                    Khasra No. 31, Aura Building, Law College Square,
                                    Dharampeth Road, Nagpur, Maharashtra 440001
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="bg-gradient-to-br from-zinc-900 to-black rounded-3xl p-6 border border-yellow-500/20 backdrop-blur-xl shadow-[0_0_40px_rgba(234,179,8,0.08)] hover:shadow-[0_0_50px_rgba(234,179,8,0.15)] transition-all duration-300">
                        <div className="flex items-start gap-4">
                            <Phone className=" bg-cyan-500-400 w-7 h-7 mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="font-bold text-xl text-white">Call Us</h3>
                                <a
                                    href="tel:+918624885133"
                                    className="text-gray-400 hover:text-yellow-400 transition-colors"
                                >
                                    +91 86248 85133
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* WhatsApp */}
                    <div className="bg-gradient-to-br from-zinc-900 to-black rounded-3xl p-6 border border-yellow-500/20 backdrop-blur-xl shadow-[0_0_40px_rgba(234,179,8,0.08)] hover:shadow-[0_0_50px_rgba(234,179,8,0.15)] transition-all duration-300">
                        <div className="flex items-start gap-4">
                            <MessageCircle className="text-green-500 w-7 h-7 mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="font-bold text-xl text-white">
                                    WhatsApp Booking
                                </h3>
                                <a
                                    href="https://wa.me/918624885133"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-green-500 transition-colors"
                                >
                                    +91 86248 85133
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Hours */}
                    <div className="bg-gradient-to-br from-zinc-900 to-black rounded-3xl p-6 border border-yellow-500/20 backdrop-blur-xl shadow-[0_0_40px_rgba(234,179,8,0.08)] hover:shadow-[0_0_50px_rgba(234,179,8,0.15)] transition-all duration-300">
                        <div className="flex items-start gap-4">
                            <Clock className= "bg-cyan-500-400 w-7 h-7 mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="font-bold text-xl text-white">
                                    Business Hours
                                </h3>
                                <p className="text-gray-400">
                                    Monday – Sunday
                                    <br />
                                    10:00 AM – 10:00 PM
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-4 pt-4">
                        <a
                            href="tel:+918624885133"
                            className="bg-cyan-700 hover:bg-yellow-400 text-black px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105"
                        >
                            Call Now
                        </a>

                        <a
                            href="https://wa.me/918624885133"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105"
                        >
                            WhatsApp Booking
                        </a>
                    </div>
                </div>

                {/* Form */}
                <div className="bg-gradient-to-br from-zinc-900 via-zinc-950 to-black rounded-[32px] p-8 border border-yellow-500/20 shadow-[0_0_60px_rgba(234,179,8,0.08)]">
                    <h2 className="text-3xl font-bold text-white mb-2">
                        Book Appointment
                    </h2>

                    <p className="text-gray-400 mb-8">
                        Fill out the form below and our team will contact you shortly.
                    </p>

                    <form className="space-y-5">
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-yellow-400"
                        />

                        <input
                            type="tel"
                            placeholder="Phone Number"
                            className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-yellow-400"
                        />

                        <select className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-yellow-400">
                            <option>Choose a Service</option>
                            <option>Full Body Massage</option>
                            <option>Thai Massage</option>
                            <option>Deep Tissue Massage</option>
                            <option>Swedish Massage</option>
                            <option>Hot Oil Massage</option>
                            <option>Jacuzzi Massage</option>
                        </select>

                        <textarea
                            rows={5}
                            placeholder="Preferred time and requirements..."
                            className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-4 text-white resize-none focus:outline-none focus:border-yellow-400"
                        />

                        <button
                            type="submit"
                            className="w-full rounded-xl bg-gradient-to py-4 font-bold text-amber-50  bg-cyan-500 text-lg  duration-300 hover:scale-[1.02]"
                        >
                            Submit Booking Request
                        </button>
                    </form>
                </div>
            </div>

            {/* Google Map */}
            <section className="mt-24">
                <div className="text-center mb-10">
                    <span className="inline-block rounded-full bg-yellow-500/10 border border-yellow-500/20 px-4 py-2 text-sm font-semibold bg-cyan-500-400 uppercase">
                        Find Us
                    </span>

                    <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white">
                        Avantra Spa Nagpur
                    </h2>

                    <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                        Conveniently located in Nagpur, offering luxury wellness,
                        rejuvenation, and premium spa experiences.
                    </p>
                </div>

                <div className="overflow-hidden rounded-[32px] border border-yellow-500/20 bg-black shadow-[0_20px_60px_rgba(234,179,8,0.15)]">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14884.630490432652!2d79.0617109!3d21.1461246!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0be44049b5d%3A0x4cbbd03c69d6d623!2sAvantra%20Spa%20Nagpur!5e0!3m2!1sen!2sin!4v1781352942239!5m2!1sen!2sin"
                        title="Avantra Spa Nagpur Location"
                        className="h-[400px] md:h-[550px] lg:h-[650px] w-full"
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </section>
        </div>
    </section>
 );
}
