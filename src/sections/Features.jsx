import React from 'react'
import { abilities } from '../data/index'
const Features = () => {
  return (
    <div className='px-5 md:px-20 '>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5  ">
        {abilities.map((ability) => (
          <div className='bg-black-100 p-10 rounded-xl border border-zinc-900 space-y-3'>
            <img src={ability.imgPath} alt="" className='' />
            <h3 className='text-2xl font-semibold'>{ability.title}</h3>
            <p className='text-white-20 '>{ability.desc}</p>

          </div>
        ))}
      </div>


    </div>
  )
}

export default Features
