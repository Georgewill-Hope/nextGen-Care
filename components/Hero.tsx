import React from "react";
import Image, { StaticImageData } from "next/image";

interface HeroProps {
  children: React.ReactNode;
  image: StaticImageData;
  imageStyle?: string;
}

const Hero: React.FC<HeroProps> = ({ children, image, imageStyle }) => {
  return (
    <section className="relative h-screen max-h-150 lg:max-h-[80vh] w-full">
      {/* Hero Image */}
      <Image
        src={image}
        alt="hero-image"
        fill
        className={`object-cover object-center ${imageStyle}`}
      />
      {/* Content Overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/30  flex items-center justify-center">
        {/* Content */}
        {children}
      </div>
    </section>
  );
};

export default Hero;
