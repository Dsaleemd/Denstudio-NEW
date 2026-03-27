import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ReviewCarousel from "@/components/ReviewCarousel";

export const metadata: Metadata = {
  title: "Veneers | Transform Your Smile — DENSTUDIO",
  description:
    "Premium natural porcelain veneers at Denstudio, Harley Street. Transform your smile with Dr Jana Denzel. Transparent pricing from £1,200 per tooth.",
};

export default function VeneersLandingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#f8f8f6] pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#222222] leading-tight mb-6">
                Transform your smile today
              </h1>
              <p className="text-lg text-[#333333] leading-relaxed mb-8 max-w-xl">
                Premium natural porcelain veneers, handcrafted by world-class
                ceramists and designed by Dr Jana Denzel at our Harley Street
                practice. Ultra-thin, ultra-natural and built to last.
              </p>
              <Link
                href="/contact-us"
                className="inline-block bg-[#012406] hover:bg-[#023a09] text-white px-8 py-3.5 rounded-full font-medium transition-all duration-300"
              >
                Book Your Consultation
              </Link>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image src="/images/porcelain-veneers/hero.webp" alt="Porcelain veneers at DENSTUDIO" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Premium Natural Porcelain Veneers */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#222222] mb-8">
              Premium Natural Porcelain Veneers
            </h2>
            <p className="text-[#333333] leading-relaxed mb-6">
              Our porcelain veneers are crafted from the finest ceramic
              materials, hand-layered by master ceramists in world-renowned
              dental laboratories. Each veneer is individually designed to match
              your natural tooth characteristics — colour gradients, surface
              texture and translucency — creating a result that is virtually
              indistinguishable from natural enamel.
            </p>
            <p className="text-[#333333] leading-relaxed">
              Whether you are looking for a subtle enhancement or a complete
              smile makeover, our bespoke approach ensures every detail is
              tailored to your face, your features and your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Meet Dr Jana Denzel */}
      <section className="py-20 md:py-28 bg-[#f8f8f6]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden max-w-md mx-auto lg:mx-0">
              <Image src="/images/porcelain-veneers/clinical-1.webp" alt="Dr Jana Denzel" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#222222] mb-6">
                Meet Dr Jana Denzel
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                Dr Jana Denzel is an internationally recognised cosmetic
                dentist, BBC Apprentice star and twice-awarded Best Young
                Dentist in the UK. Named among the world&apos;s top 32 dentists
                and a Global Ambassador for Slow Dentistry, Dr Denzel brings a
                unique combination of artistry, precision and clinical
                excellence to every case.
              </p>
              <p className="text-[#333333] leading-relaxed mb-4">
                As founder of Denstudio at 139 Harley Street, she has built a
                practice centred on natural-looking results, meticulous
                attention to detail and a genuinely personal approach to patient
                care.
              </p>
              <p className="text-[#333333] leading-relaxed">
                Every smile transformation begins with a comprehensive
                consultation where Dr Denzel takes the time to understand your
                goals, assess your dental health and design a bespoke treatment
                plan tailored entirely to you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Step Action Plan */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#222222] mb-12 text-center">
            Your 3-Step Action Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description:
                  "A comprehensive assessment with Dr Denzel including digital scans, smile analysis and a personalised treatment plan designed around your goals.",
              },
              {
                step: "02",
                title: "Preparation",
                description:
                  "Minimal, conservative tooth preparation followed by precision digital impressions sent to our world-class laboratory for handcrafted veneer fabrication.",
              },
              {
                step: "03",
                title: "Application",
                description:
                  "Your bespoke veneers are carefully bonded to your teeth, adjusted for perfect fit and polished to a flawless, natural finish.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-[#f8f8f6] rounded-2xl p-8 text-center"
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

      {/* Transparent Pricing */}
      <section className="py-20 md:py-28 bg-[#f8f8f6]">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#222222] mb-4 text-center">
            Transparent Pricing
          </h2>
          <p className="text-[#555555] text-center mb-12 max-w-2xl mx-auto">
            We believe in honest, upfront pricing with no hidden costs. All
            prices include consultation, preparation, laboratory fees and
            fitting.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8 text-center border border-[#e5e5e5]">
              <h3 className="text-lg font-semibold text-[#222222] mb-2">
                Porcelain Smile Makeover
              </h3>
              <p className="text-sm text-[#555555] mb-4">
                Up to 10 veneers
              </p>
              <div className="mb-2">
                <span className="text-sm text-[#999999] line-through">
                  Was £12,000
                </span>
              </div>
              <span className="text-4xl font-bold text-[#012406]">£9,990</span>
              <p className="text-sm text-[#555555] mt-2">
                Save over £2,000
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center border-2 border-[#012406] relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#012406] text-white text-xs font-medium px-4 py-1 rounded-full">
                Best Value
              </span>
              <h3 className="text-lg font-semibold text-[#222222] mb-2">
                Full Mouth
              </h3>
              <p className="text-sm text-[#555555] mb-4">
                Up to 20 veneers
              </p>
              <span className="text-4xl font-bold text-[#012406]">
                £19,445
              </span>
              <p className="text-sm text-[#555555] mt-2">
                Complete transformation
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center border border-[#e5e5e5]">
              <h3 className="text-lg font-semibold text-[#222222] mb-2">
                Individual Veneer
              </h3>
              <p className="text-sm text-[#555555] mb-4">
                Per tooth
              </p>
              <span className="text-4xl font-bold text-[#012406]">£1,200</span>
              <p className="text-sm text-[#555555] mt-2">
                Single tooth or small case
              </p>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link
              href="/contact-us"
              className="inline-block bg-[#012406] hover:bg-[#023a09] text-white px-8 py-3.5 rounded-full font-medium transition-all duration-300"
            >
              Book Your Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 md:py-28 bg-[#f2f2f0]">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#222222] mb-12 text-center">
            What Our Patients Say
          </h2>
          <ReviewCarousel />
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 md:py-28 bg-[#012406] text-white text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Smile?
          </h2>
          <p className="text-white/80 leading-relaxed mb-10 text-lg">
            Book your consultation at our Harley Street practice today and take
            the first step towards the smile you have always wanted.
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
