import Link from "next/link";
import React from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  overviewVariants,
} from "./animation";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <motion.p
            className="uppercase text-sm tracking-widest text-gray-600"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
          >
            LET&#39;S BUILD SOMETHING TOGETHER
          </motion.p>
          <motion.h1
            className="py-4 text-gray-700"
            initial={{ x: -200, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 50,
              mass: 1,
              dampimg: 15,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
          >
            Hi, I&#39;m{" "}
            <span className="text-[#5651e5]"> Semenov Volodymyr</span>
          </motion.h1>
          <motion.h1
            className="py-2 text-gray-700"
            initial={{ x: 200, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 50,
              mass: 1,
              dampimg: 15,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
          >
            A Front-End Web Developer
          </motion.h1>
          <motion.p
            className="py-4 text-gray-600 sm:max-w-[70%] m-auto"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
          >
            I’m focused on building responsive front-end web applications.
          </motion.p>
          <motion.div
            className="flex items-center justify-between max-w-[330px] m-auto py-4"
            variants={overviewVariants}
            initial="hidden"
            animate="visible"
          >
            <a
              href="https://www.linkedin.com/in/volodymyr-semenov-872980224/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/trenersem"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <a
              href="https://www.instagram.com/trenersem/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaInstagram />
              </div>
            </a>
            <Link href="/resume">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Main;
