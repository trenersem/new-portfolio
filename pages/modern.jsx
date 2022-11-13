import React from "react";
import FormForProject from "../components/FormForProject";
import hoobankImg from "../public/assets/projects/hoobank.png";

const modernInfo = {
  name: "Hoobank",
  description:
    " Modern responsive React JS application consisting of a stunning hero section, high-quality assets and gradients, business stats, reusable feature sections with call-to-action buttons, testimonials, and more!",
  img: hoobankImg,
  github: "https://github.com/trenersem/HooBank",
  demo: "https://hoobank-by-semenov.netlify.app/",
  tech: ["React", "Tailwind", "Javascript", "Netlify", "Vite.js"],
};
const modern = () => {
  return <FormForProject project={modernInfo} />;
};

export default modern;
