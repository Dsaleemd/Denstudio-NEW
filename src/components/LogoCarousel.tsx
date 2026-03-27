"use client";

const logos = [
  "DenStudio",
  "Vogue",
  "Oxford University",
  "Grazia",
  "Slow Dentistry",
  "Rolling Stone",
  "BBC",
  "Teen Vogue",
];

export default function LogoCarousel() {
  return (
    <div className="overflow-hidden relative py-8">
      {/* Gradient masks on edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div className="flex animate-scroll">
        {/* Duplicate the list for seamless loop */}
        {[...logos, ...logos].map((logo, i) => (
          <div
            key={`${logo}-${i}`}
            className="flex-shrink-0 mx-10 flex items-center justify-center"
          >
            <span className="text-lg font-semibold text-medium-grey/60 tracking-wide whitespace-nowrap uppercase select-none">
              {logo}
            </span>
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
