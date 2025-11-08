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


      <button className=" bg-black-200 flex  px-4 py-4 rounded-lg justify-center items-center overflow-hidden group relative z-20 cursor-pointer mt-5 md:w-80 md:h-16 w-60 h-12">

        <div className='absolute -right-10 origin-center top-1/2 -translate-y-1/2 w-[120%] h-[120%] group-hover:size-10 group-hover:right-10 rounded-full bg-white-50 transition-all duration-500' />

        <p className='uppercase md:text-lg  text-black transition-all duration-500 group-hover:text-white-50 group-hover:-translate-x-5 xl:translate-x-0 -translate-x-5'>See more woks</p>

        <span className='group-hover:bg-white-50 size-10 rounded-full absolute right-10 top-1/2 -translate-y-1/2 flex justify-center items-center overflow-hidden'><IoIosArrowRoundDown className='text-black size-8 xl:-translate-y-32 translate-y-0 animate-bounce group-hover:translate-y-0 transition-all duration-500' /></span>

      </button>

    </div>
  )
}

export default AnimatedCounter
