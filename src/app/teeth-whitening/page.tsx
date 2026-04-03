import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ReviewCarousel from "@/components/ReviewCarousel";
import Accordion from "@/components/Accordion";
import EnquiryButton from "@/components/EnquiryButton";
import LogoCarousel from "@/components/LogoCarousel";

export const metadata: Metadata = {
  title: "Teeth Whitening Harley Street | From £395 — DENSTUDIO",
  description:
    "Professional teeth whitening at Denstudio, Harley Street. Prescription 16% carbamide peroxide, custom 3D SuperFit trays, results in 7-14 days. White teeth or money back guarantee.",
};

const faqItems = [
  {
    question: "How long does professional whitening take?",
    answer:
      "You will start to see visible results within the first few sessions. Most patients achieve their desired shade within 7 to 14 days of nightly wear. The exact timeline depends on your starting shade and your whitening goals.",
  },
  {
    question: "Is teeth whitening safe?",
    answer:
      "Yes. Our professional whitening system uses dentist-prescribed 16% carbamide peroxide gel in custom-fitted trays. Because the trays are made from precise 3D scans of your teeth, the gel contacts only your enamel and not your gums, minimising the risk of sensitivity or irritation.",
  },
  {
    question: "Will whitening make my teeth sensitive?",
    answer:
      "Our FreshGel formula is specifically designed to minimise sensitivity. The custom SuperFit trays ensure the gel sits precisely against your teeth without leaking onto soft tissue. Most patients experience little to no sensitivity throughout their treatment.",
  },
  {
    question: "How long do results last?",
    answer:
      "With proper care, results from our professional whitening system last up to 3 years. Because you keep your custom trays, you can top up your whitening at home whenever your smile needs a refresh — simply order more gel from us.",
  },
  {
    question: "What is the difference between your whitening and shop-bought kits?",
    answer:
      "Our prescription gel is 32 times stronger than anything available over the counter. Combined with custom 3D-scanned trays that ensure even coverage, our system delivers dramatically whiter, more consistent results. Shop-bought kits use generic trays and low-concentration gels that produce patchy, short-lived results.",
  },
  {
    question: "Can I whiten if I have veneers or bonding?",
    answer:
      "Whitening gel does not change the colour of porcelain veneers or composite bonding. If you are planning restorative work, we recommend whitening first so your dentist can match the new restorations to your brighter shade. If you already have restorations, we can advise on the best approach during your consultation.",
  },
  {
    question: "What does the money-back guarantee cover?",
    answer:
      "We stand behind our whitening results. If you follow the treatment plan as prescribed and do not achieve noticeably whiter teeth, we will refund your treatment cost in full. We discuss expectations during your consultation so there are no surprises.",
  },
  {
    question: "Can I combine whitening with other treatments?",
    answer:
      "Absolutely. Whitening pairs beautifully with Invisalign, composite bonding and porcelain veneers. Many of our patients include whitening as part of a complete smile makeover package. Our add-on whitening is available for just £295 when combined with another treatment.",
  },
];

export default function TeethWhiteningPage() {
  return (
    <>
      {/* ══════ HERO ══════ */}
      <section className="relative bg-[#f8f8f6] pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Trust badges */}
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="inline-block text-xs font-medium bg-[#012406] text-white px-3 py-1.5 rounded-full">White Teeth Guarantee</span>
                <span className="inline-block text-xs font-medium bg-[#C4A574] text-white px-3 py-1.5 rounded-full">Results in 7-14 Days</span>
                <span className="inline-block text-xs font-medium bg-[#012406]/10 text-[#012406] px-3 py-1.5 rounded-full">From &pound;395</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-[#222222] leading-[1.1] mb-4">
                Teeth Whitening Harley Street, London
              </h1>
              <h2 className="text-xl md:text-2xl text-[#333333] font-medium mb-8">
                Confidence starts with your smile
              </h2>

              <ul className="space-y-3 mb-8">
                {[
                  "Professional whitening supervised by your dentist",
                  "32x stronger than over-the-counter products",
                  "Custom SuperFit trays made from 3D scans of your teeth",
                  "16% Carbamide Peroxide prescription-strength gel",
                  "Wear nightly for 7-14 days",
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

              {/* Trust indicators */}
              <div className="flex flex-wrap gap-x-6 gap-y-3 mb-8">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#C4A574]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  <span className="text-sm text-[#555]">5.0 rated on Google</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#C4A574]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  <span className="text-sm text-[#555]">White teeth or money back</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <EnquiryButton
                  className="inline-block bg-[#012406] hover:bg-[#023a09] text-white px-8 py-3.5 rounded-full font-medium transition-all duration-300"
                >
                  Book Now
                </EnquiryButton>
                <a href="tel:02038830588" className="inline-block border border-[#012406] text-[#012406] hover:bg-[#012406] hover:text-white px-8 py-3.5 rounded-full font-medium transition-all duration-300 text-center">
                  Call 020 3883 0588
                </a>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden self-end h-full min-h-[400px]">
              <Image src="/images/teeth-whitening/hero.webp" alt="Teeth Whitening" fill className="object-cover object-right-bottom" style={{ transform: "scale(1.3)" }} priority />
            </div>
          </div>
        </div>
      </section>

      {/* ══════ LOGO STRIP ══════ */}
      <section className="border-y border-[#eeeeee] bg-white">
        <LogoCarousel />
      </section>

      {/* ══════ WHAT IS PROFESSIONAL WHITENING? ══════ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#555555] mb-3">The Treatment</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#222222] leading-[1.15] mb-6">
                What Is Professional Whitening?
              </h2>
              <p className="text-[#333333] leading-relaxed mb-6">
                Professional teeth whitening at Denstudio uses prescription-strength 16% carbamide peroxide gel — 32 times stronger than anything available over the counter. This clinical-grade formula penetrates deep into the enamel to break down stubborn stains caused by coffee, tea, red wine and everyday wear.
              </p>
              <p className="text-[#333333] leading-relaxed mb-6">
                Your custom SuperFit trays are precision-crafted from 3D digital scans of your teeth using our proprietary SuperFit technology. Unlike generic one-size-fits-all trays, SuperFit trays hug every contour of your teeth for perfectly even gel distribution and maximum whitening power.
              </p>
              <p className="text-[#333333] leading-relaxed">
                Our FreshGel formula is designed to minimise sensitivity while delivering powerful, long-lasting results. Simply wear your trays for a few hours each night over 7 to 14 days and watch your smile transform. You will start to see visible results within the first few sessions.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image src="/images/teeth-whitening/treatment.webp" alt="Professional teeth whitening treatment" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ══════ KEY FEATURES ══════ */}
      <section className="py-20 md:py-28 bg-[#f8f8f6]">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-[#555555] mb-3 text-center">Why Professional</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#222222] leading-[1.15] mb-12 text-center">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "32x Stronger",
                description: "Our prescription 16% carbamide peroxide gel is 32 times more powerful than over-the-counter whitening products. It penetrates deep into the enamel to break down stains that shop-bought kits simply cannot reach.",
                icon: (
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                ),
              },
              {
                title: "Custom 3D Trays",
                description: "Our SuperFit trays are digitally crafted from a precise 3D scan of your teeth. They fit every contour perfectly, ensuring even gel distribution across every surface. No leaking, no gum irritation, no patchy results.",
                icon: (
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                ),
              },
              {
                title: "Results Last 3 Years",
                description: "With proper care, your professionally whitened smile lasts up to 3 years. And because you keep your custom trays, you can top up at home whenever your smile needs a refresh — simply order more gel from us.",
                icon: (
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                ),
              },
            ].map((feature) => (
              <div key={feature.title} className="bg-white rounded-2xl p-8 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#012406] mb-5">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#222222] mb-3">{feature.title}</h3>
                <p className="text-[#555555] leading-relaxed text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ PROFESSIONAL VS SHOP-BOUGHT ══════ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-[#555555] mb-3 text-center">The Difference</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#222222] leading-[1.15] mb-12 text-center">
            Professional vs Shop-Bought
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Shop-bought */}
            <div className="bg-white rounded-2xl p-8 border border-[#e5e5e5]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#f0f0f0] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-[#999]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </div>
                <h3 className="text-lg font-semibold text-[#222]">Shop-Bought Kits</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Low concentration — barely noticeable results",
                  "Patchy, uneven whitening across teeth",
                  "Generic one-size-fits-all trays",
                  "Higher sensitivity risk from poor fit",
                  "Results fade within weeks",
                  "No professional supervision",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#555]">
                    <span className="text-[#cc4444] mt-0.5 shrink-0">&times;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Denstudio Professional */}
            <div className="bg-white rounded-2xl p-8 border-2 border-[#012406] relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#012406] text-white text-xs font-semibold px-4 py-1 rounded-full">Recommended</span>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#012406] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-lg font-semibold text-[#222]">Denstudio Professional</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Prescription strength — 32x stronger than shop kits",
                  "Custom 3D SuperFit trays for perfectly even coverage",
                  "Even whitening across every tooth",
                  "Dentist-supervised for safe, comfortable results",
                  "Results last up to 3 years",
                  "White teeth or money back guarantee",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#333]">
                    <span className="text-[#012406] mt-0.5 shrink-0">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ HOW IT WORKS ══════ */}
      <section className="py-20 md:py-28 bg-[#f8f8f6]">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-[#555555] mb-3 text-center">How It Works</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#222222] leading-[1.15] mb-12 text-center">
            Your 3-Step Whitening Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Consultation & 3D Scan", description: "We assess your teeth, take precise digital 3D scans and create custom SuperFit whitening trays that fit your teeth perfectly. We discuss your shade goals and set expectations." },
              { step: "02", title: "Custom Trays + Gel", description: "Your bespoke SuperFit trays are fabricated from your 3D scans. We provide you with our prescription-strength FreshGel whitening gel and clear instructions for at-home use." },
              { step: "03", title: "Whiten at Home 7-14 Days", description: "Wear your custom trays with FreshGel each night. You will see visible results within the first few sessions, with your full, brilliant white smile revealed within 7 to 14 days." },
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-2xl p-8 text-center">
                <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#012406] text-white text-xl font-bold mb-5">{item.step}</span>
                <h3 className="text-xl font-semibold text-[#222222] mb-3">{item.title}</h3>
                <p className="text-[#555555] leading-relaxed text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ PRICING ══════ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-[#555555] mb-3 text-center">Investment</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#222222] leading-[1.15] mb-4 text-center">
            Whitening Packages
          </h2>
          <p className="text-[#555555] text-center mb-12 max-w-2xl mx-auto">
            Transparent pricing with no hidden costs. All packages include custom trays, whitening gel and follow-up care. White teeth or money back guarantee.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Standard Whitening */}
            <div className="bg-white rounded-2xl p-8 border border-[#e5e5e5] flex flex-col">
              <h3 className="text-lg font-semibold text-[#222222] mb-1">Standard Whitening</h3>
              <p className="text-sm text-[#555555] mb-4">Complete at-home system</p>
              <span className="text-4xl font-bold text-[#012406] mb-1">&pound;395</span>
              <span className="text-xs text-[#555] mb-4">Results in 7-14 days</span>
              <ul className="space-y-2 text-sm text-[#555] flex-1 mb-6">
                <li className="flex items-start gap-2"><span className="text-[#012406] mt-0.5">&#10003;</span>Custom 3D SuperFit trays</li>
                <li className="flex items-start gap-2"><span className="text-[#012406] mt-0.5">&#10003;</span>Prescription FreshGel whitening gel</li>
                <li className="flex items-start gap-2"><span className="text-[#012406] mt-0.5">&#10003;</span>Top-up gels included</li>
                <li className="flex items-start gap-2"><span className="text-[#012406] mt-0.5">&#10003;</span>Dentist-supervised treatment</li>
              </ul>
              <EnquiryButton
                className="block text-center border border-[#012406] text-[#012406] hover:bg-[#012406] hover:text-white py-3 rounded-full font-medium transition-all duration-300 text-sm"
              >
                Book Consultation
              </EnquiryButton>
            </div>

            {/* Premium Whitening — highlighted */}
            <div className="bg-white rounded-2xl p-8 border-2 border-[#012406] flex flex-col relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#012406] text-white text-xs font-semibold px-4 py-1 rounded-full">Most Popular</span>
              <h3 className="text-lg font-semibold text-[#222222] mb-1">Premium Whitening</h3>
              <p className="text-sm text-[#555555] mb-4">The ultimate whitening experience</p>
              <span className="text-4xl font-bold text-[#012406] mb-1">&pound;795</span>
              <span className="text-xs text-[#C4A574] font-semibold mb-4">Best value + shade guarantee</span>
              <ul className="space-y-2 text-sm text-[#555] flex-1 mb-6">
                <li className="flex items-start gap-2"><span className="text-[#012406] mt-0.5">&#10003;</span>Everything in Standard</li>
                <li className="flex items-start gap-2"><span className="text-[#012406] mt-0.5">&#10003;</span>Advanced professional-grade gel</li>
                <li className="flex items-start gap-2"><span className="text-[#012406] mt-0.5">&#10003;</span>Hygiene clean included</li>
                <li className="flex items-start gap-2"><span className="text-[#012406] mt-0.5">&#10003;</span>Shade guarantee</li>
              </ul>
              <EnquiryButton
                className="block text-center bg-[#012406] hover:bg-[#023a09] text-white py-3 rounded-full font-medium transition-all duration-300 text-sm"
              >
                Book Consultation
              </EnquiryButton>
            </div>

            {/* Add-On */}
            <div className="bg-white rounded-2xl p-8 border border-[#e5e5e5] flex flex-col">
              <h3 className="text-lg font-semibold text-[#222222] mb-1">Whitening Add-On</h3>
              <p className="text-sm text-[#555555] mb-4">With any treatment</p>
              <span className="text-4xl font-bold text-[#012406] mb-1">&pound;295</span>
              <span className="text-xs text-[#555] mb-4">When combined with another treatment</span>
              <ul className="space-y-2 text-sm text-[#555] flex-1 mb-6">
                <li className="flex items-start gap-2"><span className="text-[#012406] mt-0.5">&#10003;</span>Pair with bonding, veneers or Invisalign</li>
                <li className="flex items-start gap-2"><span className="text-[#012406] mt-0.5">&#10003;</span>Custom 3D SuperFit trays</li>
                <li className="flex items-start gap-2"><span className="text-[#012406] mt-0.5">&#10003;</span>Prescription FreshGel whitening gel</li>
              </ul>
              <EnquiryButton
                className="block text-center border border-[#012406] text-[#012406] hover:bg-[#012406] hover:text-white py-3 rounded-full font-medium transition-all duration-300 text-sm"
              >
                Book Consultation
              </EnquiryButton>
            </div>
          </div>

          <p className="text-center text-sm text-[#555] mt-8">
            White teeth or money back guarantee on all whitening options. <Link href="/fees" className="text-[#012406] font-medium underline">View full fee list</Link>
          </p>
        </div>
      </section>

      {/* ══════ REVIEWS ══════ */}
      <section className="py-20 md:py-28 bg-[#f8f8f6] overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-[#555555] mb-3 text-center">Patient Reviews</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#222222] leading-[1.15] text-center mb-12">
            What Our Patients Say
          </h2>
        </div>
        <ReviewCarousel />
      </section>

      {/* ══════ FAQ ══════ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-[#555555] mb-3 text-center">Common Questions</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#222222] leading-[1.15] mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <Accordion items={faqItems} />
        </div>
      </section>

      {/* ══════ RELATED ARTICLES ══════ */}
      <section className="py-20 md:py-28 bg-[#f8f8f6]">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-[#555555] mb-3 text-center">Learn More</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#222222] leading-[1.15] mb-12 text-center">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Is Professional Teeth Whitening Worth It?",
                href: "/new-page-5",
                description: "An honest look at whether professional whitening delivers better value than shop-bought alternatives, and what results you can realistically expect.",
              },
              {
                title: "Professional Teeth Whitening: The Complete Guide",
                href: "/blog/professional-teeth-whitening-the-complete-guide",
                description: "Everything you need to know about professional whitening including how it works, what to expect, aftercare tips and how to maintain your results.",
              },
              {
                title: "Can You Whiten Porcelain Veneers?",
                href: "/can-you-whiten-porcelain-veneers",
                description: "Understanding the relationship between whitening and dental restorations, and how to plan your treatments in the right order.",
              },
            ].map((article) => (
              <Link key={article.href} href={article.href} className="group bg-white rounded-2xl p-8 transition-all duration-300 hover:shadow-lg">
                <h3 className="text-lg font-semibold text-[#222222] mb-3 group-hover:text-[#012406] transition-colors">{article.title}</h3>
                <p className="text-[#555555] leading-relaxed text-sm mb-4">{article.description}</p>
                <span className="text-[#012406] font-medium text-sm">Read more &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ FINAL CTA ══════ */}
      <section className="py-20 md:py-28 bg-[#012406] text-white text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready for a Brighter Smile?
          </h2>
          <p className="text-white/80 leading-relaxed mb-4 text-lg">
            Book your whitening consultation at our Harley Street practice today. Professional results from &pound;395 with our white teeth or money back guarantee.
          </p>
          <p className="text-[#C4A574] font-medium mb-10 text-sm">
            Limited availability &mdash; consultations booking 2&ndash;3 weeks in advance
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <EnquiryButton
              className="inline-block bg-white text-[#012406] hover:bg-white/90 px-8 py-3.5 rounded-full font-medium transition-all duration-300"
            >
              Book Whitening Consultation
            </EnquiryButton>
            <a href="tel:02038830588" className="inline-block border border-white/40 text-white hover:bg-white/10 px-8 py-3.5 rounded-full font-medium transition-all duration-300">
              Call 020 3883 0588
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
