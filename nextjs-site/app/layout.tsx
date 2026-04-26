import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1e3a5f",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://kidebouchetou.fr"),
  title: {
    default: "Kidebouchetou | Expert Débouchage Canalisations Île-de-France",
    template: "%s | Kidebouchetou",
  },
  description:
    "Expert en débouchage de canalisations depuis 25 ans. Intervention rapide 24/7 à Sarcelles, Saint-Ouen et toute l'Île-de-France. Débouchage WC, évier, douche, canalisation haute pression. Devis gratuit.",
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
    "Saint-Ouen",
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
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://kidebouchetou.fr",
    siteName: "Kidebouchetou",
    title: "Kidebouchetou | Expert Débouchage Canalisations depuis 25 ans",
    description:
      "Service professionnel de débouchage de canalisations. Intervention rapide 24/7, devis gratuit.",
    images: [
      {
        url: "/logo.jpg",
        width: 512,
        height: 512,
        alt: "Logo Kidebouchetou - Expert en débouchage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kidebouchetou | Expert Débouchage Canalisations",
    description:
      "Service professionnel de débouchage depuis 25 ans. Intervention rapide à Sarcelles et Saint-Ouen.",
    images: ["/logo.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "services",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Kidebouchetou",
  image: "https://kidebouchetou.fr/logo.png",
  "@id": "https://kidebouchetou.fr",
  url: "https://kidebouchetou.fr",
  telephone: "+33603740704",
  email: "isacbentura@gmail.com",
  priceRange: "€€",
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "20 Allée Léon Paul Fargue",
      addressLocality: "Sarcelles",
      postalCode: "95200",
      addressCountry: "FR",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "100 Avenue Michelet",
      addressLocality: "Saint-Ouen",
      postalCode: "94200",
      addressCountry: "FR",
    },
  ],
  geo: {
    "@type": "GeoCoordinates",
    latitude: 48.9767,
    longitude: 2.3833,
  },
  areaServed: {
    "@type": "Place",
    name: "Île-de-France",
  },
  serviceType: [
    "Débouchage de canalisations",
    "Curage de canalisations",
    "Inspection caméra",
    "Remplacement de colonnes",
    "Vidange",
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  description:
    "Expert en débouchage de canalisations depuis plus de 25 ans. Intervention rapide 24/7 avec matériel professionnel haute pression.",
  foundingDate: "1997",
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
    <html lang="fr" className="scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
          type="application/ld+json"
        />
        <link rel="icon" href="/logo.jpg" type="image/jpg" />
        <link rel="apple-touch-icon" href="/logo.jpg" />
        <meta name="google" content="notranslate" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
