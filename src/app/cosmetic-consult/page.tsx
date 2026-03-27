import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cosmetic Consultation — DENSTUDIO",
  description:
    "Transform your smile with natural-looking composite bonding and Invisalign at Denstudio, Harley Street. Packages from £1,400. Book your free consultation.",
};

export default function CosmeticConsultPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#f8f8f6] pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#222222] leading-tight mb-6">
                Transform Your Smile with Natural-Looking Composite Bonding and
                Invisalign
              </h1>
              <p className="text-lg text-[#333333] leading-relaxed mb-8">
                Achieve a stunning, natural smile without invasive procedures.
                Dr Jana Denzel combines composite bonding and Invisalign to
                deliver beautiful results — often in just a few appointments.
              </p>
              <Link
                href="/contact-us"
                className="inline-block bg-[#012406] hover:bg-[#023a09] text-white px-8 py-3.5 rounded-full font-medium transition-all duration-300"
              >
                Book Your Free Consultation
              </Link>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image src="/images/composite-bonding/hero.webp" alt="Composite bonding and Invisalign at DENSTUDIO" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Dr Jana Credentials */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden max-w-md mx-auto lg:mx-0">
              <Image src="/images/about/dr-jana-1.webp" alt="Dr Jana Denzel" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#222222] mb-6">
                Your Smile, Designed by Dr Jana Denzel
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                Dr Jana Denzel is an internationally recognised cosmetic
                dentist, BBC Apprentice star and twice-awarded Best Young
                Dentist in the UK. Named among the world&apos;s top 32 dentists
                and a Global Ambassador for Slow Dentistry.
              </p>
              <p className="text-[#333333] leading-relaxed mb-4">
                With a meticulous eye for detail and a passion for
                natural-looking results, Dr Denzel has transformed thousands of
                smiles at her Harley Street practice. Every treatment is
                personally planned and delivered to the highest standard.
              </p>
              <ul className="space-y-3 mt-6">
                {[
                  "Twice-awarded Best Young Dentist UK",
                  "BBC Apprentice finalist",
                  "Global Ambassador for Slow Dentistry",
                  "World top 32 dentists",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 shrink-0 text-[#012406]"
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
                    <span className="text-[#333333]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Step Process */}
      <section className="py-20 md:py-28 bg-[#f8f8f6]">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#222222] mb-12 text-center">
            Your 3-Step Smile Transformation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Free Consultation",
                description:
                  "Meet Dr Denzel for a comprehensive smile assessment. We discuss your goals, examine your teeth and recommend the best treatment plan.",
              },
              {
                step: "02",
                title: "Treatment",
                description:
                  "Your personalised treatment begins — whether that is Invisalign aligners, composite bonding or a combination of both for optimal results.",
              },
              {
                step: "03",
                title: "Your New Smile",
                description:
                  "Reveal your transformed smile. We ensure you are completely happy with the results and provide aftercare guidance to maintain your new look.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-white rounded-2xl p-8 text-center"
              >
                <span className="inline-block text-4xl font-bold text-[#012406] mb-4">
                  {item.step}
                </span>
                <h3 className="text-xl font-semibold text-[#222222] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#555555] leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#222222] mb-4 text-center">
            Pricing Packages
          </h2>
          <p className="text-[#555555] text-center mb-12 max-w-2xl mx-auto">
            Transparent pricing with no hidden costs. Choose the package that
            suits your goals.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Basic */}
            <div className="bg-white rounded-2xl p-6 border border-[#e5e5e5] flex flex-col">
              <h3 className="text-lg font-semibold text-[#222222] mb-1">
                Basic Bonding
              </h3>
              <p className="text-sm text-[#555555] mb-4">4 teeth</p>
              <span className="text-3xl font-bold text-[#012406] mb-4">
                £1,400
              </span>
              <ul className="space-y-2 text-sm text-[#555555] flex-1">
                <li className="flex items-start gap-2">
                  <span className="text-[#012406] mt-0.5">&#10003;</span>
                  4 teeth composite bonding
                </li>
              </ul>
            </div>

            {/* Advanced */}
            <div className="bg-white rounded-2xl p-6 border border-[#e5e5e5] flex flex-col">
              <h3 className="text-lg font-semibold text-[#222222] mb-1">
                Advanced
              </h3>
              <p className="text-sm text-[#555555] mb-4">
                6 teeth + whitening
              </p>
              <span className="text-3xl font-bold text-[#012406] mb-4">
                £2,100
              </span>
              <ul className="space-y-2 text-sm text-[#555555] flex-1">
                <li className="flex items-start gap-2">
                  <span className="text-[#012406] mt-0.5">&#10003;</span>
                  6 teeth composite bonding
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#012406] mt-0.5">&#10003;</span>
                  Professional whitening kit
                </li>
              </ul>
            </div>

            {/* Ultimate */}
            <div className="bg-white rounded-2xl p-6 border border-[#e5e5e5] flex flex-col">
              <h3 className="text-lg font-semibold text-[#222222] mb-1">
                Ultimate
              </h3>
              <p className="text-sm text-[#555555] mb-4">
                8 teeth + whitening
              </p>
              <span className="text-3xl font-bold text-[#012406] mb-4">
                £2,520
              </span>
              <ul className="space-y-2 text-sm text-[#555555] flex-1">
                <li className="flex items-start gap-2">
                  <span className="text-[#012406] mt-0.5">&#10003;</span>
                  8 teeth composite bonding
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#012406] mt-0.5">&#10003;</span>
                  Professional whitening kit
                </li>
              </ul>
            </div>

            {/* Smile Makeover Special */}
            <div className="bg-white rounded-2xl p-6 border-2 border-[#012406] flex flex-col relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#012406] text-white text-xs font-medium px-4 py-1 rounded-full">
                Best Value
              </span>
              <h3 className="text-lg font-semibold text-[#222222] mb-1">
                Smile Makeover Special
              </h3>
              <p className="text-sm text-[#555555] mb-4">
                Complete transformation
              </p>
              <div className="mb-1">
                <span className="text-sm text-[#999999] line-through">
                  Was £7,580
                </span>
              </div>
              <span className="text-3xl font-bold text-[#012406] mb-4">
                £3,790
              </span>
              <ul className="space-y-2 text-sm text-[#555555] flex-1">
                <li className="flex items-start gap-2">
                  <span className="text-[#012406] mt-0.5">&#10003;</span>
                  Full Invisalign treatment
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#012406] mt-0.5">&#10003;</span>
                  Composite bonding
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#012406] mt-0.5">&#10003;</span>
                  Dental exam
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#012406] mt-0.5">&#10003;</span>
                  Hygiene appointment
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#012406] mt-0.5">&#10003;</span>
                  Professional whitening
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#012406] mt-0.5">&#10003;</span>
                  Retainers included
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link
              href="/contact-us"
              className="inline-block bg-[#012406] hover:bg-[#023a09] text-white px-8 py-3.5 rounded-full font-medium transition-all duration-300"
            >
              Book Your Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 md:py-28 bg-[#012406] text-white text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Smile?
          </h2>
          <p className="text-white/80 leading-relaxed mb-10 text-lg">
            Book your free cosmetic consultation at our Harley Street practice
            and discover what composite bonding and Invisalign can do for you.
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
