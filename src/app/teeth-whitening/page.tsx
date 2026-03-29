import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import EnquiryButton from "@/components/EnquiryButton";

export const metadata: Metadata = {
  title: "Teeth Whitening | Achieve Dazzling Results Today — DENSTUDIO",
  description:
    "Professional teeth whitening at Denstudio, Harley Street. Custom-fit SuperFit trays, 16% Carbamide Peroxide gel, results lasting up to 3 years. Total cost £395.",
};

export default function TeethWhiteningPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#f8f8f6] pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-[#222222] leading-[1.1] mb-4">
              Teeth Whitening Harley Street, London
            </h1>
            <h2 className="text-xl md:text-2xl text-[#333333] font-medium mb-8">
              Confidence starts with your smile
            </h2>
            <ul className="space-y-3 mb-10">
              {[
                "Professional whitening supervised by your dentist",
                "32x stronger than over-the-counter products",
                "Wear nightly for 7–14 days",
                "Custom trays made from 3D scans of your teeth",
                "16% Carbamide Peroxide gel",
                "Top up at home whenever you like",
                "Total cost: £395",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 mt-0.5 shrink-0 text-[#012406]"
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
            <EnquiryButton
              className="inline-block bg-[#012406] hover:bg-[#023a09] text-white px-8 py-3.5 rounded-full font-medium transition-all duration-300"
            >
              Book Now
            </EnquiryButton>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image src="/images/teeth-whitening/hero.webp" alt="Teeth Whitening" fill className="object-cover" priority />
          </div>
          </div>
        </div>
      </section>

      {/* The Perfect Way */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#222222] leading-[1.15] mb-8">
              The Perfect Way to Get a Glowing White Smile
            </h2>
            <p className="text-[#333333] leading-relaxed mb-6">
              Our whitening system uses custom-made SuperFit trays that are
              precision-crafted from 3D digital scans of your teeth. Unlike
              generic trays, SuperFit trays hug every contour of your teeth for
              even gel distribution and maximum whitening power.
            </p>
            <p className="text-[#333333] leading-relaxed mb-6">
              We use a professional-strength 16% Carbamide Peroxide gel — 32
              times stronger than anything available over the counter. This
              clinical-grade formula penetrates deep into the enamel to break
              down stubborn stains caused by coffee, tea, red wine and everyday
              wear.
            </p>
            <p className="text-[#333333] leading-relaxed">
              Simply wear your trays for a few hours each night over 7 to 14
              days. You will start to see visible results within the first few
              sessions, with your full, brilliant white smile revealed by the
              end of your treatment cycle.
            </p>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image src="/images/teeth-whitening/treatment.webp" alt="Teeth Whitening Treatment" fill className="object-cover" />
          </div>
          </div>
        </div>
      </section>

      {/* Whiter Teeth, Brighter Life */}
      <section className="py-24 md:py-32 bg-[#f8f8f6]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#222222] leading-[1.15] mb-8">
              Whiter Teeth, Brighter Life
            </h2>
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-10">
              <Image src="/images/teeth-whitening/results.webp" alt="Teeth Whitening Results" fill className="object-cover" />
            </div>
            <p className="text-[#333333] leading-relaxed mb-6">
              Our FreshGel whitening formula is gentle on sensitive teeth while
              delivering powerful, long-lasting results. The unique formulation
              minimises sensitivity so you can whiten comfortably, night after
              night.
            </p>
            <p className="text-[#333333] leading-relaxed mb-6">
              Results from our professional whitening system last up to 3 years
              with proper care. And because you keep your custom SuperFit trays,
              you can top up your whitening at home whenever you feel your smile
              needs a refresh — simply order more gel from us.
            </p>
            <p className="text-[#333333] leading-relaxed mb-10">
              A brighter smile boosts your confidence, enhances your appearance
              and leaves a lasting impression. It is one of the simplest and
              most affordable ways to transform the way you look and feel.
            </p>
            <EnquiryButton
              className="inline-block bg-[#012406] hover:bg-[#023a09] text-white px-8 py-3.5 rounded-full font-medium transition-all duration-300"
            >
              Book Now
            </EnquiryButton>
          </div>
        </div>
      </section>
    </>
  );
}
