import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { testimonials } from "../data/index"
const Titimonials = () => {
  return (
    <section className='w-full px-5 md:px-20 mt-20' id="tistimonails">
      <div className=''>
        <TitleHeader
          subtitle="client feedback highlights"
          title="What people Say About Me?" />


        <div className=' columns-1 md:columns-2 lg:columns-2 mt-20 '>
          {testimonials.map((client, index) => (
            <div className='w-full  card card-border  rounded-xl p-10 flex flex-col gap-1 mb-2 ' key={index}>
              <div className="glow" />

              <div className="flex items-center gap-1 mb-5">
                {Array.from({ length: 5 }, (_, i) => (
                  <img src="./images/star.png" alt="" key={i} />
                ))}
              </div>

              <p className='text-white-50 text-lg mb-5'>{client.review}</p>

              <div className='flex flex-row  gap-2'>
                <img src={client.imgPath} alt="" className='w-10 h-10' />
                <div className='flex flex-col'>
                  <span className='font-bold'>{client.name}</span>
                  <span className='text-white-50'>{client.mentions}</span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Titimonials
