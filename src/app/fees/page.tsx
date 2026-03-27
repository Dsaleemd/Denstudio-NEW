import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fees | Schedule Your Consultation Today — DENSTUDIO",
  description:
    "Explore transparent dental fees at DENSTUDIO. We offer competitive pricing for consultations, cosmetic treatments, orthodontics, whitening and smile makeover packages.",
};

interface FeeItem {
  treatment: string;
  price: string;
}

interface FeeCategory {
  heading: string;
  items: FeeItem[];
}

const feeCategories: FeeCategory[] = [
  {
    heading: "Consultations",
    items: [
      { treatment: "New Client Consultation", price: "£195" },
      { treatment: "Routine Consultation", price: "£175" },
      { treatment: "Whitening Consultation", price: "£145" },
      { treatment: "Children's Initial Consultation", price: "£175" },
      { treatment: "Children's Routine Consultation", price: "£175" },
      { treatment: "OPG X-Ray", price: "£180" },
      { treatment: "CT Scan", price: "From £200" },
    ],
  },
  {
    heading: "Restorative & Cosmetic",
    items: [
      { treatment: "White Fillings", price: "From £350" },
      { treatment: "Crowns", price: "£1,200/tooth" },
      { treatment: "Porcelain Veneers", price: "£1,200/tooth" },
      { treatment: "Bridges", price: "From £1,200" },
      { treatment: "Composite Bonding", price: "£350/tooth" },
    ],
  },
  {
    heading: "Orthodontics",
    items: [
      { treatment: "Clear Aligners", price: "From £3,950" },
    ],
  },
  {
    heading: "Hygiene",
    items: [
      { treatment: "Scale & Polish", price: "£195" },
    ],
  },
  {
    heading: "Whitening",
    items: [
      { treatment: "Professional Teeth Whitening", price: "£395–795" },
    ],
  },
];

interface PackageItem {
  label: string;
  price: string;
}

interface SmilePackage {
  name: string;
  items: PackageItem[];
  total: string;
  discount: string | null;
}

const smilePackages: SmilePackage[] = [
  {
    name: "ABC Package",
    items: [
      { label: "Examination", price: "£195" },
      { label: "Hygiene", price: "£195" },
      { label: "Invisalign", price: "£3,950" },
      { label: "Home Whitening", price: "£395" },
      { label: "Composite Edge Bonding (4 Teeth)", price: "£1,400" },
      { label: "Retainers", price: "£600" },
    ],
    total: "£6,735",
    discount: "£2,000",
  },
  {
    name: "Porcelain Smile Makeover",
    items: [
      { label: "Wax Up", price: "£850" },
      { label: "10 Veneers", price: "£10,500" },
      { label: "Night Guard", price: "£750" },
    ],
    total: "£12,885",
    discount: "£2,895",
  },
  {
    name: "Full Mouth Premium Porcelain",
    items: [
      { label: "Wax Up (20 Teeth)", price: "£1,700" },
      { label: "20 Veneers", price: "£19,000" },
    ],
    total: "£22,235",
    discount: "£2,790",
  },
];

const weddingPackages: SmilePackage[] = [
  {
    name: "The Heirloom",
    items: [],
    total: "£8,835",
    discount: null,
  },
  {
    name: "The Redefined Radiance",
    items: [],
    total: "£8,385",
    discount: "£2,190",
  },
  {
    name: "The White Glove Touch",
    items: [],
    total: "£4,690",
    discount: "£1,690",
  },
];

export default function FeesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#f8f8f6] pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-[#222222] leading-[1.1] mb-6">
            Dental Price List &amp; Payment Options
          </h1>
          <p className="text-[#333333] leading-relaxed mb-10 max-w-2xl mx-auto text-lg">
            At DENSTUDIO, we believe in complete transparency when it comes to
            our fees. We are committed to making exceptional dental care
            financially accessible, with flexible payment options available to
            suit your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact-us"
              className="inline-block bg-[#012406] hover:bg-[#023a09] text-white px-8 py-3.5 rounded-full font-medium transition-all duration-300"
            >
              Book Now
            </Link>
            <Link
              href="/price-match-promise"
              className="inline-block border-2 border-[#012406] text-[#012406] hover:bg-[#012406] hover:text-white px-8 py-3.5 rounded-full font-medium transition-all duration-300"
            >
              Price Match Promise
            </Link>
          </div>
        </div>
      </section>

      {/* Treatment Fees */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl md:text-4xl font-light text-[#222222] mb-12 text-center">
            Treatment Fees
          </h2>
          <div className="space-y-12">
            {feeCategories.map((category) => (
              <div key={category.heading}>
                <h3 className="text-xl font-bold text-[#222222] mb-4 pb-2 border-b border-[#dddddd]">
                  {category.heading}
                </h3>
                <div className="space-y-0">
                  {category.items.map((item) => (
                    <div
                      key={item.treatment}
                      className="flex justify-between items-center py-3 border-b border-[#dddddd]/50"
                    >
                      <span className="text-[#333333]">{item.treatment}</span>
                      <span className="font-medium text-[#222222] shrink-0 ml-4">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Smile Makeover Packages */}
      <section className="py-24 md:py-32 bg-[#f8f8f6]">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-light text-[#222222] mb-4 text-center">
            Smile Makeover Packages
          </h2>
          <p className="text-[#333333] text-center mb-12 max-w-2xl mx-auto leading-relaxed">
            Our carefully curated packages combine multiple treatments for a
            complete smile transformation at a discounted rate.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {smilePackages.map((pkg) => (
              <div
                key={pkg.name}
                className="bg-white rounded-2xl p-8 shadow-sm"
              >
                <h3 className="text-xl font-bold text-[#222222] mb-6">
                  {pkg.name}
                </h3>
                {pkg.items.length > 0 && (
                  <ul className="space-y-3 mb-6">
                    {pkg.items.map((item) => (
                      <li
                        key={item.label}
                        className="flex justify-between text-sm"
                      >
                        <span className="text-[#333333]">{item.label}</span>
                        <span className="text-[#555555] shrink-0 ml-2">
                          {item.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="border-t border-[#dddddd] pt-4 space-y-2">
                  <div className="flex justify-between font-bold text-[#222222]">
                    <span>Total</span>
                    <span>{pkg.total}</span>
                  </div>
                  {pkg.discount && (
                    <div className="flex justify-between text-[#012406] font-medium">
                      <span>Discount</span>
                      <span>{pkg.discount}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Wedding Packages */}
          <h3 className="text-2xl md:text-3xl font-normal text-[#222222] mt-16 mb-8 text-center">
            Wedding Smile Packages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {weddingPackages.map((pkg) => (
              <div
                key={pkg.name}
                className="bg-white rounded-2xl p-8 shadow-sm text-center"
              >
                <h4 className="text-xl font-bold text-[#222222] mb-4">
                  {pkg.name}
                </h4>
                <p className="text-3xl font-bold text-[#012406] mb-2">
                  {pkg.total}
                </p>
                {pkg.discount && (
                  <p className="text-sm text-[#555555]">
                    Save {pkg.discount}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Finance Calculator Placeholder */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-[#222222] mb-6">
            Finance Available
          </h2>
          <p className="text-[#333333] leading-relaxed mb-4 text-lg">
            We offer flexible finance options to help spread the cost of your
            treatment. Speak to our team to find a payment plan that suits you.
          </p>
          <p className="text-[#555555] mb-10">
            Finance calculator coming soon.
          </p>
          <Link
            href="/contact-us"
            className="inline-block bg-[#012406] hover:bg-[#023a09] text-white px-8 py-3.5 rounded-full font-medium transition-all duration-300"
          >
            Book Now
          </Link>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 md:py-32 bg-[#012406] text-white text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-white/80 leading-relaxed mb-10 text-lg">
            Book your consultation today and let us create a personalised
            treatment plan tailored to your smile goals and budget.
          </p>
          <Link
            href="/contact-us"
            className="inline-block bg-white text-[#012406] hover:bg-white/90 px-8 py-3.5 rounded-full font-medium transition-all duration-300"
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
