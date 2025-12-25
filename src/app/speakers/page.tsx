"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SPEAKERS } from "@/data/speakers";
import { ExternalLink, Mic2 } from "lucide-react";

// Assuming similar structure to Committee page but for speakers
// Images are in /assets/speakers/ or /assets/committee/ as per data

const SpeakersPage = () => {
    return (
        <main className="min-h-screen bg-background flex flex-col">
            <Navbar />

            {/* Header Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 -z-10"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                        Keynote <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Speakers</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Meet the thought leaders and visionaries sharing their insights at CHANDICON 2026.
                    </p>
                </div>
            </section>

            {/* Speakers Grid */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {SPEAKERS.map((speaker, index) => {
                        const imageSrc = speaker.image && speaker.image.length > 0 ? speaker.image : "/assets/logos/ieee-logo.png";

                        return (
                            <div
                                key={index}
                                className="group relative bg-white border border-gray-200 rounded-2xl overflow-hidden hover:bg-gray-50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 flex flex-col"
                            >
                                {/* Image Container */}
                                <div className="aspect-[4/5] overflow-hidden relative bg-gray-100">
                                    {speaker.image ? (
                                        <img
                                            src={imageSrc}
                                            alt={speaker.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            loading="lazy"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-gray-200">
                                            <Mic2 className="w-20 h-20 text-gray-400" />
                                        </div>
                                    )}

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>

                                    {/* Floating Social Link (if needed/available) */}
                                    {speaker.link && (
                                        <div className="absolute top-4 right-4 translate-x-10 group-hover:translate-x-0 transition-transform duration-300">
                                            <a
                                                href={speaker.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 bg-white/90 backdrop-blur-md rounded-full text-primary hover:bg-primary hover:text-white transition-colors flex items-center justify-center"
                                                title="View Profile"
                                            >
                                                <ExternalLink className="w-5 h-5" />
                                            </a>
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="p-6 flex-grow flex flex-col text-center relative z-10">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                                        {speaker.name}
                                    </h3>
                                    <p className="text-sm text-gray-600 font-medium leading-relaxed">
                                        {speaker.designation}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default SpeakersPage;
