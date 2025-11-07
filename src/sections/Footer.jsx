import React from 'react'
import {socialImgs } from "../data/index"
const Footer = () => {
  return (
    <footer className='px-5 md:px-20 py-10'>
      <div className='flex flex-col md:flex-row items-center justify-between gap-5'>
        <p className='text-white-50'>Terms & Conditions</p>
        <ul className='flex flex-row gap-2 '>
          {socialImgs.map((social,index)=>(
            <li key={index} className='border border-black-200 p-3 rounded-xl hover:bg-black-200 transition-all'><img src={social.imgPath} alt="" /></li>
          ))}
        </ul>
        <p className='text-white-50'>© 2025 Adrian Hajdin. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
