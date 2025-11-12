import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { testimonials } from "../data/index"
import GlowCard from '../components/GlowCard'
import { motion } from 'motion/react'
const Titimonials = () => {

  return (
    <section className='w-full px-5 md:px-20 mt-20' id="testimonials">
      <div className=''>
        <TitleHeader
          subtitle="client feedback highlights"
          title="What people Say About Me?" />


        <div className=' grid grid-cols-1 md:grid-cols-2  gap-5 mt-20 '>
          {testimonials.map((client, index) => (
            <GlowCard card={client} index={index} key={index}>
              <div
                

                className='flex flex-row  gap-2'>
                <img src={client.imgPath} alt="" className='w-10 h-10' />
                <div className='flex flex-col'>
                  <span className='font-bold'>{client.name}</span>
                  <span className='text-white-50'>{client.mentions}</span>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Titimonials
