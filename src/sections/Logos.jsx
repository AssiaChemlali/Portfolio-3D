import React from 'react'
import { logoIconsList } from '../data/index'
const Logos = () => {
  return (
    <div className='my-10 md:my-20 relative'>
      <div className="gradient-edge" />
      <div className="gradient-edge" />
      <div className="w-dvw overflow-hidden relative h-52">
      <div className="flex items-center w-[200%] h-full  absolute overflow-hidden marquee-box md:gap-12 gap-5">
        {logoIconsList.map((logo, index) => (
          
          <div className=" flex justify-center items-center float-left">
            <img key={index} src={logo.imgPath} alt="logo" className='w-40' />
          </div>
        ))}
      </div>
</div>
    </div>
  )
}

export default Logos
