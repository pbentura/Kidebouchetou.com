import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Police auto-hébergée (pas d'appel à Google Fonts : RGPD + performance)
const inter = localFont({
  src: "./fonts/inter-latin-wght-normal.woff2",
  variable: "--font-inter",
  display: "swap",
  weight: "100 900",
});

import { SITE_URL } from "./lib/site";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1e3a5f",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Débouchage Canalisation Sarcelles, 95 & 93 – 24h/24 | Kidebouchetou",
    template: "%s | Kidebouchetou",
  },
  description:
    "Plombier spécialiste du débouchage de canalisations, plus de 25 ans d'expérience. Intervention 24h/24 à Sarcelles, dans le Val-d'Oise, la Seine-Saint-Denis et toute l'Île-de-France. WC, évier, douche, haute pression. Devis gratuit : 06 03 74 07 04.",
  keywords: [
    "débouchage canalisation",
    "débouchage WC",
    "débouchage évier",
    "débouchage douche",
    "curage canalisation",
    "vidange fosse septique",
    "débouchage urgence",
    "plombier débouchage",
    "Sarcelles",
    "Saint-Denis",
    "Argenteuil",
    "Montreuil",
    "Clichy",
    "Val-d'Oise",
    "Île-de-France",
    "débouchage haute pression",
    "inspection caméra canalisation",
  ],
  authors: [{ name: "Kidebouchetou" }],
  creator: "Kidebouchetou",
  publisher: "Kidebouchetou",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: "Kidebouchetou",
    title: "Débouchage Canalisation 24h/24 – Sarcelles & Île-de-France | Kidebouchetou",
    description:
      "Plombier débouchage, plus de 25 ans d'expérience. Intervention rapide 24h/24, devis gratuit. 06 03 74 07 04.",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Logo Kidebouchetou - Expert en débouchage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Débouchage Canalisation 24h/24 | Kidebouchetou",
    description:
      "Plombier débouchage à Sarcelles et en Île-de-France. Intervention rapide 24h/24, devis gratuit.",
    images: ["/logo.png"],
  },
  category: "services",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  "@id": `${SITE_URL}/#organisation`,
  name: "Kidebouchetou",
  legalName: "VENTURA ETS",
  image: `${SITE_URL}/logo.png`,
  logo: `${SITE_URL}/logo.png`,
  url: SITE_URL,
  telephone: "+33603740704",
  email: "contact.kidebouchetou@gmail.com",
  priceRange: "€€",
  foundingDate: "2022-12",
  address: {
    "@type": "PostalAddress",
    streetAddress: "20 Allée Léon Paul Fargue",
    addressLocality: "Sarcelles",
    postalCode: "95200",
    addressRegion: "Île-de-France",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 48.9972,
    longitude: 2.3853,
  },
  areaServed: [
    "Sarcelles",
    "Garges-lès-Gonesse",
    "Villiers-le-Bel",
    "Argenteuil",
    "Saint-Denis",
    "Saint-Ouen-sur-Seine",
    "Aubervilliers",
    "Montreuil",
    "Clichy",
    "Val-d'Oise",
    "Seine-Saint-Denis",
    "Hauts-de-Seine",
    "Paris",
  ].map((name) => ({ "@type": "Place", name })),
  serviceType: [
    "Débouchage de canalisations",
    "Curage et hydrocurage",
    "Inspection caméra",
    "Remplacement de colonnes",
    "Dépannage plomberie",
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  description:
    "Plombier spécialiste du débouchage de canalisations, plus de 25 ans d'expérience. Intervention 24h/24 et 7j/7 avec matériel professionnel haute pression à Sarcelles et en Île-de-France.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services de débouchage",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Débouchage toilettes et siphon",
          description: "Débouchage WC, siphon, douche, baignoire, lave-vaisselle",
        },
        price: "110",
        priceCurrency: "EUR",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Inspection canalisation par caméra",
          description: "Inspection endoscopique 30m avec enregistrement vidéo",
        },
        price: "110",
        priceCurrency: "EUR",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Nettoyage haute pression canalisations",
          description: "Curage, détartrage avec furet 100m et pression 350 bars",
        },
        price: "240",
        priceCurrency: "EUR",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth overflow-x-hidden">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
          type="application/ld+json"
        />
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta name="google" content="notranslate" />
      </head>
      <body className={`${inter.variable} font-sans antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
