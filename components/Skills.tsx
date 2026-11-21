import React from "react";
import { skillGroups } from "@/data";
import Reveal from "./ui/Reveal";

const Skills = () => (
  <section id="skills" className="py-20 w-full">
    <Reveal>
      <h3 className="mb-10">
        My{" "}
        <span className="bg-gradient-to-r from-purple to-red-700 bg-clip-text text-transparent">
          skills.
        </span>
      </h3>
    </Reveal>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {skillGroups.map(({ category, items }) => (
        <div
          key={category}
          className="relative overflow-hidden rounded-3xl border border-white/[0.1] transition duration-200 shadow-input dark:shadow-none flex flex-col space-y-4 p-5 lg:p-10"
        >
          <p className="text-lg lg:text-2xl font-extrabold">
            <span className="bg-gradient-to-r from-purple to-red-700 bg-clip-text text-transparent">
              {category}
            </span>
          </p>
          <div className="flex flex-wrap gap-3">
            {items.map((skill) => (
              <div
                key={skill}
                className="bg-white/10 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg hover:bg-white/20 transition duration-200 ease-in-out"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
