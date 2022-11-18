import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const resume = () => {
  return (
    <>
      <Head>
        <title>Semenov | Resume</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Semenov Volodymyr</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/volodymyr-semenov-872980224/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/trenersem"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Web Development <span className="px-1">|</span> Leadership
              <span className="px-1">|</span> Complex Problem Solving
            </p>
          </div>
          <div className="block sm:hidden">
            <p>Web Development</p>
            <p className="py-2">Leadership </p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Diverse analytical skills, team collaboration, and relationship
          building. Professional and innovative web developer and motivated
          leader, with solid interpersonal abilities and complex problem-solving
          skills. Effective and proven track record of critical thinking and
          idea generation.
        </p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2">
            <span className="font-bold">Technical Skills</span>
            <span className="px-2">|</span>Front-End Web Developer
            <span className="px-2">|</span> HTML
            <span className="px-2">|</span>CSS/ SASS
            <span className="px-2">|</span>Javascript
            <span className="px-2">|</span>React
            <span className="px-2">|</span>Next JS
            <span className="px-2">|</span>Web3
            <span className="px-2">|</span> Typescript
            <span className="px-2">|</span>Redux
            <span className="px-2">|</span>Tailwind
            <span className="px-2">|</span>Vite.js
            <span className="px-2">|</span> Cypress
            <span className="px-2">|</span> Firebase
            <span className="px-2">|</span> RapidAPI
          </p>
        </div>

        <h5 className="text-center underline text-[18px] py-4">
          Professional Experience
        </h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">CyperFlip | Tokenframe</span>
            <span className="px-2">|</span>USA
          </p>
          <p className="py-1 italic">
            Front End Web Developer & PO (11.2021 - 11.2022)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>Develop new frontend functionality for the product;</li>
            <li>
              Extend existing components and apps based on requirements;
              Working with PWA
            </li>
            <li>Increasing functionality</li>
            <li>
              Worked with blockchain technologies, namely with authorization
              through a wallet
            </li>
            <li>Code refactoring (Replacing Hookstate with RTQ )</li>
            <li>
              I was engaged in filling out technical documentation, organizing
              the work of the team. Resolved design issues as needed
            </li>
            <li>Communication with the team and customers</li>
            <li>Deploy to dev and prod services (with Jenkins and manualy)</li>
          </ul>
        </div>

        <h5 className="text-center underline text-[18px] py-4">
          Other Professional Experience
        </h5>

        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">Dnipro, UA</span>
          </p>
          <p className="py-1 italic">
            Personal and Group Trainer / BlasFit (2018 – 2021)
          </p>
          <p className="py-1 italic">
            Nourse/ Dnipro Regional Children&apos;s Clinical Hospital (2018)
          </p>
        </div>

        <h5 className="text-center underline text-[18px] py-4">Education</h5>

        {/* Education */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">Dnipro, UA</span>
          </p>
          <p className="py-1 italic">
            DNIPRO STATE MEDICAL UNIVERSITY (2015 – 2021)
          </p>
        </div>
        <div className="w-full flex justify-center items-center">
          <a href="./Semenov_CV.pdf" download="CV" className="w-[25%]">
            <button className=" p-4 text-gray-100 my-10">Download CV</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default resume;
