import type { Metadata } from "next";
import { Outfit, Manrope } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ridge Heating | Gas Engineer Bristol",
  description:
    "Independent gas engineer covering the Southwest within 1-2 hours of Bristol. Emergency callouts available. Boilers, CP12s, heating systems, smart controls and pipework.",
  openGraph: {
    title: "Ridge Heating | Gas Engineer Bristol",
    description:
      "Gas engineer covering the Southwest within 1-2 hours of Bristol. Emergency callouts available. Enquire for a free consultation.",
    url: "https://www.ridgeheating.co.uk",
    siteName: "Ridge Heating",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover" as const,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${manrope.variable}`}>
      <body className="bg-ridge-black text-ridge-white antialiased">
        {children}
      </body>
    </html>
  );
}
