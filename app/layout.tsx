import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/providers/LenisProvider";
import Navbar from "@/components/shared/Navbar";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chukwuraphael — Frontend Developer & Creative Technologist",
  description:
    "Portfolio of Chukwuraphael — Frontend Developer, Virtual Assistant, and Creative Technologist. Building fast, beautiful, and functional digital experiences.",
  keywords: ["frontend developer", "portfolio", "web developer", "virtual assistant", "Nigeria"],
  openGraph: {
    title: "Chukwuraphael — Frontend Developer & Creative Technologist",
    description: "Building fast, beautiful, and functional digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${inter.variable}`}>
      <body>
        <LenisProvider>
          <div className="app-container">
            <Navbar />
            {/* Film grain overlay */}
            <div className="noise-overlay" aria-hidden="true" />
            <div id="scroll-wrapper" className="scroll-wrapper">
              {children}
            </div>
          </div>
        </LenisProvider>
      </body>
    </html>
  );
}
