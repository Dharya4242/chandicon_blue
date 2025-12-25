import Navbar from "@/components/Navbar";
import { ExternalLink, Calendar, MapPin, Award } from "lucide-react";

import Footer from "@/components/Footer";

const AboutPage = () => {
    const prevEditions = [
        {
            name: "IEEE CHANDICON 2023",
            venue: "GSSS Institute of Engineering & Technology for Women, Mysuru",
            dates: "August 5-7, 2023",
            theme: "Computational Intelligence and Learning Systems",
            link: "https://ieeexplore.ieee.org/xpl/conhome/10269798/proceeding",
        },
        {
            name: "IEEE CHANDICON 2022",
            venue: "KIIT Deemed to be University, Bhubaneswar",
            dates: "July 15-17, 2022",
            theme: "Impactful Innovations for Benefits of Society and Industry",
            link: "https://ieeexplore.ieee.org/xpl/conhome/9862528/proceeding",
        },
        {
            name: "IEEE CHANDICON 2021",
            venue: "Visvesvaraya National Institute of Technology, Nagpur",
            dates: "August 27-29, 2021",
            theme: "Impactful innovations for the benefit of industry and society",
            link: "https://ieeexplore.ieee.org/xpl/conhome/9581282/proceeding",
        },
        {
            name: "IEEE CHANDICON 2020",
            venue: "Gayatri Vidya Parishad College of Engineering, Visakhapatnam",
            dates: "October 3-4, 2020",
            theme: "Smart and Sustainable Systems - Decade Ahead",
            link: "https://ieeexplore.ieee.org/xpl/conhome/9344449/proceeding",
        },
    ];

    return (
        <main className="min-h-screen bg-background flex flex-col">
            <Navbar />

            {/* Header Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 -z-10"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">CHANDICON</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        A flagship annual international conference of the IEEE India Council, bringing together global experts to shape the future of technology.
                    </p>
                </div>
            </section>

            {/* Previous Editions Section */}
            {/* <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
                <div className="flex items-center gap-4 mb-10">
                    <h2 className="text-3xl font-bold text-white">Previous Editions</h2>
                    <div className="h-px bg-white/10 flex-grow"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {prevEditions.map((edition, index) => (
                        <a
                            key={index}
                            href={edition.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative p-6 rounded-2xl bg-secondary/20 border border-white/5 hover:bg-secondary/30 transition-all duration-300 overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
                                <ExternalLink className="w-5 h-5 text-accent" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{edition.name}</h3>

                            <div className="space-y-2 text-sm text-gray-400">
                                <div className="flex items-start gap-2">
                                    <MapPin className="w-4 h-4 mt-1 text-gray-500" />
                                    <span>{edition.venue}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4 text-gray-500" />
                                    <span>{edition.dates}</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <Award className="w-4 h-4 mt-1 text-gray-500" />
                                    <span className="italic">{edition.theme}</span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </section> */}

            {/* Organizations Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* IEEE India Council */}
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-gray-900 border-l-4 border-primary pl-4">IEEE India Council</h2>
                            <p className="text-gray-600 leading-relaxed">
                                IEEE is the world&apos;s largest professional association dedicated to advancing technological innovation and excellence for the benefit of humanity.
                                IEEE India Council is the umbrella organisation which coordinates IEEE activities in India. Its primary aim is to assist and coordinate the activities of local &ldquo;Sections&rdquo;,
                                in order to benefit mutually, and avoid duplication of effort and resources.
                            </p>
                            <a href="https://ieeeindiacouncil.org/" target="_blank" className="inline-flex items-center text-accent hover:text-primary transition-colors">
                                Visit Website <ExternalLink className="w-4 h-4 ml-2" />
                            </a>
                        </div>

                        {/* IEEE Chandigarh Subsection */}
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-gray-900 border-l-4 border-accent pl-4">IEEE Chandigarh Subsection</h2>
                            <p className="text-gray-600 leading-relaxed">
                                IEEE Chandigarh Subsection is a technical society established on June 18, 2005, under IEEE Delhi Section.
                                It provides a platform for students to enhance their technical skills and professional growth.
                                The subsection organizes various events and technical extravaganzas, including the annual Techadroit event.
                            </p>
                            <a href="https://ewh.ieee.org/r10/delhi/chandi.html" target="_blank" className="inline-flex items-center text-accent hover:text-primary transition-colors">
                                Visit Website <ExternalLink className="w-4 h-4 ml-2" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* College Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Host Institute</h2>
                    <h3 className="text-xl text-primary font-semibold">Punjab Engineering College (Deemed to be University)</h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                    <div className="space-y-6 text-gray-600 leading-relaxed order-2 lg:order-1">
                        <p>
                            Punjab Engineering College (Deemed to be University) having its roots in Lahore as Mugalpura Engineering College since 1921,
                            moved to its present campus in 1953 as PEC affiliated to Panjab University. The institute became Deemed University in 2003.
                        </p>
                        <p>
                            It is a Grant-in-Aid institution under administration of Union Territory of Chandigarh. The institute has a 146 acres
                            sprawling and pious campus. The academic and administrative processes are similar to IITs in the country.
                        </p>
                        <p>
                            With a history of more than 100 Years now, the institute has produced a number of alumni who have earned name and fame
                            both for themselves and the institute.
                        </p>
                        <a href="https://pec.ac.in/" target="_blank" className="inline-flex items-center text-accent hover:text-white transition-colors mt-4">
                            Visit PEC Website <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
                    </div>

                    <div className="grid grid-cols-2 gap-4 order-1 lg:order-2">
                        <div className="space-y-4">
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-secondary/50">
                                <img src="/assets/images/college/helicopter.jpeg" alt="PEC Campus" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-secondary/50">
                                <img src="/assets/images/college/chowk.jpeg" alt="PEC Chowk" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                            </div>
                        </div>
                        <div className="space-y-4 pt-8">
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-secondary/50">
                                <img src="/assets/images/college/century.jpeg" alt="PEC Building" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-secondary/50">
                                <img src="/assets/images/college/audi.jpeg" alt="PEC Auditorium" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default AboutPage;
