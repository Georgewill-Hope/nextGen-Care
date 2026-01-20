"use client";

import Image from "next/image";
import logo from "@/public/assets/logo2.png";
import { navigationData } from "@/utils/_data";
import Link from "next/link";
import { FaFacebook, FaYoutube } from "react-icons/fa";
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
    <nav className="lg:bg-black/30 lg:backdrop-blur-lg fixed left-0 right-0 z-50 top-0 lg:px-5">
      {/* Desktop and large device navbar */}

      <div className="hidden lg:flex">
        <div className="container-width h-20 items-center-between">
          {/* Logo */}
          <Link href="/">
            <Image src={logo} alt="NextGen Care logo" width={120} height={50} />
          </Link>

          <ul className="perfectCenter xl:gap-10">
            {navigationData.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className={`font-semibold tracking-widest font-lato p-5 hover:border-b-4 hover:border-custom-orange transition-all duration-500 border-b-4 text-sm text-background uppercase text-shadow ${
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
                className="text-white/70 hover:text-white transition-colors duration-500 ease-in-out"
              />
            </a>
            <a
              href="https://x.com/Hopedev_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsTwitterX
                size={22}
                className="text-background/70 hover:text-background transition-colors duration-500 ease-in-out"
              />
            </a>
            <a
              href="https://x.com/Hopedev_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube
                size={30}
                className="text-background/70 hover:text-background transition-colors duration-500 ease-in-out"
              />
            </a>
          </div>
        </div>
      </div>

      {/* mobile phones and small device navbar */}
      <div className="flex lg:hidden w-full">
        <div className="w-full">
          <div className="w-full bg-background z-999 relative shadow">
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
                  <IoCloseOutline size={30} />
                ) : (
                  <HiOutlineBars3 size={30} />
                )}
              </button>
            </div>
          </div>

          <div
            className={`relative h-screen bg-background transition-transform duration-500 ease-in-out ${
              openNav ? "translate-y-0" : "-translate-y-1000"
            }`}
          >
            {/* nav links */}
            <ul className="perfectCenter flex-col gap-10 py-10 mb-10">
              {navigationData.map((item) => (
                <li key={item.id} onClick={() => setOpenNav(!openNav)}>
                  <Link
                    href={item.href}
                    className={`font-semibold tracking-wider font-lato p-5 hover:border-b-4 hover:border-custom-orange transition-all duration-500 border-b-4 text-sm ${
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
                onClick={() => setOpenNav(!openNav)}
              >
                <FaFacebook size={25} />
              </a>
              <a
                href="https://x.com/Hopedev_"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpenNav(!openNav)}
              >
                <BsTwitterX size={22} />
              </a>
              <a
                href="https://x.com/Hopedev_"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpenNav(!openNav)}
              >
                <AiOutlineYoutube size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
