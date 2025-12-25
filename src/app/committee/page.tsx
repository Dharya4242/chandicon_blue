"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { COMMITTEE } from "@/data/committee";
import { ExternalLink, Linkedin, User } from "lucide-react";

// Helper function to validate image paths (optional, but good for safety)
// For now, we assume paths in data are correct relative to public/
// We might need to prepend generic path if not present, but data seems to have /assets/committee/...

// Define simple types for the data structures
type CommitteeMember = {
    name: string;
    designation: string;
    image_url: string;
    link?: string;
    track?: string;
};

type CommitteeData = {
    [key: string]: CommitteeMember[];
};

const CommitteePage = () => {
    // Cast the imported data to the defined type
    const committeeData = COMMITTEE as unknown as CommitteeData;
    const committeeKeys = Object.keys(committeeData);

    return (
        <main className="min-h-screen bg-background flex flex-col">
            <Navbar />

            {/* Header Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 -z-10"></div>
                <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-y-1/2 translate-x-1/2"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                        Organizing <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Committee</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        The dedicated team of experts and visionaries behind CHANDICON 2026.
                    </p>
                </div>
            </section>

            {/* Committee Sections */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-24">
                {committeeKeys.map((sectionTitle, index) => {
                    const members = committeeData[sectionTitle];

                    // Skip empty sections
                    if (!members || members.length === 0) return null;

                    return (
                        <section key={index} className="scroll-mt-24" id={sectionTitle.toLowerCase().replace(/\s+/g, '-')}>
                            <div className="flex items-center gap-4 mb-10">
                                <h2 className="text-3xl font-bold text-gray-900 relative">
                                    {sectionTitle}
                                    <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></span>
                                </h2>
                                <div className="h-px bg-gray-200 flex-grow mt-2"></div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {members.map((member: CommitteeMember, mIndex: number) => {
                                    // Handle image loading or fallbacks ideally, but for now direct img src
                                    // Some images in data might be empty string
                                    const hasImage = member.image_url && member.image_url.length > 0;
                                    const imageSrc = hasImage ? member.image_url : "/assets/logos/ieee-logo.png"; // Fallback to logo or generic

                                    return (
                                        <div
                                            key={mIndex}
                                            className="group relative bg-white border border-gray-200 rounded-2xl overflow-hidden hover:bg-gray-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 flex flex-col"
                                        >
                                            {/* Image Container */}
                                            <div className="aspect-[1/1] overflow-hidden relative bg-gray-100">
                                                {hasImage ? (
                                                    <img
                                                        src={imageSrc}
                                                        alt={member.name}
                                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                        loading="lazy"
                                                    />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center bg-gray-200">
                                                        <User className="w-20 h-20 text-gray-400" />
                                                    </div>
                                                )}

                                                {/* Overlay with potential social links */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                                                    {member.link && (
                                                        <a
                                                            href={member.link}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center text-white hover:text-accent transition-colors text-sm font-medium"
                                                        >
                                                            View Profile <ExternalLink className="w-4 h-4 ml-1" />
                                                        </a>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="p-5 flex-grow flex flex-col text-center">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                                                    {member.name}
                                                </h3>
                                                <p className="text-sm text-gray-600 font-light mb-2">
                                                    {member.designation}
                                                </p>
                                                {member.track && (
                                                    <span className="inline-block mt-auto bg-accent/10 text-accent text-xs px-2 py-1 rounded-full mx-auto">
                                                        {member.track}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </section>
                    );
                })}
            </div>

            <Footer />
        </main>
    );
};

export default CommitteePage;
