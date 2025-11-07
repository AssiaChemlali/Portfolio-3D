import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { expCards } from '../data/index'
import GlowCard from '../components/GlowCard'
const Experience = () => {
  return (
    <section className='px-20 pt-20 md:px-20' id="experience">
      <TitleHeader
        subtitle="💼 My Career Overview"
        title="Professional Work Experience" />

      <div className="mt-20 ">
        {expCards.map((card, index) => (
          <div className='flex xl:flex-row xl:justify-between gap-10 flex-col-reverse ' key={card.title}>
            <div className="w-full xl:w-3/6">
              <GlowCard card={card} index={index} />
            </div>

            <div className='w-full xl:w-4/6 xl:gap-20 flex flex-row  gap-5  mb-5 '>
              <div className="flex flex-col items-center justify-center relative gap-2">
                <img src={card.logoPath} alt="logo" />
                <span className='w-1 h-full bg-black-200 top-0 rounded-full left-20'></span>
              </div>

              <div className='flex flex-col  gap-5 '>
                <h1 className='text-3xl  font-bold text-white'>{card.title}</h1>
                <p className='text-white-50 italic'>{card.date}</p>
                <ul className='space-y-2 text-white-50 list-disc'>
                  {card.responsibilities.map((responsibility, index) => (
                    <li key={index} >{responsibility}</li>
                  ))}
                </ul>
              </div>

            </div>

          </div>
        ))}


      </div>
    </section>
  )
}

export default Experience
