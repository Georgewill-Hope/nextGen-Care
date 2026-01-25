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

export const ProgramsData: CardProps[] = [
  {
    id: 1,
    title: "Residential Care & Shelter Programs",
    desc: "These provide a safe, stable living environment for children without parental care.",
    list: [
      "Safe accommodation (dormitories or family-style homes)",
      "Daily meals and nutrition",
      "Clothing and basic necessities",
      "Supervision and caregiving",
    ],
    image: visionImage,
    href: "#&",
  },
  {
    id: 2,
    title: "Education Support Programs",
    desc: "Education is one of the most important orphanage programs.",
    list: [
      "Enrollment in public or private schools",
      "School fees, uniforms, and books",
      "After-school tutoring and homework support",
      "Scholarships for secondary and tertiary education",
    ],
    image: missionImage,
    href: "#&",
  },
  {
    id: 3,
    title: "Health & Nutrition Programs",
    desc: "These programs ensure children grow up healthy and strong.",
    list: [
      "Regular medical check-ups",
      "Vaccinations and health screenings",
      "Mental health and trauma counseling",
      "Balanced meals and nutrition monitoring",
    ],
    image: inspirationImage,
    href: "#&",
  },
  {
    id: 4,
    title: "Protection & Advocacy Programs",
    desc: "These programs protect vulnerable children from abuse and exploitation, specifically girls from harmful cultural practices.",
    list: [
      "Safe houses for girls at risk of early marriage or abuse",
      "Child rights advocacy",
      "Legal support and child protection reporting",
      "Gender-based violence prevention",
    ],
    image: inspirationImage,
    href: "#&",
  },
  {
    id: 5,
    title: "Vocational Training & Life Skills Program",
    desc: "These prepare older children for independent adulthood.",
    list: [
      "Vocational skills (tailoring, carpentry, ICT, farming, arts)",
      "Entrepreneurship and small-business training",
      "Financial literacy and savings programs",
      "Career guidance",
    ],
    image: inspirationImage,
    href: "#&",
  },
];
