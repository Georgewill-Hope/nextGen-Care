import Help from "@/components/Help";
import Hero from "@/components/Hero";
import Impact from "@/components/Impact";
import Programs from "@/components/Programs";
import bg from "@/public/assets/hossen.jpg";

const programs = () => {
  return (
    <div>
      <Hero image={bg} imageStyle="grayscale-50">
        <div className="flex items-center container-width self-end pb-5">
          {/* Content Header */}
          <h1 className="text-white text-start text-5xl lg:text-7xl font-semibold font-lato">
            Next Gen Programs
          </h1>
        </div>
      </Hero>
      <Programs />
      <Impact />
      <Help />
    </div>
  );
};

export default programs;
