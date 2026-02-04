import Image from "next/image";

const logos = [
    { src: "/assets/logos/Chandicon_final.png", alt: "Chandicon Logo", height: 60 },
    { src: "/assets/logos/ICSS_final.png", alt: "ICSS Logo", height: 60 },
    { src: "/assets/logos/IDS_final.png", alt: "IDS Logo", height: 60 },
    { src: "/assets/logos/IC_final.png", alt: "IC Logo", height: 60 },
    { src: "/assets/logos/PEC_Final.png", alt: "PEC Logo", height: 60 },
];

export default function LogosHeader() {
    return (
        <div className="bg-white border-b border-gray-100 py-3">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 w-full">
                    {logos.map((logo, index) => (
                        <div key={index} className="relative h-12 md:h-20 w-auto flex items-center justify-center">
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                width={0}
                                height={60}
                                className="h-full w-auto object-contain"
                                sizes="(max-width: 768px) 100px, 150px"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
