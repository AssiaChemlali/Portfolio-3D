import React, { useEffect, useRef, useState } from 'react'
import { navLinks } from '../data'
import { motion } from 'motion/react'

const Navbar = () => {
  const [active, setActive] = useState(navLinks[0].name)
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0
  })
  const [scrolled, setScrolled] = useState(false)

  const refs = useRef([])

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      setScrolled(isScrolled)
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
  const handleEntreMouse = (index) => {
    updatePosition(index)

  }

  // update cursor position
  const updatePosition = (index) => {
    const ref = refs.current[index];
    if (!ref) return;
    const { width } = ref.getBoundingClientRect();
    setPosition({ left: ref.offsetLeft, width, opacity: 1 });
  };
  const activeIndex = useRef(null)


  useEffect(() => {
    const handleScroll = () => {
      navLinks.forEach((link, index) => {
        const section = document.querySelector(link.link);

        if (!section) return;
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const scrollY = window.scrollY + window.innerHeight / 2;

        if (scrollY >= top && scrollY < top + height) {
         
          if (activeIndex.current !== index) {
            activeIndex.current = index
            updatePosition(index)
            setActive(navLinks[index].name)

          }




        }
      });
    };

    window.addEventListener('scroll', handleScroll);
     handleScroll(); // run once on load
    return () => window.removeEventListener('scroll', handleScroll);

  }, [active, activeIndex]);


  return (

    <header className={` fixed w-full  left-1/2 py-6 px-5 md:px-20 -translate-1/2 transition-all duration-300 ease-in-out z-50 mt-5 ${scrolled ? 'md:top-10  ' : 'md:top-10 top-0 bg-transparent '}`}>

      <div

        className='mx-auto flex items-center w-fit justify-between border-2 border-black rounded-full px-5 bg-white '>

        <a href="." className='text-semibold text-xl  md:text-2xl text-black font-bold transition-transform duration-300 '>Adrian | JSM</a>

        {/* de activeIndex.current=index sktop menu */}
        <nav className='hidden lg:flex items-center'>
          <ul
            onMouseLeave={handleLeaveMouse}
            className='relative mx-auto flex w-fit p-1  px-10 '>
            {
              navLinks.map((link, index) => (
                <li
                  key={link.name}


                >
                  <a

                    ref={e => refs.current[index] = e}
                    onMouseEnter={() => handleEntreMouse(index)}
                    onClick={() => setActive(link.name)}
                    className={`relative z-10 flex cursor-pointer px-2 py-1.5 text-sm capitalize text-white-50 mix-blend-difference md:px-5 md:py-3 md:text-base font-normal `}

                    href={link.link}>
                    {link.name}
                  </a>
                </li>

              )
              )}

            <motion.li
              className='absolute z-0 h-7 rounded-full bg-black md:h-12 '
              animate={{ ...position }} />
          </ul>
        </nav>

        <div className='flex group'>
          <a className=' bg-black rounded-lg text-white py-2 px-5 font-medium  transition-colors  duration-300 ' href='#contact'>
            <span className=' transition-colors duration-300'> Buy Now</span>
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
