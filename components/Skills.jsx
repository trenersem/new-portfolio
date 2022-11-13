import Image from "next/image";
import React from "react";
import { skills } from "./constants";
import { motion } from "framer-motion";
import {
  descriptionVariants,
  overviewVariants,
  skillsListVariants,
} from "./animation";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-4">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          variants={skillsListVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.title}
              className="p-6 shadow-xl rounded-xl duration-300"
              variants={descriptionVariants}
              transition={{
                easy: "ease-in",
              }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src={skill.icon}
                    width="64px"
                    height="64px"
                    alt="/"
                    placeholder="blur"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>{skill.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
