import React, { useEffect, useState } from 'react'
import { navLinks } from '../data'
import { LuSunMedium } from "react-icons/lu";
import { FaRegMoon } from "react-icons/fa6";
import Nav from '../components/Nav';
import { IoMenu } from "react-icons/io5";
import { easeIn, easeInOut, motion,AnimatePresence } from 'motion/react';
const Navbar = () => {

  let savedTheme = localStorage.getItem('theme') || 'dark'
  const [theme, setTheme] = useState(savedTheme)
  const [scrolled, setScrolled] = useState(false)
  const [hideMenu,setHideMenu]=useState(true)
  function handleThemeToggle() {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  useEffect(() => {
    document.body.classList.remove("dark", 'light');
    document.body.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme])



  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)

  }, [])

   function handleMenuToggle(e){

  setHideMenu(!hideMenu)
   }

  return (

    <header className={`fixed w-full  left-1/2 py-4 px-5 md:px-20 -translate-x-1/2 transition-all duration-300 ease-in-out z-50 bg-red-500 mt-0 ${scrolled ? ' bg-red-500 md:mt-0' : '  md:bg-transparent md:mt-5'}`}>
      <div className='mx-auto flex items-center  justify-between  px-5  '>
        <a href="." className='text-semibold text-xl  md:text-2xl text-white font-bold transition-transform duration-300 '>Adrian </a>

        {/* Desktop menu */}
        <Nav />

        <div className='flex items-center justify-center gap-2 border-amber-300 mt-0'>
          <button className=' p-2 text-blue-400 border border-blue-500 rounded-full' onClick={handleThemeToggle}>
            {theme === 'light' ? <LuSunMedium /> : <FaRegMoon />}
          </button>
          <button className='flex lg:hidden text-white-50 text-3xl cursor-pointer' onClick={handleMenuToggle}>
          <IoMenu />
        </button>
        </div>
        
      </div>

      {/* mobile menu */}
      <AnimatePresence>
      {
        !hideMenu &&  <motion.nav 
        key="m"
         initial={{opacity:0,y:-100}}
         animate={{opacity:1,y:10}}
         transition={{
          duration:1,
          delay:0.1,
          type:'spring'
         }}
         exit={{ opacity:0,y:-100 }}
        className='flex lg:hidden  px-10 py-5 bg-black-200 z-0'>
        <ul className='flex flex-col gap-3'>
          {
            navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.link}>{link.name}</a>
              </li>
            ))
          }
        </ul>
      </motion.nav>
      
      }
     </AnimatePresence>
    </header>
  )
}

export default Navbar
