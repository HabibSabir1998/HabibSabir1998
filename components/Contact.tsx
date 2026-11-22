import Button from "./ui/Button";
import Reveal from "./ui/Reveal";
import { personalInfo } from "@/data";

const Contact = () => {
  return (
    <section className="w-full py-20 sm:py-40 justify-center flex items-center z-20" id="contact">
      <div className="flex flex-col items-center text-center">
        <Reveal>
          <h2>
            Contact <span className=" bg-gradient-to-r from-purple to-red-700 bg-clip-text text-transparent">
              me.</span>
          </h2>
        </Reveal>
        <p className="max-w-[700px] mt-10">
          {"Have a project in mind or an opportunity to discuss? Let's talk."}
        </p>
        <p className="max-w-[700px] mt-10">
          <a
            className="text-purple font-extrabold hover:scale-105 inline-block transition-transform duration-200"
            href={`mailto:${personalInfo.email}`}
          >
            {personalInfo.email}
          </a>
          {" | "}
          <a
            className="text-purple font-extrabold hover:scale-105 inline-block transition-transform duration-200"
            href={personalInfo.phoneHref}
          >
            {personalInfo.phone}
          </a>
        </p>
        <p className="max-w-[700px] mt-5">
          <a
            className="text-purple font-extrabold hover:scale-105 inline-block transition-transform duration-200"
            target="_blank"
            rel="noopener noreferrer"
            href={personalInfo.linkedin}
          >
            LinkedIn
          </a>
          {" | "}
          <a
            className="text-purple font-extrabold hover:scale-105 inline-block transition-transform duration-200"
            target="_blank"
            rel="noopener noreferrer"
            href={personalInfo.github}
          >
            GitHub
          </a>
        </p>

        <a className="mt-10" href={`mailto:${personalInfo.email}`}>
          <Button
            title="Let's connect"
            icon={<img src="assets/send.svg" />}
            position="right"
          />
        </a>
      </div>
    </section>
  );
};

export default Contact;
