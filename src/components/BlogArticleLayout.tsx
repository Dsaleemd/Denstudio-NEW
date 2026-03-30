import type { ReactNode } from "react";
import Link from "next/link";
import EnquiryButton from "@/components/EnquiryButton";

interface BlogArticleLayoutProps {
  title: string;
  children: ReactNode;
  author?: string;
  publishDate?: string;
}

export default function BlogArticleLayout({
  title,
  children,
  author = "Dr. Jana Denzel",
  publishDate,
}: BlogArticleLayoutProps) {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-4xl px-6">
        {/* Header */}
        <header className="mb-10">
          <h1 className="text-[2rem] md:text-[2.6rem] font-bold text-[#111315] leading-[1.08] mb-4 tracking-[-0.02em]">
            {title}
          </h1>
          {(author || publishDate) && (
            <div className="flex items-center gap-3 text-[#666666] text-sm">
              {author && <span>By {author}</span>}
              {author && publishDate && (
                <span className="w-1 h-1 rounded-full bg-[#999999]" />
              )}
              {publishDate && <time>{publishDate}</time>}
            </div>
          )}
        </header>

        {/* Article Body */}
        <div className="max-w-none text-[#333] text-[16px] leading-[1.75] [&_h2]:text-[1.7rem] [&_h2]:md:text-[2rem] [&_h2]:font-bold [&_h2]:text-[#1a1a1a] [&_h2]:leading-[1.2] [&_h2]:mt-12 [&_h2]:mb-4 [&_h3]:text-[1.25rem] [&_h3]:md:text-[1.4rem] [&_h3]:font-semibold [&_h3]:text-[#1a1a1a] [&_h3]:mt-8 [&_h3]:mb-3 [&_h4]:text-[1.05rem] [&_h4]:font-semibold [&_h4]:text-[#0b3b3b] [&_h4]:mt-6 [&_h4]:mb-2 [&_h4]:uppercase [&_h4]:tracking-wide [&_h4]:text-xs [&_p]:mb-5 [&_p]:text-[#333] [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-5 [&_li]:mb-2 [&_li]:text-[#444] [&_a]:text-[#0b3b3b] [&_a]:underline [&_a]:hover:text-[#012406] [&_strong]:text-[#1a1a1a] [&_blockquote]:border-l-4 [&_blockquote]:border-[#c8a85a] [&_blockquote]:pl-5 [&_blockquote]:italic [&_blockquote]:text-[#555] [&_blockquote]:my-6">
          {children}
        </div>

        {/* Explore Other Topics */}
        <nav className="mt-16 pt-10 border-t border-[#e5e5e5]">
          <h2 className="text-3xl md:text-4xl font-light text-[#222222] leading-[1.15] mb-6">
            Explore Other Topics
          </h2>
          <ul className="flex flex-wrap gap-4">
            <li>
              <Link
                href="/porcelain-veneers"
                className="inline-block border border-[#012406] text-[#012406] rounded-full px-5 py-2 text-sm font-medium hover:bg-[#012406] hover:text-white transition-colors duration-300"
              >
                Porcelain Veneers
              </Link>
            </li>
            <li>
              <Link
                href="/composite-bonding"
                className="inline-block border border-[#012406] text-[#012406] rounded-full px-5 py-2 text-sm font-medium hover:bg-[#012406] hover:text-white transition-colors duration-300"
              >
                Composite Bonding
              </Link>
            </li>
            <li>
              <Link
                href="/teeth-straightening"
                className="inline-block border border-[#012406] text-[#012406] rounded-full px-5 py-2 text-sm font-medium hover:bg-[#012406] hover:text-white transition-colors duration-300"
              >
                Teeth Straightening
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="inline-block border border-[#012406] text-[#012406] rounded-full px-5 py-2 text-sm font-medium hover:bg-[#012406] hover:text-white transition-colors duration-300"
              >
                Back to All Articles
              </Link>
            </li>
            <li>
              <Link
                href="/fees"
                className="inline-block border border-[#012406] text-[#012406] rounded-full px-5 py-2 text-sm font-medium hover:bg-[#012406] hover:text-white transition-colors duration-300"
              >
                View Our Pricing
              </Link>
            </li>
            <li>
              <Link
                href="/whats-your-concern"
                className="inline-block border border-[#012406] text-[#012406] rounded-full px-5 py-2 text-sm font-medium hover:bg-[#012406] hover:text-white transition-colors duration-300"
              >
                What&apos;s Your Concern?
              </Link>
            </li>
          </ul>
        </nav>

        {/* CTA */}
        <div className="mt-16 bg-[#f8f8f6] rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-[#222222] leading-[1.15] mb-4">
            Book a consultation at Denstudio
          </h2>
          <p className="text-[#555555] mb-6 max-w-xl mx-auto">
            Take the first step towards your dream smile with a personalised
            consultation at our Harley Street practice.
          </p>
          <EnquiryButton
            className="inline-block bg-[#012406] hover:bg-[#023a09] text-white px-8 py-3.5 rounded-full font-medium transition-all duration-300"
          >
            Book Now
          </EnquiryButton>
        </div>

        {/* About the Author */}
        <div className="mt-16 pt-10 border-t border-[#e5e5e5]">
          <h2 className="text-3xl md:text-4xl font-light text-[#222222] leading-[1.15] mb-4">
            About the Author
          </h2>
          <p className="text-[#444444] leading-relaxed">
            Dr. Jana Denzel is an internationally recognized cosmetic dentist,
            BBC Apprentice star, twice-awarded Best Young Dentist in the UK, and
            founder of Denstudio at 139 Harley Street, London, W1G 6BG. Named
            among the world&apos;s top 32 dentists and a Global Ambassador for
            Slow Dentistry.
          </p>
        </div>
      </div>
    </section>
  );
}
