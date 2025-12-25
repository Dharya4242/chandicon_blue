"use client";

const ConferenceDescription = () => {
    return (
        <section className="relative py-20 px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="relative p-8 md:p-12 rounded-3xl bg-white/80 border border-gray-200 backdrop-blur-md overflow-hidden group hover:bg-white/90 transition-colors duration-500 shadow-lg">

                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors duration-500"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 group-hover:bg-accent/10 transition-colors duration-500"></div>

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 text-center">
                            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">CHANDICON 2026</span>
                        </h2>

                        <p className="text-lg text-gray-700 leading-relaxed text-center font-light">
                            <span className="font-semibold text-primary">CHANDICON</span> is a flagship annual international conference of the IEEE India Council organized by an IEEE Subsection in INDIA.
                            <br /><br />
                            <span className="text-accent font-semibold">CHANDICON 2026</span>, scheduled during <span className="text-gray-900 font-medium">August 20-22, 2026</span>, is being organized by
                            IEEE Chandigarh Subsection along with IEEE India Council. The conference will be hosted by
                            <span className="text-gray-900 font-semibold"> Punjab Engineering College (Deemed to be University), Chandigarh</span>.
                            <br /><br />
                            The conference aims to provide an interdisciplinary platform for academicians, researchers, industry professionals,
                            and research scholars to exchange and share their knowledge, experience & research. Papers selected and presented
                            at the conference will be submitted to <span className="text-primary font-semibold">IEEE Xplore</span>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ConferenceDescription;
