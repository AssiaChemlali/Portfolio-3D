import React from 'react'
import { counterItems } from '../data/index.js'
import CountUp from 'react-countup';
import { IoIosArrowRoundDown } from "react-icons/io";
const AnimatedCounter = () => {
  return (
    <div className='md:px-20 w-full mt-12 xl:mt-0' id="counter">
      <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 items-center justify-between">
        {counterItems.map((counter, index) => (
          <div
            key={index}
            className="flex flex-col justify-center p-10 bg-zinc-900 rounded-lg w-full">
            <h1 className='text-5xl font-bold text-white mb-2'>
              <CountUp suffix={counter.suffix} end={counter.value} />
            </h1>
            <p className='text-white-50 text-lg'>{counter.label}</p>
          </div>
        ))}


      </div>


    </div>
  )
}

export default AnimatedCounter
