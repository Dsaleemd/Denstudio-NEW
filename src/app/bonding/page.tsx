import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ReviewCarousel from "@/components/ReviewCarousel";
import LogoCarousel from "@/components/LogoCarousel";

export const metadata: Metadata = {
  title: "Composite Bonding Harley Street | From £350/tooth — DENSTUDIO",
  description:
    "Composite bonding from £350/tooth at Denstudio, Harley Street. Same-day results, no drilling, no injections. Pain-free smile transformation. Book your free consultation today.",
};

const beforeAfterImages = [
  { src: "/images/veneers-landing/gallery/before-after-1.webp", alt: "Composite bonding transformation — before and after" },
  { src: "/images/veneers-landing/gallery/before-after-3.webp", alt: "Smile makeover with bonding — before and after" },
  { src: "/images/veneers-landing/gallery/before-after-5.webp", alt: "Composite bonding — before and after" },
];

const patientResults = [
  { src: "/images/veneers-landing/gallery/patient-result-2.webp", alt: "Patient bonding result" },
  { src: "/images/veneers-landing/gallery/patient-result-3.webp", alt: "Smile transformation result" },
  { src: "/images/veneers-landing/gallery/patient-result-3b.webp", alt: "Natural bonding result" },
  { src: "/images/veneers-landing/gallery/patient-result-5.webp", alt: "Cosmetic dentistry result" },
  { src: "/images/veneers-landing/gallery/patient-result-7.webp", alt: "Composite bonding patient" },
  { src: "/images/veneers-landing/gallery/patient-result-8.webp", alt: "Denstudio patient result" },
];

export default function BondingLandingPage() {
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
                <span className="inline-block text-xs font-medium bg-white/15 backdrop-blur-sm px-3 py-1.5 rounded-full">Same-Day Results</span>
                <span className="inline-block text-xs font-medium bg-[#C4A574] text-white px-3 py-1.5 rounded-full">No Drilling Required</span>
                <span className="inline-block text-xs font-medium bg-white/15 backdrop-blur-sm px-3 py-1.5 rounded-full">From &pound;350/tooth</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.08] mb-5">
                Transform Your Smile in Just One Visit
              </h1>

              <p className="text-white/80 text-lg leading-relaxed mb-6 max-w-lg">
                Composite bonding at Denstudio repairs chips, closes gaps and reshapes teeth &mdash; pain-free, with no injections and no permanent changes to your natural teeth.
              </p>

              {/* Trust indicators */}
              <div className="flex flex-wrap gap-x-6 gap-y-3 mb-8">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#C4A574]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  <span className="text-sm text-white/70">5.0 rated on Google</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#C4A574]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  <span className="text-sm text-white/70">100+ transformations</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#C4A574]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span className="text-sm text-white/70">No drilling required</span>
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
                    <input type="email" placeholder="Email Address *" required className="w-full px-4 py-3 rounded-xl border border-[#ddd] text-sm text-[#1a1a1a] focus:outline-none focus:border-[#012406] focus:ring-1 focus:ring-[#012406]/20 transition-all" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input type="tel" placeholder="Phone Number *" required className="w-full px-4 py-3 rounded-xl border border-[#ddd] text-sm text-[#1a1a1a] focus:outline-none focus:border-[#012406] focus:ring-1 focus:ring-[#012406]/20 transition-all" />
                    <select className="w-full px-4 py-3 rounded-xl border border-[#ddd] text-sm text-[#555] focus:outline-none focus:border-[#012406] focus:ring-1 focus:ring-[#012406]/20 transition-all">
                      <option>How many teeth?</option>
                      <option>1-4 teeth</option>
                      <option>6 upper teeth</option>
                      <option>8 upper teeth</option>
                      <option>10+ full smile</option>
                      <option>Not sure</option>
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
              <Image src="/images/composite-bonding/hero.webp" alt="Composite bonding result at DENSTUDIO" fill className="object-cover object-center" priority />
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
                  "Over 100 composite bonding transformations",
                  "Pain-free — no injections, no drilling, no anaesthetic needed",
                  "Completely reversible — your natural teeth stay untouched",
                  "Results in just 2-3 hours, same-day appointments available",
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
              { step: "01", title: "Consultation", description: "We assess your smile, discuss your goals and create a personalised treatment plan. X-rays and photos included." },
              { step: "02", title: "Shade & Shape", description: "You choose the exact colour, shape and size. We match composite resin to your natural teeth — or the shade you want them to be." },
              { step: "03", title: "Sculpt & Polish", description: "Dr Denzel hand-sculpts each tooth with precision. UV light hardens the resin. Final polish for a natural, seamless finish." },
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

      {/* ══════ What Bonding Can Fix ══════ */}
      <section className="py-20 md:py-28 bg-[#f8f8f6]">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-[#555555] mb-3 text-center">Common Concerns</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#222222] leading-[1.15] mb-12 text-center">
            What Bonding Can Fix
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z", title: "Chipped Teeth", description: "Restore chipped or cracked teeth to their original shape seamlessly." },
              { icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4", title: "Gaps Between Teeth", description: "Close gaps and spaces without braces or aligners." },
              { icon: "M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12", title: "Uneven or Short Teeth", description: "Lengthen and reshape teeth for a balanced, symmetrical smile." },
              { icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01", title: "Discolouration", description: "Cover stubborn stains and discolouration that whitening cannot fix." },
              { icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6z", title: "Worn Edges", description: "Rebuild worn or rough edges for a smoother, more youthful look." },
              { icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z", title: "Minor Misalignment", description: "Improve the appearance of slightly crooked or overlapping teeth." },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-[#012406]/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-[#012406]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} /></svg>
                </div>
                <h3 className="text-base font-semibold text-[#222222] mb-2">{item.title}</h3>
                <p className="text-[#555555] text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="#book" className="inline-block bg-[#012406] hover:bg-[#023a09] text-white px-8 py-3.5 rounded-full font-medium transition-all duration-300">
              Book Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* ══════ Patient Results Gallery ══════ */}
      <section className="py-20 md:py-28">
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
      <section className="py-20 md:py-28 bg-[#f8f8f6]">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-[#555555] mb-3 text-center">Investment</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#222222] leading-[1.15] mb-4 text-center">
            Bonding Packages
          </h2>
          <p className="text-[#555555] text-center mb-12 max-w-2xl mx-auto">
            Transparent pricing with no hidden costs. All packages include consultation, whitening recommendation and aftercare guide. 0% finance available.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Per Tooth */}
            <div className="bg-white rounded-2xl p-8 border border-[#e5e5e5] flex flex-col">
              <h3 className="text-lg font-semibold text-[#222222] mb-1">Per Tooth</h3>
              <p className="text-sm text-[#555555] mb-4">Individual tooth repair or enhancement</p>
              <span className="text-4xl font-bold text-[#012406] mb-1">&pound;350</span>
              <span className="text-xs text-[#555] mb-4">Perfect for 1&ndash;4 teeth</span>
              <ul className="space-y-2 text-sm text-[#555] flex-1 mb-6">
                <li className="flex items-start gap-2"><span className="text-[#012406] mt-0.5">&#10003;</span>Free consultation included</li>
                <li className="flex items-start gap-2"><span className="text-[#012406] mt-0.5">&#10003;</span>Whitening recommendation</li>
                <li className="flex items-start gap-2"><span className="text-[#012406] mt-0.5">&#10003;</span>Aftercare guide</li>
              </ul>
              <Link href="#book" className="block text-center border border-[#012406] text-[#012406] hover:bg-[#012406] hover:text-white py-3 rounded-full font-medium transition-all duration-300 text-sm">
                Book Free Consultation
              </Link>
            </div>

            {/* Upper 8 Teeth — highlighted */}
            <div className="bg-white rounded-2xl p-8 border-2 border-[#012406] flex flex-col relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#012406] text-white text-xs font-semibold px-4 py-1 rounded-full">Most Popular</span>
              <h3 className="text-lg font-semibold text-[#222222] mb-1">Upper 8 Teeth</h3>
              <p className="text-sm text-[#555555] mb-4">Our most popular treatment &mdash; covers your visible smile</p>
              <span className="text-sm text-[#999999] line-through">Was &pound;3,150</span>
              <span className="text-4xl font-bold text-[#012406] mb-1">&pound;2,800</span>
              <span className="text-xs text-[#C4A574] font-semibold mb-4">Save &pound;350</span>
              <ul className="space-y-2 text-sm text-[#555] flex-1 mb-6">
                <li className="flex items-start gap-2"><span className="text-[#012406] mt-0.5">&#10003;</span>Free consultation included</li>
                <li className="flex items-start gap-2"><span className="text-[#012406] mt-0.5">&#10003;</span>Whitening recommendation</li>
                <li className="flex items-start gap-2"><span className="text-[#012406] mt-0.5">&#10003;</span>Aftercare guide</li>
                <li className="flex items-start gap-2"><span className="text-[#012406] mt-0.5">&#10003;</span>Same-day results</li>
              </ul>
              <Link href="#book" className="block text-center bg-[#012406] hover:bg-[#023a09] text-white py-3 rounded-full font-medium transition-all duration-300 text-sm">
                Book Free Consultation
              </Link>
            </div>

            {/* Full Smile */}
            <div className="bg-white rounded-2xl p-8 border border-[#e5e5e5] flex flex-col">
              <h3 className="text-lg font-semibold text-[#222222] mb-1">Full Smile (20 Teeth)</h3>
              <p className="text-sm text-[#555555] mb-4">Complete upper and lower transformation</p>
              <span className="text-sm text-[#999999] line-through">Was &pound;7,900</span>
              <span className="text-4xl font-bold text-[#012406] mb-1">&pound;7,000</span>
              <span className="text-xs text-[#C4A574] font-semibold mb-4">Save &pound;900</span>
              <ul className="space-y-2 text-sm text-[#555] flex-1 mb-6">
                <li className="flex items-start gap-2"><span className="text-[#012406] mt-0.5">&#10003;</span>Free consultation included</li>
                <li className="flex items-start gap-2"><span className="text-[#012406] mt-0.5">&#10003;</span>Whitening recommendation</li>
                <li className="flex items-start gap-2"><span className="text-[#012406] mt-0.5">&#10003;</span>Aftercare guide</li>
                <li className="flex items-start gap-2"><span className="text-[#012406] mt-0.5">&#10003;</span>Same-day results</li>
                <li className="flex items-start gap-2"><span className="text-[#012406] mt-0.5">&#10003;</span>Full upper &amp; lower coverage</li>
              </ul>
              <Link href="#book" className="block text-center bg-[#012406] hover:bg-[#023a09] text-white py-3 rounded-full font-medium transition-all duration-300 text-sm">
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
            Ready to Transform Your Smile?
          </h2>
          <p className="text-white/80 leading-relaxed mb-4 text-lg">
            Book your free consultation at our Harley Street practice today and take the first step towards the smile you&apos;ve always wanted. Same-day composite bonding available.
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
