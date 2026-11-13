import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://cateno-advisory.com";

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
      <body>{children}</body>
    </html>
  );
}
