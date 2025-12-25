"use client";

import Navbar from "@/components/Navbar";
import { Check, Star, Award, Zap, Shield, Rocket, Mail, Trophy, Building2, Store } from "lucide-react";

// Sponsorship Data
const sponsorshipTiers = [
    {
        title: "Title Sponsor",
        price: "INR 5,00,000",
        icon: Trophy,
        color: "text-yellow-400",
        bg: "bg-yellow-400/10",
        border: "border-yellow-400/20",
        benefits: [
            'Special mention "Presented by"',
            "Inaugural ceremony presence",
            "10 minutes Presentation slot",
            "Main stage panels & Podium",
            "Logo on all materials & banners",
            "5mx5m Exhibition Space",
            "Complimentary 10 registrations",
            "Social media mentions"
        ]
    },
    {
        title: "Platinum Sponsor",
        price: "INR 3,00,000",
        icon: Star,
        color: "text-blue-200", // Platinum look
        bg: "bg-blue-200/10",
        border: "border-blue-200/20",
        benefits: [
            "Inaugural ceremony presence",
            "Main stage panels & Podium",
            "Gala dinner Invite",
            "Logo on all materials & banners",
            "4mx4m Exhibition Space",
            "Complimentary 5 registrations",
            "Acknowledgement at opening/closing"
        ]
    },
    {
        title: "Gold Sponsor",
        price: "INR 2,00,000",
        icon: Award,
        color: "text-amber-400", // Gold look
        bg: "bg-amber-400/10",
        border: "border-amber-400/20",
        benefits: [
            "Logo on banner, poster, hoarding",
            "4mx4m Exhibition Space",
            "Complimentary 3 registrations",
            "Acknowledgement at opening/closing"
        ]
    },
    {
        title: "Silver Sponsor",
        price: "INR 1,00,000",
        icon: Shield,
        color: "text-gray-300", // Silver look
        bg: "bg-gray-300/10",
        border: "border-gray-300/20",
        benefits: [
            "Logo on event banner",
            "3mx3m Exhibition Space",
            "Complimentary 2 registrations"
        ]
    }
];

const partnerTiers = [
    {
        title: "Academic Partner",
        price: "INR 50,000",
        icon: Building2,
        description: "Open to Academic institution/Colleges/Universities where IEEE Student branches exist.",
        benefits: [
            "Name displayed on event banner",
            "3mx3m Exhibition Space",
            "Showcase Activities & Innovations",
            "Complimentary 1 registration"
        ]
    },
    {
        title: "Exhibitor",
        price: "INR 50,000",
        icon: Store,
        description: "Showcase your latest technologies, products, and solutions to a targeted audience.",
        benefits: [
            "Space at exhibition venue",
            "Showcase Activities & Innovations",
            "Complimentary 1 registration"
        ]
    }
];

const SponsorshipPage = () => {
    return (
        <main className="min-h-screen bg-background flex flex-col">
            <Navbar />

            {/* Header Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 -z-10"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Become a <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Sponsor</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Connect with 700+ technology professionals, industry leaders, and researchers at CHANDICON 2026.
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-20">

                {/* Intro Text */}
                <section className="text-center max-w-4xl mx-auto">
                    <p className="text-gray-300 text-lg leading-relaxed">
                        CHANDICON 2026 offers a unique platform to showcase your services and solutions.
                        As one of the largest technology conferences in Asia Pacific, joining us as a sponsor puts your brand
                        front and center before top officials from the global tech industry.
                    </p>
                </section>

                {/* Main Sponsorship Tiers */}
                <section>
                    <div className="flex items-center gap-4 mb-10 justify-center">
                        <h2 className="text-3xl font-bold text-white">Sponsorship Packages</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {sponsorshipTiers.map((tier, index) => {
                            const Icon = tier.icon;
                            return (
                                <div
                                    key={index}
                                    className={`relative group bg-secondary/10 border ${tier.border} hover:bg-secondary/20 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col`}
                                >
                                    <div className={`w-14 h-14 rounded-full ${tier.bg} flex items-center justify-center mb-6`}>
                                        <Icon className={`w-8 h-8 ${tier.color}`} />
                                    </div>

                                    <h3 className={`text-xl font-bold ${tier.color} mb-2`}>{tier.title}</h3>
                                    <p className="text-2xl font-bold text-white mb-6">{tier.price}</p>

                                    <div className="h-px w-full bg-white/5 mb-6"></div>

                                    <ul className="space-y-3 mb-6 flex-grow">
                                        {tier.benefits.map((benefit, bIndex) => (
                                            <li key={bIndex} className="flex items-start text-sm text-gray-400">
                                                <Check className={`w-4 h-4 ${tier.color} mt-0.5 mr-2 flex-shrink-0`} />
                                                <span>{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <a
                                        href="mailto:ieeeCHANDICON2024@gmail.com"
                                        className={`w-full py-2.5 rounded-lg border ${tier.border} ${tier.color} text-center font-medium hover:bg-white/5 transition-colors mt-auto`}
                                    >
                                        Contact Us
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Other Opportunities */}
                <section>
                    <div className="flex items-center gap-4 mb-10">
                        <h2 className="text-3xl font-bold text-white">Partners & Exhibitors</h2>
                        <div className="h-px bg-white/10 flex-grow mt-2"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {partnerTiers.map((tier, index) => {
                            const Icon = tier.icon;
                            return (
                                <div key={index} className="bg-secondary/20 border border-white/5 rounded-2xl p-8 flex flex-col sm:flex-row gap-6 items-start">
                                    <div className="p-4 bg-primary/10 rounded-xl text-primary flex-shrink-0">
                                        <Icon className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-1">{tier.title}</h3>
                                        <p className="text-primary font-semibold mb-3">{tier.price}</p>
                                        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                                            {tier.description}
                                        </p>
                                        <ul className="space-y-2 mb-6">
                                            {tier.benefits.map((benefit, bIndex) => (
                                                <li key={bIndex} className="flex items-center text-sm text-gray-300">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3"></div>
                                                    {benefit}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-gradient-to-r from-primary/20 to-accent/20 border border-white/10 rounded-3xl p-12 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-3xl font-bold text-white mb-6">Interested in Sponsoring?</h2>
                        <p className="text-gray-300 mb-8">
                            Slots are limited and filled on a first-come, first-served basis.
                            Reach out to us today to secure your participation.
                        </p>
                        <a
                            href="mailto:ieeeCHANDICON2024@gmail.com"
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 rounded-full transition-all shadow-lg hover:scale-105"
                        >
                            <Mail className="w-5 h-5 mr-2" />
                            ieeeCHANDICON2024@gmail.com
                        </a>
                    </div>
                </section>

            </div>

            <footer className="py-8 text-center text-gray-500 text-sm border-t border-white/10 mt-auto">
                <p>&copy; 2026 IEEE CHANDICON. All rights reserved.</p>
            </footer>
        </main>
    );
};

export default SponsorshipPage;
