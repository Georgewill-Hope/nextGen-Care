import React from "react";
import Button from "./Button";

interface EstimateProps {
  title: string;
  children: React.ReactNode;
  titleStyles?: string;
  childrenStyles?: string;
  btnTitle?: string;
}

const Estimate: React.FC<EstimateProps> = ({
  title,
  children,
  titleStyles,
  childrenStyles,
  btnTitle,
}) => {
  return (
    <section className="container-width perfectCenter flex-col gap-5 py-20">
      {/* Content Header */}
      <h2
        className={`text-2xl sm:text-4xl mb-5 sm:mb-10 pb-2 ${titleStyles}`}
      >
        {title}
      </h2>

      {/* Content Description */}
      <div
        className={`perfectCenter flex-col gap-5 sm:tracking-wider mb-5 sm:mb-10 md:leading-8 font-lato ${childrenStyles}`}
      >
        {children}
      </div>

      {/* CTA Button */}
      {btnTitle && <Button title={btnTitle} href="#&" />}
    </section>
  );
};

export default Estimate;
