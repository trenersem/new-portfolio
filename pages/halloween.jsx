import Image from "next/image";
import React from "react";
import halloweenImg from "../public/assets/projects/halloween.png";
import FormForProject from "../components/FormForProject";

const halloweenInfo = {
  name: "Halloween",
  description:
    "  Responsive websit. One of my first web applications was made by using HTML, CSS and JavaScript",
  img: halloweenImg,
  github: "https://github.com/trenersem/halloween-website",
  demo: "https://trenersem.github.io/halloween-website/halloween-website/index.html",
  tech: ["HTML", "CSS", "Javascript"],
};
const halloween = () => {
  return <FormForProject project={halloweenInfo} />;
};

export default halloween;
