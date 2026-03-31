import type { Metadata } from "next";
import Image from "next/image";
import Accordion from "@/components/Accordion";
import EnquiryButton from "@/components/EnquiryButton";
import ReviewCarousel from "@/components/ReviewCarousel";

export const metadata: Metadata = {
  title: "Gum Reshaping & Gummy Smile Treatment | Harley Street — DENSTUDIO",
  description:
    "London's leading gummy smile specialists. Surgical gum lifts, laser contouring, veneers, bonding and Botox at Denstudio, Harley Street. Free consultation with Dr Jana Denzel.",
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
    title: "Botox & Lip Repositioning",
    image: "/images/gum-reshaping/treatments/botox.webp",
    description:
      "If the positioning of your lips is an issue, we can use injections of botulinum toxin type A, better known as \u2018Botox.\u2019",
  },
];

const faqItems = [
  {
    question: "Is Laser Gum Reshaping painful?",
    answer:
      "The procedure is virtually pain-free. Most patients experience minimal discomfort, which can be managed with over-the-counter painkillers if needed.",
  },
  {
    question: "How long does the treatment take?",
    answer:
      "Most laser gum reshaping treatments can be completed in a single visit to our clinic, typically lasting 1-2 hours.",
  },
  {
    question: "Are the results permanent?",
    answer:
      "Yes, the results of laser gum reshaping are permanent. Your gums will not grow back to their previous shape.",
  },
  {
    question: "Is there any downtime after the procedure?",
    answer:
      "Downtime is minimal. Most patients can return to their normal activities immediately after the treatment. You may experience some mild sensitivity for a few days.",
  },
  {
    question: "What causes a gummy smile?",
    answer:
      "A gummy smile can be caused by several factors, including excess gum tissue covering the teeth, teeth that appear short due to gum overgrowth, a hyperactive upper lip that rises too high when smiling, or the position and development of the upper jaw.",
  },
  {
    question: "Which treatment is best for me?",
    answer:
      "The best treatment depends on the cause and severity of your gummy smile. During your consultation, we will assess your individual case and recommend the most suitable option to achieve your desired outcome.",
  },
];

const btnPrimary = "inline-block bg-[#012406] hover:bg-[#023a09] text-white px-8 py-3.5 rounded-full font-medium transition-all duration-300";
const btnOutline = "inline-block border-[1.5px] border-[#012406] text-[#012406] hover:bg-[#012406] hover:text-white px-8 py-3.5 rounded-full font-medium transition-all duration-300";

export default function GumReshapingPage() {
  return (
    <>
      {/* ══ HERO ══ */}
      <section className="relative bg-[#012406] pt-28 pb-12 md:pt-32 md:pb-16 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

            {/* Left: Text */}
            <div className="text-white">
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="inline-block text-xs font-medium bg-white/15 backdrop-blur-sm px-3 py-1.5 rounded-full">Free Consultation</span>
                <span className="inline-block text-xs font-medium bg-[#C4A574] text-white px-3 py-1.5 rounded-full">Permanent Results</span>
                <span className="inline-block text-xs font-medium bg-white/15 backdrop-blur-sm px-3 py-1.5 rounded-full">Same-Day Treatment</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.06] mb-6">
                Gummy Smile? We&rsquo;ve Got Five Ways to Fix It.
              </h1>

              <p className="text-white/80 text-lg leading-relaxed mb-6 max-w-lg">
                London&rsquo;s most popular gummy smile clinic. From laser gum lifts to porcelain veneers, we combine multiple techniques for the perfect result &mdash; with minimal pain and fast healing.
              </p>

              {/* Trust indicators */}
              <div className="flex flex-wrap gap-x-6 gap-y-3 mb-8">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#C4A574]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  <span className="text-sm text-white/70">5.0 rated on Google</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#C4A574]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  <span className="text-sm text-white/70">UK&rsquo;s #1 gummy smile clinic</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <EnquiryButton className="inline-block bg-white text-[#012406] hover:bg-white/90 px-8 py-3.5 rounded-full font-medium transition-all duration-300">
                  Book Free Consultation
                </EnquiryButton>
                <a href="tel:02038830588" className="inline-block border border-white/40 text-white hover:bg-white/10 px-8 py-3.5 rounded-full font-medium transition-all duration-300">
                  Call 020 3883 0588
                </a>
              </div>
            </div>

            {/* Right: Hero image */}
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              <Image src="/images/gum-reshaping/hero.webp" alt="Gum Reshaping at Denstudio" fill className="object-cover object-top" priority />
            </div>

          </div>
        </div>
      </section>

      {/* ══ Living with a Gummy Smile ══ */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden">
              <Image src="/images/gum-reshaping/types.webp" alt="Types of Gummy Smiles" fill className="object-cover" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#555] mb-3">The Problem</p>
              <h2 className="text-[2rem] md:text-[2.5rem] font-bold text-[#1a1a1a] leading-[1.15] mb-6">
                Living with a Gummy Smile? We Can Help.
              </h2>
              <p className="text-[#333] leading-relaxed mb-6">
                If your gums feel as though they are constantly on display, it can make you feel self-conscious about your appearance. In many cases, it can stop you from living your life to the fullest.
              </p>
              <p className="text-[#333] leading-relaxed mb-6">
                At Denstudio Harley Street, we offer a full range of gummy smile correction treatments. The unique approach that we use makes use of a combination of techniques to provide the perfect result with no pain and minimal healing time.
              </p>
              <EnquiryButton className={btnPrimary}>
                Get a Free Assessment
              </EnquiryButton>
            </div>
          </div>
        </div>
      </section>

      {/* ══ Treatment Options Carousel ══ */}
      <section className="py-24 md:py-32 bg-[#f8f8f6] overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 mb-14">
          <p className="text-xs uppercase tracking-[0.2em] text-[#555] mb-3 text-center">Our Treatments</p>
          <h2 className="text-[2rem] md:text-[2.5rem] font-bold text-[#1a1a1a] leading-[1.15] text-center mb-4">
            5 Treatment Options for Gummy Smiles
          </h2>
          <p className="text-[#555] text-center max-w-2xl mx-auto">
            Every gummy smile is different. We tailor our approach to the underlying cause &mdash; so your result looks natural and lasts.
          </p>
        </div>

        <div
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
          style={{
            marginLeft: "clamp(16px, 4vw, max(2rem, calc((100vw - 80rem) / 2 + 2rem)))",
          }}
        >
          {treatmentOptions.map((option) => (
            <div
              key={option.title}
              className="relative w-[340px] min-w-[340px] md:w-[380px] md:min-w-[380px] snap-start rounded-2xl overflow-hidden"
              style={{ aspectRatio: "9 / 16" }}
            >
              <Image src={option.image} alt={option.title} fill className="object-cover" sizes="380px" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />
              <div className="absolute bottom-0 left-0 right-0 p-6 backdrop-blur-[14px] bg-white/10">
                <h3 className="text-white text-[1.8rem] font-semibold leading-tight mb-2">
                  {option.title}
                </h3>
                <p className="text-white/90 text-[0.86rem] leading-relaxed">
                  {option.description}
                </p>
              </div>
            </div>
          ))}
          <div className="min-w-[1px] shrink-0" aria-hidden="true" />
        </div>

        <div className="mx-auto max-w-7xl px-6 mt-12 text-center">
          <EnquiryButton className={btnPrimary}>
            Book Your Free Consultation
          </EnquiryButton>
        </div>
      </section>

      {/* ══ Why Denstudio ══ */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-[#555] mb-3 text-center">Why Choose Us</p>
          <h2 className="text-[2rem] md:text-[2.5rem] font-bold text-[#1a1a1a] leading-[1.15] text-center mb-14">
            London&rsquo;s #1 for Gummy Smile Treatment
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Multi-Treatment Approach", desc: "We combine laser, surgical, veneer and bonding techniques in one plan — because the best results come from addressing every factor, not just one." },
              { title: "Minimal Pain, Fast Healing", desc: "Laser and bonding treatments require no general anaesthetic. Most patients return to normal activities the same day." },
              { title: "Award-Winning Expertise", desc: "Dr Jana Denzel — twice Best Young Dentist UK, Global Ambassador for Slow Dentistry, and Oxford University lecturer." },
            ].map((item) => (
              <div key={item.title} className="bg-[#f8f8f6] rounded-2xl p-8">
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-3">{item.title}</h3>
                <p className="text-[#555] leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ Reviews ══ */}
      <section className="py-24 md:py-32 bg-[#fafafa] overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-[#555] mb-3 text-center">Patient Reviews</p>
          <h2 className="text-[2rem] md:text-[2.5rem] font-bold text-[#1a1a1a] leading-[1.15] text-center">
            What Our Patients Say
          </h2>
        </div>
        <ReviewCarousel />
      </section>

      {/* ══ FAQ ══ */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-[#555] mb-3 text-center">Questions</p>
          <h2 className="text-[2rem] md:text-[2.5rem] font-bold text-[#1a1a1a] leading-[1.15] mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <Accordion items={faqItems} />
          <div className="text-center mt-12">
            <p className="text-[#555] mb-6">Still have questions? We&rsquo;re happy to help.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <EnquiryButton className={btnPrimary}>
                Book Free Consultation
              </EnquiryButton>
              <a href="tel:02038830588" className={btnOutline}>
                Call 020 3883 0588
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══ Final CTA ══ */}
      <section className="py-24 md:py-32 bg-[#012406] text-white text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Love Your Smile?
          </h2>
          <p className="text-white/80 leading-relaxed mb-4 text-lg">
            Book your free gummy smile assessment at our Harley Street practice. Dr Jana Denzel will create a personalised treatment plan designed around your unique smile.
          </p>
          <p className="text-[#C4A574] font-medium mb-10 text-sm">
            Limited availability &mdash; consultations booking 2&ndash;3 weeks in advance
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <EnquiryButton className="inline-block bg-white text-[#012406] hover:bg-white/90 px-8 py-3.5 rounded-full font-medium transition-all duration-300">
              Book Free Consultation
            </EnquiryButton>
            <a href="tel:02038830588" className="inline-block border border-white/40 text-white hover:bg-white/10 px-8 py-3.5 rounded-full font-medium transition-all duration-300">
              Call 020 3883 0588
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
