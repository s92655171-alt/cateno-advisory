import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
 title: "CATENO ADVISORY — Strategy. Technology. Global Growth.",
 description: "International business and technology consulting from Germany.",
 openGraph: { title: "CATENO ADVISORY", description: "Strategy. Technology. Global Growth.", type: "website" },
 icons: { icon: "/assets/favicon.svg" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
 return <html lang="en"><body>{children}</body></html>;
}
