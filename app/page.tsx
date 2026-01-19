import Estimate from "@/components/Estimate";
import Hero from "@/components/Hero";
import Structure from "@/components/Structure";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Estimate />
      <Structure />
      <div className="h-screen"></div>
    </div>
  );
}
