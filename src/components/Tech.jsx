import React from "react";

import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";
const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>I know how to work with...</p>
        <h2 className={styles.sectionHeadText}>Skills</h2>
      </motion.div>
      <div className='flex flex-row flex-wrap justify-center gap-10 pt-10'>
        {technologies.map((technology) => (
          <div className='w-25 h-25' key={technology.name}>
            <div className="bg-black-200 w-32 h-32 p-6 rounded-full"> {/* Background styling */}
              <img
                src={technology.icon}
                alt={technology.name}
                className='w-20 h-20 justify-center'
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");