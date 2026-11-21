"use client";

import { projects, mobileApps } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import Reveal from "./ui/Reveal";

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <Reveal>
         <h3>
          Recent{" "}
          <span className="bg-gradient-to-r from-purple to-red-700 bg-clip-text text-transparent">
            projects.</span>
        </h3>
      </Reveal>
      <BentoGrid className="w-full py-20">
        {projects.map((item, i) => (
          <BentoGridItem
            key={item.id}
            {...item}
          />
        ))}
      </BentoGrid>

      <Reveal>
        <h3>
          Mobile{" "}
          <span className="bg-gradient-to-r from-purple to-red-700 bg-clip-text text-transparent">
            apps.</span>
        </h3>
      </Reveal>
      <BentoGrid className="w-full py-20 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {mobileApps.map((item) => (
          <BentoGridItem
            key={item.id}
            {...item}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Projects;
