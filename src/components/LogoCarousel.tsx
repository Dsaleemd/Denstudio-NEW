"use client";

import Image from "next/image";

const logos = [
  { src: "/images/homepage/logos/denstudio-appre.png", alt: "DenStudio", width: 100 },
  { src: "/images/homepage/logos/vogue.png", alt: "Vogue", width: 80 },
  { src: "/images/homepage/logos/oxford-university.png", alt: "Oxford University", width: 90 },
  { src: "/images/homepage/logos/denstudio-download.png", alt: "Grazia", width: 80 },
  { src: "/images/homepage/logos/dr-jana-cosmetic-dentist-logo.png", alt: "Slow Dentistry", width: 100 },
  { src: "/images/homepage/logos/rolling-stones.webp", alt: "Rolling Stone", width: 100 },
  { src: "/images/homepage/logos/denstudio-logo.png", alt: "BBC", width: 60 },
  { src: "/images/homepage/logos/teen-vogue.png", alt: "Teen Vogue", width: 100 },
];

export default function LogoCarousel() {
  return (
    <div className="overflow-hidden relative py-8">
      {/* Gradient masks on edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div className="flex animate-scroll items-center">
        {[...logos, ...logos].map((logo, i) => (
          <div
            key={`${logo.alt}-${i}`}
            className="flex-shrink-0 mx-10 flex items-center justify-center h-12"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={40}
              className="object-contain opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 h-auto w-auto"
              style={{ maxHeight: 40, maxWidth: logo.width }}
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
          width: max-content;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
