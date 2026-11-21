import React from "react";
import { education, certifications } from "@/data";
import { Sparkle } from "./ui/Sparkle";

const Education = (): JSX.Element => (
  <section id="education" className="py-20 w-full">
    <h3 className="title">
      My{" "}
      <span className="bg-gradient-to-r from-purple to-red-700 bg-clip-text text-transparent">
        education.
      </span>
    </h3>

    <div className="w-full mt-12 space-y-10">
      {education.map(({ id, institution, degree, period, location }) => (
        <Sparkle key={id} as="div" duration={Math.floor(Math.random() * 10000) + 10000}>
          <div className="p-3 md:p-5 lg:p-10 w-full">
            <div className="flex justify-between text-start gap-5">
              <div>
                <h3 className="text-lg lg:text-3xl font-extrabold">{institution}</h3>
                <p className="text-xl md:text-2xl font-bold mt-3">
                  <span className="bg-gradient-to-r from-purple to-red-700 bg-clip-text text-transparent">
                    {degree}
                  </span>
                </p>
              </div>
              <div className="text-end opacity-80">
                <p>{period}</p>
                <p>{location}</p>
              </div>
            </div>
          </div>
        </Sparkle>
      ))}
    </div>

    {certifications.length > 0 && (
      <>
        <h3 className="title mt-20">
          Certifications{" "}
          <span className="bg-gradient-to-r from-purple to-red-700 bg-clip-text text-transparent">
            & awards.
          </span>
        </h3>
        <div className="w-full mt-12 space-y-10">
          {certifications.map(({ id, name, issuer, year, link }) => (
            <Sparkle key={id} as="div" duration={Math.floor(Math.random() * 10000) + 10000}>
              <div className="p-3 md:p-5 lg:p-10 w-full flex justify-between text-start gap-5">
                <div>
                  <h3 className="text-lg lg:text-3xl font-extrabold">
                    {link ? (
                      <a href={link} target="_blank" rel="noopener noreferrer">{name}</a>
                    ) : (
                      name
                    )}
                  </h3>
                  <p className="text-xl font-bold mt-3">{issuer}</p>
                </div>
                <p className="opacity-80">{year}</p>
              </div>
            </Sparkle>
          ))}
        </div>
      </>
    )}
  </section>
);

export default Education;
