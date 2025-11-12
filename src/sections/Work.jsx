import React from 'react'
import { useRef } from 'react'
import { gsap } from 'gsap/gsap-core'
import { useGSAP } from '@gsap/react'
import { easeInOut, motion } from 'motion/react'
const Work = () => {
 

 
  const variants = {
    initial: { opacity: 0, y: 50 },
    animate: (index) => ({
      opacity: 1, y: 0,
      transition: {
        ease:easeInOut,
        duration:1,
        delay: index * 0.3,
        
        
      }

    })
  }

  return (
    <motion.section 
          initial={{opacity:0}}
          animate={{opacity:1,duration:1.5}}
        
    className='w-full mt-20 px-5 md:px-20 py-10 md:py-20 flex items-center justify-center' id="work" >
      <div className='flex flex-col xl:flex-row gap-10 justify-between'>
        {/* LEFT */}

        <motion.div
          variants={variants}
          initial="initial"
          whileInView="animate"
          custom={1}
          className="w-full h-full flex flex-col  justify-between xl:w-[60%]" >

          <div className="xl:h-[70vh] md:h-[50vh] h-96 relative">
            <img
              src="./images/project1.png"
              alt=""
              className='w-full h-full object-cover rounded-xl absolute inset-0 ' />

          </div>
          <div className='space-y-5 mt-5'>
            <h2 className='text-white font-bold text-2xl md:text-3xl lg:text-4xl '>on-Demand Rides Made Simple with a poweful, user-friendly App called ryde</h2>
            <p className='text-white-50 text-xl '>An app built with React Native, Expo, & TailwindCSS for a fast, user-friendly experience.</p>
          </div>

        </motion.div>

        {/* RIGHT */}
        <div className="flex flex-col gap-10 md:flex-row  xl:flex-col  xl:w-[40%] overflow-hidden">

          <motion.div 
          variants={variants}
          initial="initial"
          whileInView="animate"
          custom={2}
          className=" " >
            <div className='bg-amber-50 rounded-xl xl:h-[37vh] md:h-52 lg:h-72 h-64 relative xl:px-5 2xl:px-12 py-0'>
              <img src="./images/project2.png" alt="" className='rounded-2xl p-5 object-cover h-full w-full' />
            </div>
            <h2 className='text-lg font-semibold md:text-xl lg:text-2xl mt-5'>The Library Management Platform</h2>
          </motion.div>


          <motion.div 
          variants={variants}
          initial="initial"
          whileInView="animate"
          custom={3}
          className=" " >
            <div className='bg-blue-100 rounded-xl xl:h-[37vh] md:h-52 lg:h-72 h-64 relative xl:px-5 2xl:px-12 py-0'>
              <img src="./images/project3.png" alt="" className='rounded-2xl p-5 object-cover h-full w-full' />
            </div>
            <h2 className='text-lg font-semibold md:text-xl lg:text-2xl mt-5'>YC Directory - A Startup Showcase App</h2>
          </motion.div>


        </div>
      </div>

    </motion.section>
  )
}

export default Work
