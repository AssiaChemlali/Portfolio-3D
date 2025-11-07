import React from 'react'
import Navbar from './sections/Navbar';
import Hero from './sections/Hero'
import Work from './sections/Work'
import Logos from './sections/Logos';
import Features from './sections/Features';
import Experience from './sections/Experience'
import Titimonials from './sections/Titimonials'
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Work />
      <Logos/>
      <Features/>
      <Experience/>
      <Skills/> 
      <Titimonials/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
