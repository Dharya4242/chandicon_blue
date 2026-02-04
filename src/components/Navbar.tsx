"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

interface NavItem {
    name: string;
    href?: string;
    children?: { name: string; href: string }[];
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const navigation: NavItem[] = [
        { name: "Home", href: "/" },
        {
            name: "About",
            children: [
                { name: "About Institute", href: "/about" },
                { name: "Committee", href: "/committee" },
                { name: "Venue", href: "/venue" },
                { name: "Contact Us", href: "/contact" },
            ]
        },
        {
            name: "Program",
            children: [
                { name: "Speakers", href: "/speakers" },
                { name: "Tracks", href: "/tracks" },
                { name: "Sessions", href: "/sessions" },
                { name: "Important Dates", href: "/important-dates" },
            ]
        },
        {
            name: "Participants",
            children: [
                { name: "Authors", href: "/authors" },
                { name: "Registration", href: "/registration" },
                { name: "Awards", href: "/awards" },
            ]
        },
        { name: "Sponsorship", href: "/sponsorship" },
    ];

    return (
        <nav className="sticky w-full z-50 top-0 start-0 border-b border-gray-200 bg-white/80 backdrop-blur-md">
            <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    {/* Logo removed as it is now in LogosHeader */}
                </div>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <Link href="/registration">
                        <button
                            type="button"
                            className="text-white bg-gradient-to-r from-primary to-accent hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-primary/30 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all shadow-[0_0_15px_rgba(0,102,204,0.5)] hover:shadow-[0_0_25px_rgba(0,102,204,0.7)]"
                        >
                            Register Now
                        </button>
                    </Link>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-700 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        aria-controls="navbar-sticky"
                        aria-expanded={isOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
                <div
                    className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? "block" : "hidden"
                        }`}
                    id="navbar-sticky"
                >
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                        {navigation.map((item) => (
                            <li key={item.name} className="relative group">
                                {item.children ? (
                                    <>
                                        <button
                                            onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                                            onMouseEnter={() => setActiveDropdown(item.name)}
                                            className="flex items-center justify-between w-full py-2 px-3 text-gray-700 rounded hover:text-primary md:hover:text-primary md:p-0 transition-colors duration-200"
                                        >
                                            {item.name}
                                            <ChevronDown className="w-4 h-4 ml-1" />
                                        </button>

                                        {/* Dropdown Menu */}
                                        <div
                                            className={`${activeDropdown === item.name ? 'block' : 'hidden'} md:group-hover:block absolute left-0 z-10 font-normal bg-white border border-gray-100 divide-y divide-gray-100 rounded-lg shadow-xl w-44 animate-in fade-in slide-in-from-top-2 duration-200`}
                                            onMouseLeave={() => setActiveDropdown(null)}
                                        >
                                            <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownLargeButton">
                                                {item.children.map((child) => (
                                                    <li key={child.name}>
                                                        <Link href={child.href} className="block px-4 py-2 hover:bg-gray-100 hover:text-primary">
                                                            {child.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </>
                                ) : (
                                    <Link
                                        href={item.href!}
                                        className="block py-2 px-3 text-gray-700 rounded hover:text-primary md:hover:text-primary md:p-0 transition-colors duration-200"
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
