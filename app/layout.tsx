import type { Metadata } from "next";
import { Geist, Geist_Mono, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const lataMono = Lato({
  variable: "--font-lato-mono",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Home | Next Generation Care",
  description:
    "We offer orphanages, adoption centers, and child learning services to parentless children.",
  keywords: [
    "orphanage",
    "orphan support",
    "non-profit",
    "adoption",
    "child education",
    "Africa",
    "Mauritania",
    "Philippines",
  ],
  openGraph: {
    title: "Home | Next Generation Care",
    description:
      "We offer orphanages, adoption centers, and child learning services to parentless children.",
    siteName: "https://next-gen-care-hopedev.vercel.app",
    locale: "en_US",
    images: ["https://next-gen-care-hopedev.vercel.app/opengraph-image.jpg"],
  },
  twitter: {
    title: "Home | Next Generation Care",
    description:
      "We offer orphanages, adoption centers, and child learning services to parentless children.",
    card: "summary_large_image",
    images: ["https://next-gen-care-hopedev.vercel.app/opengraph-image.jpg"],
    creator: "@Hopedev_",
  },
  authors: [{ name: "Next Generation Care" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lataMono.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
