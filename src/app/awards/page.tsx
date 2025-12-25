"use client";

import Navbar from "@/components/Navbar";
import { Award, Plane, Star, Mail, Trophy, Medal, GraduationCap, ArrowRight } from "lucide-react";

const AwardsPage = () => {
    return (
        <main className="min-h-screen bg-background flex flex-col">
            <Navbar />

            {/* Header Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 -z-10"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Awards & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Grants</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Recognizing excellence in research and supporting student participation at CHANDICON 2026.
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-24">

                {/* Travel Grants */}
                <section className="grid md:grid-cols-12 gap-12 items-start">
                    <div className="md:col-span-5 relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-3xl blur-2xl opacity-20"></div>
                        <div className="relative bg-secondary/20 border border-white/5 rounded-3xl p-8 backdrop-blur-sm overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-8">
                                <Plane className="w-8 h-8 text-primary" />
                            </div>
                            <h2 className="text-3xl font-bold text-white mb-6">Travel Grants</h2>
                            <p className="text-gray-300 leading-relaxed mb-8">
                                CHANDICON 2026 is pleased to offer financial support to selected IEEE student first authors for presenting their research work.
                                The grant is awarded on a highly competitive basis.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-sm text-gray-400">
                                    <Star className="w-4 h-4 text-accent" />
                                    <span>Covers Conference Registration Fees</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-gray-400">
                                    <Star className="w-4 h-4 text-accent" />
                                    <span>Partial Travel Support</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-7 space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-4">How to Apply</h3>
                            <p className="text-gray-400 mb-6">
                                Interested student authors should email their application to <a href="mailto:ieeeCHANDICON2024@gmail.com" className="text-primary hover:text-white transition-colors">ieeeCHANDICON2024@gmail.com</a> with the following details:
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                "Paper ID",
                                "Paper Title",
                                "Author Names & Affiliations",
                                "Country",
                                "Abstract",
                                "Contact Number"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                                    <span className="text-gray-300 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="bg-primary/5 border border-primary/10 rounded-xl p-6">
                            <p className="text-sm text-center text-gray-400">
                                * The decision regarding this grant will be taken by the Conference Fellowship Committee.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Awards Section */}
                <section>
                    <div className="flex items-center gap-4 mb-10">
                        <div className="p-2 bg-yellow-500/10 rounded-lg text-yellow-500">
                            <Trophy className="w-8 h-8" />
                        </div>
                        <h2 className="text-3xl font-bold text-white">Conference Awards</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="group relative bg-black/20 border border-white/5 rounded-2xl p-8 hover:bg-white/5 transition-all duration-300 overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-yellow-500/10 transition-colors"></div>

                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center mb-6 text-yellow-500">
                                    <Medal className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">Best Paper Award</h3>
                                <p className="text-gray-400 leading-relaxed mb-6">
                                    Presented to authors whose work represents groundbreaking research.
                                    The chairs of each track nominate a set of top papers, which are then reviewed by a specialist committee.
                                </p>
                                <div className="flex items-center text-yellow-500 font-medium">
                                    <span>Selection based on novelty & impact</span>
                                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </div>

                        <div className="group relative bg-black/20 border border-white/5 rounded-2xl p-8 hover:bg-white/5 transition-all duration-300 overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/10 transition-colors"></div>

                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 text-blue-400">
                                    <GraduationCap className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">Best Poster Award</h3>
                                <p className="text-gray-400 leading-relaxed mb-6">
                                    Recognizing clarity of presentation and visual communication of research ideas.
                                    Selected from poster presentations by a designated jury during the conference.
                                </p>
                                <div className="flex items-center text-blue-400 font-medium">
                                    <span>Selection based on presentation quality</span>
                                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

            <footer className="py-8 text-center text-gray-500 text-sm border-t border-white/10 mt-auto">
                <p>&copy; 2026 IEEE CHANDICON. All rights reserved.</p>
            </footer>
        </main>
    );
};

export default AwardsPage;
