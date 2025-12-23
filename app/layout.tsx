import type { Metadata, Viewport } from "next";
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
  title: "Parambath App - Thalakkulathur Village Services Platform",
  description:
    "The Parambath App is your go-to platform for accessing essential services and staying updated with everything happening in Thalakkulathur village, Kozhikode, Kerala. Find local businesses, events, workers, delivery services and more - all in Malayalam.",
  keywords: [
    "Parambath",
    "Thalakkulathur",
    "Kozhikode",
    "Kerala",
    "Local Services",
    "Events",
    "Business Directory",
    "Malayalam App",
  ],
  openGraph: {
    title: "Parambath App - Thalakkulathur Village Services Platform",
    description:
      "Access essential services in Thalakkulathur village, Kozhikode, Kerala. Find local businesses, stay updated with events, and connect with service providers - all in Malayalam.",
    images: [
      {
        url: "/app-logo.png",
        width: 800,
        height: 800,
        alt: "Parambath App Logo",
      },
    ],
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ml">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
