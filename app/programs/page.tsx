import Hero from "@/components/Hero";
import bg from "@/public/assets/hossen.jpg";

const programs = () => {
  return (
    <div>
      <Hero image={bg} imageStyle="grayscale-50">
        <div className="flex items-center justify-center container-width">
          {/* Content Header */}
          <h1 className="text-white text-center text-5xl lg:text-7xl font-semibold font-lato">
            Orphan Lifestyle Programs
          </h1>
        </div>
      </Hero>
    </div>
  );
};

export default programs;
