"use client";

import { Calendar, CheckCircle2, Clock, AlertCircle } from "lucide-react";

interface TimelineProps {
    events?: {
        title: string;
        date: string;
        description: string;
        status: string;
        icon: any;
    }[];
}

const Timeline = ({ events }: TimelineProps) => {
    const defaultEvents = [
        {
            title: "Call for Papers Opens",
            date: "January 15, 2026",
            description: "Submission of regular papers opens for all tracks.",
            status: "completed", // upcoming, active, completed
            icon: CheckCircle2,
        },
        {
            title: "Paper Submission Deadline",
            date: "April 15, 2026",
            description: "Last date to submit your full papers for review.",
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
            title: "Camera Ready Submission",
            date: "July 15, 2026",
            description: "Final version of the accepted papers due.",
            status: "upcoming",
            icon: Calendar,
        },
        {
            title: "Conference Dates",
            date: "August 20-22, 2026",
            description: "CHANDICON 2026 at Chandigarh, India.",
            status: "upcoming",
            icon: Calendar,
        },
    ];

    const displayEvents = events || defaultEvents;

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-3xl -z-10"></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Important <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Dates</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Mark your calendar for these key deadlines and events for CHANDICON 2026.
                    </p>
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-accent/50 to-primary/50 md:-translate-x-1/2"></div>

                    <div className="space-y-12">
                        {displayEvents.map((event, index) => {
                            const Icon = event.icon;
                            const isEven = index % 2 === 0;

                            return (
                                <div key={index} className={`relative flex items-center ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'}`}>

                                    {/* Dot on Line */}
                                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-accent bg-background z-10 shadow-[0_0_10px_rgba(0,102,204,0.5)]"></div>

                                    {/* Content Width Spacer (for alternating layout) */}
                                    <div className="hidden md:block w-1/2"></div>

                                    {/* Content Card */}
                                    <div className="ml-12 md:ml-0 md:px-8 w-full md:w-1/2">
                                        <div className={`
                      group relative p-6 rounded-2xl border border-gray-200 bg-white shadow-sm
                      hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/30
                      ${isEven ? 'md:mr-auto' : 'md:ml-auto'}
                    `}>
                                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>

                                            <div className="relative z-10">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <span className={`p-2 rounded-lg ${event.status === 'completed' ? 'bg-green-100 text-green-600' :
                                                        event.status === 'active' ? 'bg-accent/10 text-accent' :
                                                            'bg-gray-100 text-gray-500'
                                                        }`}>
                                                        <Icon className="w-4 h-4" />
                                                    </span>
                                                    <span className="text-sm font-semibold text-primary/80 uppercase tracking-wider">
                                                        {event.date}
                                                    </span>
                                                </div>

                                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                                                    {event.title}
                                                </h3>
                                                <p className="text-gray-600 text-sm leading-relaxed">
                                                    {event.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
