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
