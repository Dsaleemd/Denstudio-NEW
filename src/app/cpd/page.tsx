import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CPD Webinar — DENSTUDIO",
  description:
    "Free 4-hour verifiable CPD webinar: Precision in Practice — Effective Communication with the Dental Laboratory. Hosted by Denstudio Dental Limited.",
};

export default function CpdPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#f8f8f6] pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="inline-block bg-[#012406] text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            FREE CPD Event
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#222222] leading-tight mb-4">
            FREE 4-Hour Verifiable CPD Webinar
          </h1>
          <h2 className="text-xl md:text-2xl text-[#333333] font-medium mb-8">
            Precision in Practice: Effective Communication with the Dental
            Laboratory
          </h2>
          <div className="flex flex-wrap justify-center gap-6 text-[#555555] mb-10">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-[#012406]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span>Saturday 7th March 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-[#012406]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>09:00 &ndash; 13:30</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-[#012406]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              <span>Live on Zoom</span>
            </div>
          </div>
          <p className="text-[#555555] mb-8">
            Provider: <strong>Denstudio Dental Limited</strong>
          </p>
          <Link
            href="#register"
            className="inline-block bg-[#012406] hover:bg-[#023a09] text-white px-8 py-3.5 rounded-full font-medium transition-all duration-300"
          >
            Register Now
          </Link>
        </div>
      </section>

      {/* Learning Objectives */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#222222] mb-8 text-center">
            Learning Objectives
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Understand the principles of effective dentist-laboratory communication and its impact on clinical outcomes.",
              "Develop skills in writing clear, comprehensive laboratory prescriptions for fixed restorations.",
              "Learn to use digital photography and shade-taking techniques to communicate aesthetic goals accurately.",
              "Explore the role of digital workflows (intraoral scanning, CAD/CAM) in improving communication accuracy.",
              "Identify common communication failures that lead to remakes and learn strategies to prevent them.",
              "Gain confidence in discussing material selection and design parameters with laboratory technicians.",
            ].map((objective, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-[#f8f8f6] rounded-xl p-5"
              >
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#012406] text-white text-sm font-semibold flex items-center justify-center">
                  {index + 1}
                </span>
                <p className="text-[#333333] text-sm leading-relaxed">
                  {objective}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Topics Covered */}
      <section className="py-20 md:py-28 bg-[#f8f8f6]">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#222222] mb-8 text-center">
            Topics Covered
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "The art and science of laboratory prescription writing",
              "Clinical photography for effective lab communication",
              "Shade selection and communication techniques",
              "Digital workflows: scanning, design and fabrication",
              "Material selection: when and why it matters",
              "Case studies: communication successes and failures",
            ].map((topic, index) => (
              <div key={index} className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 mt-0.5 shrink-0 text-[#012406]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-[#333333]">{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience & Certificate */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-[#222222] mb-6">
                Who Should Attend?
              </h2>
              <ul className="space-y-3">
                {[
                  "General dental practitioners",
                  "Cosmetic and restorative dentists",
                  "Dental therapists and hygienists",
                  "Dental nurses with an interest in restorative workflows",
                  "Dental laboratory technicians",
                  "Foundation dentists and trainees",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 mt-0.5 shrink-0 text-[#012406]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-[#333333]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#222222] mb-6">
                Certificate Details
              </h2>
              <div className="bg-[#f8f8f6] rounded-2xl p-8">
                <ul className="space-y-4 text-[#333333]">
                  <li className="flex items-start gap-3">
                    <span className="font-semibold shrink-0">CPD Hours:</span>
                    <span>4 hours verifiable CPD</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-semibold shrink-0">Provider:</span>
                    <span>Denstudio Dental Limited</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-semibold shrink-0">Format:</span>
                    <span>Live Zoom webinar with Q&amp;A</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-semibold shrink-0">Certificate:</span>
                    <span>
                      Digital certificate of attendance issued upon completion,
                      suitable for your CPD log and GDC enhanced CPD records.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="register"
        className="py-20 md:py-28 bg-[#012406] text-white text-center"
      >
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Register for Free
          </h2>
          <p className="text-white/80 leading-relaxed mb-10 text-lg">
            Secure your place on this free 4-hour verifiable CPD webinar.
            Spaces are limited.
          </p>
          <Link
            href="#register"
            className="inline-block bg-white text-[#012406] hover:bg-white/90 px-8 py-3.5 rounded-full font-medium transition-all duration-300"
          >
            Register Now
          </Link>
        </div>
      </section>
    </>
  );
}
