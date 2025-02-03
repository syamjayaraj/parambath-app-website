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
  title: "Parambath App - Your Village Services Platform",
  description:
    "The Parambath App is your go-to platform for accessing essential services and staying updated with everything happening in and around Parambath. Find local businesses, events, workers, delivery services and more - all in Malayalam.",
  keywords: [
    "Parambath",
    "Kerala",
    "Local Services",
    "Events",
    "Business Directory",
    "Malayalam App",
  ],
  openGraph: {
    title: "Parambath App - Your Village Services Platform",
    description:
      "Access essential Parambath village services, find local businesses, stay updated with events, and connect with service providers - all in Malayalam.",
    images: [
      {
        url: "/app-logo.png",
        width: 800,
        height: 800,
        alt: "Parambath App Logo",
      },
    ],
  },
  themeColor: "#ffffff",
  manifest: "/manifest.json",
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
