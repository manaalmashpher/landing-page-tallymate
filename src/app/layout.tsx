import type { Metadata } from "next";
import { Geist, Lora } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "optional" });
const lora = Lora({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-display", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://landing-page-tallymate.vercel.app"),
  alternates: { canonical: "/" },
  title: "TallyMate | Your business. The whole picture.",
  description: "See what needs your attention in your TallyPrime books. Understand cash, customer payments, and unsold stock, then ask questions in plain language.",
  openGraph: {
    title: "Your business. The whole picture. | TallyMate",
    description: "Your Tally books, made clear. Business visibility for owners.",
    type: "website",
    url: "/",
    locale: "en_IN",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geist.variable} ${lora.variable}`}>{children}</body></html>;
}
