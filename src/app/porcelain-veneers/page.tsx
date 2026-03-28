import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ReviewCarousel from "@/components/ReviewCarousel";

export const metadata: Metadata = {
  title: "Porcelain Veneers | Harley Street | Dentist Near Me — DENSTUDIO",
  description:
    "Discover custom porcelain veneers at Denstudio in Harley Street, London, to enhance your smile's appearance and regain confidence with expert cosmetic dental solutions.",
};

export default function PorcelainVeneersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#f8f8f6] pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-[#222222] leading-[1.1] mb-4">
                Porcelain Veneers in Harley Street, London
              </h1>
              <h2 className="text-xl md:text-2xl text-[#333333] font-medium mb-6">
                Get a Straight, Ultra-White Celebrity Smile with Porcelain
                Veneers
              </h2>
              <p className="text-[#333333] leading-relaxed mb-8 max-w-xl">
                At Denstudio, we take a cutting-edge approach to porcelain
                veneers. Using the finest ceramics and working with world-class
                dental laboratories, we craft veneers that look indistinguishable
                from natural teeth. Whether you want a subtle enhancement or a
                complete smile makeover, our expert team will design a bespoke
                treatment plan tailored to your goals.
              </p>
              <Link
                href="/contact-us"
                className="inline-block bg-[#012406] hover:bg-[#023a09] text-white px-8 py-3.5 rounded-full font-medium transition-all duration-300"
              >
                Book Now
              </Link>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image src="/images/porcelain-veneers/hero.webp" alt="Porcelain Veneers" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      {/* What are Porcelain Veneers */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#222222] leading-[1.15] mb-8 text-center">
              What are Porcelain Veneers?
            </h2>
            <p className="text-[#333333] leading-relaxed mb-6">
              Porcelain veneers are ultra-thin ceramic shells that are custom-made
              to fit over the front surface of your teeth. They are one of the
              most effective ways to dramatically improve the appearance of your
              smile, providing a natural-looking, long-lasting result.
            </p>
            <p className="text-[#333333] leading-relaxed mb-8">
              Veneers can correct a wide range of cosmetic concerns, giving you a
              smile that looks and feels completely natural.
            </p>
            <ul className="space-y-3">
              {[
                "Discolouration and staining that whitening cannot fix",
                "Chipped, cracked or worn teeth",
                "Gaps between teeth",
                "Mild crowding or misalignment",
                "Irregular tooth shape or size",
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
          </div>
        </div>
      </section>

      {/* Reshape, Resize, Renew */}
      <section className="py-24 md:py-32 bg-[#f8f8f6]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#222222] leading-[1.15] mb-8">
              The Best Way to Reshape, Resize And Renew Your Teeth
            </h2>
            <p className="text-[#333333] leading-relaxed mb-6">
              We partner with the best dental laboratories in the world and use
              only the highest-grade ceramic materials. Every veneer is
              hand-crafted by master ceramists to ensure a perfect fit, natural
              translucency and beautiful colour match.
            </p>
            <p className="text-[#333333] leading-relaxed mb-10">
              The result is a smile that not only looks stunning but feels
              completely comfortable and lasts for years to come. Our meticulous
              approach means fewer adjustments, better aesthetics and a smile you
              will be proud to show off.
            </p>
            <Link
              href="/contact-us"
              className="inline-block bg-[#012406] hover:bg-[#023a09] text-white px-8 py-3.5 rounded-full font-medium transition-all duration-300"
            >
              Book a Consultation
            </Link>
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

      {/* Footer CTA */}
      <section className="py-24 md:py-32 bg-[#012406] text-white text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6">
            Ready to Transform Your Smile?
          </h2>
          <p className="text-white/80 leading-relaxed mb-10 text-lg">
            Book your porcelain veneers consultation at our Harley Street clinic
            today and take the first step towards the smile you have always
            wanted.
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
