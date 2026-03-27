import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — DENSTUDIO",
  description:
    "Read the latest articles on cosmetic dentistry, teeth whitening, porcelain veneers and smile transformations from Denstudio on Harley Street, London.",
};

const categories = [
  {
    name: "Veneers & Smile Makeovers",
    articles: [
      { title: "Porcelain Veneers Aftercare Guide", href: "/porcelain-veneers-aftercare-guide" },
      { title: "Why Harley Street Is Known for Veneers", href: "/why-harley-street-is-known-for-veneers" },
      { title: "Porcelain Veneers Advantages for Smile Makeovers", href: "/porcelain-veneers-advantages-for-smile-makeovers" },
      { title: "Celebrity Smile Makeovers: What's Actually Done", href: "/celebrity-smile-makeovers-whats-actually-done" },
      { title: "Porcelain Veneers Near Me: What to Look For", href: "/porcelain-veneers-near-me-what-to-look-for" },
      { title: "Can You Whiten Porcelain Veneers?", href: "/can-you-whiten-porcelain-veneers" },
      { title: "Porcelain Veneers vs Crowns: What's the Difference?", href: "/porcelain-veneers-vs-crowns-whats-the-difference" },
      { title: "Are E.max Veneers Porcelain?", href: "/are-emax-veneers-porcelain" },
      { title: "Porcelain Veneers Pros and Cons", href: "/porcelain-veneers-pros-and-cons" },
      { title: "Will Porcelain Veneers Stain or Discolour?", href: "/will-porcelain-veneers-stain-or-discolour" },
      { title: "Porcelain vs Composite Veneers: Which Is Better?", href: "/porcelain-vs-composite-veneers-which-is-better" },
      { title: "Composite Bonding vs Porcelain Veneers", href: "/composite-bonding-vs-porcelain-veneers" },
      { title: "Porcelain Veneers Before and After: Realistic Results", href: "/porcelain-veneers-before-and-after-realistic-results" },
      { title: "Why Celebrities Choose Dr Jana Denzel", href: "/why-celebrities-choose-dr-jana-denzel-for-their-smiles" },
      { title: "Natural Veneers London: The Anti-Hollywood Smile", href: "/natural-veneers-london-biomimetic-smile" },
      { title: "Biomimetic Bonding: Naturalistic Veneers London", href: "/biomimetic-bonding-naturalistic-veneers-london" },
      { title: "Do Veneers Smell? The Truth About Bad Breath", href: "/do-veneers-smell-bad-breath" },
      { title: "Smile Makeover Before and After: What to Expect", href: "/smile-makeover-before-and-after-what-to-expect" },
      { title: "Smile Makeovers in London: Transform Your Confidence", href: "/smile-makeovers-in-london-transform-your-confidence" },
      { title: "Smile Makeover Process: Step-by-Step Guide", href: "/smile-makeover-process-step-by-step-guide" },
    ],
  },
  {
    name: "Pricing & Finance",
    articles: [
      { title: "Cost of a Full Set of Porcelain Veneers", href: "/cost-of-a-full-set-of-porcelain-veneers" },
      { title: "Porcelain Veneers Cost in the UK: Full Price Breakdown", href: "/porcelain-veneers-cost-in-the-uk-full-price-breakdown" },
      { title: "Affordable Cosmetic Dentistry UK: Is It Worth It?", href: "/affordable-cosmetic-dentistry-uk-is-it-worth-it" },
      { title: "Cosmetic Dentistry Prices Explained", href: "/cosmetic-dentistry-prices-explained" },
      { title: "Smile Makeover Cost UK: What You Should Budget", href: "/smile-makeover-cost-uk-what-you-should-budget" },
      { title: "Smile Makeover Finance Options Explained", href: "/smile-makeover-finance-options-explained" },
    ],
  },
  {
    name: "Choosing a Dentist",
    articles: [
      { title: "Best Dentist for Cosmetic Dentistry: How to Choose", href: "/best-dentist-for-cosmetic-dentistry-how-to-choose" },
      { title: "Harley Street Veneers: What Makes Them Different", href: "/harley-street-veneers-what-makes-them-different" },
      { title: "Cosmetic Dentistry Procedures Explained", href: "/cosmetic-dentistry-procedures-explained" },
    ],
  },
  {
    name: "Dental Health & Wellness",
    articles: [
      { title: "Can Gum Disease Affect Your Heart?", href: "/gum-disease-heart-disease-connection" },
      { title: "Why Healthy Gums Matter More Than You Think", href: "/why-healthy-gums-matter" },
      { title: "Slow Dentistry in London: Denstudio Harley Street", href: "/slow-dentistry-london-harley-street" },
      { title: "How to Go Back to the Dentist After a Long Gap", href: "/how-to-go-back-to-the-dentist-after-a-long-gap" },
      { title: "NHS vs Private Dentist in the UK", href: "/nhs-vs-private-dentist-uk" },
    ],
  },
  {
    name: "Turkey Teeth & Corrective Care",
    articles: [
      { title: "Turkey Teeth: The Real Risks of Veneers Abroad", href: "/turkey-teeth-risks-veneers-abroad" },
      { title: "Fix Turkey Teeth in London: Harley Street", href: "/fix-turkey-teeth-harley-street" },
    ],
  },
  {
    name: "Advanced Dentistry & Science",
    articles: [
      { title: "Why Facial Balancing Should Start With Your Teeth", href: "/teeth-before-filler" },
      { title: "Facial Balancing Dentistry London", href: "/facial-balancing-dentistry-london" },
      { title: "Airway Aesthetics: Mouth Breathing & Face Shape", href: "/airway-aesthetics-mouth-breathing-face-shape-harley-street" },
      { title: "Neuro-Dentistry: The Chewing-Brain Connection", href: "/neuro-dentistry-london-chewing-brain-connection" },
      { title: "Buccal Corridors: Arch Width & Cheekbone Aesthetics", href: "/buccal-corridors-arch-width-cheekbone-aesthetics-london" },
      { title: "Facial Harmony Dentistry: Lip Support & Digital Smile Design", href: "/facial-harmony-dentistry-lip-support-digital-smile-design-london" },
      { title: "The Psychology of a Smile: Confidence & the Halo Effect", href: "/psychology-of-a-smile-confidence-halo-effect-dentistry-london" },
    ],
  },
  {
    name: "Teeth Whitening",
    articles: [
      { title: "Professional Teeth Whitening on Harley Street", href: "/blog/professional-teeth-whitening-on-harley-street-your-guide-to-a-brighter-smile" },
    ],
  },
];

export default function BlogPage() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#222222] mb-4">
            Blog
          </h1>
          <p className="text-lg text-[#555555]">
            Exceptional Private, General And Cosmetic Dentistry
          </p>
        </div>

        {/* Categorized Articles */}
        {categories.map((category) => (
          <div key={category.name} className="mb-14">
            <h2 className="text-2xl md:text-3xl font-light text-[#222222] mb-6 border-b border-[#e5e5e5] pb-3">
              {category.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.articles.map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="group block bg-white rounded-xl border border-[#e5e5e5] p-5 hover:shadow-md hover:border-[#012406]/20 transition-all duration-300"
                >
                  <h3 className="text-base font-medium text-[#222222] group-hover:text-[#012406] transition-colors duration-300 leading-snug mb-2">
                    {article.title}
                  </h3>
                  <span className="text-sm font-medium text-[#012406]">
                    Read more &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
