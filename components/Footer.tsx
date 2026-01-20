import { navigationData } from "@/utils/_data";
import Link from "next/link";
import React from "react";
import Button from "./Button";

const Footer = () => {
  return (
    <footer className="bg-black lg:mt-20 xl:mt-0 overflow-hidden">
      <div className="container-width flex flex-col gap-10 bg-black sm:rounded-lg py-10 sm:py-20 relative">
        <div className="absolute top-0 left-0 right-0 bottom-0 hidden sm:flex items-center justify-center">
          <p className="text-9xl md:text-[150px] lg:text-[200px] xl:text-[240px] font-extrabold bg-linear-180 from-custom-orange from-50% via-black via-80% to-black text-transparent bg-clip-text opacity-20">
            NextGen
          </p>
        </div>
        <div className="w-full z-20">
          <div className="mb-9">
            <h5 className="text-4xl lg:text-5xl font-extrabold font-mono text-gray-100 mb-2 leading-14">
              Be the Reason a Child&apos;s Life Is <br /> Transformed Today
            </h5>
            <p className="text-white font-mono  leading-6 tracking-wider">
              Do You Want To Make a Difference Today?
            </p>
          </div>

          <Button title="Join Now" href="#&" />
        </div>

        <div className="w-full h-0.5 bg-white rounded-full z-20" />

        <div className="w-full flex flex-col gap-3 sm:flex-row sm:items-center justify-between z-20">
          <ul className="flex items-center gap-10">
            {navigationData.map((item) => (
              <li
                key={item.id}
                className="font-lato text-sm tracking-widest text-custom-orange font-bold duration-500"
              >
                <Link href={item.href}>{item.page}</Link>
              </li>
            ))}
          </ul>

          <small className="font-sora text-xs tracking-wider text-white">
            2026 All Right Reservered @hopedev_
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
