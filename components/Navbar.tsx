"use client";

import Image from "next/image";
import logo from "@/public/assets/logo2.png";
import { navigationData } from "@/utils/_data";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { AiOutlineYoutube } from "react-icons/ai";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
  const path = usePathname();
  const [openNav, setOpenNav] = useState(false);
  return (
    <nav className="lg:bg-foreground fixed left-0 right-0 z-50 top-0 lg:px-5">
      {/* Desktop and large device navbar */}

      <div className="hidden lg:flex">
        <div className="container-width h-20 items-center-between">
          {/* Logo */}
          <div>
            <Image src={logo} alt="NextGen Care logo" width={120} height={50} />
          </div>

          <ul className="perfectCenter xl:gap-10">
            {navigationData.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className={`text-background font-semibold tracking-wider font-lato p-5 hover:border-b-4 hover:border-custom-orange transition-all duration-500 border-b-4 text-sm ${
                    path === item.href
                      ? " border-custom-orange"
                      : "border-transparent"
                  }`}
                >
                  {item.page}
                </Link>
              </li>
            ))}
          </ul>

          {/* Social Links */}

          <div className="perfectCenter gap-5">
            <a
              href="https://www.facebook.com/share/1Bu31bWk4E/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook
                size={25}
                className="text-background dark:text-background"
              />
            </a>
            <a
              href="https://x.com/Hopedev_"
              target="_blank"
              rel="noopener noreferrer"
            >
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
      <div className="flex lg:hidden w-full">
        <div className="w-full">
          <div className="w-full bg-foreground z-999 relative">
            <div className="items-center-between px-5 py-2 container-width">
              {/* Logo */}
              <Image
                src={logo}
                alt="NextGen Care logo"
                width={100}
                height={50}
              />

              <button onClick={() => setOpenNav(!openNav)}>
                {openNav ? (
                  <IoCloseOutline color="white" size={30} />
                ) : (
                  <HiOutlineBars3 color="white" size={30} />
                )}
              </button>
            </div>
          </div>

          <div
            className={`relative h-screen bg-foreground transition-transform duration-500 ease-in-out ${
              openNav ? "translate-y-0" : "-translate-y-300"
            }`}
          >
            {/* nav links */}
            <ul className="perfectCenter flex-col gap-10 py-10 mb-10">
              {navigationData.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className={`text-background font-semibold tracking-wider font-lato p-5 hover:border-b-4 hover:border-custom-orange transition-all duration-500 border-b-4 text-sm ${
                      path === item.href
                        ? " border-custom-orange"
                        : "border-transparent"
                    }`}
                  >
                    {item.page}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="perfectCenter gap-5">
              <a
                href="https://www.facebook.com/share/1Bu31bWk4E/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook
                  size={25}
                  className="text-background dark:text-background"
                />
              </a>
              <a
                href="https://x.com/Hopedev_"
                target="_blank"
                rel="noopener noreferrer"
              >
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
      </div>
    </nav>
  );
};

export default Navbar;
