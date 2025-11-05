import React from 'react'
import { useRef } from 'react'
import { gsap } from 'gsap/gsap-core'
import { useGSAP } from '@gsap/react'
const Work = () => {
  const sectionRef = useRef(null)
  const project1Ref = useRef(null)
  const project2Ref = useRef(null)
  const project3Ref = useRef(null)

  useGSAP(()=>{
    gsap.fromTo(
      sectionRef.current,
      {opacity:0},
      {opacity:1,duration:1.5}
    )
    const projects=[project1Ref.current,project2Ref.current, project3Ref.current]
   
    projects.forEach((card,index)=>{
      gsap.fromTo(
        card,{
          y:50,
          opacity:0
        },
        {
          y:0,
          opacity:1,
          duration:1,
          delay:0.3 *(index + 1),
          scrollTrigger:{
            trigger:card,
            start:"top bottom-=100"

          }

        }
      )
    })

  },[])


  return (
    <section className='w-full mt-20 px-5 md:px-20 py-10 md:py-20 flex items-center justify-center' id="work" ref={sectionRef}>
      <div className='flex flex-col xl:flex-row gap-10 justify-between'>
        {/* LEFT */}

        <div className="w-full h-full flex flex-col  justify-between xl:w-[60%]" ref={project1Ref}>

          <div className="xl:h-[70vh] md:h-[50vh] h-96 relative">
            <img src="./images/project1.png" alt="" className='w-full h-full object-cover rounded-xl absolute inset-0' />

          </div>
          <div className='space-y-5 mt-5'>
            <h2 className='text-white font-bold text-2xl md:text-3xl lg:text-4xl '>on-Demand Rides Made Simple with a poweful, user-friendly App called ryde</h2>
            <p className='text-white-50 text-xl '>An app built with React Native, Expo, & TailwindCSS for a fast, user-friendly experience.</p>
          </div>

        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-10 md:flex-row  xl:flex-col  xl:w-[40%] overflow-hidden">

          <div className=" " ref={project2Ref}>
            <div className='bg-amber-50 rounded-xl xl:h-[37vh] md:h-52 lg:h-72 h-64 relative xl:px-5 2xl:px-12 py-0'>
              <img src="./images/project2.png" alt="" className='rounded-2xl p-5 object-cover h-full w-full' />
            </div>
            <h2 className='text-lg font-semibold md:text-xl lg:text-2xl mt-5'>The Library Management Platform</h2>
          </div>


          <div className=" " ref={project3Ref}>
            <div className='bg-blue-100 rounded-xl xl:h-[37vh] md:h-52 lg:h-72 h-64 relative xl:px-5 2xl:px-12 py-0'>
              <img src="./images/project3.png" alt="" className='rounded-2xl p-5 object-cover h-full w-full' />
            </div>
            <h2 className='text-lg font-semibold md:text-xl lg:text-2xl mt-5'>YC Directory - A Startup Showcase App</h2>
          </div>


        </div>
      </div>

    </section>
  )
}

export default Work
