import Link from "next/link";
import EnquiryButton from "@/components/EnquiryButton";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
  overlay?: boolean;
}

export default function HeroSection({
  title,
  subtitle,
  ctaText,
  ctaLink,
  backgroundImage,
  overlay = false,
}: HeroSectionProps) {
  return (
    <section
      className="relative w-full min-h-[60vh] flex items-center justify-center px-6"
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
    >
      {/* Overlay */}
      {overlay && backgroundImage && (
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.3)]" />
      )}

      <div className="relative z-10 mx-auto max-w-3xl text-center py-28">
        <h1
          className={`text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] mb-6 ${
            backgroundImage ? "text-white" : "text-off-black"
          }`}
        >
          {title}
        </h1>

        {subtitle && (
          <p
            className={`text-xl md:text-2xl leading-relaxed mb-8 ${
              backgroundImage ? "text-white/90" : "text-medium-grey"
            }`}
          >
            {subtitle}
          </p>
        )}

        {ctaText && ctaLink && (
          ctaLink === "/contact-us" ? (
            <EnquiryButton
              className="inline-block bg-brand-green text-white font-medium rounded-[50px] px-8 py-3.5 hover:bg-brand-green-hover transition-colors"
            >
              {ctaText}
            </EnquiryButton>
          ) : (
            <Link
              href={ctaLink}
              className="inline-block bg-brand-green text-white font-medium rounded-[50px] px-8 py-3.5 hover:bg-brand-green-hover transition-colors"
            >
              {ctaText}
            </Link>
          )
        )}
      </div>
    </section>
  );
}
