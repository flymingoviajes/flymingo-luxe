import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { headers } from "next/headers";

import { Providers } from "./providers";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import SiteFooter from "@/components/site-footer";
import Analytics from "@/components/Analytics";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Viajes personalizados a tu medida`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "agencia de viajes personalizada México",
    "viajes a medida",
    "paquetes de viaje personalizados",
    "luna de miel",
    "viaje a Europa",
    "viaje a Japón",
    "viaje a Islandia",
    "Flymingo Viajes",
    "viajes Torreón",
    "viajes Coahuila",
  ],
  authors: [{ name: "Flymingo Viajes", url: siteConfig.url }],
  creator: "Flymingo Viajes",
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: siteConfig.url,
    title: `${siteConfig.name} — Viajes personalizados a tu medida`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Flymingo Viajes — Itinerarios únicos a tu medida",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Viajes personalizados a tu medida`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
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
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#FDF8FA",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") ?? "";
  const isLP = pathname.startsWith("/lp/");

  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": ["TravelAgency", "LocalBusiness"],
    name: "Flymingo Viajes",
    alternateName: "Experiencias Flymingo Viajes",
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: "+52-871-688-7385",
    email: "reservas@flymingoviajes.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Torreón",
      addressRegion: "Coahuila",
      addressCountry: "MX",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 25.5428,
      longitude: -103.4068,
    },
    openingHours: "Mo-Su 09:00-21:00",
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "200",
      bestRating: "5",
    },
    sameAs: [
      siteConfig.contact.instagram,
      siteConfig.contact.facebook,
    ],
  };

  return (
    <html suppressHydrationWarning lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body
        className={clsx(
          "min-h-screen text-foreground bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light", forcedTheme: "light", enableSystem: false }}>
          <Analytics />
          <div className="relative flex min-h-screen flex-col">
            {!isLP && <Navbar />}
            <main className="flex-grow">{children}</main>
            {!isLP && <SiteFooter />}
          </div>
          {!isLP && <FloatingWhatsApp />}
        </Providers>
      </body>
    </html>
  );
}