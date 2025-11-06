import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { techStackImgs } from '../data/index'
const Skills = () => {
  return (
    <section id="skills" className='px-5  mt-20'>

      <div className="w-full h-full px-5 md:px-20">
        <TitleHeader
          subtitle="🤝What I Bring to the Table"
          title="How I Can Contribute & My Key Skills" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10   mt-20 ">
          {techStackImgs.map((stack, index) => (
            <div key={index} className="bg-black-100 px-5 py-20  md:rounded-full  flex flex-col items-center border border-black-200">
              <img src={stack.imgPath} alt="" />
              <h1 className='text-center text-2xl md:text-23xl font-white-50 font-bold mt-10'>{stack.name}</h1>
            </div>
          ))}

        </div>
      </div>


    </section>
  )
}

export default Skills
