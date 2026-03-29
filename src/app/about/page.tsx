import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import EnquiryButton from "@/components/EnquiryButton";

export const metadata: Metadata = {
  title: "About | Enhance Your Smile Today — DENSTUDIO",
  description:
    "Discover award-winning, personalized dentistry at DENSTUDIO in London, specializing in cosmetic, general, and transformative dental treatments.",
};

const teamMembers = [
  {
    name: "Dr Jana Denzel Nandakumar",
    role: "Dentist",
    gdc: "285525",
    image: "/images/about/dr-jana-1.webp",
    bio: "Dr Jana Denzel is the founder and principal dentist at DENSTUDIO, known for her meticulous attention to detail and unwavering commitment to excellence. With a focus on cosmetic and restorative dentistry, she has built a reputation for creating natural, stunning smiles that transform lives.",
    features: [
      "Over 100 smile makeovers completed",
      "Specialist in Invisalign, composite bonding and EMAX veneers",
      "Committed to preserving natural teeth wherever possible",
    ],
  },
  {
    name: "Paige Combe",
    role: "Patient Care Lead",
    gdc: null,
    image: "/images/about/dr-jana-2.webp",
    bio: "Paige is the first point of contact for all DENSTUDIO patients. Warm, professional and incredibly organised, she is dedicated to welcoming and supporting every patient from the moment they enquire to the completion of their treatment journey.",
    features: [],
  },
  {
    name: "Emma Gates",
    role: "Dental Nurse",
    gdc: "303351",
    image: "/images/about/emma-gates.webp",
    bio: "Emma ensures every appointment runs smoothly, working closely alongside Dr Denzel to deliver the highest standard of care. Calm, reassuring and attentive, she helps patients feel comfortable and at ease throughout their treatment.",
    features: [],
  },
];

const awards = [
  {
    title: "Awards and Recognition",
    description:
      "Winner of Best Young Dentist in 2021 and 2024, recognising Dr Denzel's outstanding skill, innovation and dedication to patient care in the field of dentistry.",
  },
  {
    title: "Global Influence",
    description:
      "Recognised as one of the top 32 dentists in the world and appointed as a Slow Dentistry Ambassador, advocating for excellence and patient-centred care on a global stage.",
  },
  {
    title: "Educational Prowess",
    description:
      "A respected lecturer at Oxford University, sharing expertise and shaping the next generation of dental professionals with cutting-edge knowledge and clinical insight.",
  },
];

const whyChoose = [
  {
    title: "Experience with Icons",
    description:
      "From Grammy-winning artists to sports athletes, our clinic has been trusted by some of the most recognisable names across entertainment, sport and business.",
  },
  {
    title: "Global Recognition",
    description:
      "Award-winning dentistry recognised on the world stage, with accolades that reflect our commitment to clinical excellence and innovation.",
  },
  {
    title: "Innovative Dentistry",
    description:
      "We use the latest techniques, materials and technology to deliver results that are as advanced as they are beautiful.",
  },
  {
    title: "Your Smile, Our Masterpiece",
    description:
      "Every smile we create is a bespoke work of art, meticulously designed and crafted to complement your unique features and personality.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#f8f8f6] pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#555555] mb-3">ABOUT US</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-[#222222] leading-[1.1] mb-6">
                Award Winning Dentistry In Central London
              </h1>
              <p className="text-[#333333] leading-relaxed mb-6 max-w-xl">
                At DENSTUDIO, we believe in life-changing treatments delivered in
                a luxurious, welcoming environment. Founded by Dr Jana Denzel,
                our clinic has earned a reputation for exceptional results and
                world-class patient care.
              </p>
              <p className="text-[#333333] leading-relaxed mb-8 max-w-xl">
                Dr Denzel&apos;s celebrity clients include Grammy-winning
                artists, professional sports athletes, Warner Brothers directors
                and Dubai royalty. Her meticulous approach to cosmetic dentistry
                has made DENSTUDIO one of the most sought-after dental practices
                in London.
              </p>
              <EnquiryButton
                className="inline-block bg-[#012406] hover:bg-[#023a09] text-white px-8 py-3.5 rounded-full font-medium transition-all duration-300"
              >
                Book a consultation
              </EnquiryButton>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image src="/images/about/hero.webp" alt="Award winning dentistry at DENSTUDIO" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-[#555555] mb-3 text-center">OUR TEAM</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#222222] leading-[1.15] mb-4 text-center">
            Meet the Team
          </h2>
          <p className="text-[#333333] text-center mb-16 max-w-2xl mx-auto leading-relaxed">
            Our dedicated team of professionals is committed to providing you
            with the highest standard of dental care.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-[#f8f8f6] rounded-2xl overflow-hidden"
              >
                <div className="relative aspect-[3/4]">
                  <Image src={member.image} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl md:text-3xl font-normal text-[#222222] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#012406] font-medium mb-1">
                    {member.role}
                  </p>
                  {member.gdc && (
                    <p className="text-sm text-[#555555] mb-4">
                      GDC: {member.gdc}
                    </p>
                  )}
                  <p className="text-[#333333] leading-relaxed text-sm mb-4">
                    {member.bio}
                  </p>
                  {member.features.length > 0 && (
                    <ul className="space-y-2">
                      {member.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm"
                        >
                          <svg
                            className="w-4 h-4 mt-0.5 shrink-0 text-[#012406]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-[#333333]">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-24 md:py-32 bg-[#f8f8f6]">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-[#555555] mb-3 text-center">RECOGNITION</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#222222] leading-[1.15] mb-16 text-center">
            Awards and Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {awards.map((award) => (
              <div key={award.title} className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#012406] flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-normal text-[#222222] mb-3">
                  {award.title}
                </h3>
                <p className="text-[#333333] leading-relaxed">
                  {award.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Denstudio */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-[#555555] mb-3 text-center">WHY CHOOSE US</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#222222] leading-[1.15] mb-16 text-center">
            Why You Should Choose Denstudio
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image src="/images/about/why-choose.webp" alt="Why choose DENSTUDIO" fill className="object-cover" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {whyChoose.map((item) => (
                <div
                  key={item.title}
                  className="bg-[#f8f8f6] rounded-2xl p-8"
                >
                  <h3 className="text-2xl md:text-3xl font-normal text-[#222222] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#333333] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 md:py-32 bg-[#012406] text-white text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6">
            Ready to Experience the DENSTUDIO Difference?
          </h2>
          <p className="text-white/80 leading-relaxed mb-10 text-lg">
            Book your consultation today and discover why patients from around
            the world trust us with their smiles.
          </p>
          <EnquiryButton
            className="inline-block bg-white text-[#012406] hover:bg-white/90 px-8 py-3.5 rounded-full font-medium transition-all duration-300"
          >
            Book Now
          </EnquiryButton>
        </div>
      </section>
    </>
  );
}
