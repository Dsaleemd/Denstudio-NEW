"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const treatmentColumns = [
  [
    { label: "General Dentistry", href: "/general" },
    { label: "Composite Bonding", href: "/composite-bonding" },
    { label: "Porcelain Veneers", href: "/porcelain-veneers" },
    { label: "Clear Aligners", href: "/teeth-straightening" },
  ],
  [
    { label: "Teeth Whitening", href: "/teeth-whitening" },
    { label: "Dental Hygiene", href: "/hygiene" },
    { label: "Gum Reshaping", href: "/gum-reshaping" },
    { label: "Retainers", href: "/retainers" },
  ],
];

export default function Header() {
  const [trayOpen, setTrayOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileTreatmentsOpen, setMobileTreatmentsOpen] = useState(false);

  // Close tray on outside click
  useEffect(() => {
    if (!trayOpen) return;
    function handleClick(e: MouseEvent) {
      const header = document.getElementById("site-header");
      if (header && !header.contains(e.target as Node)) {
        setTrayOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [trayOpen]);

  // Close tray on Escape
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setTrayOpen(false);
        setMobileOpen(false);
      }
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* ── DESKTOP HEADER with expanding tray ── */}
      <header
        id="site-header"
        className="fixed top-0 left-0 right-0 z-50 hidden lg:block"
      >
        <div
          className={`bg-[rgba(255,255,255,0.85)] backdrop-blur-[20px] transition-all duration-500 ease-in-out overflow-hidden ${
            trayOpen ? "rounded-b-[28px] shadow-xl" : ""
          }`}
        >
          {/* Main nav bar */}
          <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
            {/* Logo */}
            <Link href="/" onClick={() => setTrayOpen(false)}>
              <Image
                src="/images/logos/denstudio-logo.webp"
                alt="DENSTUDIO"
                width={160}
                height={40}
                className="h-8 w-auto"
                priority
              />
            </Link>

            {/* Nav links */}
            <nav className="flex items-center gap-10 text-[15px] font-normal text-[#333]">
              <button
                onClick={() => setTrayOpen((prev) => !prev)}
                className={`flex items-center gap-1.5 transition-colors cursor-pointer ${
                  trayOpen ? "text-[#012406]" : "hover:text-[#012406]"
                }`}
              >
                Treatments
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${trayOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <Link href="/fees" className="hover:text-[#012406] transition-colors" onClick={() => setTrayOpen(false)}>
                Fees
              </Link>
              {/* Team link hidden temporarily */}
            </nav>

            {/* Right */}
            <div className="flex items-center gap-5">
              <a
                href="tel:02038830588"
                className="flex items-center gap-2 text-sm text-[#333] hover:text-[#012406] transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                020 3883 0588
              </a>
              <Link
                href="/contact-us"
                className="bg-[#012406] text-white text-sm font-medium rounded-full px-7 py-3 hover:bg-[#023a09] transition-colors"
                onClick={() => setTrayOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </div>

          {/* Expanding treatment tray */}
          <div
            className="transition-all duration-500 ease-in-out"
            style={{
              maxHeight: trayOpen ? "400px" : "0px",
              opacity: trayOpen ? 1 : 0,
            }}
          >
            <div className="mx-auto max-w-7xl px-6 pb-8 pt-2">
              <div className="border-t border-[#e5e5e5] pt-6">
                <div className="grid grid-cols-3 gap-x-16 gap-y-1">
                  {treatmentColumns.map((col, colIdx) => (
                    <div key={colIdx} className="flex flex-col gap-1">
                      {col.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setTrayOpen(false)}
                          className="py-2.5 text-[15px] text-[#333] hover:text-[#012406] transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                  {/* Third column: quick links */}
                  <div className="flex flex-col gap-1">
                    <Link href="/whats-your-concern" onClick={() => setTrayOpen(false)} className="py-2.5 text-[15px] text-[#333] hover:text-[#012406] transition-colors">
                      What&apos;s Your Concern?
                    </Link>
                    <Link href="/veneers" onClick={() => setTrayOpen(false)} className="py-2.5 text-[15px] text-[#333] hover:text-[#012406] transition-colors">
                      Smile Makeover
                    </Link>
                    <Link href="/blog" onClick={() => setTrayOpen(false)} className="py-2.5 text-[15px] text-[#333] hover:text-[#012406] transition-colors">
                      Blog
                    </Link>
                    <Link href="/price-match-promise" onClick={() => setTrayOpen(false)} className="py-2.5 text-[15px] text-[#333] hover:text-[#012406] transition-colors">
                      Price Match Promise
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Backdrop when tray is open */}
        {trayOpen && (
          <div
            className="fixed inset-0 bg-black/10 -z-10 transition-opacity"
            onClick={() => setTrayOpen(false)}
          />
        )}
      </header>

      {/* ── MOBILE HEADER ── */}
      <header className="fixed top-0 left-0 right-0 z-50 lg:hidden bg-[rgba(255,255,255,0.85)] backdrop-blur-[20px]">
        <div className="flex items-center justify-between px-5 py-3.5">
          {/* Logo */}
          <Link href="/" onClick={() => setMobileOpen(false)}>
            <Image
              src="/images/logos/denstudio-logo.webp"
              alt="DENSTUDIO"
              width={140}
              height={36}
              className="h-7 w-auto"
              priority
            />
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="flex flex-col justify-center items-center w-8 h-8 gap-1.5 cursor-pointer"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-[#222] transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#222] transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#222] transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </header>

      {/* ── MOBILE MENU TRAY ── */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-transform duration-400 ease-in-out lg:hidden ${
          mobileOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ paddingTop: "60px" }}
      >
        <nav className="flex flex-col px-6 py-6 gap-0 overflow-y-auto h-full">
          {/* Treatments Accordion */}
          <button
            onClick={() => setMobileTreatmentsOpen((prev) => !prev)}
            className="flex items-center justify-between py-4 text-lg font-medium text-[#222] border-b border-[#eee] cursor-pointer"
          >
            Treatments
            <svg
              className={`w-5 h-5 transition-transform duration-300 ${mobileTreatmentsOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div
            className="overflow-hidden transition-all duration-300"
            style={{ maxHeight: mobileTreatmentsOpen ? "500px" : "0px" }}
          >
            <div className="flex flex-col pl-1 py-2 gap-0">
              {treatmentColumns.flat().map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-2.5 text-base text-[#555] hover:text-[#012406] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/fees" onClick={() => setMobileOpen(false)} className="py-4 text-lg font-medium text-[#222] border-b border-[#eee]">
            Fees
          </Link>
          {/* Team link hidden temporarily */}
          <Link href="/whats-your-concern" onClick={() => setMobileOpen(false)} className="py-4 text-lg font-medium text-[#222] border-b border-[#eee]">
            What&apos;s Your Concern?
          </Link>
          <Link href="/blog" onClick={() => setMobileOpen(false)} className="py-4 text-lg font-medium text-[#222] border-b border-[#eee]">
            Blog
          </Link>

          {/* CTA area */}
          <div className="mt-8 flex flex-col gap-4">
            <a
              href="tel:02038830588"
              className="flex items-center gap-2 text-base text-[#333]"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              020 3883 0588
            </a>
            <Link
              href="/contact-us"
              onClick={() => setMobileOpen(false)}
              className="block text-center bg-[#012406] text-white text-base font-medium rounded-full px-8 py-4 hover:bg-[#023a09] transition-colors"
            >
              Book Now
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
