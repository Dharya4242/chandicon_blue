import Link from "next/link";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import ConferenceDescription from "@/components/ConferenceDescription";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <Hero />
      <ConferenceDescription />
      <Timeline />

      {/* Placeholder for future sections */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all">
            <h3 className="text-xl font-bold mb-3 text-gray-900">Call for Papers</h3>
            <p className="text-gray-600 mb-4">Submit your research papers for review by our expert committee.</p>
            <Link href="/tracks" className="text-accent hover:underline">Learn more &rarr;</Link>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all">
            <h3 className="text-xl font-bold mb-3 text-gray-900">Keynote Speakers</h3>
            <p className="text-gray-600 mb-4">Meet the visionaries shaping the future of industrial systems.</p>
            <Link href="/speakers" className="text-accent hover:underline">View speakers &rarr;</Link>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all">
            <h3 className="text-xl font-bold mb-3 text-gray-900">Registration</h3>
            <p className="text-gray-600 mb-4">Early bird registration is now open. Secure your spot today.</p>
            <Link href="/registration" className="text-accent hover:underline">Register now &rarr;</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
