import { CardProps, navigationLinks } from "./_types";
import visionImage from "@/public/assets/children.jpg";
import missionImage from "@/public/assets/children-legs.jpg";
import inspirationImage from "@/public/assets/inspired.jpg";

export const navigationData: navigationLinks[] = [
  {
    id: 1,
    page: "Home",
    href: "/",
  },
  {
    id: 2,
    page: "About",
    href: "/about",
  },
  {
    id: 3,
    page: "Projects",
    href: "/projects",
  },
  {
    id: 4,
    page: "Programs",
    href: "/programs",
  },
  {
    id: 5,
    page: "Get Involved",
    href: "/get-involved",
  },
  {
    id: 6,
    page: "Contact",
    href: "/contact",
  },
];

export const structures: CardProps[] = [
  {
    id: 1,
    title: "Our Vision",
    desc: '"A world where every orphaned child has a safe home, loving care, and the opportunity to thrive."',
    image: visionImage,
    href: "#&",
  },
  {
    id: 2,
    title: "Our Mission",
    desc: '"We empower orphaned and abandoned children by providing safe housing, quality education, healthcare, and adoption support—guiding them toward brighter, self-sufficient futures."',
    image: missionImage,
    href: "#&",
  },
  {
    id: 3,
    title: "Our Inspiration",
    desc: '"Every child deserves a chance to shine."',
    image: inspirationImage,
    href: "#&",
  },
];
