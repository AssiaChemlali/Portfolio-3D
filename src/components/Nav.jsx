
import React, { useEffect, useRef, useState } from 'react'
import { navLinks } from '../data'
import { motion } from 'motion/react'


const Nav = () => {
  const refs = useRef([])
  const [active, setActive] = useState(navLinks[0].name)
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0
  })
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
    <nav className='hidden lg:flex items-center'>
      <ul
        onMouseLeave={handleLeaveMouse}
        className='relative mx-auto flex w-fit p-1  px-10 '>
        {
          navLinks.map((link, index) => (
            <li key={link.name} >
              <a
                ref={e => refs.current[index] = e}
                onMouseEnter={() => handleEntreMouse(index)}
                onClick={() => setActive(link.name)}
                className={`relative z-10 flex cursor-pointer px-2 py-1.5 text-sm capitalize text-white-50 mix-blend-difference lg:px-5 lg:py-3 lg:text-base font-normal `}

                href={link.link}>
                {link.name}
              </a>
            </li>
          )
          )}

        <motion.li
          className='absolute z-0 h-7 rounded-full bg-white lg:h-12 '
          animate={{ ...position }} />
      </ul>
    </nav>
  )
}

export default Nav
