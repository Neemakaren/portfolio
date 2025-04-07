import React from "react";

const About = () => {
  return (
    <section className="bg-[#F5F5F5]" id='about'>
      <section className="container flex-col mx-auto bg-[#F5F5F5] flex md:flex-row my-14 md:my-20 text-center">
        <div className="flex flex-col px-4 md:px-9 ">
          <h4 className="md:flex py-6 md:py-1 flex justify-center items-center text-2xl font-bold mb-7">
            {" "}
            <mark className="bg-orange-400 px-4 rounded-md font-Cedarville">
              About Me
            </mark>
          </h4>
          <p className="font-Cedarville text-2xl leading-loose">
            A creative front-end developer having a keen eye on design
            technologies, creating great user-friendly and responsive web
            designs and layouts great for SEO. Leveraging Figma, Canva, and many
            others. I have strong roots in CSS, HTML, JavaScript, Tailwind and
            React Js that I use to bring the designs to life.
          </p>
          <span className="py-9 font-Licorice text-5xl">Karen</span>
        </div>
      </section>
    </section>
  );
};

export default About;
