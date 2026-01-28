import Form from '@/components/Form';
import Help from '@/components/Help'
import Hero from '@/components/Hero'
import bg from "@/public/assets/align-fingers.jpg"
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact | Next Generation Care",
  description: "Contact Next Generation care",
  keywords: [
    "orphanage",
    "orphan support",
    "non-profit",
    "orphan",
    "Next Gen Care",
    "Next Generation Care",
    "adoption",
    "child education",
    "Africa",
    "Mauritania",
    "Philippines",
  ],
  openGraph: {
    title: "Contact | Next Generation Care",
    description: "Contact Next Generation care",
    siteName: "https://next-gen-care-hopedev.vercel.app",
    locale: "en_US",
    images: ["https://next-gen-care-hopedev.vercel.app/opengraph-image.jpg"],
  },
  twitter: {
    title: "Contact | Next Generation Care",
    description: "Contact Next Generation care",
    card: "summary_large_image",
    images: ["https://next-gen-care-hopedev.vercel.app/opengraph-image.jpg"],
    creator: "@Hopedev_",
  },
  authors: [{ name: "Next Generation Care" }],
};

const contact = () => {
  return (
    <div>
      <Hero image={bg}>
        <h1 className="text-white text-5xl lg:text-7xl font-semibold font-lato underline">
          Contact Us
        </h1>
      </Hero>
      <Form />
   
      <Help />
    </div>
  );
}

export default contact