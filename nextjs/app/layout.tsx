import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://cateno-advisory.com";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CATENO ADVISORY",
  legalName: "Cateno Advisory GmbH",
  url: siteUrl,
  logo: `${siteUrl}/assets/cateno-logo.svg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kolonnenstraße 8",
    postalCode: "10827",
    addressLocality: "Berlin",
    addressCountry: "DE",
  },
  areaServed: [
    {
      "@type": "Country",
      name: "Germany",
    },
    {
      "@type": "Place",
      name: "International markets",
    },
  ],
  knowsAbout: [
    "Business Consulting",
    "International Business Consulting",
    "IT Consulting",
    "Software Development",
    "Digital Transformation",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "CATENO ADVISORY | Business & IT Consulting",
    template: "%s | CATENO ADVISORY",
  },
  description:
    "CATENO ADVISORY provides business consulting, IT consulting, software development and digital transformation expertise from Germany.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "CATENO ADVISORY | Business & IT Consulting",
    description:
      "Connecting business strategy with technology. Business consulting, IT consulting and digital transformation from Germany.",
    url: siteUrl,
    siteName: "CATENO ADVISORY",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CATENO ADVISORY | Business & IT Consulting",
    description:
      "Connecting business strategy with technology. Business consulting, IT consulting and digital transformation from Germany.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: { icon: "/assets/favicon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
