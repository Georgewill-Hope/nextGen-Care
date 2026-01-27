import Button from "@/components/Button";
import CustomSection from "@/components/CustomSection";
import GetInvolved from "@/components/GetInvolved";
import Help from "@/components/Help";
import Hero from "@/components/Hero";
import bg from "@/public/assets/child-4907685_1920.jpg";
import { GiPayMoney, GiReceiveMoney, GiTakeMyMoney } from "react-icons/gi";
import { MdVolunteerActivism } from "react-icons/md";

const getInvolved = () => {
  return (
    <div>
      <Hero image={bg} imageStyle="grayscale-50">
        <div className="flex flex-col items-start justify-center gap-5 container-width self-end pb-5">
          {/* Content Description */}
          <p className="text-white text-sm sm:text-lg tracking-widest font-mono text-shadow">
            Ways to Support
          </p>

          {/* Content Header */}
          <h1 className="text-white text-5xl lg:text-7xl font-semibold font-lato">
            Let&apos;s Spread Smile Not Tears
            <br /> Come Cultivate Love Not Fears
          </h1>
        </div>
      </Hero>

      <CustomSection
        title="“It takes a Society to raise a child”"
        titleStyles="text-start self-start border-b border-custom-orange"
      >
        <p className="self-start">
          This little NGO is steadily growing to cover the whole world. We work
          hard to ensure that no child sleeps without a roof above their head or
          a warm embrace to provide comfort and security.
        </p>

        <p className="self-start">
          The organization has also taken the initiative to start educating
          these children for a better future.
        </p>

        <p className="self-start">
          But we can&apos;t possibly do this without you. Your tiniest support
          can go a long way to making their big dreams come true.
        </p>
      </CustomSection>
      <GetInvolved />
      <CustomSection title="Our promise" titleStyles="border-b border-custom-orange">
        <p className="text-center font-lato">
          We assure you that all your donations will reach these children and be
          invested in their future.
        </p>

        <p className="text-center font-lato">
          If a single drop of water can start a ripple effect in the ocean then
          one penny from your end can also leave a lasting impression <br /> on
          these lives.{" "}
          <span className="text-lg font-mono font-semibold tracking-widest">
            Every Penny Counts
          </span>
        </p>

        <p className="text-center font-mono font-semibold tracking-widest">
          Make Your Contribution for Their Future.
        </p>

        <div className="flex items-end justify-center md:justify-between flex-wrap gap-10 w-full mt-10">
          <div className="flex flex-col items-center justify-center">
            <MdVolunteerActivism size={50} className="text-custom-orange" />

            <h4 className="p-5 text-center font-bold font-lato">Volunteer</h4>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <GiPayMoney size={50} className="text-yellow-400 ml-6" />
              <GiReceiveMoney size={50} className="text-yellow-400 mr-5" />
            </div>

            <h4 className="p-5 text-center font-bold font-lato">
              Giving Wednesdays
            </h4>
          </div>
          <div className="flex flex-col items-center justify-center">
            <GiTakeMyMoney size={50} className="text-green-600" />

            <h4 className="p-5 text-center font-bold font-lato">Fundraise</h4>
          </div>
        </div>

        <div className="mt-14">
          <Button title="Donate Now" href="&#" />
        </div>
      </CustomSection>
      <Help />
    </div>
  );
};

export default getInvolved;
