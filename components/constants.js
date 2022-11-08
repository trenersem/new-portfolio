import halloweenImg from "../public/assets/projects/halloween.png";
import cryptoImg from "../public/assets/projects/crypto.png";
import hoobankImg from "../public/assets/projects/hoobank.png";
import lyricksImg from "../public/assets/projects/lyricks.png";
import plantsImg from "../public/assets/projects/plants.png";
import netflixImg from "../public/assets/projects/netflix.jpeg";
import {
  Html,
  Css,
  Javascript,
  ReactImg,
  Tailwind,
  NextJS,
  Typescript,
  Redux,
} from "../public/assets/skills";

export const navbarItems = [
  { title: "Home", url: "/" },
  { title: "About", url: "/#about" },
  { title: "Skills", url: "/#skills" },
  { title: "Projects", url: "/#projects" },
  { title: "Resume", url: "/resume" },
  { title: "Contact", url: "/#contact" },
];

export const skills = [
  { title: "HTML", icon: Html },
  { title: "CSS", icon: Css },
  { title: "JavaScript", icon: Javascript },
  { title: "React", icon: ReactImg },
  { title: "Typescript", icon: Typescript },
  { title: "Redux", icon: Redux },
  { title: "Next", icon: NextJS },
  { title: "Tailwind", icon: Tailwind },
];

export const projects = [
  {
    title: "iMovie",
    icon: netflixImg,
    url: "/imovie",
    tech: "React JS",
  },
  {
    title: "Crypto App",
    icon: cryptoImg,
    url: "/crypto",
    tech: "React JS",
  },
  {
    title: "Lyricks",
    icon: lyricksImg,
    url: "/lyricks",
    tech: "React JS",
  },
  {
    title: "Modern App",
    icon: hoobankImg,
    url: "/modern",
    tech: "React JS",
  },
  {
    title: "Plants Store",
    icon: plantsImg,
    url: "/plants",
    tech: "JS",
  },
  {
    title: "Halloween",
    icon: halloweenImg,
    url: "/halloween",
    tech: "JS",
  },
];
