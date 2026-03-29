"use client";

import { useEffect, useRef, useCallback } from "react";
import Image from "next/image";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EnquiryModal({ isOpen, onClose }: EnquiryModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const formContainerRef = useRef<HTMLDivElement>(null);
  const firstFocusableRef = useRef<HTMLButtonElement>(null);
  const lastFocusableRef = useRef<HTMLButtonElement>(null);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape & trap focus
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      if (e.key === "Tab" && overlayRef.current) {
        const focusable = overlayRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      // Focus the close button on open
      setTimeout(() => firstFocusableRef.current?.focus(), 50);
    }
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleKeyDown]);

  // Close on backdrop click
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (formContainerRef.current && !formContainerRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center animate-fadeIn"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label="Enquiry form"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-[#faf5ef]" />

      {/* Top bar: logo + close */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 py-5 sm:px-10 sm:py-6">
        <Image
          src="/images/logos/denstudio-logo.webp"
          alt="Denstudio"
          width={140}
          height={40}
          className="h-8 w-auto sm:h-10"
          priority
        />
        <button
          ref={firstFocusableRef}
          onClick={onClose}
          className="text-sm font-medium text-neutral-700 hover:text-neutral-900 transition-colors flex items-center gap-1.5"
        >
          Close <span aria-hidden="true">&times;</span>
        </button>
      </div>

      {/* Centred form */}
      <div
        ref={formContainerRef}
        className="relative z-10 w-full max-w-lg mx-auto px-6 animate-slideUp"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-2">
          Your enquiry
        </h2>
        <p className="text-neutral-600 mb-1">
          Fill in your details for a free call back.
        </p>
        <p className="text-xs text-neutral-400 mb-6">Required fields marked *</p>

        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            // TODO: wire up form submission
          }}
        >
          {/* First Name */}
          <div>
            <label htmlFor="eq-first-name" className="block text-sm font-medium text-neutral-700 mb-1">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              id="eq-first-name"
              name="firstName"
              type="text"
              required
              className="w-full rounded-md border border-neutral-300 bg-white px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-[#012406] focus:ring-1 focus:ring-[#012406] outline-none transition"
              placeholder="First name"
            />
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="eq-last-name" className="block text-sm font-medium text-neutral-700 mb-1">
              Last Name
            </label>
            <input
              id="eq-last-name"
              name="lastName"
              type="text"
              className="w-full rounded-md border border-neutral-300 bg-white px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-[#012406] focus:ring-1 focus:ring-[#012406] outline-none transition"
              placeholder="Last name"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="eq-email" className="block text-sm font-medium text-neutral-700 mb-1">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              id="eq-email"
              name="email"
              type="email"
              required
              className="w-full rounded-md border border-neutral-300 bg-white px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-[#012406] focus:ring-1 focus:ring-[#012406] outline-none transition"
              placeholder="you@example.com"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="eq-phone" className="block text-sm font-medium text-neutral-700 mb-1">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              id="eq-phone"
              name="phone"
              type="tel"
              required
              className="w-full rounded-md border border-neutral-300 bg-white px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-[#012406] focus:ring-1 focus:ring-[#012406] outline-none transition"
              placeholder="+44 7000 000000"
            />
          </div>

          {/* Privacy checkbox */}
          <div className="flex items-start gap-2">
            <input
              id="eq-privacy"
              name="privacy"
              type="checkbox"
              required
              className="mt-1 h-4 w-4 rounded border-neutral-300 text-[#012406] focus:ring-[#012406]"
            />
            <label htmlFor="eq-privacy" className="text-sm text-neutral-600">
              I agree to the{" "}
              <a
                href="/privacy-notice"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-neutral-900 transition-colors"
              >
                privacy policy
              </a>{" "}
              <span className="text-red-500">*</span>
            </label>
          </div>

          {/* Marketing checkbox */}
          <div className="flex items-start gap-2">
            <input
              id="eq-marketing"
              name="marketing"
              type="checkbox"
              className="mt-1 h-4 w-4 rounded border-neutral-300 text-[#012406] focus:ring-[#012406]"
            />
            <label htmlFor="eq-marketing" className="text-sm text-neutral-600">
              I would like to receive marketing communications
            </label>
          </div>

          {/* Submit */}
          <div className="pt-2">
            <button
              ref={lastFocusableRef}
              type="submit"
              className="bg-[#012406] text-white rounded-full px-8 py-3 text-sm font-medium hover:bg-[#013a09] transition-colors focus:outline-none focus:ring-2 focus:ring-[#012406] focus:ring-offset-2"
            >
              Submit enquiry
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
