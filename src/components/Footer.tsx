"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div>
                        <Link href="/" className="inline-block mb-6">
                            <div className="relative h-12 w-48">
                                <Image
                                    src="/assets/logos/logo_blue.png"
                                    alt="CHANDICON 2026"
                                    fill
                                    className="object-contain object-left"
                                />
                            </div>
                        </Link>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            The Premier Conference for Industrial Information Systems, bridging the gap between academia and industry.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="p-2 bg-gray-100 text-gray-600 rounded-full hover:bg-primary hover:text-white transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 bg-gray-100 text-gray-600 rounded-full hover:bg-primary hover:text-white transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 bg-gray-100 text-gray-600 rounded-full hover:bg-primary hover:text-white transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-gray-900 font-bold text-lg mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/about" className="text-gray-600 hover:text-primary transition-colors">About Institute</Link>
                            </li>
                            <li>
                                <Link href="/committee" className="text-gray-600 hover:text-primary transition-colors">Committee</Link>
                            </li>
                            <li>
                                <Link href="/speakers" className="text-gray-600 hover:text-primary transition-colors">Speakers</Link>
                            </li>
                            <li>
                                <Link href="/registration" className="text-gray-600 hover:text-primary transition-colors">Registration</Link>
                            </li>
                        </ul>
                    </div>

                    {/* For Authors */}
                    <div>
                        <h3 className="text-gray-900 font-bold text-lg mb-6">For Authors</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/tracks" className="text-gray-600 hover:text-primary transition-colors">Call for Papers</Link>
                            </li>
                            <li>
                                <Link href="/submission" className="text-gray-600 hover:text-primary transition-colors">Submission Guidelines</Link>
                            </li>
                            <li>
                                <Link href="/important-dates" className="text-gray-600 hover:text-primary transition-colors">Important Dates</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-gray-900 font-bold text-lg mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <MapPin className="w-5 h-5 text-primary mt-1 mr-3 shrink-0" />
                                <span className="text-gray-600">
                                    Punjab Engineering College<br />
                                    (Deemed to be University)<br />
                                    Chandigarh, India
                                </span>
                            </li>
                            <li className="flex items-center">
                                <Mail className="w-5 h-5 text-primary mr-3 shrink-0" />
                                <a href="mailto:info@chandicon.org" className="text-gray-600 hover:text-primary transition-colors">info@chandicon.org</a>
                            </li>
                            <li className="flex items-center">
                                <Phone className="w-5 h-5 text-primary mr-3 shrink-0" />
                                <span className="text-gray-600">+91 172 2753000</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; 2026 IEEE CHANDICON. All rights reserved.</p>
                    <p className="mt-2 md:mt-0">
                        Designed & Developed by <span className="text-gray-900 font-medium">Web Team</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
