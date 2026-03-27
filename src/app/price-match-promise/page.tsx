import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Price Match Promise — DENSTUDIO",
  description:
    "DENSTUDIO's Price Match Promise — challenge us to beat your dental treatment quote. We are committed to offering exceptional care at competitive prices.",
};

const steps = [
  {
    number: "1",
    title: "Send Us Your Quote",
    description:
      "Share a written, itemised quote from another UK-registered dental clinic for the same treatment you are considering.",
  },
  {
    number: "2",
    title: "Clinical Review",
    description:
      "Our team will review the quote to ensure the treatment is clinically comparable and meets our standards of care and materials.",
  },
  {
    number: "3",
    title: "We'll Be in Touch",
    description:
      "A member of our team will contact you to discuss the outcome and arrange your booking at the matched or beaten price.",
  },
];

export default function PriceMatchPromisePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#f8f8f6] pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#222222] leading-tight mb-6">
            PRICE MATCH PROMISE
          </h1>
          <p className="text-[#333333] leading-relaxed text-lg max-w-2xl mx-auto mb-6">
            Price is what you pay, but the experience is what you get. At
            DENSTUDIO, we are so confident in the quality, care and value we
            deliver that we are happy to put our money where our mouth is.
          </p>
          <p className="text-[#333333] leading-relaxed text-lg max-w-2xl mx-auto mb-10">
            If you have received a quote for the same treatment from another
            UK-registered dental clinic, we will match or beat it &ndash; no
            questions asked.
          </p>
          <p className="text-2xl md:text-3xl font-bold text-[#012406] mb-10">
            Challenge us to BEAT YOUR QUOTE
          </p>
          <Link
            href="/contact-us"
            className="inline-block bg-[#012406] hover:bg-[#023a09] text-white px-8 py-3.5 rounded-full font-medium transition-all duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#222222] mb-12 text-center">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-[#012406] flex items-center justify-center text-white text-xl font-bold">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-[#222222] mb-3">
                  {step.title}
                </h3>
                <p className="text-[#333333] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terms */}
      <section className="py-20 md:py-28 bg-[#f8f8f6]">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#222222] mb-8 text-center">
            Terms &amp; Conditions
          </h2>
          <ul className="space-y-4 text-[#333333] leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="shrink-0 mt-1 w-2 h-2 rounded-full bg-[#012406]" />
              Quotes must be dated within the last 6 months.
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 mt-1 w-2 h-2 rounded-full bg-[#012406]" />
              The quote must be from a UK-registered dental clinic.
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 mt-1 w-2 h-2 rounded-full bg-[#012406]" />
              The treatment must be clinically comparable, using similar
              materials and techniques.
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 mt-1 w-2 h-2 rounded-full bg-[#012406]" />
              DENSTUDIO reserves the right to assess clinical equivalence before
              confirming a price match.
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 mt-1 w-2 h-2 rounded-full bg-[#012406]" />
              The price match promise applies to the total treatment cost, not
              individual components.
            </li>
          </ul>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 md:py-28 bg-[#012406] text-white text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Challenge Us?
          </h2>
          <p className="text-white/80 leading-relaxed mb-10 text-lg">
            Send us your quote and let us show you what exceptional dental care
            at a competitive price looks like.
          </p>
          <Link
            href="/contact-us"
            className="inline-block bg-white text-[#012406] hover:bg-white/90 px-8 py-3.5 rounded-full font-medium transition-all duration-300"
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
