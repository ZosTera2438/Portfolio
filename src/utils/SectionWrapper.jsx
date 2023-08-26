import { motion } from "framer-motion";

import { staggerContainer } from "./motion";

const SectionWrapper = (Component) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="sm:px-16 px-10 sm:py-16 py-10 max-w-7xl mx-auto relative z-0"
      >
        <Component />
      </motion.section>
    );
  };

export { SectionWrapper };
