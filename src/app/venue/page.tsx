"use client";

import Navbar from "@/components/Navbar";
import { MapPin, Plane, Train, Bus, ExternalLink, Hotel, Send } from "lucide-react";
import Image from "next/image";

// Nearby Places Data
const NEARBY_PLACES = [
    {
        img: "/assets/images/shimla.jpg",
        name: "Shimla",
        description: "Shimla, the crown jewel of Himachal Pradesh, awaits just a 5-hour drive from Chandigarh. This charming hill station, invites you to trade city worries for crisp mountain air and stunning views.",
        link: "https://en.wikipedia.org/wiki/Shimla",
    },
    {
        img: "/assets/images/manali.jpg",
        name: "Manali",
        description: "A magical hill station at the northern end of Kullu valley. Set on the Beas River, it's a gateway for skiing in the Solang Valley and trekking in Parvati Valley.",
        link: "https://en.wikipedia.org/wiki/Manali,_Himachal_Pradesh",
    },
    {
        img: "/assets/images/kufri.jpg",
        name: "Kufri",
        description: "A dream destination for those who adore hill stations and adventure. Accessible snowfall in winters and home to the Himalayan Nature Park.",
        link: "https://en.wikipedia.org/wiki/Kufri,_India",
    },
    {
        img: "/assets/images/mcleodgang.jpg",
        name: "McLeod Ganj",
        description: 'Known as "Little Lhasa", home of His Holiness Dalai Lama. A popular Buddhist destination surrounded by Dhauladhar mountains.',
        link: "https://en.wikipedia.org/wiki/McLeod_Ganj",
    },
];

const RECOMMENDED_HOTELS = [
    { name: "Hotel Shivalikview", link: "https://citcochandigarh.com/portfolio/hotel-shivalikview/", area: "Sector 17" },
    { name: "Hotel Mountview", link: "https://citcochandigarh.com/portfolio/hotel-mountview/", area: "Sector 10" },
    { name: "Taj Chandigarh", link: "https://www.tajhotels.com/en-in/taj/taj-chandigarh/", area: "Sector 17" },
    { name: "JW Marriott Hotel", link: "https://www.marriott.com/", area: "Sector 35" },
    { name: "Hyatt Centric", link: "https://www.hyatt.com/", area: "Sector 17" },
];

const ATTRACTIONS = [
    { name: "Rock Garden", link: "https://en.wikipedia.org/wiki/Rock_Garden_of_Chandigarh", img: "/assets/images/attraction1.jpg" },
    { name: "Sukhna Lake", link: "https://en.wikipedia.org/wiki/Sukhna_Lake", img: "/assets/images/attraction2.jpg" },
];

const VenuePage = () => {
    return (
        <main className="min-h-screen bg-background flex flex-col">
            <Navbar />

            {/* Header Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 -z-10"></div>
                <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Conference <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Venue</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Discover the beautiful city of Chandigarh and the premium venue for CHANDICON 2026.
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-24">

                {/* Main Venue Info */}
                <section className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                        <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                            <img
                                src="/assets/images/shivalikview-hotel.jpg"
                                alt="Hotel Shivalikview"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8">
                                <h3 className="text-2xl font-bold text-white mb-2">Hotel Shivalikview</h3>
                                <p className="text-gray-300 flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-accent" />
                                    Sector 17, Chandigarh
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-accent/10 rounded-lg text-accent">
                                <Building2 className="w-6 h-6" />
                            </div>
                            <h2 className="text-3xl font-bold text-white">The Venue</h2>
                        </div>
                        <p className="text-gray-300 leading-relaxed text-lg">
                            Hotel Shivalikview is located within the city's hub of business, shopping, and entertainment in Sector 17.
                            It offers a stylish, intimate base for business excellence as well as exploring the "City Beautiful".
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 text-gray-400">
                                <Plane className="w-5 h-5 text-primary" />
                                <span>25 minutes drive from International Airport</span>
                            </div>
                            <div className="flex items-center gap-4 text-gray-400">
                                <Train className="w-5 h-5 text-primary" />
                                <span>15 minutes from Railway Station</span>
                            </div>
                            <div className="flex items-center gap-4 text-gray-400">
                                <Bus className="w-5 h-5 text-primary" />
                                <span>Walking distance from ISBT</span>
                            </div>
                        </div>

                        <div className="pt-4">
                            <a
                                href="https://citcochandigarh.com/portfolio/hotel-shivalikview/"
                                target="_blank"
                                className="inline-flex items-center text-accent hover:text-white transition-colors"
                            >
                                Visit Website
                                <ExternalLink className="w-4 h-4 ml-2" />
                            </a>
                        </div>
                    </div>
                </section>

                {/* Accommodations */}
                <section>
                    <div className="bg-secondary/20 border border-white/5 rounded-3xl p-8 lg:p-12 backdrop-blur-sm">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                <Hotel className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">Recommended Accommodations</h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {RECOMMENDED_HOTELS.map((hotel, index) => (
                                <a
                                    key={index}
                                    href={hotel.link}
                                    target="_blank"
                                    className="group p-6 bg-white/5 border border-white/5 hover:bg-white/10 rounded-xl transition-all flex items-center justify-between"
                                >
                                    <div>
                                        <h4 className="text-white font-medium group-hover:text-primary transition-colors">{hotel.name}</h4>
                                        <p className="text-sm text-gray-400">{hotel.area}</p>
                                    </div>
                                    <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors opacity-0 group-hover:opacity-100" />
                                </a>
                            ))}

                            <a
                                href="https://www.google.com/maps/search/hotels+near+pec+chandigarh/"
                                target="_blank"
                                className="group p-6 border border-dashed border-white/20 hover:border-primary/50 hover:bg-primary/5 rounded-xl transition-all flex items-center justify-center text-center"
                            >
                                <span className="text-gray-400 group-hover:text-primary">View More on Maps</span>
                            </a>
                        </div>
                    </div>
                </section>

                {/* Connectivity */}
                <section>
                    <h2 className="text-3xl font-bold text-white mb-10 text-center">How to Reach</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-secondary/10 border border-white/5 rounded-2xl p-6 hover:bg-secondary/20 transition-colors">
                            <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-400 mb-6">
                                <Plane className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Air Route</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Chandigarh International Airport (IXC) connects to major cities.
                                Flights from Indigo, Spicejet, and Air India operate daily. Taxis and buses are readily available.
                            </p>
                        </div>
                        <div className="bg-secondary/10 border border-white/5 rounded-2xl p-6 hover:bg-secondary/20 transition-colors">
                            <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center text-orange-400 mb-6">
                                <Train className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Train Route</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Chandigarh Junction (CDG) is well-connected to New Delhi and other major hubs.
                                Shatabdi Express and Vande Bharat are popular convenient options.
                            </p>
                        </div>
                        <div className="bg-secondary/10 border border-white/5 rounded-2xl p-6 hover:bg-secondary/20 transition-colors">
                            <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center text-green-400 mb-6">
                                <Bus className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Road Route</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Excellent highway connectivity (NH-44). Driving time from Delhi is approx. 4-5 hours.
                                Luxury Volvo buses run frequently from ISBT Sector 17 and 43.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Nearby Attractions */}
                <section>
                    <div className="flex items-center justify-between mb-10">
                        <h2 className="text-3xl font-bold text-white">Nearby Attractions</h2>
                        <div className="h-px bg-white/10 flex-grow ml-8 hidden sm:block"></div>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {NEARBY_PLACES.map((place, i) => (
                            <div key={i} className="group bg-black/20 rounded-xl overflow-hidden border border-white/5 hover:border-primary/30 hover:shadow-lg transition-all">
                                <div className="h-48 overflow-hidden relative">
                                    <img
                                        src={place.img}
                                        alt={place.name}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                                    <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">{place.name}</h3>
                                </div>
                                <div className="p-4">
                                    <p className="text-sm text-gray-400 line-clamp-3 mb-4">{place.description}</p>
                                    <a href={place.link} target="_blank" className="text-xs font-bold text-primary hover:text-white uppercase tracking-wider flex items-center gap-1">
                                        Read More <ExternalLink className="w-3 h-3" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

            </div>

            <footer className="py-8 text-center text-gray-500 text-sm border-t border-white/10 mt-auto">
                <p>&copy; 2026 IEEE CHANDICON. All rights reserved.</p>
            </footer>
        </main>
    );
};
import { Building2 } from "lucide-react"; // Import missing icon

export default VenuePage;
