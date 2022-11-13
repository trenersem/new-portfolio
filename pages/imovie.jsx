import React from "react";
import imovie from "../public/assets/projects/netflix.jpeg";
import FormForProject from "../components/FormForProject";

const netflixInfo = {
  name: "IMovie",
  description:
    " Cool modern web-app, something like a Netflix clone, my little experiment, I use TMDB API for all of the data AND, Firebase Authentication to give login functionality, Redux Persis for synchronizing and saving data in local storage, RTQ for connecting requests and manipulating data, The code is typed using TypeScript, UI responded.",
  img: imovie,
  github: "https://github.com/trenersem/iMovie",
  demo: "https://auth-app-d0c58.web.app",
  tech: [
    "React",
    "Redux Toolkit",
    "Typescript",
    "Redux Persist",
    "Firebase",
    "SCSS",
    "Vite.js",
  ],
};
const netflix = () => {
  return <FormForProject project={netflixInfo} />;
};

export default netflix;
