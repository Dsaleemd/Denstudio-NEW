import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ReviewCarousel from "@/components/ReviewCarousel";
import Accordion from "@/components/Accordion";
import EnquiryButton from "@/components/EnquiryButton";
import LogoCarousel from "@/components/LogoCarousel";

export const metadata: Metadata = {
  title: "Composite Bonding London | Same-Day Smile Transformation — DENSTUDIO",
  description:
    "Transform your smile with composite bonding at Denstudio, Harley Street. Pain-free, same-day treatment from £350/tooth. No drilling, no injections, fully reversible. Book your consultation today.",
};

const faqItems = [
  {
    question: "What is composite bonding?",
    answer:
      "Composite bonding is a cosmetic dental treatment that uses tooth-coloured resin to enhance the appearance of your teeth. The resin is carefully applied over your natural teeth and sculpted by hand to correct chips, gaps, discolouration, and uneven edges. Because nothing is removed from your natural tooth, the treatment is completely reversible — your original teeth remain untouched underneath.",
  },
  {
    question: "Does composite bonding hurt?",
    answer:
      "No. Composite bonding is one of the most comfortable cosmetic treatments available. There is no drilling and, in almost all cases, no injections are needed. You may feel slight pressure as the resin is applied and shaped, but patients regularly tell us the experience is completely pain-free. Most people are surprised by how relaxed the whole process feels.",
  },
  {
    question: "How long does composite bonding last?",
    answer:
      "With proper care, composite bonding typically lasts between 5 and 8 years. Longevity depends on your oral hygiene routine, diet, and habits. Avoiding hard foods (like biting directly into apples or ice), attending regular check-ups, and maintaining good brushing habits will help your bonding last as long as possible. When the time comes, the bonding can be easily replaced or refreshed.",
  },
  {
    question: "How much does composite bonding cost?",
    answer:
      "At Denstudio, composite bonding starts at £350 per tooth. Your initial consultation costs £195 and includes X-rays, a CT scan, photographs, and a personalised treatment plan. Our most popular package covers the top 8 teeth at £2,800 (saving £350). We also offer 0% finance to help spread the cost, so a beautiful smile is more accessible than you might think.",
  },
  {
    question: "Can composite bonding be whitened?",
    answer:
      "Composite resin does not respond to traditional whitening treatments the way natural enamel does. If you are considering teeth whitening, we strongly recommend completing it before your bonding appointment. That way, we can match the composite shade to your newly whitened teeth for a seamless, bright result. Surface stains on existing bonding can sometimes be improved with professional polishing at your check-up.",
  },
  {
    question: "Is composite bonding better than veneers?",
    answer:
      "It depends on your goals. Composite bonding is less invasive, more affordable, and fully reversible — making it an excellent first step for many patients. Porcelain veneers are more durable (lasting 10-15+ years) and more stain-resistant, but they require some enamel removal and are a permanent commitment. During your consultation, Dr Denzel will help you decide which option best suits your smile goals and lifestyle.",
  },
  {
    question: "What happens if my bonding chips?",
    answer:
      "Small chips can usually be repaired quickly and affordably in a single appointment. Dr Denzel will simply add fresh composite resin to the affected area, reshape it, and cure it with UV light — good as new. This is one of the great advantages of bonding over porcelain veneers: repairs are straightforward and cost-effective.",
  },
  {
    question: "Do I need to whiten my teeth first?",
    answer:
      "We recommend it if you are planning to whiten at any point. Because composite resin cannot be whitened after it is placed, it makes sense to achieve your desired shade first. We can then precisely match the bonding material to your whitened teeth. If you are happy with your current tooth colour, whitening is not necessary — we will simply match the resin to your natural shade.",
  },
];

export default function CompositeBondingPage() {
  return (
    <>
      {/* ───────────────────────── 1. HERO ───────────────────────── */}
      <section className="relative bg-[#012406] pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left — copy */}
            <div className="relative z-10">
              <span className="inline-block text-xs uppercase tracking-[0.2em] text-white/60 mb-4">
                Composite Bonding
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
                Transform Your Smile in Just One Visit
              </h1>
              <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-xl">
                Composite bonding is the fastest, most affordable way to fix
                chips, gaps, and uneven teeth — without any drilling or pain.
                Walk in with imperfections; leave the same day with your dream
                smile.
              </p>

              <ul className="space-y-3 mb-10">
                {[
                  "Pain-free — no injections needed",
                  "No drilling required",
                  "Same-day results",
                  "Fully reversible",
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

              <div className="flex flex-wrap gap-4">
                <EnquiryButton className="inline-block bg-white text-[#012406] hover:bg-white/90 px-8 py-3.5 rounded-full font-medium transition-all duration-300">
                  Book Consultation
                </EnquiryButton>
                <a
                  href="tel:02038830588"
                  className="inline-block border-[1.5px] border-white text-white hover:bg-white hover:text-[#012406] px-8 py-3.5 rounded-full font-medium transition-all duration-300"
                >
                  Call 020 3883 0588
                </a>
              </div>
            </div>

            {/* Right — hero image */}
            <div className="relative aspect-[4/5] lg:aspect-[3/4] rounded-2xl overflow-hidden">
              <Image
                src="/images/composite-bonding/hero.webp"
                alt="Composite bonding smile transformation at Denstudio"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────── 2. LOGO STRIP ─────────────────────── */}
      <section className="py-12 bg-white border-b border-[#eee]">
        <div className="mx-auto max-w-7xl px-6">
          <LogoCarousel />
        </div>
      </section>

      {/* ────────── 3. WHAT IS COMPOSITE BONDING? ────────────────── */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <span className="inline-block text-xs uppercase tracking-[0.2em] text-[#555] mb-3">
            About the Treatment
          </span>
          <h2 className="text-[2rem] md:text-[2.5rem] font-bold text-[#1a1a1a] mb-8">
            What Is Composite Bonding?
          </h2>
          <p className="text-lg text-[#444] leading-relaxed mb-6">
            Composite bonding is a cosmetic dental treatment that uses a
            mouldable, tooth-coloured resin to reshape and enhance your smile.
            Whether you are dealing with chips, cracks, gaps, or uneven edges,
            your dentist applies the resin directly over your natural teeth and
            sculpts it by hand into the perfect shape.
          </p>
          <p className="text-lg text-[#444] leading-relaxed mb-6">
            The best part? The treatment is completely reversible. Because
            nothing is drilled or removed from your natural tooth structure,
            your original teeth remain perfectly intact underneath. If you ever
            want to make changes in the future, you have complete flexibility.
          </p>
          <p className="text-lg text-[#444] leading-relaxed mb-10">
            Most treatments are completed in a single visit lasting two to three
            hours, meaning you can walk into the clinic in the morning and leave
            with a brand-new smile by lunchtime. No injections, no drilling, no
            recovery time — just instant, natural-looking results.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <EnquiryButton className="inline-block bg-[#012406] hover:bg-[#023a09] text-white px-8 py-3.5 rounded-full font-medium transition-all duration-300">
              Book Consultation
            </EnquiryButton>
            <a
              href="tel:02038830588"
              className="inline-block border-[1.5px] border-[#012406] text-[#012406] hover:bg-[#012406] hover:text-white px-8 py-3.5 rounded-full font-medium transition-all duration-300"
            >
              Call 020 3883 0588
            </a>
          </div>
        </div>
      </section>

      {/* ───────────────────── 4. KEY FEATURES ───────────────────── */}
      <section className="py-24 md:py-32 bg-[#f8f8f6]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-xs uppercase tracking-[0.2em] text-[#555] mb-3">
              Why Patients Love It
            </span>
            <h2 className="text-[2rem] md:text-[2.5rem] font-bold text-[#1a1a1a]">
              Key Features
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: "/images/composite-bonding/patient-1.webp",
                title: "Instant Results",
                description:
                  "Your entire treatment is completed in a single visit, typically lasting just two to three hours. You will leave the clinic the same day with your brand-new smile — no temporaries, no waiting, no second appointment.",
              },
              {
                image: "/images/composite-bonding/patient-2.webp",
                title: "Completely Reversible",
                description:
                  "Unlike veneers or crowns, composite bonding requires no drilling and no injections. Your natural teeth stay completely untouched underneath, giving you the freedom to change or update your look in the future.",
              },
              {
                image: "/images/composite-bonding/patient-3.webp",
                title: "Precision Artistry",
                description:
                  "Every single tooth is hand-sculpted by Dr Denzel to create a result that looks and feels completely natural. No two smiles are the same — your bonding is shaped, contoured, and shade-matched specifically for you.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[#555] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────── 5. HOW IT WORKS ───────────────────── */}
      <section className="py-24 md:py-32 bg-[#012406]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-xs uppercase tracking-[0.2em] text-white/50 mb-3">
              Your Journey
            </span>
            <h2 className="text-[2rem] md:text-[2.5rem] font-bold text-white">
              How It Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                step: "01",
                title: "Smile Design Consultation",
                description:
                  "Your journey begins with a comprehensive assessment including X-rays, photographs, and shade selection. Together with Dr Denzel, you will create a personalised treatment plan tailored to your smile goals. Your consultation fee of £195 includes everything.",
              },
              {
                step: "02",
                title: "Same-Day Treatment",
                description:
                  "On treatment day, composite resin is applied to each tooth, carefully sculpted by hand, cured with UV light, and polished to a natural finish. The whole process usually takes two to three hours — and you leave with your new smile.",
              },
              {
                step: "03",
                title: "Aftercare & Maintenance",
                description:
                  "Looking after your bonding is straightforward. Brush twice daily, avoid very hard foods for the first 48 hours, and attend regular check-ups. With proper care, your composite bonding will last between five and eight years.",
              },
            ].map((step) => (
              <div key={step.step}>
                <span className="block text-5xl font-bold text-white/20 mb-4">
                  {step.step}
                </span>
                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────── 6. WHY CHOOSE DENSTUDIO ────────────────── */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-xs uppercase tracking-[0.2em] text-[#555] mb-3">
              The Denstudio Difference
            </span>
            <h2 className="text-[2rem] md:text-[2.5rem] font-bold text-[#1a1a1a]">
              Why Choose Denstudio
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Award-Winning Expertise",
                description:
                  "Dr Jana Denzel has been named Best Young Dentist in the UK twice and has completed over 100 composite bonding transformations. You are in the hands of one of the country's most experienced cosmetic dentists.",
              },
              {
                title: "Natural-Looking Results",
                description:
                  "Every tooth is hand-sculpted and shade-matched to blend seamlessly with your natural smile. Our patients regularly tell us that friends and family cannot tell the bonding from their real teeth.",
              },
              {
                title: "No Pain, No Downtime",
                description:
                  "No injections are needed and no drilling is involved. You will walk out of the clinic smiling — and you can return to your normal routine immediately. There is zero recovery time.",
              },
              {
                title: "Transparent Pricing",
                description:
                  "Composite bonding starts from £350 per tooth with 0% finance available. There are no hidden costs, no surprise fees. You will know exactly what your treatment costs before we begin.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-[#f8f8f6] rounded-2xl p-8 md:p-10"
              >
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#555] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────── 7. WHAT CAN BONDING FIX? ───────────────────── */}
      <section className="py-24 md:py-32 bg-[#f8f8f6]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-xs uppercase tracking-[0.2em] text-[#555] mb-3">
              Common Concerns
            </span>
            <h2 className="text-[2rem] md:text-[2.5rem] font-bold text-[#1a1a1a]">
              What Can Bonding Fix?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Chipped or Cracked Teeth",
                description:
                  "Restore damaged teeth to their original shape with seamless composite resin that blends perfectly with your natural enamel.",
              },
              {
                title: "Gaps Between Teeth",
                description:
                  "Close unwanted spaces between your teeth without braces or aligners. Bonding fills gaps for a more uniform, confident smile.",
              },
              {
                title: "Uneven or Short Teeth",
                description:
                  "Lengthen and reshape teeth that appear too short, worn down, or uneven to create a balanced, symmetrical smile line.",
              },
              {
                title: "Discolouration & Staining",
                description:
                  "Cover stubborn stains and discolouration that whitening alone cannot fix. The resin is shade-matched for a bright, even finish.",
              },
              {
                title: "Worn Tooth Edges",
                description:
                  "Rebuild thin, translucent, or rough tooth edges that develop over time from grinding, ageing, or everyday wear and tear.",
              },
              {
                title: "Minor Misalignment",
                description:
                  "Improve the appearance of slightly crooked or overlapping teeth without orthodontics. Bonding creates the illusion of straighter teeth.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-8 shadow-sm"
              >
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#555] leading-relaxed text-[0.95rem]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────── 8. BEFORE / AFTER GALLERY ──────────────────── */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-xs uppercase tracking-[0.2em] text-[#555] mb-3">
              Real Results
            </span>
            <h2 className="text-[2rem] md:text-[2.5rem] font-bold text-[#1a1a1a]">
              Before &amp; After Gallery
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden"
              >
                <Image
                  src={`/images/composite-bonding/patient-${i}.webp`}
                  alt={`Composite bonding patient result ${i}`}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────── 9. PRICING ────────────────────────── */}
      <section className="py-24 md:py-32 bg-[#f8f8f6]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-xs uppercase tracking-[0.2em] text-[#555] mb-3">
              Investment
            </span>
            <h2 className="text-[2rem] md:text-[2.5rem] font-bold text-[#1a1a1a]">
              Pricing
            </h2>
            <p className="text-[#555] mt-4 max-w-xl mx-auto">
              Transparent pricing with no hidden costs. 0% finance available on
              all treatments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Consultation */}
            <div className="bg-white rounded-2xl p-8 shadow-sm flex flex-col">
              <h3 className="text-lg font-bold text-[#1a1a1a] mb-1">
                Consultation
              </h3>
              <p className="text-3xl font-bold text-[#012406] mb-4">£195</p>
              <p className="text-[#555] text-sm leading-relaxed flex-1">
                Includes X-rays, CT scan, photographs, and a personalised
                treatment plan.
              </p>
            </div>

            {/* Per Tooth */}
            <div className="bg-white rounded-2xl p-8 shadow-sm flex flex-col">
              <h3 className="text-lg font-bold text-[#1a1a1a] mb-1">
                Per Tooth
              </h3>
              <p className="text-3xl font-bold text-[#012406] mb-4">£350</p>
              <p className="text-[#555] text-sm leading-relaxed flex-1">
                Individual tooth bonding, ideal for repairing a single chip or
                closing one gap.
              </p>
            </div>

            {/* Top 6 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm flex flex-col">
              <p className="text-xs uppercase tracking-wide text-[#555] mb-1">
                Most patients
              </p>
              <h3 className="text-lg font-bold text-[#1a1a1a] mb-1">
                Top 6 Teeth
              </h3>
              <p className="text-3xl font-bold text-[#012406] mb-1">£2,100</p>
              <p className="text-sm text-[#012406] font-medium mb-4">
                Save £200
              </p>
              <p className="text-[#555] text-sm leading-relaxed flex-1">
                Covers your most visible upper teeth for a noticeable
                transformation.
              </p>
            </div>

            {/* Top 8 — Most Popular */}
            <div className="relative bg-[#012406] text-white rounded-2xl p-8 shadow-md flex flex-col sm:col-span-2 lg:col-span-1">
              <span className="absolute top-4 right-4 bg-white text-[#012406] text-[0.7rem] uppercase tracking-wide font-bold px-3 py-1 rounded-full">
                Most Popular
              </span>
              <h3 className="text-lg font-bold mb-1">Top 8 Teeth</h3>
              <p className="text-3xl font-bold mb-1">£2,800</p>
              <p className="text-sm text-white/80 font-medium mb-4">
                Save £350
              </p>
              <p className="text-white/70 text-sm leading-relaxed flex-1">
                Our most requested package. Covers all visible upper teeth for a
                complete smile makeover.
              </p>
            </div>

            {/* Full Mouth */}
            <div className="bg-white rounded-2xl p-8 shadow-sm flex flex-col sm:col-span-2">
              <h3 className="text-lg font-bold text-[#1a1a1a] mb-1">
                Full Mouth — 20 Teeth
              </h3>
              <p className="text-3xl font-bold text-[#012406] mb-1">£7,000</p>
              <p className="text-sm text-[#012406] font-medium mb-4">
                Save £900
              </p>
              <p className="text-[#555] text-sm leading-relaxed flex-1">
                A complete upper and lower transformation for the ultimate smile
                makeover.
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <p className="text-[#555] mb-6">
              <strong>0% finance available</strong> — spread the cost of your
              treatment with affordable monthly payments.
            </p>
            <Link
              href="/fees"
              className="inline-block border-[1.5px] border-[#012406] text-[#012406] hover:bg-[#012406] hover:text-white px-8 py-3.5 rounded-full font-medium transition-all duration-300"
            >
              View Full Fee Guide
            </Link>
          </div>
        </div>
      </section>

      {/* ───────────────────── 10. REVIEWS ───────────────────────── */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <span className="inline-block text-xs uppercase tracking-[0.2em] text-[#555] mb-3">
              Patient Stories
            </span>
            <h2 className="text-[2rem] md:text-[2.5rem] font-bold text-[#1a1a1a]">
              What Our Patients Say
            </h2>
          </div>
          <ReviewCarousel />
        </div>
      </section>

      {/* ──────────────────── 11. FAQ ACCORDION ──────────────────── */}
      <section className="py-24 md:py-32 bg-[#f8f8f6]">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center mb-12">
            <span className="inline-block text-xs uppercase tracking-[0.2em] text-[#555] mb-3">
              Common Questions
            </span>
            <h2 className="text-[2rem] md:text-[2.5rem] font-bold text-[#1a1a1a]">
              Frequently Asked Questions
            </h2>
          </div>
          <Accordion items={faqItems} />
        </div>
      </section>

      {/* ─────────────── 12. RELATED ARTICLES ────────────────────── */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-xs uppercase tracking-[0.2em] text-[#555] mb-3">
              Learn More
            </span>
            <h2 className="text-[2rem] md:text-[2.5rem] font-bold text-[#1a1a1a]">
              Related Articles
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                href: "/composite-bonding-vs-porcelain-veneers",
                title: "Composite Bonding vs Porcelain Veneers",
              },
              {
                href: "/new-page-2",
                title: "Composite vs Veneers: A Lifestyle Guide",
              },
              {
                href: "/affordable-cosmetic-dentistry-uk-is-it-worth-it",
                title: "Affordable Cosmetic Dentistry in the UK — Is It Worth It?",
              },
              {
                href: "/smile-makeover-process-step-by-step-guide",
                title: "Smile Makeover Process: A Step-by-Step Guide",
              },
              {
                href: "/cosmetic-dentistry-procedures-explained",
                title: "Cosmetic Dentistry Procedures Explained",
              },
            ].map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="group block bg-[#f8f8f6] rounded-2xl p-8 hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-3 group-hover:text-[#012406] transition-colors duration-300">
                  {article.title}
                </h3>
                <span className="text-[#012406] font-medium text-sm">
                  Read more &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────── 13. FINAL CTA ─────────────────────── */}
      <section className="py-24 md:py-32 bg-[#012406]">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-[2rem] md:text-[2.5rem] font-bold text-white mb-6">
            Ready to Transform Your Smile?
          </h2>
          <p className="text-lg text-white/70 leading-relaxed mb-10 max-w-xl mx-auto">
            Consultations book up quickly — secure your spot today and take the
            first step towards the smile you have always wanted.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <EnquiryButton className="inline-block bg-white text-[#012406] hover:bg-white/90 px-8 py-3.5 rounded-full font-medium transition-all duration-300">
              Book Consultation
            </EnquiryButton>
            <a
              href="tel:02038830588"
              className="inline-block border-[1.5px] border-white text-white hover:bg-white hover:text-[#012406] px-8 py-3.5 rounded-full font-medium transition-all duration-300"
            >
              Call 020 3883 0588
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
