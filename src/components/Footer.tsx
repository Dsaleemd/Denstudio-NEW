import Link from "next/link";
import Image from "next/image";

const treatmentLinks = [
  { label: "General", href: "/general" },
  { label: "Porcelain Veneers", href: "/porcelain-veneers" },
  { label: "Composite Bonding", href: "/composite-bonding" },
  { label: "Teeth Straightening", href: "/teeth-straightening" },
  { label: "Teeth Whitening", href: "/teeth-whitening" },
  { label: "Hygiene", href: "/hygiene" },
  { label: "Gum Reshaping", href: "/gum-reshaping" },
];

const aboutLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Fees", href: "/fees" },
  { label: "What's Your Concern?", href: "/whats-your-concern" },
  { label: "Smile Package Offers", href: "/cosmetic-consult" },
  { label: "Smile Quiz", href: "/welcome-to-denstudio" },
  { label: "Contact Us", href: "/contact-us" },
];

const resourceLinks = [
  { label: "Blog", href: "/blog" },
  { label: "Treatments Hub", href: "/treatments" },
  { label: "Veneers", href: "/veneers" },
  { label: "Invisalign", href: "/invisalign" },
  { label: "Composite Bonding", href: "/bonding" },
  { label: "Teeth Whitening", href: "/whitening" },
  { label: "CPD Webinar", href: "/cpd" },
];

const legalLinks = [
  { label: "Terms and Conditions", href: "/terms-conditions" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "Privacy Notice", href: "/privacy-notice" },
  { label: "Complaints Policy", href: "/complaints-policy" },
  {
    label: "Booking and Cancellation Policy",
    href: "/booking-and-cancellation-policy",
  },
  { label: "Regulatory Details", href: "/regulatory-details" },
];

export default function Footer() {
  return (
    <footer className="bg-dark-green text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Column 1: Brand */}
          <div>
            <h3 className="text-xl font-bold tracking-[0.1em] mb-4">
              Denstudio
            </h3>
            <p className="text-sm text-white/70 leading-relaxed mb-6">
              Exceptional Private, General And Cosmetic Dentistry
            </p>
            <address className="not-italic text-sm text-white/70 leading-relaxed space-y-2">
              <p>139 Harley Street, London, W1G 6BG</p>
              <p>
                <a
                  href="mailto:hello@denstudio.co.uk"
                  className="hover:text-gold transition-colors"
                >
                  hello@denstudio.co.uk
                </a>
              </p>
              <p>
                <a
                  href="tel:02038830588"
                  className="hover:text-gold transition-colors"
                >
                  020 3883 0588
                </a>
              </p>
            </address>
          </div>

          {/* Column 2: Treatments */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Treatments
            </h4>
            <ul className="space-y-2.5">
              {treatmentLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: About */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              About
            </h4>
            <ul className="space-y-2.5">
              {aboutLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Resources
            </h4>
            <ul className="space-y-2.5">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Legal */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Legal
            </h4>
            <ul className="space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-5 mt-12 pt-8 border-t border-white/10">
          {/* Facebook */}
          <a
            href="https://www.facebook.com/denstudio"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-white/60 hover:text-gold transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>

          {/* X / Twitter */}
          <a
            href="https://twitter.com/denstudio"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="text-white/60 hover:text-gold transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/denstudio"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-white/60 hover:text-gold transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>

          {/* YouTube */}
          <a
            href="https://www.youtube.com/@denstudio"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="text-white/60 hover:text-gold transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
        </div>

        {/* HSDC Partnership */}
        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Image
            src="/images/logos/hsdc-logo.png"
            alt="Harley Street Dental Clinic"
            width={120}
            height={49}
            className="brightness-0 invert opacity-70"
          />
          <p className="text-sm text-white/60">
            Proud to operate within{" "}
            <a
              href="https://www.harleystreetdentalclinic.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-gold underline underline-offset-2 transition-colors"
            >
              HSDC
            </a>
          </p>
        </div>

        {/* Copyright */}
        <p className="mt-6 text-xs text-white/40 text-center">
          &copy; {new Date().getFullYear()} &ndash; DENSTUDIO &ndash; All Rights Reserved | Website
          Maintained By Dentell Ltd
        </p>
      </div>
    </footer>
  );
}
