import React from "react";
import Button from "./Button";
import Image from "next/image";
import bg from "@/public/assets/pexels-cottonbro-3662648.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen max-h-200 md:max-h-[80vh] w-full">
      <Image
        src={bg}
        alt="hero-image"
        fill
        className="object-cover object-center"
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/30  flex items-center justify-center">
        <div className="flex flex-col items-start justify-center gap-5 container-width">
          <h1 className="text-white text-5xl lg:text-7xl font-semibold font-lato">
            Join Us. <br /> Build Brighter Futures.
          </h1>
          <p className="text-white text-sm sm:text-lg tracking-widest font-mono text-shadow">
            Change Your Heart. Change Everything <br />
            That Matters.
          </p>
          <Button title="Donate Now" href="#&" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
