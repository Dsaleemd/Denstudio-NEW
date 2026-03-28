import Link from "next/link";
import Image from "next/image";
import LogoCarousel from "@/components/LogoCarousel";
import ReviewCarousel from "@/components/ReviewCarousel";

const treatments = [
  {
    title: "Porcelain Veneers",
    description:
      "Natural-looking porcelain veneers, using the best quality laboratories",
    href: "/porcelain-veneers",
    image: "/images/homepage/treatments/veneers-before-after.webp",
  },
  {
    title: "Invisalign",
    description:
      "Discreet and convenient alternative to traditional braces. We can guarantee you a price match with anywhere in London",
    href: "/teeth-straightening",
    image: "/images/homepage/treatments/treatment-2.jpeg",
  },
  {
    title: "General Dentistry",
    description:
      "Comprehensive general dentistry services focused on maintaining your oral health",
    href: "/general",
    image: "/images/homepage/treatments/treatment-3.jpeg",
  },
  {
    title: "Composite Bonding",
    description:
      "Improve the appearance of chipped, stained, or misshapen teeth",
    href: "/composite-bonding",
    image: "/images/homepage/treatments/treatment-4.webp",
  },
  {
    title: "Teeth Whitening",
    description:
      "Brighten your smile safely and effectively with our professional whitening systems",
    href: "/teeth-whitening",
    image: "/images/homepage/treatments/treatment-5.webp",
  },
  {
    title: "Airflow Polish",
    description:
      "Advanced cleaning system to remove stains and leave teeth ultra-smooth",
    href: "/hygiene",
    image: "/images/homepage/treatments/treatment-6.webp",
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
    image: "/images/homepage/process/step-1.jpeg",
  },
  {
    step: "Step Two",
    description:
      "Create your tailored treatment plan - Start your journey to your dream smile",
    image: "/images/homepage/process/step-2.jpeg",
  },
  {
    step: "Step Three",
    description:
      "Enjoy and maintain a healthy, lasting smile - Walk away with your stunning new smile",
    image: "/images/homepage/gallery/photo-feb-26.webp",
  },
];

const galleryImages = [
  { src: "/images/homepage/gallery/clinical-cases.webp", alt: "Smile transformation result" },
  { src: "/images/homepage/gallery/clinical-cases-2.webp", alt: "Before and after veneers" },
  { src: "/images/homepage/gallery/photo-feb-26.webp", alt: "Patient smile makeover" },
  { src: "/images/homepage/gallery/photo-feb-26-2.jpg", alt: "Cosmetic dentistry result" },
  { src: "/images/homepage/gallery/photo-feb-26-3.jpg", alt: "Teeth transformation" },
  { src: "/images/homepage/gallery/dr-jana-cosmetic-dentist.jpg", alt: "Dr Jana Denzel cosmetic result" },
];

const btnClasses =
  "bg-[#012406] hover:bg-[#023a09] text-white px-8 py-3.5 rounded-full font-medium transition-all duration-300 inline-block text-center";

export default function Home() {
  return (
    <>
      {/* ── Section 1: Hero ── */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
        {/* Full-bleed centred background image */}
        <div className="absolute inset-0">
          <Image src="/images/homepage/hero/hero-banner.webp" alt="Denstudio aesthetic dentistry" fill className="object-cover object-center" priority />
        </div>

        {/* Bottom content area */}
        <div className="relative z-10 w-full px-5 md:px-12 lg:px-16 pb-8 md:pb-14">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            {/* Text on translucent card */}
            <div className="bg-white/80 backdrop-blur-md rounded-2xl px-6 py-7 md:px-10 md:py-9 max-w-2xl shadow-sm">
              <h1 className="text-[2.5rem] md:text-6xl lg:text-[5.5rem] font-semibold text-[#1a1a1a] leading-[1.05] mb-4 md:mb-6">
                Redefining the future of aesthetic dentistry
              </h1>
              <p className="text-sm md:text-lg text-[#444444] leading-relaxed mb-6 md:mb-8 max-w-md">
                Porcelain veneers, composite bonding and cosmetic dentistry on Harley Street. Designed to bring out the best in you.
              </p>
              <Link href="/contact-us" className={btnClasses}>
                Book Now
              </Link>
            </div>

            {/* Google reviews pill */}
            <div className="flex-shrink-0 self-start md:self-auto">
              <div className="inline-flex items-center gap-2.5 md:gap-3 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2.5 md:px-5 md:py-3 shadow-lg">
                <span className="text-[11px] md:text-xs font-bold uppercase tracking-wide text-[#222222]">Excellent</span>
                <span className="text-[#fbbc04] text-sm md:text-base leading-none">★★★★★</span>
                <span className="text-[11px] md:text-xs text-[#555555]">72 reviews</span>
                <svg className="h-3.5 md:h-4 w-auto" viewBox="0 0 272 92" xmlns="http://www.w3.org/2000/svg">
                  <path d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.86 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#EA4335"/>
                  <path d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#FBBC05"/>
                  <path d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z" fill="#4285F4"/>
                  <path d="M225 3v65h-9.5V3h9.5z" fill="#34A853"/>
                  <path d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z" fill="#EA4335"/>
                  <path d="M35.29 41.19V32H68c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C17.57 69.36 2 54.21 2 35.68S17.57 2 36.3 2c10.41 0 17.81 4.08 23.35 9.37l-6.57 6.57c-3.95-3.7-9.33-6.57-16.78-6.57-13.7 0-24.41 11.04-24.41 24.68 0 13.65 10.71 24.68 24.41 24.68 8.9 0 13.95-3.58 17.22-6.85 2.64-2.64 4.37-6.42 5.05-11.59H35.29z" fill="#4285F4"/>
                </svg>
              </div>
            </div>
          </div>
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

          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory -mx-6 px-6 scrollbar-hide">
            {treatments.map((t) => (
              <Link
                key={t.title}
                href={t.href}
                className="group w-[240px] sm:w-[220px] md:w-[200px] lg:w-[200px] bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 snap-start flex flex-col overflow-hidden shrink-0"
              >
                <div className="relative aspect-[3/4]">
                  <Image src={t.image} alt={t.title} fill className="object-cover" />
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-sm font-semibold text-[#222222] mb-1 group-hover:text-[#012406] transition-colors leading-snug">
                    {t.title}
                  </h3>
                  <p className="text-[#555555] leading-relaxed text-xs flex-1 line-clamp-2">
                    {t.description}
                  </p>
                  <span className="mt-3 text-xs font-medium text-[#012406] group-hover:underline">
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
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image src="/images/homepage/dr-jana/dr-jana-landing.webp" alt="Dr Jana Denzel" fill className="object-cover" />
            </div>

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
            {galleryImages.map((img) => (
              <div
                key={img.src}
                className="relative aspect-[3/4] rounded-xl overflow-hidden"
              >
                <Image src={img.src} alt={img.alt} fill className="object-cover object-top" />
              </div>
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

      {/* ── From Our Blog ── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-[#555555] mb-3 text-center">INSIGHTS</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#222222] leading-[1.15] text-center mb-14">
            From Our Blog
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Porcelain Veneers Aftercare Guide", href: "/porcelain-veneers-aftercare-guide" },
              { title: "Smile Makeover Process: Step-by-Step Guide", href: "/smile-makeover-process-step-by-step-guide" },
              { title: "Slow Dentistry in London: Denstudio Harley Street", href: "/slow-dentistry-london-harley-street" },
              { title: "Turkey Teeth: The Real Risks of Veneers Abroad", href: "/turkey-teeth-risks-veneers-abroad" },
            ].map((post) => (
              <Link
                key={post.href}
                href={post.href}
                className="group block bg-[#fafafa] rounded-xl border border-[#e5e5e5] p-6 hover:shadow-md hover:border-[#012406]/20 transition-all duration-300"
              >
                <h3 className="text-base font-medium text-[#222222] group-hover:text-[#012406] transition-colors duration-300 leading-snug mb-3">
                  {post.title}
                </h3>
                <span className="text-sm font-medium text-[#012406]">
                  Read more &rarr;
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/blog" className="text-sm font-medium text-[#012406] hover:underline">
              View all articles &rarr;
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
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-8">
                  <Image src={s.image} alt={s.step} fill className="object-cover" />
                </div>
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
