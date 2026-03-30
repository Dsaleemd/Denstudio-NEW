"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { submitEnquiry } from "@/lib/supabase";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const treatmentOptions = [
  { value: "", label: "Select a treatment" },
  { value: "General Dentistry", label: "General Dentistry" },
  { value: "Invisalign/Clear Aligners", label: "Invisalign/Clear Aligners" },
  { value: "Porcelain Veneers", label: "Porcelain Veneers" },
  { value: "Teeth Whitening", label: "Teeth Whitening" },
  { value: "Composite Bonding", label: "Composite Bonding" },
  { value: "Hygiene", label: "Hygiene" },
  { value: "Gum Reshaping", label: "Gum Reshaping" },
  { value: "Smile Makeover", label: "Smile Makeover" },
  { value: "Other", label: "Other" },
];

export default function EnquiryModal({ isOpen, onClose }: EnquiryModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const formContainerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [closing, setClosing] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    treatmentInterest: "",
    message: "",
    privacyAgreed: false,
    marketingOptedIn: false,
  });

  // Open/close sequence
  useEffect(() => {
    if (isOpen) {
      setClosing(false);
      setVisible(true);
      setStatus("idle");
      const t = setTimeout(() => setShowContent(true), 150);
      return () => clearTimeout(t);
    } else if (visible) {
      setClosing(true);
      setShowContent(false);
      const t = setTimeout(() => {
        setVisible(false);
        setClosing(false);
      }, 350);
      return () => clearTimeout(t);
    }
  }, [isOpen]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [visible]);

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
    if (visible) document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [visible, handleKeyDown]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (formContainerRef.current && !formContainerRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    try {
      await submitEnquiry({
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        treatment_interest: formData.treatmentInterest,
        message: formData.message,
        privacy_agreed: formData.privacyAgreed,
        marketing_opted_in: formData.marketingOptedIn,
        source: "enquiry_modal",
      });
      setStatus("success");
      setFormData({
        firstName: "", lastName: "", email: "", phone: "",
        treatmentInterest: "", message: "", privacyAgreed: false, marketingOptedIn: false,
      });
    } catch {
      setStatus("error");
    }
  }

  if (!visible) return null;

  const inputClass = "w-full border-0 border-b-2 border-neutral-200 bg-transparent px-0 py-3 text-base text-neutral-900 placeholder:text-neutral-400 focus:border-[#012406] focus:ring-0 outline-none transition-colors";

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999]"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label="Enquiry form"
    >
      {/* Ink flash */}
      {!closing && (
        <div
          className="absolute inset-0 bg-[#012406] pointer-events-none"
          style={{ opacity: showContent ? 0 : 1, transition: "opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)" }}
        />
      )}

      {/* Cream bg */}
      <div
        className="absolute inset-0 bg-[#faf5ef]"
        style={{ opacity: closing ? 0 : 1, transition: closing ? "opacity 0.3s ease" : "opacity 0.1s ease" }}
      />

      {/* Content */}
      <div
        className="relative z-10 w-full h-full overflow-y-auto"
        style={{
          opacity: showContent && !closing ? 1 : 0,
          transform: showContent && !closing ? "translateY(0)" : closing ? "translateY(-10px)" : "translateY(30px)",
          transition: closing
            ? "opacity 0.25s ease, transform 0.25s ease"
            : "opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.1s, transform 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.1s",
        }}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-5 sm:px-10 sm:py-6">
          <Image src="/images/logos/denstudio-logo.webp" alt="Denstudio" width={140} height={40} className="h-8 w-auto sm:h-10" priority />
          <button onClick={onClose} className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors flex items-center gap-2 cursor-pointer">
            Close
            <span className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center text-lg leading-none" aria-hidden="true">&times;</span>
          </button>
        </div>

        {/* Form */}
        <div ref={formContainerRef} className="w-full max-w-lg mx-auto px-6 pt-8 pb-20">
          {status === "success" ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-[#012406] flex items-center justify-center mx-auto mb-5">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-3">Thank you!</h2>
              <p className="text-neutral-600 mb-8">We&apos;ve received your enquiry and will be in touch shortly.</p>
              <button onClick={onClose} className="bg-[#012406] hover:bg-[#023a09] text-white px-8 py-3.5 rounded-full font-medium transition-all duration-300 cursor-pointer">
                Close
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-3 leading-tight">Your enquiry</h2>
              <p className="text-neutral-600 mb-1 text-base">Fill in your details for a free call back.</p>
              <p className="text-xs text-neutral-400 mb-8">Required fields marked *</p>

              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="eq-firstName" className="block text-sm font-medium text-neutral-700 mb-1.5">First Name <span className="text-red-500">*</span></label>
                    <input id="eq-firstName" type="text" required value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} className={inputClass} placeholder="First name" />
                  </div>
                  <div>
                    <label htmlFor="eq-lastName" className="block text-sm font-medium text-neutral-700 mb-1.5">Last Name</label>
                    <input id="eq-lastName" type="text" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} className={inputClass} placeholder="Last name" />
                  </div>
                </div>
                <div>
                  <label htmlFor="eq-email" className="block text-sm font-medium text-neutral-700 mb-1.5">Email Address <span className="text-red-500">*</span></label>
                  <input id="eq-email" type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={inputClass} placeholder="you@example.com" />
                </div>
                <div>
                  <label htmlFor="eq-phone" className="block text-sm font-medium text-neutral-700 mb-1.5">Phone Number <span className="text-red-500">*</span></label>
                  <input id="eq-phone" type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className={inputClass} placeholder="+44 7000 000000" />
                </div>
                <div>
                  <label htmlFor="eq-treatment" className="block text-sm font-medium text-neutral-700 mb-1.5">Treatment Interest</label>
                  <select id="eq-treatment" value={formData.treatmentInterest} onChange={(e) => setFormData({ ...formData, treatmentInterest: e.target.value })} className={`${inputClass} bg-transparent`}>
                    {treatmentOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="eq-message" className="block text-sm font-medium text-neutral-700 mb-1.5">Message</label>
                  <textarea id="eq-message" rows={3} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className={`${inputClass} resize-none`} placeholder="Tell us about what you're looking for..." />
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <input id="eq-privacy" type="checkbox" required checked={formData.privacyAgreed} onChange={(e) => setFormData({ ...formData, privacyAgreed: e.target.checked })} className="mt-0.5 h-4 w-4 rounded border-neutral-300 text-[#012406] focus:ring-[#012406]" />
                  <label htmlFor="eq-privacy" className="text-sm text-neutral-600">
                    I agree to the <Link href="/privacy-notice" target="_blank" className="underline hover:text-neutral-900">privacy policy</Link> <span className="text-red-500">*</span>
                  </label>
                </div>
                <div className="flex items-start gap-3">
                  <input id="eq-marketing" type="checkbox" checked={formData.marketingOptedIn} onChange={(e) => setFormData({ ...formData, marketingOptedIn: e.target.checked })} className="mt-0.5 h-4 w-4 rounded border-neutral-300 text-[#012406] focus:ring-[#012406]" />
                  <label htmlFor="eq-marketing" className="text-sm text-neutral-600">I would like to receive marketing communications</label>
                </div>

                {status === "error" && (
                  <p className="text-red-600 text-sm">Something went wrong. Please try again or call us on 020 3883 0588.</p>
                )}

                <div className="pt-4">
                  <button type="submit" disabled={status === "submitting"} className="bg-[#012406] hover:bg-[#023a09] text-white px-10 py-3.5 rounded-full font-medium text-base transition-all duration-300 hover:-translate-y-0.5 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed">
                    {status === "submitting" ? "Sending..." : "Submit"}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
