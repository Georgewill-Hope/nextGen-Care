import { CardProps } from "@/utils/_types";
import Image from "next/image";
import React from "react";
import Button from "./Button";

const StructureCard: React.FC<CardProps> = ({
  image,
  desc,
  href,
  title,
  list,
  btnTitle,
}) => {
  return (
    <div className="perfectCenter flex-col sm:flex-row gap-4 sm:gap-6 md:gap-10 xl:gap-20 sm:even:flex-row-reverse w-full">
      {/* Image Container */}
      <div className="relative w-full h-96 sm:h-80 overflow-hidden sm:flex-1">
        {/* Card Image */}
        <Image
          src={image}
          alt="card-image"
          fill
          className="object-cover object-center"
        />
        {/* Overlay */}
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/20" />
      </div>

      {/* Card Content */}
      <div className="sm:flex-1">
        {/* Card description */}
        <h4 className="text-gray-900 font-bold tracking-widest text-sm xl:text-lg mb-1 font-mono">
          {title}
        </h4>
        <p className="font-lato tracking-wider mb-4">{desc}</p>

        {list && (
          <ul className="px-8 font-lato tracking-wider leading-8">
            {list?.map((item, i) => (
              <li key={i} className="list-disc">
                {item}
              </li>
            ))}
          </ul>
        )}

        {/* Card Button */}
        {btnTitle && href && <Button title={btnTitle} href={href} />}
      </div>
    </div>
  );
};

const Structure = ({ structures }: { structures: CardProps[] }) => {
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
