import React from "react";
import FormForProject from "../components/FormForProject";
import lyricksImg from "../public/assets/projects/lyricks.png";

const lyricksInfo = {
  name: "Spotify-app",
  description:
    " Master modern web development by building an improved version of Spotify. With a modern homepage, fully-fledged music player, search, lyrics, song exploration features, search, popular music around you, worldwide top charts, and much more.",
  img: lyricksImg,
  github: "https://github.com/trenersem/spotify-app",
  demo: "https://lyricks-by-semenov.netlify.app/",
  tech: [
    "React",
    "Redux Toolkit",
    "Tailwind",
    "Javascript",
    "Rapid API",
    "Vite.js",
  ],
};

const lyricks = () => {
  return <FormForProject project={lyricksInfo} />;
};

export default lyricks;
