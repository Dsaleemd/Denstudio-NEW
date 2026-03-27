import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ReviewCarousel from "@/components/ReviewCarousel";
import Accordion from "@/components/Accordion";

export const metadata: Metadata = {
  title: "General | Schedule Your Dental Checkup Today — DENSTUDIO",
  description:
    "Comprehensive general dentistry at Denstudio, Harley Street. From dental check-ups and fillings to root canals and implants, expert care in a relaxed environment.",
};

const serviceItems = [
  {
    question: "Dental Restoration",
    answer:
      "We restore damaged teeth to their natural form and function using the latest materials and techniques, ensuring long-lasting, natural-looking results.",
  },
  {
    question: "Tooth Fillings",
    answer:
      "Modern tooth-coloured fillings that blend seamlessly with your natural teeth. We remove decay and restore the tooth with durable composite materials.",
  },
  {
    question: "Root Canal",
    answer:
      "Advanced root canal treatment to save infected teeth and relieve pain. We use precision instruments and techniques to ensure comfortable, effective treatment.",
  },
  {
    question: "Dental Crown",
    answer:
      "Custom-crafted dental crowns to protect and strengthen damaged teeth. Made from high-quality materials for a perfect fit and natural appearance.",
  },
  {
    question: "Dental Bridges",
    answer:
      "Replace one or more missing teeth with a fixed bridge that looks, feels and functions like natural teeth, restoring your smile and bite.",
  },
  {
    question: "Dental Implants",
    answer:
      "Permanent tooth replacement using titanium implants that integrate with your jawbone. The gold standard for replacing missing teeth with natural-looking results.",
  },
  {
    question: "Dentures",
    answer:
      "Custom-made full and partial dentures designed for comfort, fit and a natural appearance. Modern dentures are more comfortable and realistic than ever before.",
  },
  {
    question: "Tooth Extraction",
    answer:
      "Safe, gentle tooth extractions performed with precision and care. We ensure your comfort throughout and provide comprehensive aftercare guidance.",
  },
  {
    question: "Wisdom Tooth Removal",
    answer:
      "Expert removal of problematic wisdom teeth. We use advanced imaging and techniques to ensure a smooth, comfortable procedure with minimal recovery time.",
  },
  {
    question: "Laser Procedures",
    answer:
      "Cutting-edge laser dentistry for a range of treatments including gum contouring, ulcer treatment and more. Minimally invasive with faster healing times.",
  },
  {
    question: "Teeth Straightening",
    answer:
      "Discreet clear aligner treatment to straighten your teeth without metal braces. Custom-made aligners that fit your lifestyle and deliver beautiful results.",
  },
  {
    question: "Preventative Treatments",
    answer:
      "Proactive dental care including check-ups, professional cleaning, fluoride treatments and oral health education to keep your teeth and gums healthy for life.",
  },
];

export default function GeneralPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#f8f8f6] pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-[#222222] leading-[1.1] mb-4">
                General Dentistry Harley Street
              </h1>
              <h2 className="text-xl md:text-2xl text-[#333333] font-medium mb-6">
                What Is General Dentistry?
              </h2>
              <p className="text-[#333333] leading-relaxed mb-8 max-w-xl">
                General dentistry covers the essential treatments and preventative
                care that keep your teeth and gums healthy. From routine check-ups
                and fillings to more complex procedures like root canals and
                extractions, our experienced team provides comprehensive dental
                care in a comfortable, modern environment.
              </p>
              <Link
                href="/contact-us"
                className="inline-block bg-[#012406] hover:bg-[#023a09] text-white px-8 py-3.5 rounded-full font-medium transition-all duration-300"
              >
                Book Now
              </Link>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image src="/images/general/hero.webp" alt="General Dentistry" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Two-Step Process */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#222222] leading-[1.15] mb-14 text-center">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Step 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#eeeeee]">
              <div className="relative aspect-[16/9]">
                <Image src="/images/general/consultation.webp" alt="Consultation" fill className="object-cover" />
              </div>
              <div className="p-8">
                <div className="w-12 h-12 rounded-full bg-[#012406] text-white flex items-center justify-center text-lg font-bold mb-6">
                  1
                </div>
                <h3 className="text-xl font-bold text-[#222222] mb-4">
                  Consultation
                </h3>
                <p className="text-[#333333] leading-relaxed">
                  Your journey begins with a thorough oral health assessment. We
                  take digital X-rays, examine your teeth and gums, and discuss
                  any concerns you may have. From there, we create a personalised
                  treatment plan tailored to your needs.
                </p>
              </div>
            </div>
            {/* Step 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#eeeeee]">
              <div className="relative aspect-[16/9]">
                <Image src="/images/teeth-straightening/hero.webp" alt="Treatment" fill className="object-cover" />
              </div>
              <div className="p-8">
                <div className="w-12 h-12 rounded-full bg-[#012406] text-white flex items-center justify-center text-lg font-bold mb-6">
                  2
                </div>
                <h3 className="text-xl font-bold text-[#222222] mb-4">
                  Treatment
                </h3>
                <p className="text-[#333333] leading-relaxed">
                  We carry out your treatment plan with precision and care, using
                  the latest technology and techniques. Whether it is a simple
                  filling or a more complex procedure, we ensure your comfort
                  every step of the way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Denstudio */}
      <section className="py-24 md:py-32 bg-[#f8f8f6]">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#222222] leading-[1.15] mb-8 text-center">
            Why Choose denstudio
          </h2>
          <div className="relative aspect-[21/9] rounded-2xl overflow-hidden mb-14 max-w-4xl mx-auto">
            <Image src="/images/general/why-choose.webp" alt="Why Choose Denstudio" fill className="object-cover" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Experienced Team",
                desc: "Our dentists bring years of specialist training and hands-on experience to every patient interaction.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                ),
              },
              {
                title: "Advanced Technology",
                desc: "We invest in the latest dental technology to deliver precise, comfortable and efficient treatments.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                ),
              },
              {
                title: "Personalised Approach",
                desc: "Every treatment plan is tailored to your individual needs, preferences and goals for your smile.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                ),
              },
              {
                title: "Relaxed Environment",
                desc: "Our modern Harley Street clinic is designed to help you feel calm and comfortable from the moment you arrive.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                ),
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-2xl p-8 shadow-sm border border-[#eeeeee] text-center"
              >
                <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-[#012406]/10 flex items-center justify-center">
                  <svg
                    className="w-7 h-7 text-[#012406]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {card.icon}
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#222222] mb-3">
                  {card.title}
                </h3>
                <p className="text-[#333333] text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 md:py-32 bg-[#f2f2f0]">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#222222] leading-[1.15] mb-12 text-center">
            What Our Patients Say
          </h2>
          <ReviewCarousel />
        </div>
      </section>

      {/* Services Accordion */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#222222] leading-[1.15] mb-12 text-center">
            Our Services
          </h2>
          <Accordion items={serviceItems} />
        </div>
      </section>
    </>
  );
}
