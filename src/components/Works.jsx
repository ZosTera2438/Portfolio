import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { github } from "../assets";
import { SectionWrapper } from "../utils/SectionWrapper";
import { projects } from "../utils/constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  image,
  demo_link,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-2xl w-[360px]"
      >
        <div
          onClick={() => window.open(demo_link, "_blank")}
          className="relative cursor-zoom-in"
        >
          <img
            src={image}
            alt="project_image"
            className="w-full h-full rounded-b-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="p-5">
          <h3 className="text-white text-sectionSubText font-merriweather text-lg">
            {name}
          </h3>
          <p className="mt-2 text-secondary text-sectionSubText font-serif">
            {description}
          </p>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className="text-white font-semibold font-serif items-baseline flex flex-row space-x-2 md:text-5xl text-4xl">
          My&nbsp;<i className="text-teal-400 font-merriweather">WORK</i>
        </h2>
      </motion.div>
      <div className="mt-8 flex flex-wrap justify-evenly gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
