import CardContainer from '@/components/CardContainer';
import Help from '@/components/Help';
import Hero from '@/components/Hero';
import Impact from '@/components/Impact';
import bg from "@/public/assets/project.jpg";
import { projectData } from '@/utils/_data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Projects | Next Generation Care",
  description: "Next Generation care Projects",
  keywords: [
    "orphanage",
    "orphan support",
    "orphan project",
    "non-profit",
    "orphan",
    "Next Gen Care",
    "Next Generation Care",
    "Next Generation Care Projects",
    "adoption",
    "child education",
    "Africa",
    "Mauritania",
    "Philippines",
  ],
  openGraph: {
    title: "Projects | Next Generation Care",
    description: "Next Generation care Projects",
    siteName: "https://next-gen-care-hopedev.vercel.app",
    locale: "en_US",
    images: ["https://next-gen-care-hopedev.vercel.app/opengraph-image.jpg"],
  },
  twitter: {
    title: "Projects | Next Generation Care",
    description: "Next Generation care Projects",
    card: "summary_large_image",
    images: ["https://next-gen-care-hopedev.vercel.app/opengraph-image.jpg"],
    creator: "@Hopedev_",
  },
  authors: [{ name: "Next Generation Care" }],
};

const projects = () => {
  return (
    <div>
      <Hero image={bg} imageStyle="grayscale-50">
        <div className="flex items-center container-width self-end pb-5">
          {/* Content Header */}
          <h1 className="text-white text-start text-5xl lg:text-7xl font-semibold font-lato">
            Next Gen Projects
          </h1>
        </div>
      </Hero>
      <CardContainer data={projectData}/>
      <Impact />
      <Help />
    </div>
  );
}

export default projects