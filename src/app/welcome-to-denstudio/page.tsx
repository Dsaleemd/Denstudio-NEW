import type { Metadata } from "next";
import Link from "next/link";
import ReviewCarousel from "@/components/ReviewCarousel";

export const metadata: Metadata = {
  title: "Welcome to Denstudio — DENSTUDIO",
  description:
    "Natural-looking porcelain veneers in London. Nothing beats natural teeth — except our veneers. Ultra-natural results from £995 per tooth at Denstudio, Harley Street.",
};

export default function WelcomeToDenstudioPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#f8f8f6] pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#222222] leading-tight mb-4">
                Natural-Looking Porcelain Veneers in London
              </h1>
              <p className="text-xl md:text-2xl text-[#333333] font-medium mb-6">
                Nothing beats natural teeth. Except our veneers.
              </p>
              <p className="text-[#333333] leading-relaxed mb-8 max-w-xl">
                At Denstudio, we specialise in porcelain veneers that are
                virtually indistinguishable from natural enamel. Designed by
                Dr Jana Denzel and handcrafted by world-class ceramists, every
                case is a work of art.
              </p>
              <Link
                href="/contact-us"
                className="inline-block bg-[#012406] hover:bg-[#023a09] text-white px-8 py-3.5 rounded-full font-medium transition-all duration-300"
              >
                Book Your Consultation
              </Link>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#dddddd]">
              <div className="absolute inset-0 flex items-center justify-center text-[#999999]">
                <span className="text-sm">Image Placeholder</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Points */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Ultra-Natural Results",
                description:
                  "Our veneers replicate the subtle colour gradients, translucency and surface texture of natural enamel. The result is a smile that looks real — because it is designed to.",
              },
              {
                title: "Case-Led Design",
                description:
                  "Every case is unique. Dr Denzel designs each smile based on your facial proportions, lip dynamics and personal goals — not a one-size-fits-all template.",
              },
              {
                title: "Brazilian Lab Collaboration",
                description:
                  "We partner with elite dental laboratories in Brazil, renowned worldwide for their mastery of porcelain aesthetics and meticulous hand-layering techniques.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#f0f0ee] flex items-center justify-center mx-auto mb-5">
                  <svg
                    className="w-8 h-8 text-[#012406]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
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

      {/* Pricing */}
      <section className="py-20 md:py-28 bg-[#f8f8f6]">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#222222] mb-4 text-center">
            Transparent Pricing
          </h2>
          <p className="text-[#555555] text-center mb-12 max-w-2xl mx-auto">
            Honest, upfront pricing with no hidden fees. All prices include
            consultation, preparation, laboratory work and fitting.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { label: "2 Veneers", price: "£1,990", note: "£995 per tooth" },
              { label: "4 Veneers", price: "£3,980", note: "£995 per tooth" },
              { label: "6 Veneers", price: "£5,970", note: "£995 per tooth" },
              { label: "8 Veneers", price: "£7,960", note: "£995 per tooth" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-2xl p-6 text-center border border-[#e5e5e5]"
              >
                <h3 className="text-lg font-semibold text-[#222222] mb-2">
                  {item.label}
                </h3>
                <span className="text-3xl font-bold text-[#012406]">
                  {item.price}
                </span>
                <p className="text-sm text-[#555555] mt-2">{item.note}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto mt-6">
            <div className="bg-white rounded-2xl p-6 text-center border-2 border-[#012406] relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#012406] text-white text-xs font-medium px-4 py-1 rounded-full">
                Popular
              </span>
              <h3 className="text-lg font-semibold text-[#222222] mb-2">
                10 Veneers
              </h3>
              <span className="text-3xl font-bold text-[#012406]">£9,990</span>
              <p className="text-sm text-[#555555] mt-2">
                Smile makeover package
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center border border-[#e5e5e5]">
              <h3 className="text-lg font-semibold text-[#222222] mb-2">
                20 Veneers
              </h3>
              <span className="text-3xl font-bold text-[#012406]">
                £19,445
              </span>
              <p className="text-sm text-[#555555] mt-2">
                Full mouth transformation
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
            Book your consultation at our Harley Street practice and discover
            what natural-looking porcelain veneers can do for you.
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
