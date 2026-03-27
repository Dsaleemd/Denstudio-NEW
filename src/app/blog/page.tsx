import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — DENSTUDIO",
  description:
    "Read the latest articles on cosmetic dentistry, teeth whitening, porcelain veneers and smile transformations from Denstudio on Harley Street, London.",
};

const posts = [
  {
    title:
      "Professional teeth whitening on Harley Street: your guide to a brighter smile",
    excerpt:
      "Discover why professional teeth whitening at Denstudio delivers safer, longer-lasting results than shop-bought kits. Learn about our custom-tray whitening system and what to expect from your treatment.",
    author: "Daniel Saleem",
    date: "05/01/2026",
    href: "/blog/professional-teeth-whitening-on-harley-street-your-guide-to-a-brighter-smile",
  },
];

export default function BlogPage() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#222222] mb-4">
            Blog
          </h1>
          <p className="text-lg text-[#555555]">
            Exceptional Private, General And Cosmetic Dentistry
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.href}
              href={post.href}
              className="group block bg-white rounded-2xl border border-[#e5e5e5] overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative aspect-[16/9]">
                <Image src="/images/teeth-whitening/hero.webp" alt={post.title} fill className="object-cover" />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 text-sm text-[#666666] mb-3">
                  <span>{post.author}</span>
                  <span className="w-1 h-1 rounded-full bg-[#999999]" />
                  <time>{post.date}</time>
                </div>
                <h2 className="text-lg font-semibold text-[#222222] mb-3 group-hover:text-[#012406] transition-colors duration-300 leading-snug">
                  {post.title}
                </h2>
                <p className="text-[#555555] text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <span className="inline-block mt-4 text-sm font-medium text-[#012406]">
                  Read more &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
