import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ReviewCarousel from "@/components/ReviewCarousel";
import Accordion from "@/components/Accordion";

export const metadata: Metadata = {
  title:
    "Teeth Straightening | Achieve Your Perfect Smile Today — DENSTUDIO",
  description:
    "Straighten your teeth with Invisalign clear aligners at Denstudio, Harley Street. The fast, affordable and discreet way for adults to fix crooked teeth.",
};

const faqItems = [
  {
    question: "What Are Aligners?",
    answer:
      "Aligners are custom-made, removable trays crafted from a clear medical-grade polymer. They fit snugly over your teeth and gently guide them into the desired position over time. Because they are virtually invisible, most people will not even notice you are wearing them.",
  },
  {
    question: "How Does The Treatment Process Work?",
    answer:
      "Your journey begins with impressions and digital scans of your teeth. These are used to create a precise digital treatment plan showing exactly how your teeth will move at each stage. Custom aligners are then manufactured specifically for you, with each set worn for around two weeks before moving on to the next.",
  },
  {
    question: "What Is The Average Treatment Time?",
    answer:
      "Most patients achieve their desired results within 4 to 12 months, depending on the complexity of their case. During your consultation, we will give you a personalised timeline so you know exactly what to expect.",
  },
  {
    question: "Is Teeth Straightening Painful?",
    answer:
      "Teeth straightening with aligners is a gradual process, so discomfort is minimal. You may feel some mild pressure when switching to a new set of aligners, but this is a sign that the treatment is working. Most patients find it far more comfortable than traditional braces.",
  },
  {
    question: "How Do Aligners Compare To Fixed Braces?",
    answer:
      "Unlike fixed braces, aligners are removable, virtually invisible and far more comfortable. You can take them out to eat, drink and brush your teeth, making them a much more convenient option for busy adults. There are no metal brackets or wires, and treatment times are often shorter.",
  },
];

export default function TeethStraighteningPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#012406] pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/teeth-straightening/hero.webp" alt="Teeth Straightening" fill className="object-cover opacity-30" priority />
        </div>
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white leading-[1.1] mb-4">
              Invisalign Teeth Straightening
            </h1>
            <h3 className="text-xl md:text-2xl text-white/90 font-medium mb-6">
              The Fast &amp; Affordable Way for Adults to fix Crooked Teeth
              Without Compromise
            </h3>
            <p className="text-white/80 leading-relaxed mb-10 max-w-xl">
              At Denstudio, we use the latest Invisalign clear aligner
              technology to straighten your teeth discreetly and comfortably.
              No metal wires, no brackets — just a clear, removable aligner
              system that fits seamlessly into your lifestyle.
            </p>
            <Link
              href="/contact-us"
              className="inline-block bg-white text-[#012406] hover:bg-white/90 px-8 py-3.5 rounded-full font-medium transition-all duration-300"
            >
              Book Now
            </Link>
          </div>
        </div>
      </section>

      {/* Your Journey to Straight Teeth */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#222222] leading-[1.15] mb-8">
                Your Journey to Straight Teeth
              </h2>
              <p className="text-[#333333] leading-relaxed mb-6">
                From your very first consultation through to the final result,
                we guide you every step of the way. Our team uses advanced
                digital scanning and 3D treatment planning to map out your
                entire journey before treatment even begins.
              </p>
              <p className="text-[#333333] leading-relaxed mb-6">
                You will be able to see a preview of your final smile and
                understand exactly how long your treatment will take. We
                monitor your progress throughout, ensuring everything stays on
                track for the best possible outcome.
              </p>
              <p className="text-[#333333] leading-relaxed">
                Most of our patients complete their treatment in as little as 4
                to 6 months, with check-ups every 6 to 8 weeks to ensure
                everything is progressing beautifully.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image src="/images/teeth-straightening/dr-jana-press.webp" alt="Your Journey to Straight Teeth" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section className="py-24 md:py-32 bg-[#f8f8f6]">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#222222] leading-[1.15] mb-12 text-center">
            Before &amp; After
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden"
              >
                <Image src={`/images/teeth-straightening/before-after-${i}.webp`} alt={`Before and After ${i}`} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Aligners */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#222222] leading-[1.15] mb-8">
            Why Choose Aligners For Crooked Teeth
          </h2>
          <p className="text-[#333333] leading-relaxed mb-6">
            Invisalign clear aligners are the world&apos;s most advanced teeth
            straightening system, trusted by millions of patients globally.
            They offer a discreet, comfortable and highly effective alternative
            to traditional braces.
          </p>
          <p className="text-[#333333] leading-relaxed">
            Because aligners are removable, you can continue to eat, drink and
            care for your teeth as normal. There are no dietary restrictions
            and maintaining good oral hygiene is effortless compared to fixed
            braces. With Invisalign, you get the straight teeth you have always
            wanted without compromising your lifestyle.
          </p>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 md:py-32 bg-[#f2f2f0]">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#222222] leading-[1.15] mb-12 text-center">
            What Our Patients Say
          </h2>
          <ReviewCarousel />
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
