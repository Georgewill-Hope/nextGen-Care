import React from "react";
import Button from "./Button";

const Estimate = () => {
  return (
    <section className="container-width perfectCenter flex-col gap-5 py-20">
      {/* Content Header */}
      <h2 className="text-2xl sm:text-4xl text-center mb-5 sm:mb-10 border-b border-custom-orange pb-2">
        Daily, over 700 children are forced into life as orphans.
      </h2>

      {/* Content Description */}
      <div className="perfectCenter flex-col gap-5 sm:text-center sm:tracking-wider mb-5 sm:mb-10 md:leading-8 font-lato">
        <p>
          Next Gen Care is a global non-profit organization dedicated to
          supporting orphans and abandoned children. We provide access to
          quality healthcare, education, safe housing, and adoption services to
          help children grow in a secure and nurturing environment.
        </p>
        <p>
          With the support of our orphan charity programs, we have established
          and supported orphanages, infant adoption centers, and schools in
          underserved communities across the Philippines, India, Colombia, and
          Africa, providing children with quality education, proper learning
          resources, and essential tools.
        </p>
        <p>Help us donate to orphans and improve their living situations.</p>
        <p>Help us donate to orphans and improve their living situations.</p>
      </div>

      {/* CTA Button */}
      <Button title="Read More" href="#&" />
    </section>
  );
};

export default Estimate;
