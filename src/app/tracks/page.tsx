import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TRACKS } from "@/data/tracks";
import { ArrowRight, BookOpen } from "lucide-react";

export default function TracksPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            {/* Header */}
            <section className="pt-32 pb-16 px-4 md:px-8 bg-gradient-to-b from-primary/5 to-transparent">
                <div className="max-w-7xl mx-auto text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                        Call for Papers
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Conference <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Tracks</span>
                    </h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        We invite original research contributions in the following tracks. All accepted and presented papers will be submitted to IEEE Xplore.
                    </p>
                </div>
            </section>

            {/* Tracks Grid */}
            <section className="py-16 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {TRACKS.map((trackItem, index) => (
                            <div
                                key={index}
                                className="group p-8 rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                            >
                                <div className="flex items-start justify-between mb-6">
                                    <div className="p-3 rounded-2xl bg-gray-50 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                        <BookOpen className="w-8 h-8" />
                                    </div>
                                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                                        Track {index + 1}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                                    {trackItem.track.replace(/Track \d+: /, "")}
                                </h3>

                                <ul className="space-y-2 mb-8">
                                    {trackItem.topics.slice(0, 5).map((topic, i) => (
                                        <li key={i} className="flex items-center text-gray-600 text-sm">
                                            <span className="w-1.5 h-1.5 rounded-full bg-accent/50 mr-2"></span>
                                            {topic}
                                        </li>
                                    ))}
                                    {trackItem.topics.length > 5 && (
                                        <li className="text-accent text-sm font-medium pl-3.5">
                                            + {trackItem.topics.length - 5} more topics
                                        </li>
                                    )}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
