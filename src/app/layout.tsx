import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://poecalc.tools"),
  title: {
    default: "PoE Calculator Tools - Path of Exile Calculators",
    template: "%s | PoE Calculator Tools",
  },
  description:
    "Free Path of Exile calculator tools. Vorici Chromatic Calculator, Timeless Jewel Calculator, and more. Find the cheapest crafting methods for your PoE items.",
  keywords: [
    "poe calculator",
    "path of exile tools",
    "vorici calculator",
    "chromatic calculator",
    "poe chromatic orb",
    "timeless jewel calculator",
    "path of exile crafting",
    "poe socket colors",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://poecalc.tools",
    siteName: "PoE Calculator Tools",
    title: "PoE Calculator Tools - Path of Exile Calculators",
    description:
      "Free Path of Exile calculator tools. Vorici Chromatic Calculator, Timeless Jewel Calculator, and more.",
  },
  twitter: {
    card: "summary_large_image",
    title: "PoE Calculator Tools",
    description:
      "Free Path of Exile calculator tools for chromatic orbs, timeless jewels, and more.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://poecalc.tools",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
