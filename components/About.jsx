import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/about.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-4 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          transition={{
            type: "spring",
            stiffness: 50,
            mass: 1,
            dampimg: 15,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="col-span-2"
        >
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            I am in the business of building responsive UI applications which
            connect with API’s and other backend technologies. I specialize in
            front-end development for web3 applications. I am interested in
            learning new technologies and solving different interesting tasks.
            Though I am most experienced in building front-end applications
            using React, having worked with it for the past five years having
            worked with it for the past five years having worked with it for the
            past five years, I am a quick learner and can pick up new tech
            stacks as needed. Deeply passionate about creating visually
            captivating and intuitive interfaces that enhance
          </p>
          <p className="py-2 text-gray-600">
            I started web developement in 2021. I have experience working
            directly with clients.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my projects.
            </p>
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 300 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "tween",
            duration: 0.3,
            ease: "linear",
          }}
          viewport={{ once: true }}
          className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300"
        >
          <Image
            src={AboutImg}
            className="rounded-xl"
            alt="/"
            placeholder="blur"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
