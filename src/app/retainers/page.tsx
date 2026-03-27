import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Retainers | Maintain Your Smile Today — DENSTUDIO",
  description:
    "Maintain your perfectly straight smile with custom retainers from Denstudio, Harley Street. Essential aftercare following orthodontic treatment to keep your teeth in place.",
};

export default function RetainersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#f8f8f6] pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-[#222222] leading-[1.1] mb-6">
                Retainers
              </h1>
              <p className="text-[#333333] leading-relaxed mb-8 max-w-xl">
                After investing time and effort into straightening your teeth, it
                is essential to maintain your results. Retainers are custom-made
                appliances designed to hold your teeth in their new, straight
                position and prevent them from gradually shifting back over time.
                They are a vital part of any orthodontic treatment plan.
              </p>
              <Link
                href="/contact-us"
                className="inline-block bg-[#012406] hover:bg-[#023a09] text-white px-8 py-3.5 rounded-full font-medium transition-all duration-300"
              >
                Book Now
              </Link>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image src="/images/teeth-straightening/hero.webp" alt="Retainers" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Purpose of Retainers */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#222222] leading-[1.15] mb-8 text-center">
            Purpose of Retainers
          </h2>
          <p className="text-[#333333] leading-relaxed mb-6">
            Once your braces are removed or you have completed your aligner
            treatment, your teeth have a natural tendency to drift back towards
            their original positions. This is because the bone and ligaments
            surrounding your teeth take time to fully stabilise in their new
            alignment.
          </p>
          <p className="text-[#333333] leading-relaxed mb-6">
            Retainers prevent this relapse by holding your teeth firmly in
            place while the surrounding tissues adapt. Without consistent
            retainer use, even the most successful orthodontic treatment can
            be compromised, with teeth gradually moving out of alignment over
            weeks and months.
          </p>
          <p className="text-[#333333] leading-relaxed">
            Think of retainers as the final and ongoing step in your teeth
            straightening journey. They protect your investment and ensure your
            beautifully straight smile lasts a lifetime.
          </p>
        </div>
      </section>

      {/* Usage Timeline */}
      <section className="py-24 md:py-32 bg-[#f8f8f6]">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#222222] leading-[1.15] mb-14 text-center">
            Retainer Usage Timeline
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Initial Period */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#eeeeee]">
              <div className="w-12 h-12 rounded-full bg-[#012406]/10 flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-[#012406]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#222222] mb-4">
                Initial Period
              </h3>
              <p className="text-[#333333] leading-relaxed">
                For the first 3 to 6 months after completing your orthodontic
                treatment, you will typically need to wear your retainers full
                time — removing them only to eat, drink and brush your teeth.
                This critical phase allows the bone and tissues around your
                teeth to fully stabilise.
              </p>
            </div>
            {/* Nighttime Wear */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#eeeeee]">
              <div className="w-12 h-12 rounded-full bg-[#012406]/10 flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-[#012406]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#222222] mb-4">
                Nighttime Wear
              </h3>
              <p className="text-[#333333] leading-relaxed">
                After the initial stabilisation period, you can transition to
                wearing your retainers at night only. Nighttime wear should
                continue indefinitely to maintain your results long term. It is
                a small commitment that protects the straight smile you worked
                hard to achieve.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
