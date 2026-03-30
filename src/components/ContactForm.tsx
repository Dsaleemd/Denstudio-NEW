"use client";

import { useState } from "react";
import { submitEnquiry } from "@/lib/supabase";
import Link from "next/link";

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

export default function ContactForm() {
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
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

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
        source: "contact_page",
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

  if (status === "success") {
    return (
      <div className="bg-[#f0faf1] border border-[#c3e6cb] rounded-2xl p-8 text-center">
        <div className="w-14 h-14 rounded-full bg-[#012406] flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">Thank you!</h3>
        <p className="text-[#555] text-sm">We&apos;ve received your enquiry and will be in touch shortly to arrange your consultation.</p>
      </div>
    );
  }

  const inputClass = "w-full px-4 py-3 rounded-lg border border-[#dddddd] text-sm text-[#1a1a1a] placeholder:text-[#999] focus:outline-none focus:ring-2 focus:ring-[#012406] focus:border-transparent transition-all bg-white";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="cf-firstName" className="block text-sm font-medium text-[#222] mb-1.5">First Name <span className="text-red-500">*</span></label>
          <input id="cf-firstName" type="text" required value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} className={inputClass} placeholder="First name" />
        </div>
        <div>
          <label htmlFor="cf-lastName" className="block text-sm font-medium text-[#222] mb-1.5">Last Name</label>
          <input id="cf-lastName" type="text" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} className={inputClass} placeholder="Last name" />
        </div>
      </div>
      <div>
        <label htmlFor="cf-email" className="block text-sm font-medium text-[#222] mb-1.5">Email Address <span className="text-red-500">*</span></label>
        <input id="cf-email" type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={inputClass} placeholder="you@example.com" />
      </div>
      <div>
        <label htmlFor="cf-phone" className="block text-sm font-medium text-[#222] mb-1.5">Phone Number <span className="text-red-500">*</span></label>
        <input id="cf-phone" type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className={inputClass} placeholder="+44 7000 000000" />
      </div>
      <div>
        <label htmlFor="cf-treatment" className="block text-sm font-medium text-[#222] mb-1.5">Treatment Interest</label>
        <select id="cf-treatment" value={formData.treatmentInterest} onChange={(e) => setFormData({ ...formData, treatmentInterest: e.target.value })} className={inputClass}>
          {treatmentOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="cf-message" className="block text-sm font-medium text-[#222] mb-1.5">Message</label>
        <textarea id="cf-message" rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className={`${inputClass} resize-none`} placeholder="Tell us about what you're looking for..." />
      </div>

      <div className="flex items-start gap-3">
        <input id="cf-privacy" type="checkbox" required checked={formData.privacyAgreed} onChange={(e) => setFormData({ ...formData, privacyAgreed: e.target.checked })} className="mt-0.5 h-4 w-4 rounded border-[#ddd] text-[#012406] focus:ring-[#012406]" />
        <label htmlFor="cf-privacy" className="text-sm text-[#555]">
          I agree to the <Link href="/privacy-notice" target="_blank" className="underline hover:text-[#1a1a1a]">privacy policy</Link> <span className="text-red-500">*</span>
        </label>
      </div>
      <div className="flex items-start gap-3">
        <input id="cf-marketing" type="checkbox" checked={formData.marketingOptedIn} onChange={(e) => setFormData({ ...formData, marketingOptedIn: e.target.checked })} className="mt-0.5 h-4 w-4 rounded border-[#ddd] text-[#012406] focus:ring-[#012406]" />
        <label htmlFor="cf-marketing" className="text-sm text-[#555]">I would like to receive marketing communications</label>
      </div>

      {status === "error" && (
        <p className="text-red-600 text-sm">Something went wrong. Please try again or call us on 020 3883 0588.</p>
      )}

      <button type="submit" disabled={status === "submitting"} className="bg-[#012406] hover:bg-[#023a09] text-white px-8 py-3.5 rounded-full font-medium transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed">
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
