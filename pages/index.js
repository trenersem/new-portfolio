import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Semenov | Front-End Developer</title>
        <link rel="icon" href="./favicon.png" />

        <meta name="description" content="My portfolio" />
        <meta
          name="keywords"
          content="portfolio meta next semenov front-end seo"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />

        <meta property="og:type" content="Portfolio" />
        <meta property="og:title" content="Semenov Volodymyr" />
        <meta
          property="og:description"
          content="It's my portfolio, here you can view some of my projects, download my CV and contact me "
        />
        <meta property="og:image" content="./about.jpg" />
        <meta property="og:url" content="https://portfolio-798ae.web.app/" />
        <meta property="og:site_name" content="Semenov Volodymyr" />
      </Head>

      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
