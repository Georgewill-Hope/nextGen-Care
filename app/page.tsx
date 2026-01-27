import Button from "@/components/Button";
import CardContainer from "@/components/CardContainer";
import CustomSection from "@/components/CustomSection";
import Help from "@/components/Help";
import Hero from "@/components/Hero";
import Impact from "@/components/Impact";
import bg from "@/public/assets/pexels-cottonbro-3662648.jpg";
import { structures } from "@/utils/_data";

export default function Home() {
  return (
    <div>
      <Hero image={bg}>
        <div className="flex flex-col items-start justify-center gap-5 container-width">
          {/* Content Header */}
          <h1 className="text-white text-5xl lg:text-7xl font-semibold font-lato">
            Join Us. <br /> Build Brighter Futures.
          </h1>

          {/* Content Description */}
          <p className="text-white text-sm sm:text-lg tracking-widest font-mono text-shadow">
            Change Your Heart. Change Everything <br />
            That Matters.
          </p>

          {/* CTA Button */}
          <Button title="Donate Now" href="#&" />
        </div>
      </Hero>
      <CustomSection
        title="Daily, over 700 children are forced into life as orphans."
        titleStyles="border-b border-custom-orange text-center"
        childrenStyles="sm:text-center"
        btnTitle="Read More"
      >
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
      </CustomSection>
      <CardContainer data={structures} />
      <Impact />
      <Help />
    </div>
  );
}
