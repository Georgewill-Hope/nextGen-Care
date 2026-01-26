import Help from '@/components/Help';
import Hero from '@/components/Hero';
import Impact from '@/components/Impact';
import Structure from '@/components/Structure';
import bg from "@/public/assets/hossen.jpg";
import { projectData } from '@/utils/_data';

const projects = () => {
  return (
    <div>
      <Hero image={bg} imageStyle="grayscale-50">
        <div className="flex items-center container-width self-end pb-5">
          {/* Content Header */}
          <h1 className="text-white text-start text-5xl lg:text-7xl font-semibold font-lato">
            Next Gen Projects
          </h1>
        </div>
      </Hero>
      <Structure structures={projectData} />
      <Impact />
      <Help />
    </div>
  );
}

export default projects