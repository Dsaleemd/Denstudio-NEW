import type { Metadata } from "next";
import ConcernPageClient from "./ConcernPageClient";

export const metadata: Metadata = {
  title: "What's Your Concern? — DENSTUDIO",
  description:
    "Explore common dental concerns and discover how Denstudio on Harley Street can help. From stains and gaps to missing teeth and gummy smiles.",
};

export default function WhatsYourConcernPage() {
  return <ConcernPageClient />;
}
