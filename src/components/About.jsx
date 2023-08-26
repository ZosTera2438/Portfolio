import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { services } from "../utils/constants";
import { SectionWrapper } from "../utils/SectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt={icon}
          draggable="false"
          className="h-40 w-40 object-contain"
        />
        <h3 className="text-white font-serif text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="text-sectionSubText text-secondary font-sans uppercase tracking-wider">
          Introduction
        </p>
        <h2 className="items-baseline flex flex-row font-serif space-x-2 md:text-5xl text-3xl font-semibold text-white">
          About&nbsp;
          <i className="text-teal-400 font-merriweather">Me</i>
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary font-sans max-w-2xl"
      >
        I am pursing BTech in&nbsp;<i>Engineering Physics,</i>&nbsp;(majors) Electronics, (minors) Computer
        Science from Delhi Technological University (formerly DCE). <br />
        <br /> I wish to use my technical acumen to contribute to a team that
        works to create a positive impact on the society.
      </motion.p>

      <div className="mt-20 flex flex-wrap justify-center gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About);
