import React, { useEffect, useState } from 'react'
import { navLinks } from '../data'
const Navbar = () => {
    const[scrolled,setScrolled]=useState(false)
    useEffect(()=>{
       const handleScroll=()=>{
        const isScrolled=window.scrollY > 10
        setScrolled(true)
       }

    window.addEventListener('scroll',handleScroll)
    return  ()=>window.removeEventListener('scroll',handleScroll)

    },[])

  return (
  
    <header className={`fixed w-full  left-1/2 py-5 px-5 md:px-20 -translate-1/2 transition-all duration-300 ease-in-out z-100 ${scrolled ? 'top-0 bg-black':'md:top-10 top-0 bg-transparent'}`}>

      <div className='mx-auto flex items-center   justify-between '>
        
        <a href="#hero" className='text-semibold text-xl  md:text-2xl text-white-50 font-bold transition-transform duration-300 hover:scale-105'>Adrian | JSM</a>
        
        {/* desktop menu */}
        <nav className='hidden lg:flex items-center'>
          <ul className='flex space-x-8 '>
            {
              navLinks.map((link)=>(
                <li key={link.name} className='text-white-50 group relative'>
                  <a href={link.link}>
                    <span className='transition-colors duration-300 hover:text-white'>{link.name}</span>
                    <span className=' hover:text-white absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full'></span>
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
