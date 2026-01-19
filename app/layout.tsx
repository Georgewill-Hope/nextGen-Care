import type { Metadata } from "next";
import { Geist, Geist_Mono, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

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
  title:
    "Home | Next Generation Care | Orphanage in Mauritania | Philippines | Africa",
  description:
    "We offer orphanages, adoption centers, and child learning services to parentless children in the Philippines, Africa and Mauritania.",
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
  authors: [{ name: "Next Generation Care" }],
  metadataBase: new URL("https://next-gen-care-hopedev.vercel.app"),
  openGraph: {
    type: "website",
    url: "https://next-gen-care-hopedev.vercel.app/",
    title:
      "Home | Next Generation Care | Orphanage in Mauritania | Philippines | Africa",
    description:
      "We offer orphanages, adoption centers, and child learning services to parentless children in the Philippines, Africa and Mauritania.",
    siteName: "Next Generation Care",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Next Generation Care",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Hopedev_",
    creator: "@Hopedev_",
    title:
      "Home | Next Generation Care | Orphanage in Mauritania | Philippines | Africa",
    description:
      "We offer orphanages, adoption centers, and child learning services to parentless children in the Philippines, Africa and Mauritania.",
    images: ["/twitter-image.png"],
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
        className={`${geistSans.variable} ${geistMono.variable} ${lataMono.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
