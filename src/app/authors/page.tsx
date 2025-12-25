"use client";

import Navbar from "@/components/Navbar";
import { FileText, Upload, CheckCircle2, AlertTriangle, ShieldCheck, Download, ExternalLink } from "lucide-react";

const AuthorsPage = () => {
    return (
        <main className="min-h-screen bg-background flex flex-col">
            <Navbar />

            {/* Header Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 -z-10"></div>
                <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        For <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Authors</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Guidelines for paper submission, formatting, and final camera-ready requirements for CHANDICON 2026.
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-20">

                {/* Submission & Template */}
                <section className="grid md:grid-cols-2 gap-8">
                    <div className="bg-secondary/20 border border-white/5 rounded-3xl p-8 backdrop-blur-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <FileText className="w-6 h-6 text-accent" />
                            Submission Details
                        </h2>
                        <p className="text-gray-300 mb-8 leading-relaxed">
                            Authors are requested to submit their original research papers in IEEE format through the CMT submission system.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="http://www.ieee.org/conferences_events/conferences/publishing/templates.html"
                                target="_blank"
                                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white border border-white/20 hover:bg-white/10 rounded-full transition-all"
                            >
                                IEEE Templates
                                <ExternalLink className="w-4 h-4 ml-2" />
                            </a>
                            <a
                                href="https://cmt3.research.microsoft.com/CHANDICON2024/"
                                target="_blank"
                                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-full transition-all shadow-lg shadow-primary/25"
                            >
                                Submit Paper
                                <ExternalLink className="w-4 h-4 ml-2" />
                            </a>
                        </div>
                    </div>

                    <div className="bg-secondary/20 border border-white/5 rounded-3xl p-8 backdrop-blur-sm relative overflow-hidden">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <ShieldCheck className="w-6 h-6 text-green-400" />
                            Plagiarism Policy
                        </h2>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            CHANDICON 2026 strictly follows IEEE policies on plagiarism and AI-generated text. Papers found violating these policies will be rejected.
                        </p>
                        <a
                            href="https://conferences.ieeeauthorcenter.ieee.org/author-ethics/guidelines-and-policies/submission-policies/"
                            target="_blank"
                            className="text-primary hover:text-accent transition-colors inline-flex items-center font-medium"
                        >
                            View IEEE Author Ethics & Policies
                            <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
                    </div>
                </section>

                {/* Paper Specifications */}
                <section>
                    <div className="flex items-center gap-4 mb-8">
                        <h2 className="text-3xl font-bold text-white">Paper Specifications</h2>
                        <div className="h-px bg-white/10 flex-grow mt-2"></div>
                    </div>

                    <div className="bg-black/20 border border-white/5 rounded-2xl p-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { label: "Paper Length", value: "Maximum 6 pages" },
                            { label: "Paper Size", value: 'US Letter (8.5" x 11")' },
                            { label: "File Format", value: "Adobe PDF (.pdf)" },
                            { label: "File Size", value: "Max 2.0 MB" },
                            { label: "Fonts", value: "Embed ALL fonts. No Type 3." },
                            { label: "Page Numbers", value: "Do NOT add page numbers" },
                            { label: "Security", value: "Do NOT apply PDF security" },
                        ].map((spec, i) => (
                            <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                                <div>
                                    <p className="text-xs text-gray-400 uppercase tracking-wider">{spec.label}</p>
                                    <p className="text-white font-medium">{spec.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="mt-4 text-center text-orange-400 text-sm flex items-center justify-center gap-2">
                        <AlertTriangle className="w-4 h-4" />
                        Note: Deviations from these specifications will result in rejection.
                    </p>
                </section>

                {/* Final Submission */}
                <section>
                    <div className="flex items-center gap-4 mb-8">
                        <h2 className="text-3xl font-bold text-white">Final Submission Procedure</h2>
                        <div className="h-px bg-white/10 flex-grow mt-2"></div>
                    </div>

                    <div className="prose prose-invert max-w-none text-gray-300 space-y-6">
                        <div className="bg-secondary/10 border border-white/5 rounded-2xl p-8">
                            <ol className="space-y-4 list-decimal list-inside marker:text-primary">
                                <li>
                                    <strong className="text-white">Register for the Conference:</strong> Mandatory for final submission. You will need your registration code.
                                </li>
                                <li>
                                    <strong className="text-white">Prepare Final PDF:</strong> Ensure your paper incorporates reviewer comments and meets formatting specs.
                                </li>
                                <li>
                                    <strong className="text-white">PDF Express Verification:</strong> Validate your PDF using IEEE PDF Express (Instructions to be provided).
                                </li>
                                <li>
                                    <strong className="text-white">Copyright Transfer:</strong> Submit the e-Copyright form.
                                </li>
                                <li>
                                    <strong className="text-white">Upload:</strong> Log in to CMT and upload your camera-ready paper.
                                </li>
                            </ol>

                            <div className="mt-8 flex flex-col items-center justify-center text-center p-6 bg-primary/5 rounded-xl border border-primary/20">
                                <h4 className="text-lg font-bold text-white mb-2">Camera Ready Guidelines</h4>
                                <p className="text-sm text-gray-400 mb-4">Detailed step-by-step instructions for final submission.</p>
                                <a
                                    href="/Instructions for Camera Ready Submission Guidelines.pdf"
                                    target="_blank"
                                    className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-full transition-all"
                                >
                                    Download Guidelines PDF
                                    <Download className="w-4 h-4 ml-2" />
                                </a>
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

export default AuthorsPage;
