"use client";

import Navbar from "@/components/Navbar";
import { Mail, MapPin, Phone, Clock, Send, Globe } from "lucide-react";

const ContactPage = () => {
    return (
        <main className="min-h-screen bg-background flex flex-col">
            <Navbar />

            {/* Header Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 -z-10"></div>
                <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Us</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Have questions? We're here to help. Reach out to the CHANDICON 2026 organizing committee.
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-20">

                <div className="grid lg:grid-cols-2 gap-12 items-start">

                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div className="bg-secondary/10 border border-white/5 rounded-3xl p-8 backdrop-blur-sm">
                            <h2 className="text-2xl font-bold text-white mb-8">Get in Touch</h2>

                            <div className="space-y-8">
                                <div className="flex items-start gap-5">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white mb-2">Conference Venue</h3>
                                        <p className="text-gray-400 leading-relaxed">
                                            Punjab Engineering College (Deemed to be University)<br />
                                            Sector 12, Chandigarh, 160012<br />
                                            India
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-5">
                                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent flex-shrink-0">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                                        <p className="text-gray-400 mb-1">For general inquiries and submissions:</p>
                                        <a href="mailto:ieeeCHANDICON2024@gmail.com" className="text-primary hover:text-white transition-colors font-medium">
                                            ieeeCHANDICON2024@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-5">
                                    <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center text-green-500 flex-shrink-0">
                                        <Globe className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white mb-2">Organizer</h3>
                                        <p className="text-gray-400">
                                            Department of Electronics and Communication Engineering<br />
                                            Punjab Engineering College
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-primary/20 to-accent/20 border border-white/10 rounded-3xl p-8 text-center">
                            <h3 className="text-xl font-bold text-white mb-4">Ready to Register?</h3>
                            <p className="text-gray-300 mb-6">
                                Don't miss the opportunity to be part of CHANDICON 2026. Secure your spot today.
                            </p>
                            <a
                                href="/registration"
                                className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-all"
                            >
                                Go to Registration
                            </a>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="h-full min-h-[500px] bg-secondary/10 border border-white/5 rounded-3xl overflow-hidden relative">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3428.3451028948007!2d76.78419437507749!3d30.764892274568705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ff282845c404b%3A0xc0844bf7cbdcc6e9!2sPunjab%20Engineering%20College!5e0!3m2!1sen!2sin!4v1704546578845!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0"
                        ></iframe>

                        {/* Overlay to ensure map text is readable if needed, though invert filter usually handles dark mode well enough or just makes it look cool */}
                        <div className="absolute inset-0 pointer-events-none border-4 border-white/5 rounded-3xl"></div>
                    </div>

                </div>

            </div>

            <footer className="py-8 text-center text-gray-500 text-sm border-t border-white/10 mt-auto">
                <p>&copy; 2026 IEEE CHANDICON. All rights reserved.</p>
            </footer>
        </main>
    );
};

export default ContactPage;
