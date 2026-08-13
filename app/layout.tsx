import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Quicksand } from "next/font/google";
import "./globals.css";
import { seo, siteConfig } from "@/lib/config";
import { getLocalBusinessSchema } from "@/lib/schema";
import WhatsAppButton from "@/components/WhatsAppButton";
import StickyMobileCTA from "@/components/StickyMobileCTA";

const playfair = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["500", "600", "700"],
  style: ["normal", "italic"]
});

const dmSans = Quicksand({
  subsets: ["latin"],
  variable: "--font-dmsans",
  display: "swap",
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: seo.title,
    template: `%s | ${siteConfig.businessName}`
  },
  description: seo.description,
  keywords: seo.keywords,
  alternates: {
    canonical: "/"
  },
  authors: [{ name: siteConfig.businessName }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.siteUrl,
    siteName: siteConfig.businessName,
    title: seo.title,
    description: seo.description,
    images: [
      {
        url: "/images/about/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.businessName} — Ladies Designer Boutique in Bangalore`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: ["/images/about/og-cover.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large"
    }
  },
  icons: {
    icon: "/favicon.ico"
  },
  category: "shopping"
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#7A1F4D"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const businessSchema = getLocalBusinessSchema();

  return (
    <html lang="en-IN" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
      </head>
      <body className="bg-ivory text-charcoal font-body antialiased selection:bg-blush selection:text-wine pb-16 sm:pb-0">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-wine focus:text-ivory focus:px-4 focus:py-2 focus:rounded-full"
        >
          Skip to main content
        </a>
        {children}
        <WhatsAppButton floating />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
