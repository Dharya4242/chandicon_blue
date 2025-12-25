"use client";

import Navbar from "@/components/Navbar";
import Timeline from "@/components/Timeline";
import { Calendar, CheckCircle2, Clock, AlertCircle, FileText, Users, CreditCard, Send } from "lucide-react";

const ImportantDatesPage = () => {
    const events = [
        {
            title: "Call for Papers Opens",
            date: "January 15, 2026",
            description: "Submission of regular papers opens for all tracks.",
            status: "completed",
            icon: FileText,
        },
        {
            title: "Call for Tutorials & Workshops",
            date: "January 15, 2026",
            description: "Proposals invited for tutorials and workshops.",
            status: "completed",
            icon: Users,
        },
        {
            title: "Paper Submission Deadline",
            date: "April 15, 2026",
            description: "Last date to submit your full papers for review.",
            status: "active",
            icon: Clock,
        },
        {
            title: "Tutorial/Workshop Proposal Deadline",
            date: "April 15, 2026",
            description: "Submission deadline for tutorial and workshop proposals.",
            status: "active",
            icon: Clock,
        },
        {
            title: "Notification of Acceptance",
            date: "June 15, 2026",
            description: "Authors will be notified about the acceptance of their papers.",
            status: "upcoming",
            icon: AlertCircle,
        },
        {
            title: "Tutorial/Workshop Acceptance Notification",
            date: "June 30, 2026",
            description: "Notification for accepted tutorial and workshop proposals.",
            status: "upcoming",
            icon: AlertCircle,
        },
        {
            title: "Early Bird Registration Deadline",
            date: "July 15, 2026",
            description: "Last date to avail early bird registration discounts.",
            status: "upcoming",
            icon: CreditCard,
        },
        {
            title: "Camera Ready Submission",
            date: "July 15, 2026",
            description: "Final version of the accepted papers due.",
            status: "upcoming",
            icon: Send,
        },
        {
            title: "Conference Registration Deadline",
            date: "July 31, 2026",
            description: "Last date for conference registration.",
            status: "upcoming",
            icon: Users,
        },
        {
            title: "Conference Dates",
            date: "August 20-22, 2026",
            description: "CHANDICON 2026 at Chandigarh, India.",
            status: "upcoming",
            icon: Calendar,
        },
    ];

    return (
        <main className="min-h-screen bg-background flex flex-col">
            <Navbar />

            {/* Header Section */}
            <section className="relative pt-32 pb-0 overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 -z-10"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Important <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Dates</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Stay on top of deadlines. Mark your calendar for these key events.
                    </p>
                </div>
            </section>

            {/* Timeline Section */}
            <Timeline events={events} />

            <footer className="py-8 text-center text-gray-500 text-sm border-t border-white/10 mt-auto">
                <p>&copy; 2026 IEEE CHANDICON. All rights reserved.</p>
            </footer>
        </main>
    );
};

export default ImportantDatesPage;
