import React from 'react'
import Button from '../components/Button'
import { navLinks } from '../data'
const Navbar = () => {
  return (

    <header className='flex flex-col w-full '>
      <div className='flex flex-col md:flex-row gap-5  items-center  h-[20vh] justify-between px-20 '>

        <div className=''>
          <a href="#hero" className='text-bold text-2xl text-white-50 font-bold'>Adrian | JSM</a>
        </div>

        {/* desktop menu */}
        <nav className='hidden lg:flex'>
          <ul className='flex flex-row items-center gap-5 text-white-50 hover:text-white '>
            {
              navLinks.map((link)=>(
                <li key={link.name}>
                  <a href={link.link}>
                    <span>{link.name}</span>
                    <span></span>
                  </a>
                </li>
              ))
            }
            
          </ul>
        </nav>

        <div className='flex group'>
          <a className=' bg-white rounded-lg text-black-50 py-2 px-5 font-medium group-hover:bg-black-50  transition-colors  duration-300' href='#contact'>
          <span className='group-hover:text-white transition-colors duration-300'> Contact Me</span>
          </a>
         
        </div>
        
      </div> 

         {/* mobile menu */}
         <nav className='hidden bg-amber-900 px-20 py-5'>
          <ul className='flex flex-col gap-3'>
            {
              navLinks.map((link)=>(
                <li key={link.name}>
                  <a href={link.link}>{link.name}</a>
                </li>
              ))
            }
            
          </ul>
        </nav>
    </header>
  )
}

export default Navbar
