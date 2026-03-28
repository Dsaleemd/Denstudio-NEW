import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ReviewCarousel from "@/components/ReviewCarousel";
import LogoCarousel from "@/components/LogoCarousel";

export const metadata: Metadata = {
  title: "Porcelain Veneers Harley Street | Free Consultation — DENSTUDIO",
  description:
    "Premium natural porcelain veneers from £1,200/tooth at Denstudio, Harley Street. Free consultation with Dr Jana Denzel. 0% finance available. Book today.",
};

const beforeAfterImages = [
  { src: "/images/veneers-landing/gallery/before-after-1.webp", alt: "Veneer transformation — before and after" },
  { src: "/images/veneers-landing/gallery/before-after-3.webp", alt: "Smile makeover — before and after" },
  { src: "/images/veneers-landing/gallery/before-after-5.webp", alt: "Porcelain veneers — before and after" },
];

const patientResults = [
  { src: "/images/veneers-landing/gallery/patient-result-2.webp", alt: "Patient veneer result" },
  { src: "/images/veneers-landing/gallery/patient-result-3.webp", alt: "Smile transformation result" },
  { src: "/images/veneers-landing/gallery/patient-result-3b.webp", alt: "Natural veneer result" },
  { src: "/images/veneers-landing/gallery/patient-result-5.webp", alt: "Cosmetic dentistry result" },
  { src: "/images/veneers-landing/gallery/patient-result-7.webp", alt: "Porcelain veneer patient" },
  { src: "/images/veneers-landing/gallery/patient-result-8.webp", alt: "Denstudio patient result" },
];

export default function VeneersLandingPage() {
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
                <span className="inline-block text-xs font-medium bg-white/15 backdrop-blur-sm px-3 py-1.5 rounded-full">Free Consultation</span>
                <span className="inline-block text-xs font-medium bg-[#C4A574] text-white px-3 py-1.5 rounded-full">&pound;200 OFF Each Veneer</span>
                <span className="inline-block text-xs font-medium bg-white/15 backdrop-blur-sm px-3 py-1.5 rounded-full">Replacement Experts</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.08] mb-5">
                Premium Natural Porcelain Veneers
              </h1>

              <p className="text-white/80 text-lg leading-relaxed mb-6 max-w-lg">
                World-class veneers with digital design at our Harley Street clinic. Ultra-natural results that look like real teeth.
              </p>

              {/* Trust indicators */}
              <div className="flex flex-wrap gap-x-6 gap-y-3 mb-8">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#C4A574]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  <span className="text-sm text-white/70">5.0 rated on Google</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#C4A574]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  <span className="text-sm text-white/70">100+ smile makeovers</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#C4A574]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span className="text-sm text-white/70">0% finance available</span>
                </div>
              </div>

              {/* Form under the text */}
              <div id="book" className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl mt-auto">
                <h2 className="text-xl font-bold text-[#1a1a1a] mb-1">
                  Book Your Free Consultation
                </h2>
                <p className="text-sm text-[#555] mb-5">
                  Get a personalised treatment plan. No obligation.
                </p>
                <form className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input type="text" placeholder="Full Name *" required className="w-full px-4 py-3 rounded-xl border border-[#ddd] text-sm text-[#1a1a1a] focus:outline-none focus:border-[#012406] focus:ring-1 focus:ring-[#012406]/20 transition-all" />
                    <input type="tel" placeholder="Phone Number *" required className="w-full px-4 py-3 rounded-xl border border-[#ddd] text-sm text-[#1a1a1a] focus:outline-none focus:border-[#012406] focus:ring-1 focus:ring-[#012406]/20 transition-all" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input type="email" placeholder="Email Address *" required className="w-full px-4 py-3 rounded-xl border border-[#ddd] text-sm text-[#1a1a1a] focus:outline-none focus:border-[#012406] focus:ring-1 focus:ring-[#012406]/20 transition-all" />
                    <select className="w-full px-4 py-3 rounded-xl border border-[#ddd] text-sm text-[#555] focus:outline-none focus:border-[#012406] focus:ring-1 focus:ring-[#012406]/20 transition-all">
                      <option>How many teeth?</option>
                      <option>1-4 teeth</option>
                      <option>6-8 teeth (upper smile)</option>
                      <option>10 teeth (full upper)</option>
                      <option>20 teeth (full mouth)</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>
                  <button type="submit" className="w-full bg-[#012406] hover:bg-[#023a09] text-white py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 border-2 border-white/20">
                    Book Free Consultation
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
              <Image src="/images/veneers-landing/hero-photo-feb26.webp" alt="Porcelain veneers result at DENSTUDIO" fill className="object-cover object-center" priority />
            </div>

          </div>
        </div>
      </section>

      {/* ══════ Logo Strip ══════ */}
      <section className="border-y border-[#eeeeee] bg-white">
        <LogoCarousel />
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
                  "Over 100 smile makeovers designed with digital precision",
                  "Specialist in Invisalign, bonding & EMAX porcelain veneers",
                  "Preserves the beauty of your natural teeth",
                  "Guest Lecturer at Oxford University",
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
            Your 3-Step Action Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Consultation", description: "A comprehensive assessment with Dr Denzel including digital scans, smile analysis and a personalised treatment plan designed around your goals." },
              { step: "02", title: "Preparation", description: "Minimal, conservative tooth preparation followed by precision digital impressions sent to our world-class laboratory for handcrafted veneer fabrication." },
              { step: "03", title: "Application", description: "Your bespoke veneers are carefully bonded to your teeth, adjusted for perfect fit and polished to a flawless, natural finish." },
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

      {/* ══════ Patient Results Gallery ══════ */}
      <section className="py-20 md:py-28 bg-[#f8f8f6]">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-[#555555] mb-3 text-center">Transformations</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#222222] leading-[1.15] text-center mb-4">
            Life Is Too Short Not to Smile
          </h2>
          <p className="text-[#555] text-center mb-12 max-w-xl mx-auto">
            Real patients. Real confidence. See what a Denstudio smile makeover can do.
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
              Start Your Transformation
            </Link>
          </div>
        </div>
      </section>

      {/* ══════ Transparent Pricing ══════ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-[#555555] mb-3 text-center">Investment</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#222222] leading-[1.15] mb-4 text-center">
            Veneer Packages
          </h2>
          <p className="text-[#555555] text-center mb-12 max-w-2xl mx-auto">
            Transparent pricing with no hidden costs. 0% finance available. All packages include consultation, preparation, laboratory fees and fitting.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Porcelain Smile Makeover */}
            <div className="bg-white rounded-2xl p-8 border border-[#e5e5e5] flex flex-col">
              <h3 className="text-lg font-semibold text-[#222222] mb-1">Porcelain Smile Makeover</h3>
              <p className="text-sm text-[#555555] mb-4">Up to 10 veneers</p>
              <span className="text-sm text-[#999999] line-through">Was £12,885</span>
              <span className="text-4xl font-bold text-[#012406] mb-1">£9,990</span>
              <span className="text-xs text-[#C4A574] font-semibold mb-4">Save £2,895</span>
              <ul className="space-y-2 text-sm text-[#555] flex-1 mb-6">
                <li className="flex items-start gap-2"><span className="text-[#012406] mt-0.5">&#10003;</span>Examination &amp; hygiene</li>
                <li className="flex items-start gap-2"><span className="text-[#012406] mt-0.5">&#10003;</span>Home whitening</li>
                <li className="flex items-start gap-2"><span className="text-[#012406] mt-0.5">&#10003;</span>Wax up / trial smile</li>
                <li className="flex items-start gap-2"><span className="text-[#012406] mt-0.5">&#10003;</span>10 premium porcelain veneers</li>
                <li className="flex items-start gap-2"><span className="text-[#012406] mt-0.5">&#10003;</span>Night guard included</li>
              </ul>
              <Link href="#book" className="block text-center bg-[#012406] hover:bg-[#023a09] text-white py-3 rounded-full font-medium transition-all duration-300 text-sm">
                Book Free Consultation
              </Link>
            </div>

            {/* Full Mouth — highlighted */}
            <div className="bg-white rounded-2xl p-8 border-2 border-[#012406] flex flex-col relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#012406] text-white text-xs font-semibold px-4 py-1 rounded-full">Most Popular</span>
              <h3 className="text-lg font-semibold text-[#222222] mb-1">Full Mouth Premium</h3>
              <p className="text-sm text-[#555555] mb-4">Up to 20 veneers</p>
              <span className="text-sm text-[#999999] line-through">Was £22,235</span>
              <span className="text-4xl font-bold text-[#012406] mb-1">£19,445</span>
              <span className="text-xs text-[#C4A574] font-semibold mb-4">Save £2,790</span>
              <ul className="space-y-2 text-sm text-[#555] flex-1 mb-6">
                <li className="flex items-start gap-2"><span className="text-[#012406] mt-0.5">&#10003;</span>Examination &amp; hygiene</li>
                <li className="flex items-start gap-2"><span className="text-[#012406] mt-0.5">&#10003;</span>Home whitening</li>
                <li className="flex items-start gap-2"><span className="text-[#012406] mt-0.5">&#10003;</span>Wax up / trial smile (20 teeth)</li>
                <li className="flex items-start gap-2"><span className="text-[#012406] mt-0.5">&#10003;</span>20 premium porcelain veneers</li>
                <li className="flex items-start gap-2"><span className="text-[#012406] mt-0.5">&#10003;</span>Night guard included</li>
              </ul>
              <Link href="#book" className="block text-center bg-[#012406] hover:bg-[#023a09] text-white py-3 rounded-full font-medium transition-all duration-300 text-sm">
                Book Free Consultation
              </Link>
            </div>

            {/* Individual */}
            <div className="bg-white rounded-2xl p-8 border border-[#e5e5e5] flex flex-col">
              <h3 className="text-lg font-semibold text-[#222222] mb-1">Individual Veneers</h3>
              <p className="text-sm text-[#555555] mb-4">Per tooth</p>
              <span className="text-4xl font-bold text-[#012406] mb-1">£1,200</span>
              <span className="text-xs text-[#555] mb-4">Perfect for 1-4 teeth</span>
              <ul className="space-y-2 text-sm text-[#555] flex-1 mb-6">
                <li className="flex items-start gap-2"><span className="text-[#012406] mt-0.5">&#10003;</span>Single tooth or small case</li>
                <li className="flex items-start gap-2"><span className="text-[#012406] mt-0.5">&#10003;</span>Premium porcelain material</li>
                <li className="flex items-start gap-2"><span className="text-[#012406] mt-0.5">&#10003;</span>Bespoke colour matching</li>
              </ul>
              <Link href="#book" className="block text-center border border-[#012406] text-[#012406] hover:bg-[#012406] hover:text-white py-3 rounded-full font-medium transition-all duration-300 text-sm">
                Book Free Consultation
              </Link>
            </div>
          </div>

          <p className="text-center text-sm text-[#555] mt-8">
            0% finance available on all packages. <Link href="/fees" className="text-[#012406] font-medium underline">View full fee list</Link>
          </p>
        </div>
      </section>

      {/* ══════ Reviews ══════ */}
      <section className="py-20 md:py-28 bg-[#f8f8f6] overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-[#555555] mb-3 text-center">Patient Reviews</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#222222] leading-[1.15] text-center mb-12">
            What Our Patients Say
          </h2>
        </div>
        <ReviewCarousel />
      </section>

      {/* ══════ Before/After Gallery ══════ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-[#555555] mb-3 text-center">Real Results</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#222222] leading-[1.15] text-center mb-4">
            See the Difference
          </h2>
          <p className="text-[#555] text-center mb-12 max-w-xl mx-auto">
            Every smile is unique. These are real results from real patients at Denstudio, Harley Street.
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
              Get Your Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* ══════ Urgency / Final CTA ══════ */}
      <section className="py-20 md:py-28 bg-[#012406] text-white text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6">
            Ready to Transform Your Smile?
          </h2>
          <p className="text-white/80 leading-relaxed mb-4 text-lg">
            Book your free consultation at our Harley Street practice today and take the first step towards the smile you&apos;ve always wanted.
          </p>
          <p className="text-[#C4A574] font-medium mb-10 text-sm">
            Limited availability &mdash; consultations booking 2&ndash;3 weeks in advance
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#book" className="inline-block bg-white text-[#012406] hover:bg-white/90 px-8 py-3.5 rounded-full font-medium transition-all duration-300">
              Book Free Consultation
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
