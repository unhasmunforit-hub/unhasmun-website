import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { VisualEditing } from "next-sanity/visual-editing";
import { draftMode } from "next/headers";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://unhasmun.org"),
  title: "UNHAS MUN 2026",
  description:
    "University of Hasanuddin Model United Nations 2026 - Shape the future behind the table",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "UNHAS MUN 2026",
    description:
      "University of Hasanuddin Model United Nations 2026 - Shape the future behind the table",
    url: "https://unhasmun.org",
    siteName: "UNHAS MUN",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/home/hero-bg.webp",
        width: 1200,
        height: 630,
        alt: "UNHAS MUN 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UNHAS MUN 2026",
    description:
      "University of Hasanuddin Model United Nations 2026 - Shape the future behind the table",
    images: ["/home/hero-bg.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "UNHAS MUN",
  url: "https://unhasmun.org",
  logo: "https://unhasmun.org/icon.png",
  description:
    "University of Hasanuddin Model United Nations 2026 - A student activity of Hasanuddin University",
  foundingDate: "2010-11",
  sameAs: [],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isEnabled } = await draftMode();

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${poppins.variable} antialiased bg-mun-cream`}
      >
        <Navbar />
        <main className="min-h-screen font-sans overflow-x-hidden">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
        {isEnabled && <VisualEditing />}
      </body>
    </html>
  );
}
