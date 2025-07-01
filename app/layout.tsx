import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mood Makers Beverage Catering | Premium Bartending Services in Gurugram",
  description: "Transform your events with Mood Makers premium bartending and beverage catering services. Signature cocktails, molecular mixology, and professional bartenders for weddings, corporate events & private parties in Gurugram, Delhi NCR.",
  keywords: [
    "bartending services Gurugram",
    "beverage catering Delhi NCR", 
    "premium cocktail service",
    "wedding bartender Gurugram",
    "corporate event bartending",
    "molecular mixology",
    "signature cocktails",
    "professional bartender hire",
    "event catering Haryana",
    "luxury bar service"
  ],
  authors: [
    { name: "Mood Makers Beverage Catering" },
    { name: "Naveen Basyal", url: "https://www.linkedin.com/in/naveenbasyal" }
  ],
  creator: "Naveen Basyal",
  publisher: "Mood Makers Beverage Catering",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://moodmakers.in",
    siteName: "Mood Makers Beverage Catering",
    title: "Mood Makers | Premium Bartending & Beverage Catering Services",
    description: "Professional bartending services for weddings, corporate events, and private parties. Signature cocktails, molecular mixology, and premium bar setups in Gurugram, Delhi NCR.",
    images: [
      {
        url: "/images/hero-cocktails.jpg",
        width: 1200,
        height: 630,
        alt: "Mood Makers Premium Cocktail Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mood Makers | Premium Bartending Services Gurugram",
    description: "Transform your events with signature cocktails and professional bartending services in Delhi NCR.",
    images: ["/images/hero-cocktails.jpg"],
  },
  alternates: {
    canonical: "https://moodmakers.in",
  },
  category: "Food & Beverage",
  other: {
    "business:contact_data:locality": "Gurugram",
    "business:contact_data:region": "Haryana", 
    "business:contact_data:country_name": "India",
    "business:contact_data:phone_number": "+91 98112 95571",
    "business:contact_data:email": "moodmakers_bar@yahoo.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#8B0000" />
        <meta name="google-site-verification" content="your-verification-code" />
        
        {/* Developer Credit */}
        <meta name="developer" content="Naveen Basyal - https://www.linkedin.com/in/naveenbasyal" />
        
        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FoodEstablishment",
              "name": "Mood Makers Beverage Catering",
              "description": "Premium bartending and beverage catering services for events, weddings, and private parties",
              "url": "https://moodmakers.in",
              "telephone": "+91-98112-95571",
              "email": "moodmakers_bar@yahoo.in",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "A 325, basement, sector 55",
                "addressLocality": "Gurugram",
                "addressRegion": "Haryana",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "28.4595",
                "longitude": "77.0266"
              },
              "openingHours": "Mo-Su 00:00-23:59",
              "servesCuisine": "Beverages, Cocktails",
              "priceRange": "₹₹₹",
              "founder": {
                "@type": "Person",
                "name": "Raj Wadhwa"
              },
              "developer": {
                "@type": "Person",
                "name": "Naveen Basyal",
                "url": "https://www.linkedin.com/in/naveenbasyal"
              },
              "sameAs": [
                "https://www.facebook.com/moodmakers",
                "https://www.instagram.com/moodmakers_bar"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}