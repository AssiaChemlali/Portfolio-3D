import React, { useState } from 'react'
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

import Header from './sections/Header';
import Loader from './components/Loader';
function App() {
  const [loading, setLoading] = useState(true)
  return (
    <div className='relative'>

      {/* {loading && <Loader />} */}
      {/* {setTimeout(()=>{
        setLoading(false)
      },1000)} */}


      <Navbar />
      <Hero />
      <Work />
      <Logos />
      <Features />
      <Experience />
      <Skills />
      <Titimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
