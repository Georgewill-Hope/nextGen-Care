import Help from "@/components/Help";
import Hero from "@/components/Hero";
import Impact from "@/components/Impact";
import CardContainer from "@/components/CardContainer";
import bg from "@/public/assets/program.jpg";
import { ProgramsData } from "@/utils/_data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programs | Next Generation Care",
  description: "Next Generation care Programs",
  keywords: [
    "orphanage",
    "orphan support",
    "orphan programs",
    "non-profit",
    "orphan",
    "Next Gen Care",
    "Next Generation Care",
    "Next Generation Care Programs",
    "adoption",
    "child education",
    "Africa",
    "Mauritania",
    "Philippines",
  ],
  openGraph: {
    title: "Programs | Next Generation Care",
    description: "Next Generation care Programs",
    siteName: "https://next-gen-care-hopedev.vercel.app",
    locale: "en_US",
    images: ["https://next-gen-care-hopedev.vercel.app/opengraph-image.jpg"],
  },
  twitter: {
    title: "Programs | Next Generation Care",
    description: "Next Generation care Programs",
    card: "summary_large_image",
    images: ["https://next-gen-care-hopedev.vercel.app/opengraph-image.jpg"],
    creator: "@Hopedev_",
  },
  authors: [{ name: "Next Generation Care" }],
};

const programs = () => {
  return (
    <div>
      <Hero image={bg} imageStyle="grayscale-50">
        <div className="flex items-center container-width self-end pb-5">
          {/* Content Header */}
          <h1 className="text-white text-start text-5xl lg:text-7xl font-semibold font-lato">
            Next Gen Programs
          </h1>
        </div>
      </Hero>
      <CardContainer data={ProgramsData}/>
      <Impact />
      <Help />
    </div>
  );
};

export default programs;
