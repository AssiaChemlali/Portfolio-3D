import React from 'react'


const Button = ({ text, icon, type, scrollTo }) => {

  const handleClick = () => {
    if (scrollTo) {
      const el = document.getElementById(scrollTo)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (


    <button 
    onClick={handleClick} 
    type={type}  
    className={` bg-black-200 flex  px-4 py-4 rounded-lg justify-center items-center overflow-hidden group relative z-20 cursor-pointer mt-5 md:h-16  h-12   ${type==="submit" ? 'md:w-full w-full':'md:w-80 w-60'}`}>

      <div className='absolute -right-10 origin-center top-1/2 -translate-y-1/2 w-[120%] h-[120%] group-hover:size-10 group-hover:right-10 rounded-full bg-white-50 transition-all duration-500' />

      <p className='uppercase md:text-lg  text-black transition-all duration-500 group-hover:text-white-50 group-hover:-translate-x-5 xl:translate-x-0 -translate-x-5'>{text}</p>

      <span className='group-hover:bg-white-50 text-3xl rounded-full absolute right-11 top-1/2 -translate-y-1/2 flex justify-center items-center overflow-hidden text-black '>{icon} </span>

    </button>
  )
}

export default Button
