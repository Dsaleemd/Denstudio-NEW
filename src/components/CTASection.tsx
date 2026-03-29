import Link from "next/link";
import EnquiryButton from "@/components/EnquiryButton";

interface CTASectionProps {
  heading: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export default function CTASection({
  heading,
  description,
  buttonText,
  buttonLink,
}: CTASectionProps) {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl md:text-5xl font-light text-off-black mb-4">
          {heading}
        </h2>
        <p className="text-base md:text-lg text-medium-grey leading-relaxed mb-8">
          {description}
        </p>
        {buttonLink === "/contact-us" ? (
          <EnquiryButton
            className="inline-block bg-brand-green text-white font-medium rounded-[50px] px-8 py-3.5 hover:bg-brand-green-hover transition-colors"
          >
            {buttonText}
          </EnquiryButton>
        ) : (
          <Link
            href={buttonLink}
            className="inline-block bg-brand-green text-white font-medium rounded-[50px] px-8 py-3.5 hover:bg-brand-green-hover transition-colors"
          >
            {buttonText}
          </Link>
        )}
      </div>
    </section>
  );
}
