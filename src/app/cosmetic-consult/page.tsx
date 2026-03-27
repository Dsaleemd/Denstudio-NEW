import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ReviewCarousel from "@/components/ReviewCarousel";
import LogoCarousel from "@/components/LogoCarousel";

export const metadata: Metadata = {
  title: "Cosmetic Consultation — DENSTUDIO",
  description:
    "Transform your smile with natural-looking composite bonding and Invisalign at Denstudio, Harley Street. Packages from £1,400. Book your free consultation.",
};

const galleryImages = [
  { src: "/images/cosmetic-consult/gallery-01-composite-bonding-invisalign.jpg", alt: "Composite bonding and Invisalign result" },
  { src: "/images/cosmetic-consult/gallery-02-before-after-transformation.webp", alt: "Before and after smile transformation" },
  { src: "/images/cosmetic-consult/gallery-03-composite-bonding-result.webp", alt: "Composite bonding result" },
  { src: "/images/cosmetic-consult/gallery-04-veneers-bonding.webp", alt: "Veneers and bonding result" },
  { src: "/images/cosmetic-consult/gallery-05-invisalign-result.webp", alt: "Invisalign teeth straightening result" },
  { src: "/images/cosmetic-consult/gallery-06-additional-transformation.webp", alt: "Smile transformation" },
];

const packages = [
  {
    name: "Basic Bonding",
    badge: "10% Discount",
    detail: "4 Teeth",
    price: "£1,400",
    monthly: "£31.80/mo",
    features: ["4 teeth composite bonding"],
    highlight: false,
  },
  {
    name: "Advanced Bonding",
    badge: "10% Discount",
    detail: "Free Whitening + 6 Teeth",
    price: "£2,100",
    monthly: "£42.40/mo",
    features: ["6 teeth composite bonding", "Professional whitening kit"],
    highlight: false,
  },
  {
    name: "Ultimate Bonding",
    badge: "10% Discount",
    detail: "Free Whitening + 8 Teeth",
    price: "£2,520",
    monthly: "£53.00/mo",
    features: ["8 teeth composite bonding", "Professional whitening kit"],
    highlight: false,
  },
  {
    name: "Smile Makeover Special",
    badge: "50% Discount",
    detail: "Complete transformation",
    price: "£3,790",
    oldPrice: "£7,580",
    monthly: "£74.20/mo · 0% interest",
    features: [
      "Full Invisalign treatment",
      "Unlimited composite bonding",
      "Dental exam",
      "Hygiene appointment",
      "Professional whitening",
      "Retainers included",
    ],
    highlight: true,
  },
];

export default function CosmeticConsultPage() {
  return (
    <>
      {/* ══ HERO: White card (left) + Vertical Wistia video (right) ══ */}
      <section className="relative bg-[#012406] pt-24 pb-6 md:pt-28 md:pb-8 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,540px)_1fr] gap-6 lg:items-center">

            {/* Left: White info card with form */}
            <div className="bg-white rounded-xl px-8 py-10 md:px-9 md:py-11">
              <h1 className="text-[2rem] md:text-[2rem] font-bold leading-[1.2] text-[#1a1a1a] mb-3">
                Transform Your Smile with Natural-Looking Composite Bonding and Invisalign
              </h1>
              <p className="text-base font-semibold text-[#1a1a1a] mb-7">
                Open Week 23rd &ndash; 27th February
              </p>

              {/* Check marks */}
              <div className="space-y-3 mb-7">
                {[
                  "Twice awarded Best Young Dentist in the UK.",
                  "Blends advanced dentistry with elegant design.",
                  "Delivers outstanding composite bonding results.",
                ].map((text) => (
                  <div key={text} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#C4A574] flex items-center justify-center shrink-0">
                      <span className="text-white text-lg font-bold">✓</span>
                    </div>
                    <p className="text-[13px] font-bold text-[#1a1a1a]">{text}</p>
                  </div>
                ))}
              </div>

              {/* Form section */}
              <h2 className="text-[25px] font-bold text-[#1a1a1a] mb-5">
                Book Your Free Consultation
              </h2>

              {/* LeadConnector Form Embed */}
              <div className="mb-5">
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/Q4q3vcMOjfj7J3vtm6i3"
                  className="w-full border-none rounded"
                  style={{ height: 315 }}
                  id="inline-Q4q3vcMOjfj7J3vtm6i3"
                  title="Composite Bonding"
                  loading="lazy"
                />
              </div>

              {/* Nearest stations */}
              <div className="flex items-start gap-2 text-[13px] text-[#333]">
                <Image
                  src="/images/cosmetic-consult/london-underground-icon.webp"
                  alt="London Underground"
                  width={18}
                  height={18}
                  className="object-contain mt-0.5"
                />
                <div>
                  <strong>Nearest Stations:</strong><br />
                  Regent&apos;s Park, Great Portland Street, Baker Street
                </div>
              </div>
            </div>

            {/* Right: Vertical Wistia video — 9:16 native ratio, centred with card */}
            <div className="flex items-center justify-center">
              <div className="relative w-full rounded-xl overflow-hidden bg-black" style={{ aspectRatio: "9/16", maxHeight: "820px" }}>
                <iframe
                  src="https://fast.wistia.net/embed/iframe/2zjyjee20j?seo=true&videoFoam=false"
                  title="Denstudio Cosmetic Consultation"
                  allow="autoplay; fullscreen"
                  frameBorder="0"
                  scrolling="no"
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══ Logo Strip ══ */}
      <section className="border-y border-[#eeeeee] bg-white">
        <LogoCarousel />
      </section>

      {/* ══ Meet Dr Jana Denzel ══ */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden max-w-md mx-auto lg:mx-0">
              <Image src="/images/cosmetic-consult/dr-jana-denzel-profile.webp" alt="Dr Jana Denzel" fill className="object-cover" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#555555] mb-3">Meet Your Dentist</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#222222] leading-[1.15] mb-6">
                Dr Jana Denzel
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                Dr Jana Denzel is an internationally recognised cosmetic dentist, BBC Apprentice star and twice-awarded Best Young Dentist in the UK. Named among the world&apos;s top 32 dentists and a Global Ambassador for Slow Dentistry.
              </p>
              <p className="text-[#333333] leading-relaxed mb-6">
                With a meticulous eye for detail and a passion for natural-looking results, Dr Denzel has transformed thousands of smiles at the Harley Street practice.
              </p>
              <ul className="space-y-3">
                {[
                  "Twice-awarded Best Young Dentist UK",
                  "BBC Apprentice star",
                  "Global Ambassador for Slow Dentistry",
                  "Named among world\u2019s top 32 dentists",
                  "Guest Lecturer at Oxford University",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <svg className="w-5 h-5 shrink-0 text-[#012406]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#333333]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══ Patient Gallery: Images grid + Videos below ══ */}
      <section className="py-24 md:py-32 bg-[#f8f8f6]">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-[#555555] mb-3 text-center">Results</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#222222] leading-[1.15] text-center mb-4">
            Dr Jana&apos;s Patients
          </h2>
          <p className="text-[#555555] text-center mb-12 max-w-2xl mx-auto">
            Join hundreds of patients that have transformed their smiles with Dr Jana&apos;s unique transformation protocol
          </p>

          {/* Image grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            {galleryImages.map((img, i) => (
              <div key={i} className="relative aspect-square rounded-xl overflow-hidden">
                <Image src={img.src} alt={img.alt} fill className="object-cover" />
              </div>
            ))}
          </div>

          {/* Video embeds below — vertical/portrait ratio */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative rounded-xl overflow-hidden bg-black" style={{ aspectRatio: "9/16" }}>
              <iframe
                src="https://fast.wistia.net/embed/iframe/2zjyjee20j?seo=false&videoFoam=true"
                title="Patient transformation video 1"
                allow="autoplay; fullscreen"
                frameBorder="0"
                scrolling="no"
                className="absolute inset-0 w-full h-full"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden bg-black" style={{ aspectRatio: "9/16" }}>
              <iframe
                src="https://fast.wistia.net/embed/iframe/xefeokz2bq?seo=false&videoFoam=true"
                title="Patient transformation video 2"
                allow="autoplay; fullscreen"
                frameBorder="0"
                scrolling="no"
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══ 3-Step Process ══ */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-[#555555] mb-3 text-center">How It Works</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#222222] leading-[1.15] mb-12 text-center">
            3 Step Action Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Consultation", description: "We\u2019ll evaluate your smile, talk through your expectations, and select the most suitable shape and shade." },
              { step: "02", title: "Teeth Preparation", description: "Your teeth are carefully whitened to boost brightness before the bonding procedure." },
              { step: "03", title: "Application", description: "Premium composite material is applied, shaped, and polished directly onto your teeth for instant results." },
            ].map((item) => (
              <div key={item.step} className="bg-[#f8f8f6] rounded-2xl p-8 text-center">
                <span className="inline-block text-4xl font-bold text-[#012406] mb-4">{item.step}</span>
                <h3 className="text-xl font-semibold text-[#222222] mb-3">{item.title}</h3>
                <p className="text-[#555555] leading-relaxed text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ Pricing Packages ══ */}
      <section className="py-24 md:py-32 bg-[#f8f8f6]">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-[#555555] mb-3 text-center">Pricing</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#222222] leading-[1.15] mb-4 text-center">
            Our Packages
          </h2>
          <p className="text-[#555555] text-center mb-12 max-w-2xl mx-auto">
            Transparent pricing with no hidden costs. 0% finance available on all packages.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`bg-white rounded-2xl p-6 flex flex-col relative ${
                  pkg.highlight ? "border-2 border-[#012406]" : "border border-[#e5e5e5]"
                }`}
              >
                {pkg.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#012406] text-white text-xs font-medium px-4 py-1 rounded-full">
                    Best Value
                  </span>
                )}
                <span className="inline-block text-xs font-medium text-[#012406] bg-[#012406]/10 px-3 py-1 rounded-full mb-3 self-start">
                  {pkg.badge}
                </span>
                <h3 className="text-lg font-semibold text-[#222222] mb-1">{pkg.name}</h3>
                <p className="text-sm text-[#555555] mb-4">{pkg.detail}</p>
                {pkg.oldPrice && (
                  <span className="text-sm text-[#999999] line-through">{pkg.oldPrice}</span>
                )}
                <span className="text-3xl font-bold text-[#012406] mb-1">{pkg.price}</span>
                <span className="text-xs text-[#555555] mb-4">{pkg.monthly}</span>
                <ul className="space-y-2 text-sm text-[#555555] flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="text-[#012406] mt-0.5">&#10003;</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="#hero-form"
              className="inline-block bg-[#012406] hover:bg-[#023a09] text-white px-8 py-3.5 rounded-full font-medium transition-all duration-300"
            >
              Book Your Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* ══ Reviews ══ */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-[#555555] mb-3 text-center">Testimonials</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#222222] leading-[1.15] text-center mb-12">
            What Dr Jana&apos;s Patients Say
          </h2>
          <ReviewCarousel />
        </div>
      </section>

      {/* ══ Footer CTA ══ */}
      <section className="py-24 md:py-32 bg-[#012406] text-white text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Ready to Transform Your Smile?
          </h2>
          <p className="text-white/80 leading-relaxed mb-10 text-lg">
            Book your free cosmetic consultation at our Harley Street practice and discover what composite bonding and Invisalign can do for you.
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
