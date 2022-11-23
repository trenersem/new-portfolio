import React from "react";
import ProjectItem from "./ProjectItem";
import { projects } from "./constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full  overflow-x-hidden max-w-[100wv]"
    >
      <motion.div
        className="max-w-[1240px] mx-auto px-4 py-16 "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectItem
              key={project.title}
              title={project.title}
              backgroundImg={project.icon}
              projectUrl={project.url}
              tech={project.tech}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
