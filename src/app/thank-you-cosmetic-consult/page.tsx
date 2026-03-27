import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You — DENSTUDIO",
  description:
    "Your cosmetic consultation at Denstudio has been booked. We look forward to welcoming you to our Harley Street practice.",
};

export default function ThankYouCosmeticConsultPage() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <div className="w-20 h-20 rounded-full bg-[#012406] flex items-center justify-center mx-auto mb-8">
          <svg
            className="w-10 h-10 text-white"
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
        <h1 className="text-4xl md:text-5xl font-bold text-[#222222] mb-6">
          Thank you!
        </h1>
        <p className="text-lg text-[#555555] leading-relaxed mb-10 max-w-lg mx-auto">
          Great! Your consultation has been securely booked. A member of our
          team will be in touch to confirm your details before the appointment.
        </p>
        <Link
          href="/"
          className="inline-block bg-[#012406] hover:bg-[#023a09] text-white px-8 py-3.5 rounded-full font-medium transition-all duration-300"
        >
          Return Home
        </Link>
      </div>
    </section>
  );
}
