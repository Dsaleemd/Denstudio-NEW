import type { Metadata } from "next";
import CpdClient from "./CpdClient";

export const metadata: Metadata = {
  title: "FREE 4-Hour Verifiable CPD Webinar — DENSTUDIO",
  description:
    "Free 4-hour verifiable CPD webinar: Precision in Practice — Effective Communication with the Dental Laboratory. Saturday 7th March 2026. Hosted by Denstudio Dental Limited.",
  openGraph: {
    title: "FREE 4-Hour Verifiable CPD Webinar — DENSTUDIO",
    description:
      "A structured, practical session designed to improve dentist–technician collaboration, strengthen laboratory prescriptions, and enhance aesthetic outcomes.",
    type: "website",
  },
};

export default function CpdPage() {
  return <CpdClient />;
}
