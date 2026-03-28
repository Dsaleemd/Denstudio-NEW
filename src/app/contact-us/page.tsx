import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Schedule Your Dental Visit Today — DENSTUDIO",
  description:
    "Get in touch with DENSTUDIO to book your consultation. Call us on 020 3883 0588 or fill in our contact form and we will arrange your personalised appointment.",
};

export default function ContactUsPage() {
  return (
    <>
      <section className="relative bg-[#f8f8f6] pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#222222] leading-tight mb-6">
                Contact us
              </h1>
              <h2 className="text-xl md:text-2xl font-medium text-[#333333] mb-6">
                Booking your consultation
              </h2>
              <p className="text-[#333333] leading-relaxed mb-6 max-w-xl">
                Contact Us Today! We&apos;re here to help &ndash; just leave us
                a few quick details using the form below, and a member of our
                team will be in touch with you shortly to arrange your
                personalised consultation.
              </p>
              <p className="text-[#333333] leading-relaxed mb-10">
                Or give us a call on{" "}
                <a
                  href="tel:02038830588"
                  className="text-[#012406] font-medium underline hover:text-[#023a09]"
                >
                  020 3883 0588
                </a>
              </p>

              <ContactForm />
            </div>

            {/* Image placeholder */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden hidden lg:block">
              <Image src="/images/contact/hero.webp" alt="Contact DENSTUDIO" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
