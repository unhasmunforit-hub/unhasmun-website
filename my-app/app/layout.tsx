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
  metadataBase: new URL("https://unhasmun.com"),
  title: "UNHAS MUN 2026",
  description: "University of Hasanuddin Model United Nations 2026 - Shape the future behind the table",
  openGraph: {
    title: "UNHAS MUN 2026",
    description: "University of Hasanuddin Model United Nations 2026 - Shape the future behind the table",
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
    description: "University of Hasanuddin Model United Nations 2026 - Shape the future behind the table",
    images: ["/home/hero-bg.webp"],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isEnabled } = await draftMode();

  return (
    <html lang="en">
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
