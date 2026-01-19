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

export const metadata = {
  title:
    "Home | Next Generation Care | Orphanage in Mauritania | Philippines | Africa - African Child Learning Resources",
  description:
    "We offer orphanages, adoption centers, and child learning services to parentless children in the Philippines, Africa and Mauritania. Help us collect resources to fund their futures.",
  keywords:
    "orphanage, orphan support, non-profit, adoption, child education, Africa, Mauritania, Philippines",
  author: "Next Generation Care",
  siteUrl: "https://next-gen-care-hopedev.vercel.app/", // your main site URL
  ogImage: "https://next-gen-care-hopedev.vercel.app/og-image.jpg", // Open Graph image
  twitterImage: "https://next-gen-care-hopedev.vercel.app/twitter-image.jpg", // Twitter card image
  twitterHandle: "@Hopedev_",
};




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>

        {/* Open Graph / Facebook / WhatsApp / TikTok */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={metadata.siteUrl} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.ogImage} />
        <meta property="og:site_name" content={metadata.author} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={metadata.siteUrl} />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.twitterImage} />
        <meta name="twitter:creator" content={metadata.twitterHandle} />

        {/* Canonical URL */}
        <link rel="canonical" href={metadata.siteUrl} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lataMono.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
