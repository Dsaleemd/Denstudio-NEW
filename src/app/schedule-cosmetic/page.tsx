import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Book Cosmetic Consultation — DENSTUDIO",
  description:
    "Book your free cosmetic consultation at Denstudio on Harley Street. Flexible payment plans, award-winning team and exceptional care.",
};

export default function ScheduleCosmeticPage() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#222222] leading-tight mb-6">
          Book your FREE Cosmetic Consultation
        </h1>
        <p className="text-lg text-[#555555] leading-relaxed mb-12 max-w-xl mx-auto">
          Take the first step towards your dream smile. Our consultations are
          completely free, with no obligation and no pressure.
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {[
            {
              title: "Flexible Payment Plans",
              description: "Spread the cost with interest-free finance options.",
            },
            {
              title: "Exceptional Care",
              description:
                "A warm, welcoming environment with personalised attention.",
            },
            {
              title: "Award-Winning Team",
              description:
                "Led by Dr Jana Denzel, twice Best Young Dentist UK.",
            },
            {
              title: "5-Star Practice",
              description:
                "Consistently rated 5 stars by our patients on Google.",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="bg-[#f8f8f6] rounded-2xl p-6 text-left"
            >
              <div className="w-10 h-10 rounded-full bg-[#012406] flex items-center justify-center mb-4">
                <svg
                  className="w-5 h-5 text-white"
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
              </div>
              <h3 className="text-lg font-semibold text-[#222222] mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-[#555555] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <Link
          href="/contact-us"
          className="inline-block bg-[#012406] hover:bg-[#023a09] text-white px-8 py-3.5 rounded-full font-medium transition-all duration-300 text-lg"
        >
          Book Now
        </Link>
      </div>
    </section>
  );
}
