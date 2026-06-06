import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SITE_CONFIG } from "@/config/constants";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: `${SITE_CONFIG.brand.name} – Official ID | Get ${SITE_CONFIG.brand.name} Book ID Online`,
  description: SITE_CONFIG.description,
  keywords: ["Reddy Anna", "Reddy Book", "Anna Book", "Cricket Betting ID", "IPL Betting ID", "Online Betting India"],
  openGraph: {
    title: `${SITE_CONFIG.brand.name} – Official ID`,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.brand.name,
    images: [
      {
        url: "/hero_bg.png",
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.brand.name} Official`,
      },
    ],
    locale: "en_IN",
    type: "website",
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
      </head>
      <body 
        className={`${inter.variable} ${playfair.variable}`}
        style={{
          '--primary': SITE_CONFIG.theme.primary,
          '--primary-hover': SITE_CONFIG.theme.primaryHover,
          '--background': SITE_CONFIG.theme.background,
          '--secondary': SITE_CONFIG.theme.secondary,
        } as React.CSSProperties}
      >
        {children}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-XL3FEFK5ZV" strategy="afterInteractive" />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XL3FEFK5ZV');
            `
          }}
        />
      </body>
    </html>
  );
}
