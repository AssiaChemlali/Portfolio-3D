import React from 'react'
import Button from '../components/Button'
import {words} from '../data/index'
import { IoIosArrowRoundDown } from "react-icons/io";
const Hero = () => {
  return (
    <section  id="hero" className='relative overflow-hidden '>

      <div className="hero-layout">
        {/* left content */}
        <div className='flex flex-col justify-center  gap-7 px-5 md:w-full md:px-20 '>

            <div className="hero-text ">
              <h1>Shaping 
                <span className="slide">
                  <span className="wrapper">
                        {words.map((word,index)=>(
                        <span className='flex items-center gap-1 md:gap-3 pd-2'>
                          <img 
                          src={word.imgPath} 
                          alt={word.text} 
                          className='bg-white-50 rounded-full p-1 size-7 md:size-10 xl:size-12 md:p-2'/>
                        <span key={index} > {word.text} </span>
                        </span>
                      ))}
                  </span>
                </span>
              
              
              </h1>
              <h1 >into Real Projects</h1>
              <h1 >that Deliver Results</h1>

            </div>
         
          <p className='relative z-10 pointer-events-none text-white-50 md:text-xl'>Hi, I’m Adrian, a developer based in Croatia with a passion for code.</p>
          <Button 
          text="See My Work" 
          id="button" 
          className="" 
          icon={<IoIosArrowRoundDown />}/>
        </div>

        {/* RIGHT */}
        <figure className=' '>
          <div className="hero-3d-layout">
            <img src="/images/img-hero.png" alt="" />
          </div>
      </figure>
      </div>


    </section>
  )
}

export default Hero
