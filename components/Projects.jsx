import React from "react";
import ProjectItem from "./ProjectItem";
import { projects } from "./constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.div
      id="projects"
      className="w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <div className="max-w-[1240px] mx-auto px-4 py-16 overflow-x-hidden">
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
      </div>
    </motion.div>
  );
};

export default Projects;
