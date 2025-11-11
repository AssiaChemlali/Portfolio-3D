import React, { useEffect, useRef, useState } from 'react'
import { navLinks } from '../data'
import { motion } from 'motion/react'
const Navbar = () => {

  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0
  })
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      setScrolled(true)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)

  }, [])



  const handleLeaveMouse = () => {
    setPosition(prevData => ({
      ...prevData,
      opacity: 0
    }))
  }
  const handleEntreMouse = (ref) => {
    if (!ref.current) return
    console.log(ref)
    const { width } = ref.current.getBoundingClientRect()
    setPosition({
      left: ref.current.offsetLeft,
      width,
      opacity: 1
    })

  }
  return (

    <header className={` fixed w-full  left-1/2 py-5 px-5 md:px-20 -translate-1/2 transition-all duration-300 ease-in-out z-100 mt-5 ${scrolled ? 'top-0 bg-black  mt-10' : 'md:top-10 top-0 bg-transparent '}`}>

      <div className='mx-auto flex items-center   justify-between border-2 bg-white '>

        <a href="#hero" className='text-semibold text-xl  md:text-2xl text-white-50 font-bold transition-transform duration-300 hover:scale-105'>Adrian | JSM</a>

        {/* desktop menu */}
        <nav className='hidden lg:flex items-center'>
          <ul
            onMouseLeave={handleLeaveMouse}
            className='relative mx-auto flex w-fit rounded-full border-2 border-black bg-white p-1'>
            {
              navLinks.map((link) => {
                const ref = useRef(null)

                return (
                  <li
                    key={link.name}
                    ref={ref}
                    onMouseEnter={() => handleEntreMouse(ref)}
                    className='relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base'>
                    <a
                      href={link.link}>
                      {link.name}
                    </a>
                  </li>

                )
              })
            }
            <motion.li
              className='absolute z-0 h-7 rounded-full bg-black md:h-12 '
              animate={{ ...position }}/>
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
            navLinks.map((link) => (
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
