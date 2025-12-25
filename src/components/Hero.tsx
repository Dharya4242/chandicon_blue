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

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-white/50 shadow-sm backdrop-blur-md mb-8">
                        <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                        <span className="text-sm font-bold text-gray-800 tracking-wide uppercase">IEEE CHANDICON 2026</span>
                    </div>

                    {/* Title */}
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight leading-[1.1] mb-6">
                        Shaping the <br />
                        <span className=" bg-clip-text bg-gradient-to-r from-primary to-accent drop-shadow-sm">Future</span> of <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent drop-shadow-sm relative inline-block">
                            Industrial Intelligence
                            <svg className="absolute w-full h-3 -bottom-2 left-0 text-accent opacity-40" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99997C25.7925 3.37527 80.6276 0.125216 117.439 2.50021C163.455 5.46896 182.046 6.99997 197.681 6.99997" stroke="currentColor" strokeWidth="3"></path></svg>
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="text-lg md:text-xl text-gray-700 font-medium leading-relaxed mb-10 max-w-2xl drop-shadow-sm">
                        Join leading experts, researchers, and innovators at the premier IEEE conference. Explore the convergence of AI, IoT, and sustainable technologies in the City Beautiful.
                    </p>

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
