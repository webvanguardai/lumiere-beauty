import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lumière Beauty Lounge | Premium Salon in Dubai",
  description:
    "Lumière Beauty Lounge — Dubai's premier luxury beauty salon in Discovery Gardens. Hair styling, balayage, keratin treatments, nails, makeup & skincare. Book online today.",
  keywords:
    "beauty salon Dubai, hair salon Discovery Gardens, balayage Dubai, keratin treatment Dubai, luxury salon Dubai, nail salon Dubai, makeup artist Dubai",
  openGraph: {
    title: "Lumière Beauty Lounge | Premium Salon in Dubai",
    description:
      "Dubai's premier luxury beauty salon. Hair, color, nails, makeup & skincare in Discovery Gardens.",
    url: "https://lumiere-beauty.vercel.app",
    siteName: "Lumière Beauty Lounge",
    locale: "en_AE",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Lumière Beauty Lounge Interior",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumière Beauty Lounge | Premium Salon in Dubai",
    description:
      "Dubai's premier luxury beauty salon in Discovery Gardens. Book online today.",
    images: [
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&h=630&fit=crop",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://lumiere-beauty.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>✨</text></svg>"
        />
        {/* GA4 Placeholder */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script> */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BeautySalon",
              name: "Lumière Beauty Lounge",
              image:
                "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200",
              url: "https://lumiere-beauty.vercel.app",
              telephone: "+971524803610",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Discovery Gardens",
                addressLocality: "Dubai",
                addressCountry: "AE",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 25.0388,
                longitude: 55.1353,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                  opens: "10:00",
                  closes: "21:00",
                },
              ],
              priceRange: "AED 80 - AED 400",
              servesCuisine: undefined,
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Beauty Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Hair Styling",
                    },
                    price: "150",
                    priceCurrency: "AED",
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Balayage & Color",
                    },
                    price: "350",
                    priceCurrency: "AED",
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
