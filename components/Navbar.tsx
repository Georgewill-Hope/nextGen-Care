"use client"

import Image from "next/image";
import logo from "@/public/assets/logo2.png";
import { navigationData } from "@/utils/_data";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { AiOutlineYoutube } from "react-icons/ai";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname()
  return (
    <nav className="bg-foreground fixed left-0 right-0 z-50 top-0 px-5">
      {/* Desktop and large device navbar */}

      <div className="hidden lg:flex">
        <div className="container-width h-20 items-center-between">
          {/* Logo */}
          <div>
            <Image src={logo} alt="NextGen Care logo" width={120} height={50} />
          </div>

          <ul className="perfectCenter gap-10">
            {navigationData.map((item) => (
              <li
                key={item.id}
                className={`text-background font-semibold tracking-wider font-lato p-5 ${
                  path === item.href && "border-b-4 border-custom-orange"
                }`}
              >
                <Link href={item.href}>{item.page}</Link>
              </li>
            ))}
          </ul>

          {/* Social Links */}

          <div className="perfectCenter gap-5">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <FaFacebook
                size={25}
                className="text-background dark:text-background"
              />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <BsTwitterX
                size={22}
                className="text-background dark:text-background"
              />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <AiOutlineYoutube
                size={30}
                className="text-background dark:text-background"
              />
            </a>
          </div>
        </div>
      </div>

      {/* mobile phones and small device navbar */}
      <div></div>
    </nav>
  );
};

export default Navbar;
