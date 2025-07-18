import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MainLayout from "../../layout/MainLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UBPL | Engineering, Construction & Infrastructure Experts",
  description:
    "UBPL provides civil engineering, turnkey construction, and infrastructure services across India. Discover innovative, high-quality industrial solutions with UBPL.",
  keywords: [
    "UBPL",
    "engineering company India",
    "civil construction services",
    "infrastructure development",
    "industrial engineering",
    "turnkey projects India",
    "construction firm",
    "utishtabpl",
    "utishta"
  ],
  openGraph: {
    title: "UBPL - Trusted Engineering & Construction Partner",
    description:
      "UBPL offers expert infrastructure, industrial, and civil engineering solutions across India.",
    url: "https://www.utishtabpl.com", // ← Replace with your actual domain
    siteName: "UBPL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UBPL - Engineering & Infrastructure Experts",
    description:
      "Delivering construction and engineering excellence across India.",
  },
  metadataBase: new URL("https://www.utishtabpl.com"), // ← Replace with your domain
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MainLayout>
             {children}
        </MainLayout>
     
      </body>
    </html>
  );
}
