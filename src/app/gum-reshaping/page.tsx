import type { Metadata } from "next";
import Link from "next/link";
import Accordion from "@/components/Accordion";

export const metadata: Metadata = {
  title: "Gum Reshaping | Transform Your Smile Today — DENSTUDIO",
  description:
    "Expert gum reshaping and gummy smile treatment at Denstudio, Harley Street. Surgical gum lifts, laser treatment, veneers, bonding and Botox solutions.",
};

const treatmentOptions = [
  {
    title: "Surgical Gum Lift",
    description:
      "A precise surgical procedure to remove excess gum tissue and reshape the gum line, revealing more of your natural tooth structure for a balanced, proportionate smile.",
  },
  {
    title: "Laser Gum Lift",
    description:
      "A minimally invasive laser procedure that gently removes excess gum tissue with minimal bleeding and faster healing times compared to traditional surgery.",
  },
  {
    title: "Veneers for Gummy Smiles",
    description:
      "Custom porcelain veneers can be used to alter the proportions of your teeth, making them appear longer and reducing the visual impact of a gummy smile.",
  },
  {
    title: "Composite Bonding for Gummy Smiles",
    description:
      "Tooth-coloured composite resin is applied to reshape and lengthen the visible portion of your teeth, creating a more balanced ratio between teeth and gums.",
  },
  {
    title: "Botox & Lip Repositioning",
    description:
      "A non-surgical option that relaxes the muscles in your upper lip, preventing it from rising too high when you smile and reducing the amount of gum that is visible.",
  },
];

const faqItems = [
  {
    question: "What causes a gummy smile?",
    answer:
      "A gummy smile can be caused by several factors, including excess gum tissue covering the teeth, teeth that appear short due to gum overgrowth, a hyperactive upper lip that rises too high when smiling, or the position and development of the upper jaw.",
  },
  {
    question: "Is gum reshaping painful?",
    answer:
      "Gum reshaping is performed under local anaesthesia, so you will not feel any pain during the procedure. Afterwards, you may experience some mild tenderness and swelling, which typically resolves within a few days.",
  },
  {
    question: "How long does recovery take?",
    answer:
      "Recovery varies depending on the treatment. Laser gum lifts typically heal within a few days, while surgical procedures may take one to two weeks. We provide comprehensive aftercare instructions to support your recovery.",
  },
  {
    question: "Are the results permanent?",
    answer:
      "Surgical and laser gum lifts provide permanent results — the gum tissue does not grow back. Botox treatments are temporary and typically last 3 to 6 months, requiring maintenance sessions to maintain the effect.",
  },
  {
    question: "Which treatment is right for me?",
    answer:
      "The best treatment depends on the cause and severity of your gummy smile. During your consultation, we will assess your individual case and recommend the most suitable option to achieve your desired outcome.",
  },
];

export default function GumReshapingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#f8f8f6] pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-[#222222] leading-[1.1] mb-6">
              Gum Reshaping &amp; Gummy Smile Treatment in Harley Street,
              London
            </h1>
            <p className="text-[#333333] leading-relaxed mb-8 max-w-xl">
              If you feel self-conscious about showing too much gum when you
              smile, you are not alone. A gummy smile is one of the most common
              cosmetic dental concerns, and the good news is there are several
              effective treatments available to help you achieve a more balanced,
              confident smile.
            </p>
            <Link
              href="/contact-us"
              className="inline-block bg-[#012406] hover:bg-[#023a09] text-white px-8 py-3.5 rounded-full font-medium transition-all duration-300"
            >
              Book Now
            </Link>
          </div>
        </div>
      </section>

      {/* Living with a Gummy Smile */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#222222] leading-[1.15] mb-8 text-center">
            Living with a Gummy Smile?
          </h2>
          <p className="text-[#333333] leading-relaxed mb-8">
            A gummy smile can affect your confidence and make you hesitant to
            smile freely. At Denstudio, we offer a range of treatments tailored
            to the underlying cause of your gummy smile, ensuring the most
            effective and natural-looking results.
          </p>
          <p className="text-[#333333] leading-relaxed mb-6 font-medium">
            Our treatment options include:
          </p>
          <ul className="space-y-3 mb-2">
            {[
              "Surgical gum lifts",
              "Laser gum contouring",
              "Botox for lip repositioning",
              "Porcelain veneers",
              "Composite bonding",
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
      </section>

      {/* Treatment Option Cards */}
      <section className="py-24 md:py-32 bg-[#f8f8f6]">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#222222] leading-[1.15] mb-14 text-center">
            Treatment Options
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatmentOptions.map((option) => (
              <div
                key={option.title}
                className="bg-white rounded-2xl p-8 shadow-sm border border-[#eeeeee]"
              >
                <div className="w-12 h-12 rounded-full bg-[#012406]/10 flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-[#012406]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#222222] mb-3">
                  {option.title}
                </h3>
                <p className="text-[#333333] text-sm leading-relaxed">
                  {option.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#222222] leading-[1.15] mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <Accordion items={faqItems} />
        </div>
      </section>
    </>
  );
}
