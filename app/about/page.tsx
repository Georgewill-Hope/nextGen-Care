import Button from "@/components/Button";
import Estimate from "@/components/Estimate";
import Hero from "@/components/Hero";
import Impact from "@/components/Impact";
import Structure from "@/components/Structure";
import bg from "@/public/assets/pexels-safari-consoler-3290243-14456845.jpg";
import Image from "next/image";
import miracleTeam from "@/public/assets/MiracleTeam.jpg";

const about = () => {
  return (
    <div>
      <Hero image={bg} imageStyle="grayscale-50">
        <div className="flex flex-col items-start justify-center gap-5 container-width self-end pb-5">
          {/* Content Description */}
          <p className="text-white text-sm sm:text-lg tracking-widest font-mono text-shadow">
            About Next Gen Care
          </p>

          {/* Content Header */}
          <h1 className="text-white text-5xl lg:text-7xl font-semibold font-lato">
            A Family for Every Child in our Lifetime
          </h1>
        </div>
      </Hero>
      <Estimate
        title="The Story Behind Next Generation Care"
        titleStyles="text-start self-start border-b border-custom-orange"
      >
        <p>
          Next Generation Care was founded in response to a quiet but urgent
          reality in Mauritania—a reality where too many children grow up
          without parental care, stability, or a sense of belonging. Across
          communities affected by poverty, displacement, and loss, children are
          often left vulnerable, not because they lack potential, but because
          they lack protection and opportunity.
        </p>

        <p>
          The vision for Next Generation Care began with a deep concern for
          these children and a strong belief that their circumstances should not
          determine their destiny.
        </p>

        <p>
          In many cases, existing support systems focus on short-term
          survival—food for today, shelter for tonight. While these are
          essential, they are not enough. Children also need emotional security,
          education, guidance, and hope.{" "}
          <span className="font-mono text-xl font-bold self-start">
            They need a place where they are seen, heard, and valued.
          </span>
        </p>

        <p className="font-mono text-xl font-bold self-start">
          Next Generation Care was created to be that place!
        </p>

        <p>
          Our orphanage facility is designed to be more than a roof over a
          child&apos;s head. It is a safe and nurturing home where children can
          heal from loss, grow with dignity, and discover their worth. Here,
          care is intentional and long-term—combining education, healthcare,
          emotional support, and life-skills development to prepare each child
          for an independent and meaningful future.
        </p>

        <p>
          The name{" "}
          <span className="text-lg font-mono font-semibold tracking-widest">
            Next Generation Care
          </span>{" "}
          reflects our commitment to Mauritania&apos;s future. By investing in
          vulnerable children today, we are strengthening the next generation of
          leaders, thinkers, and contributors to society. We believe that when
          children are raised in an environment of compassion, structure, and
          opportunity, they do not just survive—they thrive.
        </p>

        <p>
          What began as a vision rooted in empathy has become a mission guided
          by responsibility. Through collaboration with caregivers, educators,
          volunteers, and partners, Next Generation Care is working to restore
          hope where it has been lost and to build a future where every child,
          regardless of their background, has the chance to succeed.
        </p>

        <p className="self-start">
          <span className="text-lg font-mono font-semibold tracking-widest">
            Next Generation Care
          </span>{" "}
          exists because no child should grow up without love, and no future
          should be shaped by neglect. <br /> By caring for Mauritania&apos;s
          children today, we are shaping a stronger, brighter tomorrow.
        </p>
      </Estimate>

      {/* Our Team */}
      <div className="relative container-width h-72 sm:h-150 overflow-hidden group bg-black">
        {/* Team Image */}
        <Image
          src={miracleTeam}
          alt="miracle-team"
          fill
          className="object-top object-contain sm:object-cover grayscale-100 group-hover:scale-150 transition-all ease-in-out duration-500"
        />
        <div className="absolute top-0 bottom-0 left-0 right-0 opacity-0 group-hover:opacity-0 sm:opacity-50 z-10 bg-linear-180 from-gray-200 via-gray-900 to-black transition-opacity ease-in-out duration-500" />
        <div className="absolute top-0 bottom-0 left-0 right-0 perfectCenter bg-black/30 z-20">
          <h4 className="text-5xl sm:text-7xl font-mono text-white font-extrabold text-shadow group-hover:opacity-0 transition-all ease-in-out duration-500 self-end md:self-center">
            OUR TEAM
          </h4>
        </div>
      </div>
      <Estimate title="Who We Are?" titleStyles="text-start self-start">
        <p>
          Next Gen Care is an international organization that works with
          orphanage and foster care systems. We operate in India, Africa, and
          the US to ensure every child can thrive in a nurturing family.
        </p>
        <p>
          Since 2000, we have been dedicated to improving the lives of children.
          We have directly supported more than 50,000 children. Based on the 5
          proven aspects of well-being that must be met for children to thrive,
          we developed a methodology and an app that measures and supports
          children in these areas. We work with local and on-the-ground partners
          to support the social workforce to ensure children thrive in families.
        </p>
        <p>
          <b className="text-lg">
            Our vision is A Family for Every Child in Our Lifetime
          </b>
          . We are a group of committed optimists who believe all children have
          the right to grow up in a caring environment. Our deep belief in
          collaboration has led us to partner with government entities, NGOs,
          and people with lived experience.
        </p>

        <div className="self-start mt-5">
          <Button title="Donate" href="#&" />
        </div>
      </Estimate>
      <Structure />
      <Impact />
    </div>
  );
};

export default about;
