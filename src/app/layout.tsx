import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import Disclaimer from "@/components/Disclaimer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Legal Excelencia - Allied for Excellence | Corporate & Commercial Law Firm",
  description: "Full-service corporate/commercial law firm with offices in Chandigarh, Delhi, Mumbai, and Kolkata. 30+ skilled lawyers provide multi-jurisdictional expertise across various practice areas.",
  metadataBase: new URL('https://legalexcelencia.com'),
  keywords: [
    'corporate law firm India',
    'commercial law services',
    'Legal Excelencia',
    'law firm Chandigarh',
    'law firm Delhi',
    'law firm Mumbai',
    'law firm Kolkata',
    'corporate legal services',
    'business law India'
  ],
  authors: [{ name: 'Legal Excelencia' }],
  creator: 'Legal Excelencia',
  publisher: 'Legal Excelencia',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://legalexcelencia.com',
    title: 'Legal Excelencia - Allied for Excellence',
    description: 'Full-service corporate/commercial law firm with offices across India.',
    siteName: 'Legal Excelencia',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Legal Excelencia - Allied for Excellence',
    description: 'Full-service corporate/commercial law firm with offices across India.',
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
        {children}
        <Disclaimer />
      </body>
    </html>
  );
}
