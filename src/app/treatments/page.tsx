import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "All Treatments — DENSTUDIO",
  description:
    "Explore all treatments at Denstudio on Harley Street, London. Composite bonding, porcelain veneers, teeth straightening, general dentistry and more.",
};

const treatments = [
  {
    title: "Composite Bonding",
    description:
      "Reshape, repair and enhance your teeth with hand-sculpted composite resin for a natural, seamless result — often in a single appointment.",
    href: "/composite-bonding",
    image: "/images/composite-bonding/hero.webp",
  },
  {
    title: "Porcelain Veneers",
    description:
      "Ultra-thin, handcrafted ceramic shells designed to transform the shape, colour and alignment of your smile with stunning, long-lasting results.",
    href: "/porcelain-veneers",
    image: "/images/porcelain-veneers/clinical-1.webp",
  },
  {
    title: "Teeth Straightening",
    description:
      "Discreet Invisalign clear aligners to gently and effectively correct crowding, spacing and bite issues for a perfectly aligned smile.",
    href: "/teeth-straightening",
    image: "/images/teeth-straightening/hero.webp",
  },
  {
    title: "General Dentistry",
    description:
      "Comprehensive dental care including check-ups, hygiene, fillings and preventive treatments to keep your smile healthy for life.",
    href: "/general",
    image: "/images/general/hero.webp",
  },
];

export default function TreatmentsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#222222] mb-4">
            Explore treatments at Denstudio
          </h1>
          <h2 className="text-xl md:text-2xl text-[#555555] font-medium">
            Transform your smile with Denstudio
          </h2>
        </div>
      </section>

      {/* Treatment Cards */}
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {treatments.map((treatment) => (
              <Link
                key={treatment.title}
                href={treatment.href}
                className="group bg-white rounded-2xl border border-[#e5e5e5] overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative aspect-[16/9]">
                  <Image src={treatment.image} alt={treatment.title} fill className="object-cover" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-[#222222] mb-3 group-hover:text-[#012406] transition-colors duration-300">
                    {treatment.title}
                  </h3>
                  <p className="text-[#555555] leading-relaxed text-sm mb-4">
                    {treatment.description}
                  </p>
                  <span className="inline-block text-sm font-medium text-[#012406]">
                    Learn more &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Dr Jana Bio */}
      <section className="py-20 md:py-28 bg-[#f8f8f6]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden max-w-md mx-auto lg:mx-0">
              <Image src="/images/about/dr-jana-1.webp" alt="Dr Jana Denzel" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#222222] mb-6">
                Meet Dr Jana Denzel
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                Dr Jana Denzel is an internationally recognised cosmetic
                dentist, BBC Apprentice star and twice-awarded Best Young
                Dentist in the UK. Named among the world&apos;s top 32 dentists
                and a Global Ambassador for Slow Dentistry, she brings artistry,
                precision and warmth to every patient interaction.
              </p>
              <p className="text-[#333333] leading-relaxed mb-8">
                As founder of Denstudio at 139 Harley Street, Dr Denzel has
                built a practice where clinical excellence meets personalised
                care. Every treatment plan is designed around you — your goals,
                your features and your lifestyle.
              </p>
              <Link
                href="/about"
                className="inline-block bg-[#012406] hover:bg-[#023a09] text-white px-8 py-3.5 rounded-full font-medium transition-all duration-300"
              >
                Learn More About Dr Denzel
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 md:py-28 bg-[#012406] text-white text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-white/80 leading-relaxed mb-10 text-lg">
            Book your consultation at our Harley Street practice and discover
            which treatment is right for you.
          </p>
          <Link
            href="/contact-us"
            className="inline-block bg-white text-[#012406] hover:bg-white/90 px-8 py-3.5 rounded-full font-medium transition-all duration-300"
          >
            Book Now
          </Link>
        </div>
      </section>
    </>
  );
}
