import React from 'react'
import img from '../assets/img-1.jpg'
import Navbar from './Navbar'



const Hero = () => {
  return (
  <header className='h-screen relative font-Cedarville'>
    <Navbar />
    <div className='image w-[100%] h-[100%] bg-no-repeat bg-cover'>
      
      <div className='h-full text-[1em] flex flex-col items-center justify-center font-extrabold w-[90%] uppercase lg:text-[1.2em] sm:w-[70%]  mx-auto text-center space-y-5'>
    
        <h2><mark className='bg-[#fff176] px-4'>Hi There I'm Karen</mark></h2>
        <p className=' border-black border-x-8 px-4 text-[20px] sm:leading-10'> <mark className='bg-pink-300 px-2 rounded-md sm:text-[30px]'>CREATIVE FRONT-END WEB DEVELOPER</mark> <br />
          <span className='text-[18px]'> I love creating beautiful user experiences</span></p>
      </div>
    </div>
  </header>
  )
}

export default Hero