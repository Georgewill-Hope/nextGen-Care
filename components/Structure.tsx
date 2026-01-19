import { CardProps } from "@/utils/_types";
import Image from "next/image";
import React from "react";
import Button from "./Button";
import { structures } from "@/utils/_data";

const StructureCard: React.FC<CardProps> = ({
  image,
  desc,
  href,
  title,
  id,
}) => {
  return (
    <div className="perfectCenter flex-col sm:flex-row gap-4 sm:gap-6 md:gap-10 xl:gap-20 sm:even:flex-row-reverse w-full">
      <div className="relative w-full h-96 sm:h-80 overflow-hidden sm:flex-1">
        <Image
          src={image}
          alt="card-image"
          fill
          className="object-cover object-center"
        />
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/20" />
      </div>
      <div className="sm:flex-1">
        <p className="mb-7 text-gray-900 font-bold tracking-widest text-sm xl:text-lg">
          {desc}
        </p>
        <Button title={title} href={href} />
      </div>
    </div>
  );
};

const Structure = () => {
  return (
    <section className="bg-gray-100 py-20 lg:py-28">
      <div className="container-width flex flex-col gap-20">
        {structures.map((structure) => (
          <StructureCard key={structure.id} {...structure} />
        ))}
      </div>
    </section>
  );
};

export default Structure;
