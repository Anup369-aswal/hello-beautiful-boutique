import { faqItems, siteConfig } from "./config";

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ClothingStore",
    "@id": `${siteConfig.siteUrl}/#business`,
    name: siteConfig.businessName,
    description: siteConfig.shortDescription,
    image: `${siteConfig.siteUrl}/images/about/atelier.jpg`,
    url: siteConfig.siteUrl,
    telephone: siteConfig.phoneE164,
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${siteConfig.address.line1}, ${siteConfig.address.line2}`,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:30",
        closes: "20:00"
      }
    ],
    sameAs: [siteConfig.instagramUrl],
    hasMap: siteConfig.googleMapsUrl,
    aggregateRating: siteConfig.googleRating.isLiveConnected
      ? {
          "@type": "AggregateRating",
          ratingValue: siteConfig.googleRating.score,
          reviewCount: siteConfig.googleRating.count.replace(/\D/g, "")
        }
      : undefined
  };
}

export function getFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}

export function getBreadcrumbSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.siteUrl
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Ladies Designer Boutique in BTM Layout, Bangalore",
        item: `${siteConfig.siteUrl}/#about`
      }
    ]
  };
}
