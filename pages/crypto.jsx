import React from "react";
import cryptoImg from "../public/assets/projects/crypto.png";
import FormForProject from "../components/FormForProject";

const cryptoInfo = {
  name: "Crypto App",
  description:
    " I built this app to demonstrate knowledge working in React JS and accessing API endpoints. I using React best practices, State Management Redux Toolkit, UI Creation using Ant Design, creating charts using Chart.js, and fetching data from multiple sources using RapidAPI",
  img: cryptoImg,
  github: "https://github.com/trenersem/cryptoo-app",
  demo: "https://crypto-stats-by-semenov.netlify.app/",
  tech: [
    "React",
    "Ant Design",
    "Chart.js",
    "Redux Toolkit",
    "Netlify",
    "Rapid API",
  ],
};
const crypto = () => {
  return <FormForProject project={cryptoInfo} />;
};

export default crypto;
