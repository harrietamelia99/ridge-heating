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
  metadataBase: new URL("https://www.ridgeheating.co.uk"),
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
    locale: "en_GB",
  },
};

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  name: "Ridge Heating",
  url: "https://www.ridgeheating.co.uk",
  logo: "https://www.ridgeheating.co.uk/icon.png",
  image: "https://www.ridgeheating.co.uk/opengraph-image.jpg",
  telephone: "+441172510726",
  email: "response@ridgeheating.co.uk",
  description:
    "Independent Gas Safe registered engineer based in Bristol. Boilers, CP12 landlord certificates, heating systems, smart controls and pipework. Emergency callouts available.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bristol",
    addressCountry: "GB",
  },
  areaServed: [
    { "@type": "City", name: "Bristol" },
    { "@type": "AdministrativeArea", name: "South West England" },
  ],
  sameAs: ["https://www.instagram.com/ridge.heating/"],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
        />
        {children}
      </body>
    </html>
  );
}
