import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Karo Pitch — Pitch Your Startup to India's Top Investors",
  description:
    "Karo Pitch connects ambitious founders from tier 2 and tier 3 cities across India with leading investors. Apply to pitch, get shortlisted, and raise funding.",
  keywords: "startup, pitch, investors, India, funding, tier 2, tier 3 cities",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#07070a] text-[#e2e0d6]`}
      >
        <LenisProvider>
          <div className="grain">{children}</div>
        </LenisProvider>
      </body>
    </html>
  );
}
