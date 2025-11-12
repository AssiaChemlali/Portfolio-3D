import React from 'react'
import Button from '../components/Button'
import { words } from '../data/index'
import { IoIosArrowRoundDown } from "react-icons/io";
import { useGSAP } from '@gsap/react'
import gsap from "gsap"
import Particles from '../components/Particles';
import AnimatedCounter from '../components/AnimatedCounter';
import { easeInOut, motion } from "motion/react"
const Hero = () => {
  return (
    <section id="home" className='relative overflow-hidden pt-30'>
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="" />
      </div>
      <div className="hero-layout  ">
        {/* LEFT */}
        <div className='flex flex-col justify-center px-5 xl:w-[50%] md:px-20 h-screen w-screen  mb-10  '>
          <div className="flex flex-col gap-7  h-full  justify-center">
            <motion.div className="hero-text "
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                delay: 0.2,
                ease: easeInOut

              }}
            >
              <h1
              >Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span className='flex items-center gap-1 md:gap-3 pd-2' key={index}>
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className='bg-white-50 rounded-full p-1 size-7 md:size-10 xl:size-12 md:p-2' />
                        <span  > {word.text} </span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1

                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.1,
                }}

              >into Real Projects</h1>
              <h1
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.1,
                }}


              >that Deliver Results</h1>

            </motion.div>

            <p className='relative z-10 pointer-events-none text-white-50 md:text-xl'>Hi, I’m Adrian, a developer based in Croatia with a passion for code.</p>
            <Button
              text="See My Work"
              scrollTo="work"
              type="button"
              icon={<IoIosArrowRoundDown />} />
          </div>
        </div>

        {/* RIGHT */}
        <figure >
          <div className="hero-3d-layout ">
            <motion.img
             initial={{opacity:0,scale:0.8}}
              whileInView={{opacity:1,scale:1}}
             transition={{duration:1}}
             viewport={{once:true}}
            //  whileHover={{scale:1.2}}

              src="/images/img-hero.png" alt="" />
            {/* <Particles count={100}/> */}
          </div>
        </figure>
      </div>

      <AnimatedCounter />


    </section>
  )
}

export default Hero
