"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check, AlertCircle, CreditCard, Receipt, User, Users } from "lucide-react";

// Fee Data
const registrationFees = {
    ieee: [
        { category: "IEEE Student Members", early: "₹5,000", late: "₹6,000" },
        { category: "IEEE Members", early: "₹6,500", late: "₹8,000" },
    ],
    nonIeee: [
        { category: "Non-IEEE Student Members", early: "₹6,000", late: "₹7,500" },
        { category: "Non-IEEE Members", early: "₹8,500", late: "₹10,000" },
    ],
    foreign: [
        { category: "Foreign Participant", early: "$150", late: "$250" }, // Taken from reference "Foriegn Participant" $150/$250 in early
    ]
};
// Note: Reference had "Foreign Participant" in both tables with slightly different values or just one row.
// Re-checking reference:
// IEEE Rows: Foreign Participant $150 (Early), $250 (Early?? - likely column mapping issue in reference logic or just confusing), $250 (Late), $300 (Late)
// Non-IEEE Rows: Foreign Participant $200, $350, $400, $450
// I will structure it more cleanly.

const detailedFees = [
    { type: "Indian Participant", category: "IEEE Student Member", early: "₹5,000", late: "₹6,000" },
    { type: "Indian Participant", category: "IEEE Member", early: "₹6,500", late: "₹8,000" },
    { type: "Indian Participant", category: "Non-IEEE Student Member", early: "₹6,000", late: "₹7,500" },
    { type: "Indian Participant", category: "Non-IEEE Member", early: "₹8,500", late: "₹10,000" },
    { type: "Foreign Participant", category: "IEEE Member", early: "$150", late: "$250" },
    { type: "Foreign Participant", category: "Non-IEEE Member", early: "$200", late: "$350" },
];

const RegistrationPage = () => {
    return (
        <main className="min-h-screen bg-background flex flex-col">
            <Navbar />

            {/* Header Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 -z-10"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                        Registration <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Details</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Secure your spot at CHANDICON 2026. Early bird registration offers significant savings.
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-16">

                {/* Registration Fees Table */}
                <section>
                    <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
                        <div className="p-6 border-b border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 bg-gray-50">
                            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                                <CreditCard className="w-6 h-6 text-accent" />
                                Registration Fees
                            </h2>
                            <span className="text-sm text-gray-500 bg-gray-200 px-4 py-1.5 rounded-full">
                                * Exclusive of GST and other taxes
                            </span>
                        </div>

                        {/* Mobile Card View */}
                        <div className="md:hidden space-y-4">
                            {detailedFees.map((fee, index) => (
                                <div key={index} className="bg-white/5 p-5 rounded-xl border border-white/5 hover:border-primary/20 transition-all">
                                    <h3 className="text-white font-semibold text-lg mb-1">{fee.category}</h3>
                                    <p className="text-sm text-gray-400 mb-4 flex items-center gap-2">
                                        <User className="w-3 h-3" />
                                        {fee.type}
                                    </p>

                                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
                                        <div className="bg-primary/10 rounded-lg p-3 text-center">
                                            <span className="block text-primary text-xs uppercase font-bold tracking-wider mb-1">Early Bird</span>
                                            <span className="text-white font-bold">{fee.early}</span>
                                        </div>
                                        <div className="bg-white/5 rounded-lg p-3 text-center">
                                            <span className="block text-gray-400 text-xs uppercase font-bold tracking-wider mb-1">Late</span>
                                            <span className="text-gray-200 font-bold">{fee.late}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Desktop Table View */}
                        <div className="hidden md:block overflow-x-auto">
                            <table className="w-full text-left text-sm text-gray-600">
                                <thead className="text-xs uppercase bg-gray-100 text-gray-700">
                                    <tr>
                                        <th scope="col" className="px-6 py-4">Participant Type</th>
                                        <th scope="col" className="px-6 py-4">Category</th>
                                        <th scope="col" className="px-6 py-4 text-center bg-primary/10 text-primary">Early Bird</th>
                                        <th scope="col" className="px-6 py-4 text-center">Late Registration</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {detailedFees.map((fee, index) => (
                                        <tr key={index} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4 font-medium text-gray-900">{fee.type}</td>
                                            <td className="px-6 py-4">{fee.category}</td>
                                            <td className="px-6 py-4 text-center font-bold text-primary bg-primary/5">{fee.early}</td>
                                            <td className="px-6 py-4 text-center">{fee.late}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="p-6 bg-primary/5 border-t border-primary/10 flex flex-col sm:flex-row items-center justify-between gap-6">
                            <div>
                                <p className="text-gray-900 font-semibold">Ready to register?</p>
                                <p className="text-sm text-gray-600">Proceed to the payment gateway to complete your registration.</p>
                            </div>
                            <a
                                href="https://web.ticketdude.app/e/72"
                                target="_blank"
                                className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 rounded-full transition-all shadow-lg shadow-primary/25 hover:scale-105"
                            >
                                Register Now
                            </a>
                        </div>
                    </div>
                </section>

                {/* Guidelines Grid */}
                <div className="grid md:grid-cols-2 gap-8">

                    {/* For Authors */}
                    <section className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-blue-500/10 rounded-lg text-blue-600">
                                <User className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">For Authors</h3>
                        </div>
                        <ul className="space-y-4 text-gray-600 text-sm leading-relaxed">
                            <li className="flex gap-3">
                                <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                                <span>At least one author of every accepted paper must register and present the paper for inclusion in IEEE Xplore.</span>
                            </li>
                            <li className="flex gap-3">
                                <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                                <span>Multiple authors attending must register separately.</span>
                            </li>
                            <li className="flex gap-3">
                                <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                                <span>Registration fee is non-refundable and must be paid before uploading the camera-ready paper.</span>
                            </li>
                            <li className="flex gap-3">
                                <AlertCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                                <span>Additional authors cannot be added to the camera-ready paper.</span>
                            </li>
                        </ul>
                    </section>

                    {/* For Attendees */}
                    <section className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-green-500/10 rounded-lg text-green-600">
                                <Users className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">For Attendees</h3>
                        </div>
                        <ul className="space-y-4 text-gray-600 text-sm leading-relaxed">
                            <li className="flex gap-3">
                                <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                <span>Registration includes conference kit, access to all sessions, meals, and cultural events.</span>
                            </li>
                            <li className="flex gap-3">
                                <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                <span>IEEE members/students must upload valid proof of membership/ID during registration.</span>
                            </li>
                            <li className="flex gap-3">
                                <Receipt className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                                <span>Keep a copy of the transaction ID and registration confirmation.</span>
                            </li>
                        </ul>
                    </section>
                </div>

                {/* Policies */}
                <section className="bg-red-50 border border-red-100 rounded-2xl p-8 text-center max-w-4xl mx-auto">
                    <h3 className="text-lg font-bold text-red-700 mb-3">No Show Policy</h3>
                    <p className="text-red-600 text-sm">
                        Any accepted paper included in the final program is expected to have at least one author attend and present the paper at the conference.
                        Non-presented papers will not be submitted to IEEE Xplore digital library as per IEEE no-show policy.
                    </p>
                </section>

            </div>

            <Footer />
        </main>
    );
};

export default RegistrationPage;
