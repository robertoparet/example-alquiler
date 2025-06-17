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
  title: "Refugio Natural - Cabañas y Habitaciones Rurales en la Naturaleza",
  description: "Escápate del ruido y vive la tranquilidad en nuestras cabañas y habitaciones rurales. Alojamiento de lujo en plena naturaleza con WiFi, desayuno incluido y actividades al aire libre.",
  keywords: "cabañas rurales, turismo rural, naturaleza, escapada, descanso, tranquilidad, senderismo, montaña, alojamiento rural, turismo ecológico",
  authors: [{ name: "Refugio Natural" }],
  creator: "Refugio Natural",
  publisher: "Refugio Natural",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://refugionatural.com'),
  alternates: {
    canonical: '/',
    languages: {
      'es-ES': '/es',
      'en-US': '/en',
    },
  },
  openGraph: {
    title: "Refugio Natural - Tu Escape Perfecto en la Naturaleza",
    description: "Descubre nuestras cabañas y habitaciones rurales. Un refugio perfecto para reconectar contigo mismo en plena naturaleza.",
    url: 'https://refugionatural.com',
    siteName: 'Refugio Natural',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Refugio Natural - Cabañas en la naturaleza',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Refugio Natural - Cabañas Rurales",
    description: "Escápate del ruido y vive la tranquilidad en nuestras cabañas rurales.",
    images: ['/twitter-image.jpg'],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
