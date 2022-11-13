import React from "react";
import FormForProject from "../components/FormForProject";
import plantsImg from "../public/assets/projects//plants.png";

const plantsInfo = {
  name: "Plants Store",
  description:
    "Responsive websit. One of my first web applications was made by using HTML, CSS and JavaScript",
  img: plantsImg,
  github: "https://github.com/trenersem/plants-website",
  demo: "https://trenersem.github.io/plants-website/",
  tech: ["HTML", "CSS", "Javascript"],
};

const plants = () => {
  return <FormForProject project={plantsInfo} />;
};

export default plants;
