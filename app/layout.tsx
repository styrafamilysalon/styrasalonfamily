import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Styra Salon - Best Unisex Salon in Bengaluru | Professional Hair, Beauty & Spa",
  description: "Leading unisex family salon in Bengaluru offering professional haircut, hair spa, facial, threading, waxing, pedicure, manicure, beard styling, bridal makeup and complete grooming services for men, women and children at affordable prices.",
  keywords: [
    "salon near me",
    "best salon in Bengaluru",
    "unisex salon Bangalore",
    "hair spa near me",
    "bridal makeup Bengaluru",
    "men's salon Bangalore",
    "women's salon Bangalore",
    "family salon ITI Layout",
    "haircut near me",
    "facial near me",
    "waxing near me",
    "beauty parlour Bengaluru",
    "grooming services Bangalore",
    "Styra Salon"
  ],
  authors: [{ name: "Styra Salon" }],
  creator: "Styra Salon",
  publisher: "Styra Salon",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://styrasalon.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Styra Salon - Best Unisex Salon in Bengaluru",
    description: "Premium salon services for men, women & kids. Expert haircut, facial, spa, waxing, threading & bridal makeup.",
    url: 'https://styrasalon.in',
    siteName: 'Styra Salon',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 512,
        height: 512,
        alt: 'Styra Salon Logo',
      },
      {
        url: '/salon-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Styra Salon - Best Unisex Salon in Bengaluru',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Styra Salon - Best Unisex Salon in Bengaluru',
    description: 'Premium salon services for men, women & kids',
    images: ['/salon-1.jpg'],
  },
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
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/favicon.ico', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: '/favicon.ico', sizes: '180x180', type: 'image/png' },
    ],
  },
  verification: {
    google: 'HCQmnfiMTfmU33z5Ig-Qx2TdvLBlwgqgiGFo6UDjH2g',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            {children}
          </TooltipProvider>
        </Providers>
      </body>
    </html>
  );
}

