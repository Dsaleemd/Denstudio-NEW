"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

const treatmentItems = [
  { label: "General", href: "/general" },
  { label: "Teeth Straightening", href: "/teeth-straightening" },
  { label: "Composite Bonding", href: "/composite-bonding" },
  { label: "Porcelain Veneers", href: "/porcelain-veneers" },
  { label: "Teeth Whitening", href: "/teeth-whitening" },
  { label: "Hygiene", href: "/hygiene" },
  { label: "Gum Reshaping", href: "/gum-reshaping" },
  { label: "Retainers", href: "/retainers" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileTreatmentsOpen, setMobileTreatmentsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[rgba(255,255,255,0.55)] backdrop-blur-[20px] border-b border-light-grey/40">
        <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold tracking-[0.15em] text-off-black"
          >
            DENSTUDIO
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10 text-base font-normal text-dark-grey">
            {/* Treatments Dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setDropdownOpen((prev) => !prev)}
                className="flex items-center gap-1 hover:text-brand-green transition-colors cursor-pointer"
              >
                Treatments
                <svg
                  className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {dropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-white rounded-xl shadow-lg border border-light-grey/50 py-2 z-50">
                  {treatmentItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setDropdownOpen(false)}
                      className="block px-5 py-2.5 text-sm text-dark-grey hover:bg-brand-green/5 hover:text-brand-green transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/fees"
              className="hover:text-brand-green transition-colors"
            >
              Fees
            </Link>
            <Link
              href="/about"
              className="hover:text-brand-green transition-colors"
            >
              Team
            </Link>
          </nav>

          {/* Right Section */}
          <div className="hidden lg:flex items-center gap-5">
            {/* Phone */}
            <a
              href="tel:02038830588"
              className="flex items-center gap-2 text-sm text-dark-grey hover:text-brand-green transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              020 3883 0588
            </a>

            {/* Book Now */}
            <Link
              href="/contact-us"
              className="inline-block bg-brand-green text-white text-sm font-medium rounded-[50px] px-8 py-3.5 hover:bg-brand-green-hover transition-colors"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="lg:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 cursor-pointer"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-off-black transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-off-black transition-all ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-off-black transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-20 overflow-y-auto lg:hidden">
          <nav className="flex flex-col px-6 py-8 gap-1">
            {/* Treatments Accordion */}
            <button
              onClick={() => setMobileTreatmentsOpen((prev) => !prev)}
              className="flex items-center justify-between py-3 text-lg font-medium text-off-black border-b border-light-grey/40 cursor-pointer"
            >
              Treatments
              <svg
                className={`w-5 h-5 transition-transform ${mobileTreatmentsOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {mobileTreatmentsOpen && (
              <div className="flex flex-col pl-4 gap-1">
                {treatmentItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="py-2 text-base text-dark-grey hover:text-brand-green transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}

            <Link
              href="/fees"
              onClick={() => setMobileOpen(false)}
              className="py-3 text-lg font-medium text-off-black border-b border-light-grey/40"
            >
              Fees
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className="py-3 text-lg font-medium text-off-black border-b border-light-grey/40"
            >
              Team
            </Link>

            <div className="mt-8 flex flex-col gap-4">
              <a
                href="tel:02038830588"
                className="flex items-center gap-2 text-base text-dark-grey"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                020 3883 0588
              </a>
              <Link
                href="/contact-us"
                onClick={() => setMobileOpen(false)}
                className="inline-block text-center bg-brand-green text-white text-base font-medium rounded-[50px] px-8 py-4 hover:bg-brand-green-hover transition-colors"
              >
                Book Now
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
