import type { ReactNode } from "react";
import Link from "next/link";

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
          <h1 className="text-4xl md:text-5xl font-light text-[#222222] leading-[1.1] mb-4">
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
        <div className="prose prose-lg max-w-none text-[#333333] text-lg leading-relaxed [&_h2]:text-3xl [&_h2]:md:text-4xl [&_h2]:font-light [&_h2]:text-[#222222] [&_h2]:leading-[1.15] [&_h2]:mt-12 [&_h2]:mb-4 [&_h3]:text-2xl [&_h3]:font-normal [&_h3]:text-[#222222] [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4 [&_li]:mb-2 [&_a]:text-[#012406] [&_a]:underline [&_a]:hover:text-[#023a09]">
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
          <Link
            href="/contact-us"
            className="inline-block bg-[#012406] hover:bg-[#023a09] text-white px-8 py-3.5 rounded-full font-medium transition-all duration-300"
          >
            Book Now
          </Link>
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
