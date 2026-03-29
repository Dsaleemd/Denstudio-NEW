"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import Image from "next/image";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EnquiryModal({ isOpen, onClose }: EnquiryModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const formContainerRef = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<"closed" | "ink-expand" | "content-reveal" | "closing">("closed");

  // Manage open/close phases
  useEffect(() => {
    if (isOpen && phase === "closed") {
      setPhase("ink-expand");
      // After ink expands, reveal content
      const t = setTimeout(() => setPhase("content-reveal"), 500);
      return () => clearTimeout(t);
    }
    if (!isOpen && (phase === "content-reveal" || phase === "ink-expand")) {
      setPhase("closing");
      const t = setTimeout(() => setPhase("closed"), 400);
      return () => clearTimeout(t);
    }
  }, [isOpen, phase]);

  // Lock body scroll
  useEffect(() => {
    if (phase !== "closed") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [phase]);

  // Close on Escape & trap focus
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") { onClose(); return; }
      if (e.key === "Tab" && overlayRef.current) {
        const focusable = overlayRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey) {
          if (document.activeElement === first) { e.preventDefault(); last.focus(); }
        } else {
          if (document.activeElement === last) { e.preventDefault(); first.focus(); }
        }
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (phase !== "closed") {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [phase, handleKeyDown]);

  // Close on backdrop click
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (formContainerRef.current && !formContainerRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  if (phase === "closed") return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999]"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label="Enquiry form"
    >
      {/* Ink expanding circle */}
      <div
        className={`absolute inset-0 bg-[#012406] transition-transform ease-[cubic-bezier(0.4,0,0.2,1)] origin-center ${
          phase === "closing"
            ? "scale-0 duration-400 rounded-full"
            : phase === "ink-expand"
            ? "scale-[3] duration-500 rounded-full"
            : "scale-[3] duration-0"
        }`}
        style={{
          borderRadius: phase === "content-reveal" ? "0px" : "9999px",
        }}
      />

      {/* Cream background that fades in after ink expands */}
      <div
        className={`absolute inset-0 bg-[#faf5ef] transition-opacity duration-300 ${
          phase === "content-reveal" ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Content - fades and slides up */}
      <div
        className={`relative z-10 w-full h-full overflow-y-auto transition-all duration-500 ${
          phase === "content-reveal"
            ? "opacity-100 translate-y-0"
            : phase === "closing"
            ? "opacity-0 translate-y-4"
            : "opacity-0 translate-y-8"
        }`}
      >
        {/* Top bar: logo + close */}
        <div className="flex items-center justify-between px-6 py-5 sm:px-10 sm:py-6">
          <Image
            src="/images/logos/denstudio-logo.webp"
            alt="Denstudio"
            width={140}
            height={40}
            className="h-8 w-auto sm:h-10"
            priority
          />
          <button
            onClick={onClose}
            className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors flex items-center gap-2 cursor-pointer"
          >
            Close
            <span className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center text-lg leading-none" aria-hidden="true">&times;</span>
          </button>
        </div>

        {/* Centred form */}
        <div
          ref={formContainerRef}
          className="w-full max-w-lg mx-auto px-6 pt-8 pb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-3 leading-tight">
            Your enquiry
          </h2>
          <p className="text-neutral-600 mb-1 text-base">
            Fill in your details for a free call back.
          </p>
          <p className="text-xs text-neutral-400 mb-8">Required fields marked *</p>

          <form
            className="space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              // TODO: wire up form submission
            }}
          >
            <div>
              <label htmlFor="eq-first-name" className="block text-sm font-medium text-neutral-700 mb-1.5">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                id="eq-first-name"
                name="firstName"
                type="text"
                required
                className="w-full border-0 border-b-2 border-neutral-200 bg-transparent px-0 py-3 text-base text-neutral-900 placeholder:text-neutral-400 focus:border-[#012406] focus:ring-0 outline-none transition-colors"
                placeholder="First name"
              />
            </div>

            <div>
              <label htmlFor="eq-last-name" className="block text-sm font-medium text-neutral-700 mb-1.5">
                Last Name
              </label>
              <input
                id="eq-last-name"
                name="lastName"
                type="text"
                className="w-full border-0 border-b-2 border-neutral-200 bg-transparent px-0 py-3 text-base text-neutral-900 placeholder:text-neutral-400 focus:border-[#012406] focus:ring-0 outline-none transition-colors"
                placeholder="Last name"
              />
            </div>

            <div>
              <label htmlFor="eq-email" className="block text-sm font-medium text-neutral-700 mb-1.5">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                id="eq-email"
                name="email"
                type="email"
                required
                className="w-full border-0 border-b-2 border-neutral-200 bg-transparent px-0 py-3 text-base text-neutral-900 placeholder:text-neutral-400 focus:border-[#012406] focus:ring-0 outline-none transition-colors"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="eq-phone" className="block text-sm font-medium text-neutral-700 mb-1.5">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                id="eq-phone"
                name="phone"
                type="tel"
                required
                className="w-full border-0 border-b-2 border-neutral-200 bg-transparent px-0 py-3 text-base text-neutral-900 placeholder:text-neutral-400 focus:border-[#012406] focus:ring-0 outline-none transition-colors"
                placeholder="+44 7000 000000"
              />
            </div>

            <div className="flex items-start gap-3 pt-2">
              <input
                id="eq-privacy"
                name="privacy"
                type="checkbox"
                required
                className="mt-0.5 h-4 w-4 rounded border-neutral-300 text-[#012406] focus:ring-[#012406]"
              />
              <label htmlFor="eq-privacy" className="text-sm text-neutral-600">
                I agree to the{" "}
                <a href="/privacy-notice" target="_blank" rel="noopener noreferrer" className="underline hover:text-neutral-900">
                  privacy policy
                </a>{" "}
                <span className="text-red-500">*</span>
              </label>
            </div>

            <div className="flex items-start gap-3">
              <input
                id="eq-marketing"
                name="marketing"
                type="checkbox"
                className="mt-0.5 h-4 w-4 rounded border-neutral-300 text-[#012406] focus:ring-[#012406]"
              />
              <label htmlFor="eq-marketing" className="text-sm text-neutral-600">
                I would like to receive marketing communications
              </label>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="bg-[#012406] hover:bg-[#023a09] text-white px-10 py-3.5 rounded-full font-medium text-base transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
