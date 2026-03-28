import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ReviewCarousel from "@/components/ReviewCarousel";
import LogoCarousel from "@/components/LogoCarousel";

export const metadata: Metadata = {
  title: "Teeth Whitening Harley Street | From £395 — DENSTUDIO",
  description:
    "Professional teeth whitening from £395 at Denstudio, Harley Street. Prescription-strength gel, custom 3D trays, results in 7-14 days. White teeth or money back guarantee.",
};

const beforeAfterImages = [
  { src: "/images/veneers-landing/gallery/before-after-1.webp", alt: "Teeth whitening transformation — before and after" },
  { src: "/images/veneers-landing/gallery/before-after-3.webp", alt: "Whitening results — before and after" },
  { src: "/images/veneers-landing/gallery/before-after-5.webp", alt: "Professional whitening — before and after" },
];

const patientResults = [
  { src: "/images/veneers-landing/gallery/patient-result-2.webp", alt: "Patient whitening result" },
  { src: "/images/veneers-landing/gallery/patient-result-3.webp", alt: "Smile whitening result" },
  { src: "/images/veneers-landing/gallery/patient-result-3b.webp", alt: "Bright smile result" },
  { src: "/images/veneers-landing/gallery/patient-result-5.webp", alt: "Teeth whitening patient" },
  { src: "/images/veneers-landing/gallery/patient-result-7.webp", alt: "Professional whitening patient" },
  { src: "/images/veneers-landing/gallery/patient-result-8.webp", alt: "Denstudio whitening result" },
];

export default function WhiteningLandingPage() {
  return (
    <>
      {/* ══════ HERO — Text+form left, image right (same height) ══════ */}
      <section className="relative bg-[#012406] pt-24 pb-8 md:pt-28 md:pb-12 overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 lg:items-stretch">

            {/* Left: Text + form stacked */}
            <div className="flex flex-col text-white">
              {/* Offer badges */}
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="inline-block text-xs font-medium bg-white/15 backdrop-blur-sm px-3 py-1.5 rounded-full">White Teeth Guarantee</span>
                <span className="inline-block text-xs font-medium bg-[#C4A574] text-white px-3 py-1.5 rounded-full">Results in 7-14 Days</span>
                <span className="inline-block text-xs font-medium bg-white/15 backdrop-blur-sm px-3 py-1.5 rounded-full">From &pound;395</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.08] mb-5">
                Professional Teeth Whitening That Actually Lasts
              </h1>

              <p className="text-white/80 text-lg leading-relaxed mb-6 max-w-lg">
                Our prescription-strength whitening system is 32x stronger than over-the-counter kits. Custom trays from 3D scans, professional-grade gel, and results that last up to 3 years.
              </p>

              {/* Trust indicators */}
              <div className="flex flex-wrap gap-x-6 gap-y-3 mb-8">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#C4A574]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  <span className="text-sm text-white/70">5.0 rated on Google</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#C4A574]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  <span className="text-sm text-white/70">White teeth or money back</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#C4A574]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span className="text-sm text-white/70">Results in 7-14 days</span>
                </div>
              </div>

              {/* Form under the text */}
              <div id="book" className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl mt-auto">
                <h2 className="text-xl font-bold text-[#1a1a1a] mb-1">
                  Book Your Whitening Consultation
                </h2>
                <p className="text-sm text-[#555] mb-5">
                  Get a personalised whitening plan. No obligation.
                </p>
                <form className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input type="text" placeholder="Full Name *" required className="w-full px-4 py-3 rounded-xl border border-[#ddd] text-sm text-[#1a1a1a] focus:outline-none focus:border-[#012406] focus:ring-1 focus:ring-[#012406]/20 transition-all" />
                    <input type="email" placeholder="Email Address *" required className="w-full px-4 py-3 rounded-xl border border-[#ddd] text-sm text-[#1a1a1a] focus:outline-none focus:border-[#012406] focus:ring-1 focus:ring-[#012406]/20 transition-all" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input type="tel" placeholder="Phone Number *" required className="w-full px-4 py-3 rounded-xl border border-[#ddd] text-sm text-[#1a1a1a] focus:outline-none focus:border-[#012406] focus:ring-1 focus:ring-[#012406]/20 transition-all" />
                    <select className="w-full px-4 py-3 rounded-xl border border-[#ddd] text-sm text-[#555] focus:outline-none focus:border-[#012406] focus:ring-1 focus:ring-[#012406]/20 transition-all">
                      <option>Current tooth shade?</option>
                      <option>Slightly yellow</option>
                      <option>Noticeably stained</option>
                      <option>Very discoloured</option>
                      <option>Not sure</option>
                    </select>
                  </div>
                  <button type="submit" className="w-full bg-[#012406] hover:bg-[#023a09] text-white py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 border-2 border-white/20">
                    Book Whitening Consultation
                  </button>
                </form>
                <div className="mt-4 flex items-center justify-center gap-4 text-[11px] text-[#999]">
                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                    Secure &amp; confidential
                  </span>
                  <span>No obligation</span>
                  <span>Reply within 24hrs</span>
                </div>
              </div>
            </div>

            {/* Right: Hero image — matches left column height */}
            <div className="relative rounded-2xl overflow-hidden min-h-[400px] lg:min-h-0">
              <Image src="/images/teeth-whitening/hero.webp" alt="Professional teeth whitening at DENSTUDIO" fill className="object-cover object-center" priority />
            </div>

          </div>
        </div>
      </section>

      {/* ══════ Logo Strip ══════ */}
      <section className="border-y border-[#eeeeee] bg-white">
        <LogoCarousel />
      </section>

      {/* ══════ Before/After Gallery ══════ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-[#555555] mb-3 text-center">Real Results</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#222222] leading-[1.15] text-center mb-4">
            See the Difference
          </h2>
          <p className="text-[#555] text-center mb-12 max-w-xl mx-auto">
            Every smile is unique. These are real whitening results from real patients at Denstudio, Harley Street.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {beforeAfterImages.map((img, i) => (
              <div key={i} className="relative aspect-[4/5] rounded-xl overflow-hidden group">
                <Image src={img.src} alt={img.alt} fill className="object-cover object-top transition-transform duration-500 group-hover:scale-105" />
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="#book" className="inline-block bg-[#012406] hover:bg-[#023a09] text-white px-8 py-3.5 rounded-full font-medium transition-all duration-300">
              Book Whitening Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* ══════ Meet Dr Jana Denzel ══════ */}
      <section className="py-20 md:py-28 bg-[#f8f8f6]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden max-w-md mx-auto lg:mx-0">
              <Image src="/images/veneers-landing/hero-landings.webp" alt="Dr Jana Denzel" fill className="object-cover" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#555555] mb-3">Your Cosmetic Dentist</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#222222] leading-[1.15] mb-6">
                Meet Dr Jana Denzel
              </h2>
              <p className="text-[#333333] leading-relaxed mb-6">
                Internationally recognised cosmetic dentist, BBC Apprentice star and twice-awarded Best Young Dentist in the UK. Named among the world&apos;s top 32 dentists and a Global Ambassador for Slow Dentistry.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Prescription 16% carbamide peroxide gel — the highest safe concentration",
                  "SuperFit custom trays created from 3D digital scans of your teeth",
                  "White teeth or money back guarantee on all whitening treatments",
                  "Top-up gels included so you can maintain brightness at home",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#C4A574] flex items-center justify-center shrink-0">
                      <span className="text-white text-sm font-bold">&#10003;</span>
                    </div>
                    <span className="text-[#333] text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="#book" className="inline-block bg-[#012406] hover:bg-[#023a09] text-white px-8 py-3.5 rounded-full font-medium transition-all duration-300">
                Book With Dr Denzel
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ 3-Step Process ══════ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-[#555555] mb-3 text-center">How It Works</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#222222] leading-[1.15] mb-12 text-center">
            Your 3-Step Whitening Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Consultation & Scan", description: "We assess your teeth, take digital 3D scans and create custom-fitted whitening trays that fit your teeth perfectly — no generic one-size-fits-all." },
              { step: "02", title: "Whiten at Home", description: "Wear your custom trays with our FreshGel prescription whitening gel each night. The high-viscosity formula stays in place for maximum contact time." },
              { step: "03", title: "Reveal & Maintain", description: "See visible results in 7-14 days. Top-up gels included for ongoing brightness. Results last up to 3 years with proper care." },
            ].map((item) => (
              <div key={item.step} className="bg-[#f8f8f6] rounded-2xl p-8 text-center">
                <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#012406] text-white text-xl font-bold mb-5">{item.step}</span>
                <h3 className="text-xl font-semibold text-[#222222] mb-3">{item.title}</h3>
                <p className="text-[#555555] leading-relaxed text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ Why Professional vs Shop-Bought ══════ */}
      <section className="py-20 md:py-28 bg-[#f8f8f6]">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-[#555555] mb-3 text-center">The Difference</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#222222] leading-[1.15] mb-12 text-center">
            Why Professional vs Shop-Bought
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
                  "Custom 3D trays for perfectly even coverage",
                  "Even whitening across every tooth",
                  "Dentist-supervised for safe, comfortable results",
                  "Results last up to 3 years",
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

      {/* ══════ Patient Results Gallery ══════ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-[#555555] mb-3 text-center">Transformations</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#222222] leading-[1.15] text-center mb-4">
            Patient Results
          </h2>
          <p className="text-[#555] text-center mb-12 max-w-xl mx-auto">
            Real patients. Real confidence. See what professional whitening can do.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {patientResults.map((img, i) => (
              <div key={i} className="relative aspect-[4/5] rounded-xl overflow-hidden group">
                <Image src={img.src} alt={img.alt} fill className="object-cover object-top transition-transform duration-500 group-hover:scale-105" />
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="#book" className="inline-block bg-[#012406] hover:bg-[#023a09] text-white px-8 py-3.5 rounded-full font-medium transition-all duration-300">
              Start Your Whitening Journey
            </Link>
          </div>
        </div>
      </section>

      {/* ══════ Transparent Pricing ══════ */}
      <section className="py-20 md:py-28 bg-[#f8f8f6]">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-[#555555] mb-3 text-center">Investment</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#222222] leading-[1.15] mb-4 text-center">
            Whitening Packages
          </h2>
          <p className="text-[#555555] text-center mb-12 max-w-2xl mx-auto">
            Transparent pricing with no hidden costs. All packages include custom trays, whitening gel and follow-up care.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Standard Whitening */}
            <div className="bg-white rounded-2xl p-8 border border-[#e5e5e5] flex flex-col">
              <h3 className="text-lg font-semibold text-[#222222] mb-1">Standard Whitening</h3>
              <p className="text-sm text-[#555555] mb-4">Complete at-home system</p>
              <span className="text-4xl font-bold text-[#012406] mb-1">&pound;395</span>
              <span className="text-xs text-[#555] mb-4">Results in 7-14 days</span>
              <ul className="space-y-2 text-sm text-[#555] flex-1 mb-6">
                <li className="flex items-start gap-2"><span className="text-[#012406] mt-0.5">&#10003;</span>Custom 3D-scanned trays</li>
                <li className="flex items-start gap-2"><span className="text-[#012406] mt-0.5">&#10003;</span>Prescription whitening gel</li>
                <li className="flex items-start gap-2"><span className="text-[#012406] mt-0.5">&#10003;</span>Top-up gels included</li>
                <li className="flex items-start gap-2"><span className="text-[#012406] mt-0.5">&#10003;</span>Dentist-supervised treatment</li>
              </ul>
              <Link href="#book" className="block text-center border border-[#012406] text-[#012406] hover:bg-[#012406] hover:text-white py-3 rounded-full font-medium transition-all duration-300 text-sm">
                Book Consultation
              </Link>
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
              <Link href="#book" className="block text-center bg-[#012406] hover:bg-[#023a09] text-white py-3 rounded-full font-medium transition-all duration-300 text-sm">
                Book Consultation
              </Link>
            </div>

            {/* Add-On */}
            <div className="bg-white rounded-2xl p-8 border border-[#e5e5e5] flex flex-col">
              <h3 className="text-lg font-semibold text-[#222222] mb-1">Whitening Add-On</h3>
              <p className="text-sm text-[#555555] mb-4">With any treatment</p>
              <span className="text-4xl font-bold text-[#012406] mb-1">&pound;295</span>
              <span className="text-xs text-[#555] mb-4">When combined with another treatment</span>
              <ul className="space-y-2 text-sm text-[#555] flex-1 mb-6">
                <li className="flex items-start gap-2"><span className="text-[#012406] mt-0.5">&#10003;</span>Pair with bonding, veneers or Invisalign</li>
                <li className="flex items-start gap-2"><span className="text-[#012406] mt-0.5">&#10003;</span>Custom 3D-scanned trays</li>
                <li className="flex items-start gap-2"><span className="text-[#012406] mt-0.5">&#10003;</span>Prescription whitening gel</li>
              </ul>
              <Link href="#book" className="block text-center border border-[#012406] text-[#012406] hover:bg-[#012406] hover:text-white py-3 rounded-full font-medium transition-all duration-300 text-sm">
                Book Consultation
              </Link>
            </div>
          </div>

          <p className="text-center text-sm text-[#555] mt-8">
            White teeth or money back guarantee on all whitening options. <Link href="/fees" className="text-[#012406] font-medium underline">View full fee list</Link>
          </p>
        </div>
      </section>

      {/* ══════ Reviews ══════ */}
      <section className="py-20 md:py-28 bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-[#555555] mb-3 text-center">Patient Reviews</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#222222] leading-[1.15] text-center mb-12">
            What Our Patients Say
          </h2>
        </div>
        <ReviewCarousel />
      </section>

      {/* ══════ Urgency / Final CTA ══════ */}
      <section className="py-20 md:py-28 bg-[#012406] text-white text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6">
            Ready for a Brighter Smile?
          </h2>
          <p className="text-white/80 leading-relaxed mb-4 text-lg">
            Book your whitening consultation at our Harley Street practice today. Professional results from &pound;395 with our white teeth or money back guarantee.
          </p>
          <p className="text-[#C4A574] font-medium mb-10 text-sm">
            Limited availability &mdash; consultations booking 2&ndash;3 weeks in advance
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#book" className="inline-block bg-white text-[#012406] hover:bg-white/90 px-8 py-3.5 rounded-full font-medium transition-all duration-300">
              Book Whitening Consultation
            </Link>
            <a href="tel:02038830588" className="inline-block border border-white/40 text-white hover:bg-white/10 px-8 py-3.5 rounded-full font-medium transition-all duration-300">
              Call 020 3883 0588
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
