import React from "react";
import { Hero, About, Projects, Skills, Footer} from "../components";




const Home = ({ projects }) => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects projects={projects} />
      <Footer />
     
    </>
  );
};

export default Home;
