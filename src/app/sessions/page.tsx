"use client";

import Navbar from "@/components/Navbar";
import { Calendar, Mail, FileText, Users, Presentation, Lightbulb, CheckCircle2 } from "lucide-react";

const SessionsPage = () => {
    return (
        <main className="min-h-screen bg-background flex flex-col">
            <Navbar />

            {/* Header Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 -z-10"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Call for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Sessions & Tutorials</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Submit proposals for Special Sessions and Tutorials to shape the scientific discourse at CHANDICON 2026.
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-20">

                {/* Special Session Proposals */}
                <section>
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 rounded-xl bg-primary/10 text-primary">
                            <Presentation className="w-8 h-8" />
                        </div>
                        <h2 className="text-3xl font-bold text-white">Call for Special Session Proposals</h2>
                    </div>

                    <div className="prose prose-invert max-w-none text-gray-300 space-y-6">
                        <p className="text-lg leading-relaxed">
                            CHANDICON 2026 will provide an excellent forum for the dissemination of the latest research and ideas
                            in a wide range of Science, Engineering and Technology. The conference is keen to disseminate state-of-the-art
                            knowledge on specialist and latest topics related to the theme of the conference through dedicated Special Sessions.
                        </p>

                        <div className="bg-secondary/20 border border-white/5 rounded-2xl p-8 backdrop-blur-sm">
                            <h3 className="text-xl font-bold text-white mb-4">Guidelines for Proposers</h3>
                            <p className="mb-6">
                                Special Sessions should offer insight into research topics not covered by regular tracks or focus on specific
                                niches within them. Proposers are invited to highlight the novelty and difference from regular tracks.
                            </p>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-black/20 p-6 rounded-xl border border-white/5">
                                    <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                                        <Users className="w-5 h-5 text-accent" />
                                        Type A: Invited Presentation
                                    </h4>
                                    <p className="text-sm text-gray-400">
                                        Organizers invite a leading researcher for an oral presentation. Abstract required.
                                        No full paper submission or Xplore publication for the presentation itself.
                                    </p>
                                </div>
                                <div className="bg-black/20 p-6 rounded-xl border border-white/5">
                                    <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                                        <FileText className="w-5 h-5 text-accent" />
                                        Type B: Invited Paper
                                    </h4>
                                    <p className="text-sm text-gray-400">
                                        Organizers invite a leading researcher to submit a full paper. Peer-reviewed.
                                        Eligible for IEEE Xplore publication if accepted and presented.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 mt-8">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-4">Proposal Contents</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                                        <span>Title and significance of the topic</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                                        <span>Organizer details (affiliation, bio)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                                        <span>Invited paper/presentation details (optional)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                                        <span>List of potential reviewers</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-4 pb-2 border-b border-dashed border-white/10">Timeline & Submission</h3>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <Calendar className="w-6 h-6 text-accent" />
                                        <div>
                                            <p className="text-sm text-gray-400">Proposal Submission Deadline</p>
                                            <p className="text-white font-semibold">April 15, 2026</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Mail className="w-6 h-6 text-accent" />
                                        <div>
                                            <p className="text-sm text-gray-400">Submit Proposal To</p>
                                            <a href="mailto:ieeeCHANDICON2026@gmail.com" className="text-white font-semibold hover:text-primary transition-colors">
                                                ieeeCHANDICON2026@gmail.com
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="h-px bg-white/10 w-full"></div>

                {/* Tutorial Proposals */}
                <section>
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 rounded-xl bg-accent/10 text-accent">
                            <Lightbulb className="w-8 h-8" />
                        </div>
                        <h2 className="text-3xl font-bold text-white">Call for Tutorial/Workshop Proposals</h2>
                    </div>

                    <div className="prose prose-invert max-w-none text-gray-300 space-y-6">
                        <p className="text-lg leading-relaxed">
                            CHANDICON 2026 solicits proposals for Tutorials/Workshops of 90 minutes (one session) that complement
                            the regular program with clear and focused coverage of new and emerging topics within the scope of the conference.
                        </p>

                        <div className="bg-secondary/20 border border-white/5 rounded-2xl p-8 backdrop-blur-sm">
                            <h3 className="text-xl font-bold text-white mb-6">Proposal Format (Max 4 pages)</h3>
                            <div className="grid md:grid-cols-2 gap-y-4 gap-x-12">
                                <div className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-xs font-bold text-gray-400">1</span>
                                    <span>Title of the tutorial/workshop</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-xs font-bold text-gray-400">2</span>
                                    <span>Abstract (200 words max)</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-xs font-bold text-gray-400">3</span>
                                    <span>Length: Max 90 minutes</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-xs font-bold text-gray-400">4</span>
                                    <span>Instructor bios (200 words each)</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-xs font-bold text-gray-400">5</span>
                                    <span>Significance, novelty, and timeliness</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-xs font-bold text-gray-400">6</span>
                                    <span>Content outline and intended audience</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-primary/5 border border-primary/20 rounded-xl p-6 mt-8">
                            <div>
                                <h4 className="text-lg font-bold text-white mb-1">Ready to submit a Tutorial Proposal?</h4>
                                <p className="text-sm text-gray-400">Ensure your proposal is complete and sent before the deadline.</p>
                            </div>
                            <div className="flex items-center gap-8">
                                <div className="text-right">
                                    <p className="text-xs text-gray-400 uppercase tracking-wider">Deadline</p>
                                    <p className="text-white font-bold">April 15, 2026</p>
                                </div>
                                <a
                                    href="mailto:ieeeCHANDICON2026@gmail.com"
                                    className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-lg transition-colors shadow-lg shadow-primary/20"
                                >
                                    Email Proposal
                                    <Mail className="w-4 h-4 ml-2" />
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

export default SessionsPage;
