import React from 'react'
import PageLoader from '../components/PageLoader'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import Hero2 from '../components/Hero2'
import Hero3 from '../components/Hero3'
import Rough from '../components/Rough'
import Practice1 from '../components/Practice1'
import Carousel from '../components/Carousel'
import Skills from '../components/Skills'

// import { projects } from '../utils/data'

const Home = ({projects}) => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects projects={projects}/>
      {/* <Carousel /> */}
      {/* <Practice2 /> */}
      <Footer />
    </>
  )
}

export default Home