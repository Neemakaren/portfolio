import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <section className='flex justify-between items-center px-2 sm:px-20 cursor-pointer shadow-2xl shadow-blue-500'>
        <ul className='flex list-none my-14  space-x-6'>
        <li to='/' className="hover:text-[#A5A5A5]">Home</li>
        <li to='/' className="hover:text-[#A5A5A5]">About-Me</li>
        <li to='/' className="hover:text-[#A5A5A5]">Projects</li>
        
        </ul>
        <div className='flex space-x-4'>
            <FaGithub className='sm:text-2xl hover:text-[#d443d0]'/>
            <FaLinkedin className='sm:text-2xl hover:text-[#f14f4f]'/>
        </div>
    </section>
  )
}

export default Footer