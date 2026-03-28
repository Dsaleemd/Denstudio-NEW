import Link from "next/link";

export default function NotFound() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-[#012406] mb-6">404</h1>
        <h2 className="text-2xl md:text-3xl font-light text-[#222222] mb-4">Page not found</h2>
        <p className="text-[#555555] leading-relaxed mb-10">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="inline-block bg-[#012406] hover:bg-[#023a09] text-white px-8 py-3.5 rounded-full font-medium transition-all duration-300">
            Return Home
          </Link>
          <Link href="/contact-us" className="inline-block border border-[#012406] text-[#012406] hover:bg-[#012406] hover:text-white px-8 py-3.5 rounded-full font-medium transition-all duration-300">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
