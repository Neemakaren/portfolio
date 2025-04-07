import React from 'react'
import { FaGithub, FaLinkedin, FaLocationArrow } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col items-center mb-6 py-3">
        <h1 className="text-4xl text-center tracking-wider font-bold leading-normal pt-6 my-2 lg:max-w-[45vw]">
          Ready to take <span className="text-pink-400">your</span> digital{" "}
          <br />
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-4 mb-5 text-center text-[1.2em] leading-relaxed tracking-wider">
          <span className='text-[1.3em] text-pink-400'>Reach out to me today </span>
          and let&apos;s discuss how I can help you achieve your goals.
        </p>
        <a href="mailto:contact@jsmastery.pro">
          <button className="border-4 border-pink-400 flex items-center justify-center px-5 py-2 rounded-sm gap-3 hover:bg-pink-400 hover:text-white">
            let's get in touch <FaLocationArrow />
          </button>
        </a>
      </div>
      <section className="flex justify-between items-center px-2 sm:px-20 cursor-pointer shadow-2xl shadow-blue-500">
        <ul className="flex list-none my-14  space-x-6">
          <li to="/" className="hover:text-[#A5A5A5]">
            Home
          </li>
          <li to="/" className="hover:text-[#A5A5A5]">
            About-Me
          </li>
          <li to="/" className="hover:text-[#A5A5A5]">
            Projects
          </li>
        </ul>
        <div className="flex space-x-4">
          <FaGithub className="sm:text-2xl hover:text-[#d443d0]" />
          <FaLinkedin className="sm:text-2xl hover:text-[#f14f4f]" />
        </div>
      </section>
    </>
  );
}

export default Footer