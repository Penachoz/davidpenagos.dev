import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

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
  title: {
    default: "David Penagos · Infrastructure, Cloud & DevOps",
    template: "%s · David Penagos",
  },
  description:
    "Computer Engineering student building reproducible infrastructure, cloud platforms and reliable systems from Cali, Colombia.",
  keywords: [
    "Infrastructure Engineer",
    "Cloud Engineer",
    "DevOps",
    "Linux",
    "AWS",
    "Terraform",
    "Cali Colombia",
  ],
  authors: [{ name: "David Penagos" }],
  openGraph: {
    title: "David Penagos · Infrastructure, Cloud & DevOps",
    description:
      "Building reliable systems with Linux, networking, automation and cloud.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[#0d1524] font-sans text-foreground">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
