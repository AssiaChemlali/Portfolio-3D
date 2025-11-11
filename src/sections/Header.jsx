import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { navLinks } from '../data'
const Header = () => {

  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0
  })



  const handleMouseLeave = () => {
    setPosition(previousPosition => ({
      ...previousPosition,
      opacity: 0
    }))
  }

  const handleMouseEnter = (ref) => {
 
    if (!ref.current) return
    const { width } = ref.current.getBoundingClientRect()
     
    setPosition({
      left: ref.current.offsetLeft,
      width,
      opacity: 1
    })
  }
  return (
    <div className="">
      <ul
        onMouseLeave={handleMouseLeave}
        className="relative mx-auto flex w-fit rounded-full border-2 border-black bg-white p-1"
      >
        {navLinks.map((label, i) => {
          const ref = useRef(null)

          return (
            <li
              key={i}
              ref={ref}
              onMouseEnter={() => handleMouseEnter(ref)


              }
              className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
            >
              {label.name}
            </li>
          )
        })}

        <motion.li
          animate={{ ...position}}
          className="absolute z-0 h-7 rounded-full bg-black md:h-12"
        />
      </ul>
    </div>
  )
}

export default Header

