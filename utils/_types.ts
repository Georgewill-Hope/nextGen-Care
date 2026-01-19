import { StaticImageData } from "next/image";

export interface navigationLinks {
  id: number;
  page: string;
  href: string;
}

export interface CardProps {
  id: number;
  image: StaticImageData;
  desc: string;
  href: string;
  title: string;
}
