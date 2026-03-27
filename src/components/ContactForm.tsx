"use client";

import { useState } from "react";
import type { FormEvent } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    treatmentInterest: "",
    message: "",
  });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // TODO: connect to form submission endpoint
    console.log("Form submitted:", formData);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-[#222222] mb-1.5"
          >
            First Name *
          </label>
          <input
            id="firstName"
            type="text"
            required
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
            className="w-full px-4 py-3 rounded-lg border border-[#dddddd] focus:outline-none focus:ring-2 focus:ring-[#012406] focus:border-transparent transition-all"
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-[#222222] mb-1.5"
          >
            Last Name *
          </label>
          <input
            id="lastName"
            type="text"
            required
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
            className="w-full px-4 py-3 rounded-lg border border-[#dddddd] focus:outline-none focus:ring-2 focus:ring-[#012406] focus:border-transparent transition-all"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-[#222222] mb-1.5"
        >
          Email *
        </label>
        <input
          id="email"
          type="email"
          required
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
          className="w-full px-4 py-3 rounded-lg border border-[#dddddd] focus:outline-none focus:ring-2 focus:ring-[#012406] focus:border-transparent transition-all"
        />
      </div>
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-[#222222] mb-1.5"
        >
          Phone
        </label>
        <input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) =>
            setFormData({ ...formData, phone: e.target.value })
          }
          className="w-full px-4 py-3 rounded-lg border border-[#dddddd] focus:outline-none focus:ring-2 focus:ring-[#012406] focus:border-transparent transition-all"
        />
      </div>
      <div>
        <label
          htmlFor="treatmentInterest"
          className="block text-sm font-medium text-[#222222] mb-1.5"
        >
          Treatment Interest
        </label>
        <select
          id="treatmentInterest"
          value={formData.treatmentInterest}
          onChange={(e) =>
            setFormData({
              ...formData,
              treatmentInterest: e.target.value,
            })
          }
          className="w-full px-4 py-3 rounded-lg border border-[#dddddd] focus:outline-none focus:ring-2 focus:ring-[#012406] focus:border-transparent transition-all bg-white"
        >
          <option value="">Select a treatment</option>
          <option value="general">General Dentistry</option>
          <option value="teeth-straightening">Teeth Straightening</option>
          <option value="composite-bonding">Composite Bonding</option>
          <option value="porcelain-veneers">Porcelain Veneers</option>
          <option value="teeth-whitening">Teeth Whitening</option>
          <option value="hygiene">Hygiene</option>
          <option value="gum-reshaping">Gum Reshaping</option>
          <option value="retainers">Retainers</option>
          <option value="smile-makeover">Smile Makeover</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-[#222222] mb-1.5"
        >
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className="w-full px-4 py-3 rounded-lg border border-[#dddddd] focus:outline-none focus:ring-2 focus:ring-[#012406] focus:border-transparent transition-all resize-none"
        />
      </div>
      <button
        type="submit"
        className="bg-[#012406] hover:bg-[#023a09] text-white px-8 py-3.5 rounded-full font-medium transition-all duration-300"
      >
        Send Message
      </button>
    </form>
  );
}
