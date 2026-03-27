import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Accordion from "@/components/Accordion";

export const metadata: Metadata = {
  title: "Hygiene | Schedule Your Dental Hygiene Today — DENSTUDIO",
  description:
    "Professional dental hygiene treatments at Denstudio, Harley Street. Prevent gum disease, remove plaque and tartar, and maintain a healthy, fresh smile.",
};

const faqItems = [
  {
    question: "How often should I have a hygiene appointment?",
    answer:
      "We recommend a professional hygiene appointment every 6 months. If you have a history of gum disease or are at higher risk, more frequent visits — every 3 to 4 months — may be advised.",
  },
  {
    question: "What happens during a hygiene appointment?",
    answer:
      "Your hygienist will assess the health of your gums, remove plaque and tartar build-up using specialist instruments, polish your teeth and provide personalised advice on your home care routine.",
  },
  {
    question: "Is a hygiene appointment painful?",
    answer:
      "Most patients find hygiene appointments comfortable. If you have sensitive teeth or gums, your hygienist can use a topical numbing gel to ensure you are completely at ease throughout the treatment.",
  },
  {
    question: "What is the difference between plaque and tartar?",
    answer:
      "Plaque is a soft, sticky film of bacteria that forms on your teeth daily. If plaque is not removed through brushing and flossing, it hardens into tartar (calculus), which can only be removed by a dental professional.",
  },
  {
    question: "Can hygiene treatment help with bad breath?",
    answer:
      "Yes. Bad breath is often caused by bacteria in plaque and tartar, as well as gum disease. A professional clean removes these build-ups and a healthier mouth means fresher breath.",
  },
  {
    question: "What is gum disease?",
    answer:
      "Gum disease is an infection of the tissues that surround and support your teeth. It begins as gingivitis (inflammation of the gums) and can progress to periodontitis, which can lead to tooth loss if untreated.",
  },
  {
    question: "What are the signs of gum disease?",
    answer:
      "Common signs include red, swollen or tender gums, bleeding when you brush or floss, persistent bad breath, receding gums and loose teeth. Early detection and treatment are essential.",
  },
  {
    question: "How can I prevent gum disease?",
    answer:
      "Brush twice a day with a fluoride toothpaste, floss or use interdental brushes daily, attend regular hygiene appointments and avoid smoking. A healthy diet also plays an important role in gum health.",
  },
  {
    question: "Do I need a hygiene appointment if I brush and floss regularly?",
    answer:
      "Yes. Even with excellent home care, plaque can build up in hard-to-reach areas and harden into tartar that only professional instruments can remove. Regular hygiene visits are essential for maintaining optimal oral health.",
  },
  {
    question: "How much does a hygiene appointment cost?",
    answer:
      "Please visit our Fees page or contact us directly for current pricing. We are happy to discuss costs and payment options at your appointment.",
  },
];

export default function HygienePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#f8f8f6] pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-[#222222] leading-[1.1] mb-6">
                Dental Hygiene
              </h1>
              <p className="text-[#333333] leading-relaxed mb-8 max-w-xl">
                Good oral hygiene is the foundation of a healthy smile. Our
                professional hygiene treatments remove harmful plaque and tartar
                build-up that regular brushing alone cannot reach, helping to
                prevent gum disease, tooth decay and bad breath. A clean, healthy
                mouth is the first step to looking and feeling your best.
              </p>
              <Link
                href="/contact-us"
                className="inline-block bg-[#012406] hover:bg-[#023a09] text-white px-8 py-3.5 rounded-full font-medium transition-all duration-300"
              >
                Book Now
              </Link>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image src="/images/hygiene/hero.webp" alt="Dental Hygiene" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* What is Dental Hygiene Treatment */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#222222] leading-[1.15] mb-8 text-center">
            What is Dental Hygiene Treatment?
          </h2>
          <p className="text-[#333333] leading-relaxed mb-6">
            Dental hygiene treatment is a professional clean performed by a
            qualified dental hygienist. It involves the thorough removal of
            plaque and tartar from your teeth and along the gum line using
            specialist instruments, followed by a polish to remove surface
            stains and leave your teeth feeling smooth and fresh.
          </p>
          <p className="text-[#333333] leading-relaxed mb-6">
            Gum disease is the leading cause of tooth loss in adults, and it
            often develops silently without obvious symptoms. Regular hygiene
            appointments are your best defence — they allow us to detect early
            signs of gum disease and intervene before it progresses.
          </p>
          <p className="text-[#333333] leading-relaxed">
            Prevention is always better than cure. By investing in regular
            hygiene visits, you are protecting your teeth and gums for the long
            term, reducing the need for more complex and costly treatments down
            the line.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 bg-[#f8f8f6]">
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
