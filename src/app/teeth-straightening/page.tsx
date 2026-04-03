import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ReviewCarousel from "@/components/ReviewCarousel";
import Accordion from "@/components/Accordion";
import EnquiryButton from "@/components/EnquiryButton";
import LogoCarousel from "@/components/LogoCarousel";

export const metadata: Metadata = {
  title:
    "Invisalign & Clear Aligners Harley Street | From £2,950 — DENSTUDIO",
  description:
    "Straighten your teeth with Invisalign clear aligners at Denstudio, Harley Street. Virtually invisible, removable, price match guarantee. Free consultation. Results in 4-18 months.",
};

const faqItems = [
  {
    question: "How long does Invisalign treatment take?",
    answer:
      "Most patients complete their Invisalign treatment within 4 to 18 months, depending on the complexity of their case. Mild cases using Invisalign i7 can be finished in as little as 3 months, while more comprehensive treatments take 12 to 18 months. During your free consultation, we will give you a personalised timeline based on your 3D scan.",
  },
  {
    question: "Is Invisalign painful?",
    answer:
      "Invisalign is far more comfortable than traditional braces. You may feel mild pressure when switching to a new set of aligners, which is a sign that they are working. This usually subsides within a day or two. There are no metal brackets or wires to irritate your cheeks or gums.",
  },
  {
    question: "How many hours a day do I need to wear my aligners?",
    answer:
      "For the best results, you should wear your aligners for 20 to 22 hours per day. You remove them only to eat, drink anything other than water, and brush your teeth. Most patients find this easy to maintain once they get into the routine.",
  },
  {
    question: "Can I eat and drink normally with Invisalign?",
    answer:
      "Yes. Because Invisalign aligners are removable, there are no dietary restrictions. Simply remove your aligners before eating or drinking, then brush your teeth before putting them back in. This is a major advantage over fixed braces.",
  },
  {
    question: "How does Invisalign compare to fixed braces?",
    answer:
      "Invisalign aligners are virtually invisible, removable and far more comfortable than fixed braces. There are no metal brackets or wires, and treatment times are often shorter. You can also see a digital preview of your final result before treatment begins, which is not possible with traditional braces.",
  },
  {
    question: "Do I need retainers after Invisalign?",
    answer:
      "Yes. After completing your Invisalign treatment, you will need to wear retainers to keep your teeth in their new position. We provide Vivera retainers, which are made by the same company that produces Invisalign and are 30% stronger than other clear retainers.",
  },
  {
    question: "What is your price match guarantee?",
    answer:
      "If you receive a lower written quote for the same Invisalign treatment from another provider, we will match that price. Simply bring your quote to your consultation and we will honour it. We believe in offering the best value alongside the best care.",
  },
  {
    question: "Can Invisalign fix my specific dental issue?",
    answer:
      "Invisalign can treat a wide range of cases including crowding, spacing, overbite, underbite, crossbite and open bite. During your free consultation, we will assess your teeth with a 3D digital scan and let you know whether Invisalign is the right option for you.",
  },
];

export default function TeethStraighteningPage() {
  return (
    <>
      {/* ══════ HERO ══════ */}
      <section className="relative bg-[#012406] pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/teeth-straightening/hero.webp" alt="Invisalign clear aligners at Denstudio Harley Street" fill className="object-cover opacity-30" priority />
        </div>
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="inline-block text-xs font-medium bg-white/15 backdrop-blur-sm text-white px-3 py-1.5 rounded-full">Free Consultation</span>
              <span className="inline-block text-xs font-medium bg-[#C4A574] text-white px-3 py-1.5 rounded-full">Price Match Guarantee</span>
              <span className="inline-block text-xs font-medium bg-white/15 backdrop-blur-sm text-white px-3 py-1.5 rounded-full">Invisalign Certified</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.08] mb-5">
              Invisalign &amp; Clear Aligners at Harley Street
            </h1>

            <ul className="space-y-3 mb-8">
              {[
                "Virtually invisible — no one will know you are wearing them",
                "Removable — eat, drink and brush with ease",
                "Price match guarantee on all Invisalign treatments",
                "Results in 4-18 months depending on your case",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 mt-0.5 shrink-0 text-white/80"
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
                  <span className="text-white/90">{item}</span>
                </li>
              ))}
            </ul>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 mb-8">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#C4A574]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                <span className="text-sm text-white/70">5.0 rated on Google</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#C4A574]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                <span className="text-sm text-white/70">Oxford-educated dentist</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#C4A574]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span className="text-sm text-white/70">0% finance available</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <EnquiryButton
                className="inline-block bg-white text-[#012406] hover:bg-white/90 px-8 py-3.5 rounded-full font-medium transition-all duration-300"
              >
                Book Free Consultation
              </EnquiryButton>
              <a href="tel:02038830588" className="inline-block border border-white/40 text-white hover:bg-white/10 px-8 py-3.5 rounded-full font-medium transition-all duration-300 text-center">
                Call 020 3883 0588
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ LOGO STRIP ══════ */}
      <section className="border-y border-[#eeeeee] bg-white">
        <LogoCarousel />
      </section>

      {/* ══════ WHAT IS INVISALIGN? ══════ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs uppercase tracking-[0.2em] text-[#555555] mb-3 text-center">The Treatment</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#222222] leading-[1.15] mb-6 text-center">
              What Is Invisalign?
            </h2>
            <p className="text-[#333333] leading-relaxed mb-6">
              Invisalign is the world&apos;s most advanced clear aligner system, trusted by over 14 million patients worldwide. It uses a series of custom-made, virtually invisible trays to gradually move your teeth into their ideal position — without the need for metal brackets or wires.
            </p>
            <p className="text-[#333333] leading-relaxed mb-6">
              Every set of aligners is digitally planned using a precise 3D scan of your teeth. Before treatment begins, you can see a digital preview of your final smile, so you know exactly what to expect at every stage of your journey.
            </p>
            <p className="text-[#333333] leading-relaxed">
              Because the aligners are removable, you can eat, drink and brush your teeth as normal throughout treatment. There are no food restrictions and maintaining excellent oral hygiene is effortless compared to fixed braces. Most patients find that colleagues and friends do not even notice they are wearing aligners.
            </p>
          </div>
        </div>
      </section>

      {/* ══════ KEY FEATURES ══════ */}
      <section className="py-20 md:py-28 bg-[#f8f8f6]">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-[#555555] mb-3 text-center">Why Invisalign</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#222222] leading-[1.15] mb-12 text-center">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Invisible Treatment",
                description: "Invisalign aligners are made from a patented SmartTrack material that is virtually undetectable. Wear them with confidence at work, socially and in photographs — most people will never know you are straightening your teeth.",
                icon: (
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                ),
              },
              {
                title: "Digital Precision",
                description: "We take a detailed 3D scan of your teeth and use Invisalign's ClinCheck software to plan every movement digitally. You see your predicted result before treatment starts, and every aligner is precision-engineered for maximum efficiency.",
                icon: (
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                ),
              },
              {
                title: "Flexible Lifestyle",
                description: "Remove your aligners to eat whatever you want, drink freely and maintain your oral hygiene routine. There are no food restrictions and no complex cleaning around brackets and wires. Invisalign fits around your life, not the other way around.",
                icon: (
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
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

      {/* ══════ HOW IT WORKS ══════ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-[#555555] mb-3 text-center">How It Works</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#222222] leading-[1.15] mb-12 text-center">
            Your 5-Step Journey to Straight Teeth
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { step: "01", title: "Free Consultation", description: "Meet your dentist, discuss your goals and find out if Invisalign is right for you. No obligation, no cost." },
              { step: "02", title: "3D Digital Scan", description: "We take a precise digital scan of your teeth and create a ClinCheck plan showing your predicted result." },
              { step: "03", title: "Custom Aligner Fabrication", description: "Your bespoke aligners are precision-manufactured using Invisalign's patented SmartTrack material." },
              { step: "04", title: "Wear & Monitor", description: "Wear each set of aligners for 1-2 weeks. We monitor progress with regular check-ups every 6-8 weeks." },
              { step: "05", title: "Retainers (Vivera)", description: "Once complete, Vivera retainers keep your teeth in their new position. 30% stronger than standard retainers." },
            ].map((item) => (
              <div key={item.step} className="bg-[#f8f8f6] rounded-2xl p-6 text-center">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#012406] text-white text-lg font-bold mb-4">{item.step}</span>
                <h3 className="text-lg font-semibold text-[#222222] mb-2">{item.title}</h3>
                <p className="text-[#555555] leading-relaxed text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ WHY DENSTUDIO ══════ */}
      <section className="py-20 md:py-28 bg-[#f8f8f6]">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-[#555555] mb-3 text-center">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#222222] leading-[1.15] mb-6 text-center">
            Why Denstudio for Invisalign
          </h2>
          <p className="text-[#555] text-center mb-12 max-w-2xl mx-auto">
            We combine clinical expertise with a premium patient experience to deliver outstanding Invisalign results at Harley Street.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Invisalign Certified Provider",
                description: "Our dentists are fully certified Invisalign providers with extensive experience across all case types, from mild crowding to complex bite correction.",
              },
              {
                title: "Price Match Guarantee",
                description: "Found a lower price elsewhere? Bring us a written quote for the same Invisalign treatment and we will match it. Outstanding care should never mean overpaying.",
              },
              {
                title: "Combine with Bonding for Full Makeovers",
                description: "We frequently combine Invisalign with composite bonding and whitening to deliver complete smile transformations in a single coordinated treatment plan.",
              },
              {
                title: "Oxford-Educated Dentist",
                description: "Dr Jana Denzel is an internationally recognised cosmetic dentist, guest lecturer at Oxford University, and twice-awarded Best Young Dentist in the UK.",
              },
            ].map((usp) => (
              <div key={usp.title} className="bg-white rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#012406] flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="text-lg font-semibold text-[#222222]">{usp.title}</h3>
                </div>
                <p className="text-[#555555] leading-relaxed text-sm">{usp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ BEFORE/AFTER ══════ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-[#555555] mb-3 text-center">Real Results</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#222222] leading-[1.15] text-center mb-4">
            Before &amp; After
          </h2>
          <p className="text-[#555] text-center mb-12 max-w-xl mx-auto">
            Real Invisalign results from real patients at Denstudio, Harley Street.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="relative aspect-[4/5] rounded-xl overflow-hidden group"
              >
                <Image src={`/images/teeth-straightening/before-after-${i}.webp`} alt={`Invisalign before and after ${i}`} fill className="object-cover object-top transition-transform duration-500 group-hover:scale-105" />
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <EnquiryButton
              className="inline-block bg-[#012406] hover:bg-[#023a09] text-white px-8 py-3.5 rounded-full font-medium transition-all duration-300"
            >
              Book Free Consultation
            </EnquiryButton>
          </div>
        </div>
      </section>

      {/* ══════ PRICING ══════ */}
      <section className="py-20 md:py-28 bg-[#f8f8f6]">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-[#555555] mb-3 text-center">Investment</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#222222] leading-[1.15] mb-4 text-center">
            Invisalign Packages
          </h2>
          <p className="text-[#555555] text-center mb-12 max-w-2xl mx-auto">
            Transparent pricing with no hidden costs. Price match guarantee on all packages. 0% finance available.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* i7 */}
            <div className="bg-white rounded-2xl p-8 border border-[#e5e5e5] flex flex-col">
              <h3 className="text-lg font-semibold text-[#222222] mb-1">Invisalign i7</h3>
              <p className="text-sm text-[#555555] mb-4">Mild cases</p>
              <span className="text-4xl font-bold text-[#012406] mb-1">&pound;2,950</span>
              <span className="text-xs text-[#555] mb-4">Up to 7 aligners</span>
              <ul className="space-y-2 text-sm text-[#555] flex-1 mb-6">
                <li className="flex items-start gap-2"><span className="text-[#012406] mt-0.5">&#10003;</span>Minor crowding or relapse</li>
                <li className="flex items-start gap-2"><span className="text-[#012406] mt-0.5">&#10003;</span>3D scan &amp; ClinCheck plan</li>
                <li className="flex items-start gap-2"><span className="text-[#012406] mt-0.5">&#10003;</span>Vivera retainers included</li>
              </ul>
              <EnquiryButton
                className="block text-center border border-[#012406] text-[#012406] hover:bg-[#012406] hover:text-white py-3 rounded-full font-medium transition-all duration-300 text-sm"
              >
                Book Consultation
              </EnquiryButton>
            </div>

            {/* Lite */}
            <div className="bg-white rounded-2xl p-8 border border-[#e5e5e5] flex flex-col">
              <h3 className="text-lg font-semibold text-[#222222] mb-1">Invisalign Lite</h3>
              <p className="text-sm text-[#555555] mb-4">Moderate cases</p>
              <span className="text-4xl font-bold text-[#012406] mb-1">&pound;3,500</span>
              <span className="text-xs text-[#555] mb-4">Up to 14 aligners</span>
              <ul className="space-y-2 text-sm text-[#555] flex-1 mb-6">
                <li className="flex items-start gap-2"><span className="text-[#012406] mt-0.5">&#10003;</span>Moderate crowding or spacing</li>
                <li className="flex items-start gap-2"><span className="text-[#012406] mt-0.5">&#10003;</span>3D scan &amp; ClinCheck plan</li>
                <li className="flex items-start gap-2"><span className="text-[#012406] mt-0.5">&#10003;</span>Vivera retainers included</li>
              </ul>
              <EnquiryButton
                className="block text-center border border-[#012406] text-[#012406] hover:bg-[#012406] hover:text-white py-3 rounded-full font-medium transition-all duration-300 text-sm"
              >
                Book Consultation
              </EnquiryButton>
            </div>

            {/* Full — highlighted */}
            <div className="bg-white rounded-2xl p-8 border-2 border-[#012406] flex flex-col relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#012406] text-white text-xs font-semibold px-4 py-1 rounded-full">Most Popular</span>
              <h3 className="text-lg font-semibold text-[#222222] mb-1">Invisalign Full</h3>
              <p className="text-sm text-[#555555] mb-4">Comprehensive treatment</p>
              <span className="text-4xl font-bold text-[#012406] mb-1">From &pound;3,950</span>
              <span className="text-xs text-[#555] mb-4">Unlimited aligners</span>
              <ul className="space-y-2 text-sm text-[#555] flex-1 mb-6">
                <li className="flex items-start gap-2"><span className="text-[#012406] mt-0.5">&#10003;</span>Complex cases &amp; bite correction</li>
                <li className="flex items-start gap-2"><span className="text-[#012406] mt-0.5">&#10003;</span>3D scan &amp; ClinCheck plan</li>
                <li className="flex items-start gap-2"><span className="text-[#012406] mt-0.5">&#10003;</span>Vivera retainers included</li>
                <li className="flex items-start gap-2"><span className="text-[#012406] mt-0.5">&#10003;</span>Unlimited refinements</li>
              </ul>
              <EnquiryButton
                className="block text-center bg-[#012406] hover:bg-[#023a09] text-white py-3 rounded-full font-medium transition-all duration-300 text-sm"
              >
                Book Consultation
              </EnquiryButton>
            </div>

            {/* Smile Makeover Package */}
            <div className="bg-white rounded-2xl p-8 border border-[#e5e5e5] flex flex-col relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C4A574] text-white text-xs font-semibold px-4 py-1 rounded-full">Best Value</span>
              <h3 className="text-lg font-semibold text-[#222222] mb-1">Smile Makeover Package</h3>
              <p className="text-sm text-[#555555] mb-4">Invisalign + bonding + whitening</p>
              <span className="text-4xl font-bold text-[#012406] mb-1">&pound;3,790</span>
              <span className="text-xs text-[#C4A574] font-semibold mb-4">Complete transformation</span>
              <ul className="space-y-2 text-sm text-[#555] flex-1 mb-6">
                <li className="flex items-start gap-2"><span className="text-[#012406] mt-0.5">&#10003;</span>Invisalign clear aligners</li>
                <li className="flex items-start gap-2"><span className="text-[#012406] mt-0.5">&#10003;</span>Composite bonding</li>
                <li className="flex items-start gap-2"><span className="text-[#012406] mt-0.5">&#10003;</span>Professional whitening</li>
                <li className="flex items-start gap-2"><span className="text-[#012406] mt-0.5">&#10003;</span>Vivera retainers included</li>
              </ul>
              <EnquiryButton
                className="block text-center border border-[#012406] text-[#012406] hover:bg-[#012406] hover:text-white py-3 rounded-full font-medium transition-all duration-300 text-sm"
              >
                Book Consultation
              </EnquiryButton>
            </div>
          </div>

          <p className="text-center text-sm text-[#555] mt-8">
            0% finance available on all packages. Price match guarantee. <Link href="/fees" className="text-[#012406] font-medium underline">View full fee list</Link>
          </p>
        </div>
      </section>

      {/* ══════ REVIEWS ══════ */}
      <section className="py-20 md:py-28 bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-[#555555] mb-3 text-center">Patient Reviews</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#222222] leading-[1.15] text-center mb-12">
            What Our Patients Say
          </h2>
        </div>
        <ReviewCarousel />
      </section>

      {/* ══════ FAQ ══════ */}
      <section className="py-20 md:py-28 bg-[#f8f8f6]">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-[#555555] mb-3 text-center">Common Questions</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#222222] leading-[1.15] mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <Accordion items={faqItems} />
        </div>
      </section>

      {/* ══════ RELATED ARTICLES ══════ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-[#555555] mb-3 text-center">Learn More</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#222222] leading-[1.15] mb-12 text-center">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Invisalign vs Braces: Which Is Right for You?",
                href: "/new-page-3",
                description: "A comprehensive comparison of Invisalign clear aligners and traditional fixed braces to help you make the right choice.",
              },
              {
                title: "Composite Bonding vs Porcelain Veneers",
                href: "/composite-bonding-vs-porcelain-veneers",
                description: "Understand the key differences between bonding and veneers, including cost, longevity and suitability for your smile goals.",
              },
              {
                title: "Smile Makeover Process: Step-by-Step Guide",
                href: "/smile-makeover-process-step-by-step-guide",
                description: "Everything you need to know about combining Invisalign, bonding and whitening into a single coordinated smile makeover.",
              },
            ].map((article) => (
              <Link key={article.href} href={article.href} className="group bg-[#f8f8f6] rounded-2xl p-8 transition-all duration-300 hover:shadow-lg">
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
            Ready for Straighter Teeth?
          </h2>
          <p className="text-white/80 leading-relaxed mb-4 text-lg">
            Book your free Invisalign consultation at our Harley Street clinic today and take the first step towards the smile you have always wanted.
          </p>
          <p className="text-[#C4A574] font-medium mb-10 text-sm">
            Price match guarantee on all Invisalign treatments. 0% finance available.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <EnquiryButton
              className="inline-block bg-white text-[#012406] hover:bg-white/90 px-8 py-3.5 rounded-full font-medium transition-all duration-300"
            >
              Book Free Consultation
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
