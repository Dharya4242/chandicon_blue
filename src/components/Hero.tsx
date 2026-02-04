"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, ArrowRight, ArrowDown } from "lucide-react";

const Hero = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/images/college/pec_chowk.png"
                    alt="PEC Chowk"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Premium Gradient Overlay: Light theme oriented */}
                {/* A white gradient from bottom/left to ensure text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/50 via-white/50 to-white/10 backdrop-blur-[1px]"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-white/10"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 lg:py-32">
                <div className={`max-w-3xl transition-all duration-1000 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

                    {/* Pre-title */}
                    <div className="inline-flex items-center gap-2 mb-4">
                        <span className="h-px w-8 bg-primary"></span>
                        <span className="text-sm md:text-base font-bold text-primary tracking-[0.2em] uppercase leading-none">
                            IEEE Chandigarh Subsection International Conference
                        </span>
                    </div>

                    {/* Main Title */}
                    <h1 className="text-6xl md:text-8xl font-black text-gray-900 tracking-tight leading-[0.9] mb-8">
                        CHANDICON <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-accent drop-shadow-sm">
                            2026
                        </span>
                    </h1>

                    {/* Theme */}
                    <div className="relative mb-12 group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative px-6 py-4 bg-white/40 backdrop-blur-md rounded-xl border border-white/60 shadow-sm inline-block">
                            <p className="text-xl md:text-2xl font-semibold text-gray-800 tracking-tight">
                                <span className="text-primary mr-2 italic font-medium opacity-80">Theme:</span>
                                Emerging Technologies Shaping Tomorrow
                            </p>
                        </div>
                    </div>

                    {/* Info Cards */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-10">
                        <div className="flex items-center gap-3 bg-white/60 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/50 shadow-sm">
                            <Calendar className="w-5 h-5 text-primary" />
                            <span className="font-semibold text-gray-900">August 20-22, 2026</span>
                        </div>
                        <div className="flex items-center gap-3 bg-white/60 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/50 shadow-sm">
                            <MapPin className="w-5 h-5 text-accent" />
                            <span className="font-semibold text-gray-900">Chandigarh, India</span>
                        </div>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <Link href="/registration" className="w-full sm:w-auto h-14 px-8 rounded-full bg-gradient-to-r from-primary to-accent text-white font-bold text-lg flex items-center justify-center gap-2 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1 transition-all">
                            Register Now
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link href="/about" className="w-full sm:w-auto h-14 px-8 rounded-full bg-white/80 backdrop-blur-md text-gray-900 border border-white/60 font-bold text-lg flex items-center justify-center gap-2 hover:bg-white hover:border-white transition-all shadow-sm hover:shadow-md">
                            Learn More
                        </Link>
                    </div>

                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce hidden md:flex">
                <span className="text-sm text-gray-500 font-medium mb-2 uppercase tracking-widest">Scroll</span>
                <ArrowDown className="h-5 w-5 text-primary" />
            </div>

        </section>
    );
};

export default Hero;
