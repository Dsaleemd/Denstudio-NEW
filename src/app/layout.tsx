import type { Metadata } from "next";
import { Cabin } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import PublicShell from "@/components/PublicShell";

const cabin = Cabin({
  variable: "--font-cabin-var",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://denstudio.co.uk"),
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
      {/* Google Analytics - replace G-ZGV7D03B7Z with real ID */}
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-ZGV7D03B7Z" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-ZGV7D03B7Z');
        `}
      </Script>
      <body className="min-h-full flex flex-col font-cabin">
        <PublicShell>{children}</PublicShell>
        <Analytics />
      </body>
    </html>
  );
}
