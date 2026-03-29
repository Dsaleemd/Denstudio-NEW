import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ReviewCarousel from "@/components/ReviewCarousel";
import Accordion from "@/components/Accordion";
import EnquiryButton from "@/components/EnquiryButton";

export const metadata: Metadata = {
  title: "Composite Bonding | Transform Your Smile Today — DENSTUDIO",
  description:
    "Transform your smile with composite bonding at Denstudio, Harley Street. Pain-free, same-day treatment to repair chips, gaps and uneven teeth without altering your natural teeth.",
};

const faqItems = [
  {
    question: "What is composite bonding?",
    answer:
      "Think of composite bonding as the dental equivalent of a skilled artist's touch-up work. It uses mouldable dental resin to fix all sorts of imperfections in your teeth. Whether you're dealing with chips, cracks, gaps, or discolouration, this clever treatment can sort them all out in one go.",
  },
  {
    question: "How does composite bonding actually work?",
    answer:
      "The process is surprisingly straightforward. You'll start by picking the exact shade of resin that matches your teeth. Your dentist then carefully applies this material by hand over each tooth, leaving your original tooth completely untouched underneath. The magic happens when they cure the resin using ultraviolet light, making it rock-hard.",
  },
  {
    question: "Does composite bonding damage teeth?",
    answer:
      "No, composite bonding does not damage teeth. A standard treatment is applied over your natural teeth without modification.",
  },
  {
    question: "How much does composite bonding cost?",
    answer:
      "Composite bonding costs £350 per tooth (+£195 for your oral health check). Our most popular treatment covers your top 8 teeth.",
  },
  {
    question: "Composite bonding aftercare",
    answer:
      "Brush twice a day, floss or use interdental brushes, attend regular check-ups, avoid hard foods, avoid staining foods and drinks.",
  },
  {
    question: "Can you whiten composite bonding?",
    answer:
      "No, composite bonding cannot be whitened using whitening kits. Visit your dentist for re-polishing to remove surface stains.",
  },
];

export default function CompositeBondingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#012406] pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/composite-bonding/hero.webp" alt="Composite Bonding" fill className="object-cover opacity-30" priority />
        </div>
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white leading-[1.1] mb-4">
              Composite Bonding Harley Street
            </h1>
            <h2 className="text-2xl md:text-3xl text-white/90 font-medium mb-8">
              Transform Your Smile
            </h2>
            <ul className="space-y-4 mb-10">
              {[
                "Repairs damaged, gapped and uneven teeth",
                "Does not permanently alter natural teeth",
                "Pain-free procedure — no injections or drilling",
                "Same-day & next-day appointments",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 mt-0.5 shrink-0 text-white/80"
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
                  <span className="text-white/90">{item}</span>
                </li>
              ))}
            </ul>
            <EnquiryButton
              className="inline-block bg-white text-[#012406] hover:bg-white/90 px-8 py-3.5 rounded-full font-medium transition-all duration-300"
            >
              Book Now
            </EnquiryButton>
          </div>
        </div>
      </section>

      {/* Dr Jana's Patients Gallery */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#222222] leading-[1.15] mb-12 text-center">
            Dr Jana&apos;s Patients
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden"
              >
                <Image src={`/images/composite-bonding/patient-${i}.webp`} alt={`Composite Bonding Patient ${i}`} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 bg-[#f8f8f6]">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#222222] leading-[1.15] mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <Accordion items={faqItems} />
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
    </>
  );
}
