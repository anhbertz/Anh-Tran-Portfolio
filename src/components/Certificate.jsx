import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { certificates } from "../constants";

const EduCard = ({
  index,
  name,
  date,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-primary p-10 rounded-3xl xs:w-[320px] w-full'
  >

    <div className='mt-1'>
      <a href="https://www.coursera.org/account/accomplishments/specialization/LYQHBJ99DCJ7" className='text-white tracking-wider text-[22px] no-underline' target="_blank">
        <p>{name}</p>
      </a>
      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[20px]'>
            <span className='blue-text-gradient'>{date}</span>
          </p>
        </div>
        <img
          src={image}
          alt={`${name}`}
          className='w-14 h-14 rounded-full object-cover'
        />
      </div>
    </div>
  </motion.div>
);

const Education = () => {
  return (
    <div className="mt-12 bg-black-200 rounded-[20px]">
      <div
        className={`bg-black-100 rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What I have</p>
          <h2 className={styles.sectionHeadText}>Certificates</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {certificates.map((testimonial, index) => (
          <EduCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Education, "");