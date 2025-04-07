import React from "react";
import {
  css,
  docker,
  figma,
  git,
  html,
  javascript,
  mongodb,
  node,
  react,
  redux,
  tailwind,
} from "../assets";
import { labels } from "../utils/labels";

const Skills = () => {
  return (
    <section className="container mx-auto my-16 select-none px-10">
      <div className="text-center uppercase font-extrabold text-2xl mb-6">
        <h2>
          {" "}
          <mark className="bg-red-400 rounded-md px-2 font-Cedarville">
            My Skills
          </mark>
        </h2>
      </div>

      <div className=" grid grid-cols-4 sm:grid-cols-5 md:grid-cols-4 lg:grid-cols-8  mb-32">
        {labels.map((label) => (
          <div key={label.name} className="w-[8em] mt-6 px-2">
            <img src={label.imgUrl} alt="" className=" h-full w-full object-cover" />
            <span className="flex items-center justify-center font-bold text-[1.2em]">{label.name}</span>

          </div>
        ))}
       
      </div>
    </section>
  );
};

export default Skills;

