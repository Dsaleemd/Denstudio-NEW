import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Accordion from "@/components/Accordion";
import EnquiryButton from "@/components/EnquiryButton";

export const metadata: Metadata = {
  title: "Gum Reshaping | Transform Your Smile Today — DENSTUDIO",
  description:
    "Expert gum reshaping and gummy smile treatment at Denstudio, Harley Street. Surgical gum lifts, laser treatment, veneers, bonding and Botox solutions.",
};

const treatmentOptions = [
  {
    title: "Surgical Gum Lift and Contouring",
    image: "/images/gum-reshaping/treatments/surgical.webp",
    description:
      "When your gums cover too much of your teeth, we may carry out a gingivectomy. This cosmetic dental procedure is also referred to as gum contouring. The treatment involves removing excess gum tissue.",
  },
  {
    title: "Laser Gum Lift and Contouring",
    image: "/images/gum-reshaping/treatments/laser.webp",
    description:
      "A laser gum reshaping treatment aims to contour and reshape the gums to make them look neater and smaller in proportion to the teeth. It\u2019s a simple procedure that can usually be completed in one visit.",
  },
  {
    title: "Veneers for Gummy Smiles",
    image: "/images/gum-reshaping/treatments/veneers.webp",
    description:
      "Veneers can be tailor-made to improve the balance between your teeth and gums. This non-invasive cosmetic treatment makes teeth appear larger in situations where they used to look too small.",
  },
  {
    title: "Composite Bonding for Gummy Smiles",
    image: "/images/gum-reshaping/treatments/bonding.webp",
    description:
      "Bonding is a straightforward cosmetic procedure that enhances the appearance of your smile. Using dental composite, we\u2019ll skillfully reshape your teeth. The materials that we\u2019ll use will perfectly match the colour of your teeth.",
  },
  {
    title: "Botox & Lip Repositioning for Gummy Smiles",
    image: "/images/gum-reshaping/treatments/botox.webp",
    description:
      "If the positioning of your lips is an issue, we can use injections of botulinum toxin type A, better known as \u2018Botox.\u2019",
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
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
              <EnquiryButton
                className="inline-block bg-[#012406] hover:bg-[#023a09] text-white px-8 py-3.5 rounded-full font-medium transition-all duration-300"
              >
                Book Now
              </EnquiryButton>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image src="/images/gum-reshaping/hero.webp" alt="Gum Reshaping" fill className="object-cover object-top" priority />
            </div>
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
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-8">
            <Image src="/images/gum-reshaping/types.webp" alt="Gummy Smile Types" fill className="object-cover" />
          </div>
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

      {/* Treatment Option Cards – Horizontal Scroll Carousel */}
      <section className="py-24 md:py-32 bg-[#f8f8f6] overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#222222] leading-[1.15] text-center">
            Treatment Options
          </h2>
        </div>

        <div
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
          style={{
            marginLeft:
              "clamp(16px, 4vw, max(2rem, calc((100vw - 80rem) / 2 + 2rem)))",
          }}
        >
          {treatmentOptions.map((option) => (
            <div
              key={option.title}
              className="relative w-[380px] min-w-[380px] snap-start rounded-2xl overflow-hidden"
              style={{ aspectRatio: "9 / 16" }}
            >
              {/* Background image */}
              <Image
                src={option.image}
                alt={option.title}
                fill
                className="object-cover"
                sizes="380px"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />

              {/* Bottom glassmorphism content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 backdrop-blur-[14px] bg-white/10">
                <h3 className="text-white text-[2rem] font-semibold leading-tight mb-2">
                  {option.title}
                </h3>
                <p className="text-white/90 text-[0.86rem] leading-relaxed">
                  {option.description}
                </p>
              </div>
            </div>
          ))}

          {/* Right spacer so last card doesn't hug the edge */}
          <div className="min-w-[1px] shrink-0" aria-hidden="true" />
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
