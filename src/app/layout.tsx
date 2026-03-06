import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppShell } from "@/components/app-shell";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Landliya - Property in Pondicherry | Buy & Sell Residential Properties",
    template: "%s | Landliya"
  },
  description: "Landliya is Pondicherry's premier property platform. Find flats, villas, and houses for sale. Connect with verified property dealers and owners in Pondicherry.",
  keywords: ["property in Pondicherry", "flats for sale in Pondicherry", "villas in Pondicherry", "buy house in Pondicherry", "real estate Pondicherry"],
  authors: [{ name: "Landliya" }],
  creator: "Landliya",
  publisher: "Landliya",
  metadataBase: new URL("https://landliya.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://landliya.com",
    title: "Landliya - Property in Pondicherry | Buy & Sell Residential Properties",
    description: "Landliya is Pondicherry's premier property platform. Find flats, villas, and houses for sale.",
    siteName: "Landliya",
  },
  twitter: {
    card: "summary_large_image",
    title: "Landliya - Property in Pondicherry",
    description: "Find your dream property in Pondicherry",
  },
  robots: {
    index: true,
    follow: true,
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
        className={`${inter.variable} antialiased min-h-screen flex flex-col`}
      >
        <AppShell>
          {children}
        </AppShell>
      </body>
    </html>
  );
}
