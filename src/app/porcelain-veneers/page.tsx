import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ReviewCarousel from "@/components/ReviewCarousel";
import LogoCarousel from "@/components/LogoCarousel";
import Accordion from "@/components/Accordion";
import EnquiryButton from "@/components/EnquiryButton";

export const metadata: Metadata = {
  title:
    "Premium Porcelain Veneers Harley Street | From £1,200/tooth — DENSTUDIO",
  description:
    "Premium porcelain veneers at Denstudio, Harley Street. Ultra-thin E.max ceramic shells crafted by master ceramicist Alan Domingues. 15-20 year lifespan. 0% finance available. Book your consultation today.",
};

const faqItems = [
  {
    question: "What is the porcelain veneers process like?",
    answer:
      "The process typically takes two to three visits over two to three weeks. During your first appointment, we carry out a comprehensive assessment, take digital scans and discuss your smile goals. At the preparation appointment, a thin layer of enamel is removed and precise impressions are taken. Temporary veneers are placed while your permanent veneers are hand-crafted in the laboratory. At the final visit, your veneers are carefully bonded and polished to perfection.",
  },
  {
    question: "Is the procedure painful?",
    answer:
      "Most patients experience little to no discomfort. Local anaesthetic is used during the preparation stage to ensure you are completely comfortable. After the procedure, some mild sensitivity is normal for a few days but typically resolves on its own. Many patients describe the bonding appointment as completely painless.",
  },
  {
    question: "How long do porcelain veneers last?",
    answer:
      "With proper care, porcelain veneers typically last between 15 and 20 years. Some patients have veneers that last even longer. Longevity depends on good oral hygiene, regular dental check-ups, and avoiding habits such as biting hard objects or grinding your teeth. We provide a comprehensive aftercare guide with every treatment.",
  },
  {
    question: "Can porcelain veneers stain?",
    answer:
      "One of the key advantages of porcelain veneers over composite bonding is their exceptional stain resistance. The glazed ceramic surface is highly resistant to discolouration from coffee, tea, red wine and other staining substances. However, the natural teeth surrounding your veneers can still stain, so maintaining good oral hygiene and regular professional cleaning is recommended.",
  },
  {
    question: "How much do porcelain veneers cost at Denstudio?",
    answer:
      "Individual porcelain veneers start at £1,200 per tooth. Our Porcelain Smile Makeover covering 10 teeth is currently offered at £9,990 (reduced from £12,885), and our Full Mouth package covering 20 teeth is £19,445 (reduced from £22,235). A consultation costs £195. We also offer 0% finance to spread the cost of your treatment.",
  },
  {
    question: "What is the difference between porcelain veneers and composite bonding?",
    answer:
      "Porcelain veneers are made from ceramic in a dental laboratory, while composite bonding uses resin applied directly to the tooth. Porcelain veneers offer superior aesthetics, greater stain resistance and significantly longer lifespan (15-20 years versus 5-7 years for composite). However, composite bonding is more affordable, requires no tooth preparation and is reversible. We can help you decide which option is best for your goals during a consultation.",
  },
  {
    question: "How do I look after my porcelain veneers?",
    answer:
      "Caring for porcelain veneers is straightforward. Brush twice daily with a non-abrasive toothpaste, floss daily, attend regular check-ups and hygiene appointments. Avoid using your teeth as tools, biting into very hard foods directly with your front teeth, and consider wearing a night guard if you grind your teeth. With this simple routine, your veneers will maintain their appearance for many years.",
  },
  {
    question: "Am I a suitable candidate for porcelain veneers?",
    answer:
      "Porcelain veneers are suitable for most adults with healthy teeth and gums who want to improve the appearance of their smile. They are ideal for addressing discolouration, chips, gaps, mild crowding and irregular tooth shapes. However, if you have significant tooth decay, gum disease, or a severe bite issue, these may need to be treated first. A consultation at Denstudio will determine whether veneers are the right option for you.",
  },
];

export default function PorcelainVeneersPage() {
  return (
    <>
      {/* ══════ HERO ══════ */}
      <section className="relative bg-[#012406] pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Left: Copy */}
            <div className="text-white">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] mb-5">
                Premium Porcelain Veneers in Harley Street
              </h1>
              <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-lg">
                Ultra-thin ceramic shells custom-designed to transform your
                smile. Hand-crafted from premium E.max porcelain to mimic the
                natural translucency of real enamel &mdash; for results that
                look and feel completely natural.
              </p>

              {/* Trust indicators */}
              <div className="flex flex-wrap gap-x-6 gap-y-3 mb-10">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-[#C4A574]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-sm text-white/70">
                    100+ smile makeovers
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-[#C4A574]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-sm text-white/70">
                    15&ndash;20 year lifespan
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-[#C4A574]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-sm text-white/70">
                    0% finance available
                  </span>
                </div>
              </div>

              {/* Dual CTAs */}
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <EnquiryButton className="inline-block bg-white text-[#012406] hover:bg-white/90 px-8 py-3.5 rounded-full font-medium transition-all duration-300">
                  Book a Consultation
                </EnquiryButton>
                <a
                  href="tel:02038830588"
                  className="inline-block border border-white/40 text-white hover:bg-white/10 px-8 py-3.5 rounded-full font-medium transition-all duration-300"
                >
                  Call 020 3883 0588
                </a>
              </div>
            </div>

            {/* Right: Hero image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/porcelain-veneers/hero.webp"
                alt="Premium porcelain veneers result at Denstudio, Harley Street"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════ Logo Strip ══════ */}
      <section className="border-y border-[#eeeeee] bg-white">
        <LogoCarousel />
      </section>

      {/* ══════ What Are Porcelain Veneers? ══════ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs uppercase tracking-[0.2em] text-[#555555] mb-3 text-center">
              The Treatment
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#222222] leading-[1.15] mb-8 text-center">
              What Are Porcelain Veneers?
            </h2>
            <p className="text-[#333333] leading-relaxed mb-6">
              Porcelain veneers are ultra-thin ceramic shells, typically just 0.3
              to 0.5mm thick, that are permanently bonded to the front surface of
              your teeth. Each veneer is custom-designed in a specialist dental
              laboratory to match the exact shade, shape and contour of your
              ideal smile.
            </p>
            <p className="text-[#333333] leading-relaxed mb-6">
              Unlike composite bonding, porcelain veneers are made from advanced
              ceramic materials that mimic the natural translucency and light
              reflection of real tooth enamel. The result is a restoration that
              is virtually indistinguishable from a natural tooth &mdash; even
              under close inspection.
            </p>
            <p className="text-[#333333] leading-relaxed mb-8">
              Veneers can correct a wide range of cosmetic concerns, including:
            </p>
            <ul className="space-y-3">
              {[
                "Discolouration and staining that whitening cannot fix",
                "Chipped, cracked or worn teeth",
                "Gaps between teeth (diastema closure)",
                "Mild crowding or misalignment",
                "Irregular tooth shape, size or proportions",
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

      {/* ══════ Key Features ══════ */}
      <section className="py-20 md:py-28 bg-[#f8f8f6]">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-[#555555] mb-3 text-center">
            Why Porcelain
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#222222] leading-[1.15] mb-12 text-center">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
                title: "Natural Translucency",
                description:
                  "Crafted from premium E.max ceramic that replicates the light-reflecting properties of natural enamel. The result is indistinguishable from real teeth, even in direct sunlight.",
              },
              {
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                title: "Built to Last",
                description:
                  "Porcelain veneers are exceptionally durable, with a typical lifespan of 15 to 20 years. They are highly resistant to staining, chipping and wear with proper care.",
              },
              {
                icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
                title: "Bespoke Design",
                description:
                  "Every veneer is individually crafted to complement your facial features, lip line and skin tone. No two smile makeovers are the same &mdash; your result is uniquely yours.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-8 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-[#012406]/10 flex items-center justify-center mx-auto mb-5">
                  <svg
                    className="w-7 h-7 text-[#012406]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d={item.icon}
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

      {/* ══════ How It Works ══════ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-[#555555] mb-3 text-center">
            The Process
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#222222] leading-[1.15] mb-12 text-center">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation & Digital Design",
                description:
                  "We assess your oral health, take digital scans and photographs, and use smile design software to preview your new smile before any treatment begins.",
              },
              {
                step: "02",
                title: "Preparation & Impressions",
                description:
                  "A thin layer of enamel is gently removed to create space for your veneers. Precise impressions are taken and sent to our specialist laboratory. Temporary veneers are placed.",
              },
              {
                step: "03",
                title: "Laboratory Crafting",
                description:
                  "Your veneers are hand-crafted by master ceramicist Alan Domingues using premium E.max porcelain. Each shell is layered and glazed for a lifelike, natural finish.",
              },
              {
                step: "04",
                title: "Bonding & Perfecting",
                description:
                  "Your finished veneers are carefully tried in, adjusted for fit and bite, then permanently bonded using advanced adhesive technology. Final polishing completes your transformation.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-[#f8f8f6] rounded-2xl p-8 text-center"
              >
                <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#012406] text-white text-xl font-bold mb-5">
                  {item.step}
                </span>
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

      {/* ══════ Why Denstudio for Veneers ══════ */}
      <section className="py-20 md:py-28 bg-[#f8f8f6]">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-[#555555] mb-3 text-center">
            The Denstudio Difference
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#222222] leading-[1.15] mb-12 text-center">
            Why Denstudio for Veneers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Award-Winning Expertise",
                description:
                  "Led by Dr Jana Denzel, twice-awarded Best Young Dentist in the UK and internationally recognised cosmetic dentist. Your smile is in the best hands.",
              },
              {
                title: "Premium E.max Ceramics",
                description:
                  "We use only the highest-grade IPS E.max lithium disilicate porcelain &mdash; the gold standard in cosmetic dentistry for strength, translucency and longevity.",
              },
              {
                title: "Master Ceramicist Collaboration",
                description:
                  "Every veneer is hand-crafted by Alan Domingues, one of the UK&rsquo;s most sought-after dental ceramicists, ensuring artistry and precision in every restoration.",
              },
              {
                title: "Conservative Approach",
                description:
                  "We believe in minimal tooth removal. Using advanced techniques, we preserve as much of your natural tooth structure as possible while achieving a flawless result.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-8">
                <div className="w-10 h-10 rounded-full bg-[#012406] flex items-center justify-center mb-4">
                  <svg
                    className="w-5 h-5 text-white"
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
                <h3 className="text-lg font-semibold text-[#222222] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#555555] leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <EnquiryButton className="inline-block bg-[#012406] hover:bg-[#023a09] text-white px-8 py-3.5 rounded-full font-medium transition-all duration-300">
              Book a Consultation
            </EnquiryButton>
          </div>
        </div>
      </section>

      {/* ══════ Before/After Gallery ══════ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-[#555555] mb-3 text-center">
            Real Results
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#222222] leading-[1.15] text-center mb-4">
            See the Difference
          </h2>
          <p className="text-[#555] text-center mb-12 max-w-xl mx-auto">
            Every smile is unique. These are real clinical results from
            porcelain veneer treatments at Denstudio, Harley Street.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                src: "/images/porcelain-veneers/clinical-1.webp",
                alt: "Porcelain veneers clinical result — before and after",
              },
              {
                src: "/images/porcelain-veneers/clinical-2.webp",
                alt: "Smile makeover with porcelain veneers — before and after",
              },
              {
                src: "/images/porcelain-veneers/reshape.webp",
                alt: "Porcelain veneers reshape and restoration result",
              },
            ].map((img, i) => (
              <div
                key={i}
                className="relative aspect-[4/5] rounded-xl overflow-hidden group"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <EnquiryButton className="inline-block bg-[#012406] hover:bg-[#023a09] text-white px-8 py-3.5 rounded-full font-medium transition-all duration-300">
              Start Your Transformation
            </EnquiryButton>
          </div>
        </div>
      </section>

      {/* ══════ Pricing ══════ */}
      <section className="py-20 md:py-28 bg-[#f8f8f6]">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-[#555555] mb-3 text-center">
            Investment
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#222222] leading-[1.15] mb-4 text-center">
            Porcelain Veneer Packages
          </h2>
          <p className="text-[#555555] text-center mb-12 max-w-2xl mx-auto">
            Transparent pricing with no hidden costs. All packages include
            digital smile design, premium E.max ceramics and comprehensive
            aftercare. 0% finance available.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Consultation */}
            <div className="bg-white rounded-2xl p-8 border border-[#e5e5e5] flex flex-col">
              <h3 className="text-lg font-semibold text-[#222222] mb-1">
                Consultation
              </h3>
              <p className="text-sm text-[#555555] mb-4">
                Comprehensive assessment with digital smile design
              </p>
              <span className="text-4xl font-bold text-[#012406] mb-1">
                &pound;195
              </span>
              <span className="text-xs text-[#555] mb-4">
                Redeemable against treatment
              </span>
              <ul className="space-y-2 text-sm text-[#555] flex-1 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-[#012406] mt-0.5">&#10003;</span>Full
                  oral assessment
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#012406] mt-0.5">&#10003;</span>Digital
                  scans &amp; photos
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#012406] mt-0.5">&#10003;</span>
                  Personalised treatment plan
                </li>
              </ul>
              <EnquiryButton className="block text-center border border-[#012406] text-[#012406] hover:bg-[#012406] hover:text-white py-3 rounded-full font-medium transition-all duration-300 text-sm">
                Book Consultation
              </EnquiryButton>
            </div>

            {/* Per Tooth */}
            <div className="bg-white rounded-2xl p-8 border border-[#e5e5e5] flex flex-col">
              <h3 className="text-lg font-semibold text-[#222222] mb-1">
                Individual Veneer
              </h3>
              <p className="text-sm text-[#555555] mb-4">
                Single tooth restoration or enhancement
              </p>
              <span className="text-4xl font-bold text-[#012406] mb-1">
                &pound;1,200
              </span>
              <span className="text-xs text-[#555] mb-4">Per tooth</span>
              <ul className="space-y-2 text-sm text-[#555] flex-1 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-[#012406] mt-0.5">&#10003;</span>
                  Premium E.max porcelain
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#012406] mt-0.5">&#10003;</span>
                  Hand-crafted by Alan Domingues
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#012406] mt-0.5">&#10003;</span>
                  Aftercare guide included
                </li>
              </ul>
              <EnquiryButton className="block text-center border border-[#012406] text-[#012406] hover:bg-[#012406] hover:text-white py-3 rounded-full font-medium transition-all duration-300 text-sm">
                Book Consultation
              </EnquiryButton>
            </div>

            {/* Smile Makeover (10) — highlighted */}
            <div className="bg-white rounded-2xl p-8 border-2 border-[#012406] flex flex-col relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#012406] text-white text-xs font-semibold px-4 py-1 rounded-full">
                Most Popular
              </span>
              <h3 className="text-lg font-semibold text-[#222222] mb-1">
                Smile Makeover (10)
              </h3>
              <p className="text-sm text-[#555555] mb-4">
                Upper and lower visible smile &mdash; the most popular choice
              </p>
              <span className="text-sm text-[#999999] line-through">
                Was &pound;12,885
              </span>
              <span className="text-4xl font-bold text-[#012406] mb-1">
                &pound;9,990
              </span>
              <span className="text-xs text-[#C4A574] font-semibold mb-4">
                Save &pound;2,895
              </span>
              <ul className="space-y-2 text-sm text-[#555] flex-1 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-[#012406] mt-0.5">&#10003;</span>10
                  premium E.max veneers
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#012406] mt-0.5">&#10003;</span>Digital
                  smile design
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#012406] mt-0.5">&#10003;</span>
                  Hand-crafted by Alan Domingues
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#012406] mt-0.5">&#10003;</span>
                  Comprehensive aftercare
                </li>
              </ul>
              <EnquiryButton className="block text-center bg-[#012406] hover:bg-[#023a09] text-white py-3 rounded-full font-medium transition-all duration-300 text-sm">
                Book Consultation
              </EnquiryButton>
            </div>

            {/* Full Mouth (20) */}
            <div className="bg-white rounded-2xl p-8 border border-[#e5e5e5] flex flex-col">
              <h3 className="text-lg font-semibold text-[#222222] mb-1">
                Full Mouth (20)
              </h3>
              <p className="text-sm text-[#555555] mb-4">
                Complete upper and lower transformation
              </p>
              <span className="text-sm text-[#999999] line-through">
                Was &pound;22,235
              </span>
              <span className="text-4xl font-bold text-[#012406] mb-1">
                &pound;19,445
              </span>
              <span className="text-xs text-[#C4A574] font-semibold mb-4">
                Save &pound;2,790
              </span>
              <ul className="space-y-2 text-sm text-[#555] flex-1 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-[#012406] mt-0.5">&#10003;</span>20
                  premium E.max veneers
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#012406] mt-0.5">&#10003;</span>Digital
                  smile design
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#012406] mt-0.5">&#10003;</span>
                  Hand-crafted by Alan Domingues
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#012406] mt-0.5">&#10003;</span>
                  Comprehensive aftercare
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#012406] mt-0.5">&#10003;</span>Full
                  upper &amp; lower coverage
                </li>
              </ul>
              <EnquiryButton className="block text-center bg-[#012406] hover:bg-[#023a09] text-white py-3 rounded-full font-medium transition-all duration-300 text-sm">
                Book Consultation
              </EnquiryButton>
            </div>
          </div>

          <p className="text-center text-sm text-[#555] mt-8">
            0% finance available on all packages.{" "}
            <Link
              href="/fees"
              className="text-[#012406] font-medium underline"
            >
              View full fee list
            </Link>
          </p>
        </div>
      </section>

      {/* ══════ Reviews ══════ */}
      <section className="py-20 md:py-28 bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-[#555555] mb-3 text-center">
            Patient Reviews
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#222222] leading-[1.15] text-center mb-12">
            What Our Patients Say
          </h2>
        </div>
        <ReviewCarousel />
      </section>

      {/* ══════ FAQ ══════ */}
      <section className="py-20 md:py-28 bg-[#f8f8f6]">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-[#555555] mb-3 text-center">
            Common Questions
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#222222] leading-[1.15] mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <Accordion items={faqItems} />
        </div>
      </section>

      {/* ══════ Related Articles ══════ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-[#555555] mb-3 text-center">
            Learn More
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#222222] leading-[1.15] mb-12 text-center">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Porcelain Veneers vs Composite Bonding: Which Is Right for You?",
                href: "/blog/porcelain-veneers-vs-composite-bonding",
              },
              {
                title: "How Long Do Porcelain Veneers Last? A Dentist Explains",
                href: "/blog/how-long-do-porcelain-veneers-last",
              },
              {
                title: "What to Expect at Your Veneer Consultation",
                href: "/blog/what-to-expect-veneer-consultation",
              },
              {
                title: "Porcelain Veneer Aftercare: The Complete Guide",
                href: "/blog/porcelain-veneer-aftercare",
              },
              {
                title: "Professional Teeth Whitening on Harley Street: Your Guide to a Brighter Smile",
                href: "/blog/professional-teeth-whitening-on-harley-street-your-guide-to-a-brighter-smile",
              },
            ].map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="group bg-[#f8f8f6] rounded-2xl p-6 hover:bg-[#f0f0ee] transition-colors duration-300"
              >
                <h3 className="text-base font-semibold text-[#222222] group-hover:text-[#012406] transition-colors duration-300 leading-snug">
                  {article.title}
                </h3>
                <span className="inline-block mt-3 text-sm text-[#012406] font-medium">
                  Read article &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ Final CTA ══════ */}
      <section className="py-20 md:py-28 bg-[#012406] text-white text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6">
            Ready to Transform Your Smile?
          </h2>
          <p className="text-white/80 leading-relaxed mb-4 text-lg">
            Book your porcelain veneers consultation at our Harley Street clinic
            today and take the first step towards the smile you have always
            wanted.
          </p>
          <p className="text-[#C4A574] font-medium mb-10 text-sm">
            Limited availability &mdash; consultations booking 2&ndash;3 weeks
            in advance
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <EnquiryButton className="inline-block bg-white text-[#012406] hover:bg-white/90 px-8 py-3.5 rounded-full font-medium transition-all duration-300">
              Book a Consultation
            </EnquiryButton>
            <a
              href="tel:02038830588"
              className="inline-block border border-white/40 text-white hover:bg-white/10 px-8 py-3.5 rounded-full font-medium transition-all duration-300"
            >
              Call 020 3883 0588
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
