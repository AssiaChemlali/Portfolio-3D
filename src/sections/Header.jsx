import React, { useEffect, useRef, useState } from 'react';
import { navLinks } from '../data';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [active, setActive] = useState('Work');
  const [position, setPosition] = useState({ left: 0, width: 0, opacity: 0 });
  const [scrolled, setScrolled] = useState(false);

  // refs array for nav links
  const refs = useRef([]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLeaveMouse = () => {
    setPosition(prev => ({ ...prev, opacity: 0 }));
  };

  const handleEnterMouse = (index) => {
    const ref = refs.current[index];
    if (!ref) return;

    const { width } = ref.getBoundingClientRect();
    setPosition({ left: ref.offsetLeft, width, opacity: 1 });
  };

  return (
    <header className={`fixed w-full left-1/2 py-6 px-5 md:px-20 -translate-x-1/2 transition-all duration-300 ease-in-out z-100 mt-5  ${scrolled ? 'md:top-10' : 'md:top-10 top-0 bg-transparent'}`}>
      <div className='mx-auto flex items-center w-fit justify-between border-2 border-black rounded-full px-5 bg-white'>
        <a href="#hero" className='text-semibold text-xl md:text-2xl text-black font-bold transition-transform duration-300 shadow-lg shadow-black/[0.03px] backdrop-blur-[0.5px]'>Adrian </a>

        <nav className='hidden lg:flex items-center'>
          <ul onMouseLeave={handleLeaveMouse} className='relative mx-auto flex w-fit p-1 px-10'>
            {navLinks.map((link, index) => (
              <li
                key={link.name}
                ref={el => refs.current[index] = el}
                onMouseEnter={() => handleEnterMouse(index)}
                onClick={() => setActive(link.name)}
                className={`relative z-10 flex cursor-pointer px-3 py-1.5 text-base capitalize text-white mix-blend-difference md:px-5 md:py-3 md:text-lg font-normal ${active === link.name ? 'font-bold' : ''}`}
              >
                <a href={link.link}>{link.name}</a>
              </li>
            ))}
            <motion.li
              className='absolute z-0 h-7 rounded-full bg-black md:h-12'
              animate={{ ...position }}
            />
          </ul>
        </nav>

        <div className='flex group'>
          <a className='bg-black rounded-lg text-white py-2 px-5 font-medium transition-colors duration-300' href='#contact'>
            <span className='transition-colors duration-300'>Contact Me</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
