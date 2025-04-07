import React from "react";
import img from "../assets/img-1.jpg";
import Navbar from "./Navbar";
import { FaGithub, FaLinkedin, FaLocationArrow } from "react-icons/fa";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { Link } from "@heroui/react";

const Hero = () => {
  return (
    <header className="h-screen relative font-Cedarville">
      <Navbar />
      <div className="image w-[100%] h-[100%] bg-no-repeat bg-cover">
        <div className="h-full text-[1em] flex flex-col items-center justify-center font-extrabold w-[90%] uppercase lg:text-[1.2em] sm:w-[70%]  mx-auto text-center">
          <p className="uppercase tracking-widest text-[.8em] text-center">
            Dynamic Web Magic with React.js
          </p>

          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider text-sm md:text-lg lg:text-[.89em]">
            Hi! I&apos;m Karen, a React.js Developer.
          </p>

          <div className="flex gap-6 my-10">
            <a href=" https://github.com/Neemakaren">
              <FaGithub className="text-3xl sm:text-4xl hover:text-[#d443d0]" />
            </a>
            <a href="https://www.linkedin.com/in/karen-kibugi">
              <FaLinkedin className="text-3xl sm:text-4xl hover:text-[#f14f4f]" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
