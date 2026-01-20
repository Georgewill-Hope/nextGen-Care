import Image from "next/image";
import earthImage from "@/public/assets/globe6.svg";
import Button from "./Button";

const Help = () => {
  return (
    <section className="min-h-125 relative w-full">
      <Image
        src={earthImage}
        alt="earth image"
        fill
        className="object-center object-cover"
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 perfectCenter bg-linear-0 from-black to-black/50">
        <div className="container-width perfectCenter flex-col gap-20">
          <h3 className="text-xl lg:text-2xl text-center font-mono text-custom-orange">
            "Join supporters whose donations are already creating{" "}
            <span className="font-bold text-4xl lg:text-4xl">
              safe <br className="hidden lg:flex"/> homes, education, and brighter futures
            </span>{" "}
            for <br /> orphaned children"
          </h3>
          <Button title="Join Today" href="#&" />
        </div>
      </div>
    </section>
  );
};

export default Help;
