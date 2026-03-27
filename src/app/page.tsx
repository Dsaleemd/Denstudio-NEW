import Link from "next/link";
import LogoCarousel from "@/components/LogoCarousel";
import ReviewCarousel from "@/components/ReviewCarousel";

const treatments = [
  {
    title: "Porcelain Veneers",
    description:
      "Natural-looking porcelain veneers, using the best quality laboratories",
    href: "/porcelain-veneers",
  },
  {
    title: "Invisalign",
    description:
      "Discreet and convenient alternative to traditional braces. We can guarantee you a price match with anywhere in London",
    href: "/teeth-straightening",
  },
  {
    title: "General Dentistry",
    description:
      "Comprehensive general dentistry services focused on maintaining your oral health",
    href: "/general",
  },
  {
    title: "Composite Bonding",
    description:
      "Improve the appearance of chipped, stained, or misshapen teeth",
    href: "/composite-bonding",
  },
  {
    title: "Teeth Whitening",
    description:
      "Brighten your smile safely and effectively with our professional whitening systems",
    href: "/teeth-whitening",
  },
  {
    title: "Airflow Polish",
    description:
      "Advanced cleaning system to remove stains and leave teeth ultra-smooth",
    href: "/hygiene",
  },
];

const benefits = [
  {
    number: "01",
    title: "Porcelain Veneers",
    description:
      "Durable, bespoke veneers that blend seamlessly with existing teeth",
  },
  {
    number: "02",
    title: "Composite Bonding",
    description:
      "Fast, minimally invasive way to improve appearance",
  },
  {
    number: "03",
    title: "General Dentistry",
    description:
      "Good oral health is a major component of overall health",
  },
];

const steps = [
  {
    step: "Step One",
    description:
      "Book your consultation with a Doctor Denzel cosmetic dental expert at Denstudio",
  },
  {
    step: "Step Two",
    description:
      "Create your tailored treatment plan - Start your journey to your dream smile",
  },
  {
    step: "Step Three",
    description:
      "Enjoy and maintain a healthy, lasting smile - Walk away with your stunning new smile",
  },
];

const btnClasses =
  "bg-[#012406] hover:bg-[#023a09] text-white px-8 py-3.5 rounded-full font-medium transition-all duration-300 inline-block text-center";

export default function Home() {
  return (
    <>
      {/* ── Section 1: Hero ── */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background placeholder with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a3a1c] via-[#0d2810] to-[#012406]" />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white leading-[1.1] mb-6">
            Redefining the future of aesthetic dentistry
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10">
            Porcelain Veneers in Harley Street
          </p>
          <Link href="/contact-us" className={btnClasses}>
            Book Now
          </Link>
        </div>
      </section>

      {/* ── Section 2: Logo Carousel ── */}
      <section className="border-y border-[#eeeeee]">
        <LogoCarousel />
      </section>

      {/* ── Section 3: Treatment Cards ── */}
      <section className="py-24 md:py-32 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-[#555555] mb-3 text-center">TREATMENTS</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#222222] leading-[1.15] text-center mb-14">
            Explore our full range of Treatment options
          </h2>

          <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide -mx-6 px-6">
            {treatments.map((t) => (
              <Link
                key={t.title}
                href={t.href}
                className="group min-w-[280px] md:min-w-[320px] bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 snap-start flex flex-col overflow-hidden shrink-0"
              >
                {/* Image placeholder */}
                <div className="h-52 bg-gradient-to-br from-[#e8ece9] to-[#d0d8d2]" />
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-medium text-[#222222] mb-2 group-hover:text-[#012406] transition-colors">
                    {t.title}
                  </h3>
                  <p className="text-[#555555] leading-relaxed text-sm flex-1">
                    {t.description}
                  </p>
                  <span className="mt-4 text-sm font-medium text-[#012406] group-hover:underline">
                    Learn more &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: About Dr Jana ── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Image placeholder */}
            <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-[#e8ece9] to-[#d0d8d2]" />

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#555555] mb-3">ABOUT DR JANA</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#222222] leading-[1.15] mb-6">
                Transform your smile with Denstudio
              </h2>
              <p className="text-base md:text-lg text-[#555555] mb-8 leading-relaxed">
                Internationally recognised cosmetic dentist and breakout star of
                BBC&apos;s The Apprentice
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Twice awarded Best Young Dentist in the UK",
                  "Named among world's top 32 dentists",
                  "Worked with Grammy Award-winning artists, elite athletes, filmmakers, royal families",
                  "Global Ambassador for Slow Dentistry",
                  "Guest Lecturer at Oxford University",
                ].map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-[#333333]"
                  >
                    <svg
                      className="w-5 h-5 text-[#012406] mt-0.5 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact-us" className={btnClasses}>
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 5: Benefits ── */}
      <section className="py-24 md:py-32 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-[#555555] mb-3 text-center">WHY CHOOSE US</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#222222] leading-[1.15] text-center mb-16">
            Brighter and more confident smiles
          </h2>

          <div className="grid md:grid-cols-3 gap-10 md:gap-12">
            {benefits.map((b) => (
              <div key={b.number} className="text-center md:text-left">
                <span className="text-5xl font-bold text-[#012406]/20 block mb-4">
                  {b.number}
                </span>
                <h3 className="text-xl font-medium text-[#222222] mb-3">
                  {b.title}
                </h3>
                <p className="text-base md:text-lg text-[#555555] leading-relaxed">
                  {b.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link href="/contact-us" className={btnClasses}>
              Book an appointment
            </Link>
          </div>
        </div>
      </section>

      {/* ── Section 6: Before / After Gallery ── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.2em] text-[#555555] mb-3">RESULTS</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#222222] leading-[1.15] mb-4">
              Discover how your smile changes lives
            </h2>
            <p className="text-base md:text-lg text-[#555555] leading-relaxed">
              Real smiles, real results
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="aspect-[4/3] rounded-xl bg-gradient-to-br from-[#e8ece9] to-[#d0d8d2]"
              />
            ))}
          </div>

          <div className="text-center mt-14">
            <Link href="/contact-us" className={btnClasses}>
              Book Now
            </Link>
          </div>
        </div>
      </section>

      {/* ── Section 7: Reviews ── */}
      <section className="py-24 md:py-32 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-[#555555] mb-3 text-center">REVIEWS</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#222222] leading-[1.15] text-center mb-14">
            Why our patients trust Denstudio
          </h2>

          <ReviewCarousel />

          <div className="text-center mt-14">
            <Link href="/contact-us" className={btnClasses}>
              Book Now
            </Link>
          </div>
        </div>
      </section>

      {/* ── Section 8: Three-Step Process ── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10 md:gap-12">
            {steps.map((s) => (
              <div key={s.step} className="text-center">
                {/* Image placeholder */}
                <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-[#e8ece9] to-[#d0d8d2] mb-8" />
                <h3 className="text-xl font-medium text-[#222222] mb-3">
                  {s.step}
                </h3>
                <p className="text-base md:text-lg text-[#555555] leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link href="/contact-us" className={btnClasses}>
              Book
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
