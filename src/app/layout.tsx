import type { Metadata } from "next";
import { Cabin } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const cabin = Cabin({
  variable: "--font-cabin-var",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DENSTUDIO | Book Your Smile Transformation Today",
  description:
    "Award-winning aesthetic dentistry in Harley Street, London. Porcelain veneers, composite bonding, whitening and Invisalign.",
  openGraph: {
    title: "DENSTUDIO | Book Your Smile Transformation Today",
    description:
      "Award-winning aesthetic dentistry in Harley Street, London.",
    type: "website",
    locale: "en_GB",
    url: "https://denstudio.co.uk",
    images: [{ url: "/og-image.jpg" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "DENSTUDIO",
  description:
    "Premium cosmetic and general dental practice on Harley Street, London",
  url: "https://denstudio.co.uk",
  telephone: "+442038830588",
  email: "hello@denstudio.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "139 Harley Street",
    addressLocality: "London",
    postalCode: "W1G 6BG",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.5211,
    longitude: -0.1487,
  },
  openingHours: ["Mo-Fr 09:00-17:00"],
  priceRange: "££",
  image: "https://denstudio.co.uk/og-image.jpg",
  sameAs: [
    "https://www.facebook.com/denstudio",
    "https://www.instagram.com/denstudio",
    "https://www.youtube.com/@denstudio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${cabin.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-cabin">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
