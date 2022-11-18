import Image from "next/image";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  descriptionVariants,
  itemVariants,
  listVariants,
  overviewVariants,
} from "./animation";

interface Props {
  project: {
    name: string;
    description: string;
    img: string;
    github: string;
    demo: string;
    tech: string[];
  };
}

const FormForProject = ({ project }: Props) => {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          src={project.img}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">{project.name}</h2>
          <h3>
            {project.tech
              .slice(0, 3)
              .map((item, i) => (i === 2 ? ` ${item} ` : ` ${item}  |`))}
          </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-4 grid md:grid-cols-5 gap-8 py-8">
        <motion.div
          className="col-span-4"
          variants={overviewVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 variants={descriptionVariants} className="mb-3">
            Overview
          </motion.h2>
          <motion.p variants={descriptionVariants}>
            {project.description}
          </motion.p>
          <a href={project.github} target="_blank" rel="noreferrer">
            <motion.button
              variants={descriptionVariants}
              className="px-8 py-2 mt-4 mr-8"
            >
              Code
            </motion.button>
          </a>
          <a href={project.demo} target="_blank" rel="noreferrer">
            <motion.button
              variants={descriptionVariants}
              className="px-8 py-2 mt-4"
            >
              Demo
            </motion.button>
          </a>
        </motion.div>
        <motion.div
          className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4"
          variants={listVariants}
          initial="hidden"
          transition={{
            type: "tween",
            duration: 2,
            easy: "easeOut",
          }}
          animate="visible"
        >
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <motion.div className="grid grid-cols-3 md:grid-cols-1 ">
              {project.tech.map((item) => (
                <motion.p
                  key={item}
                  className="text-gray-600 py-2 flex items-center"
                  variants={itemVariants}
                >
                  <RiRadioButtonFill className="pr-1" /> {item}
                </motion.p>
              ))}
            </motion.div>
          </div>
        </motion.div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default FormForProject;
