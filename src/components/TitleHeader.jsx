import React from 'react'

const TitleHeader = ({subtitle,title}) => {
  return (
    <div className='flex flex-col items-center justify-center gap-5'>
      <p className='text-white text-sm md:text-base  font-normal bg-black-200 py-2 px-4 rounded-full  w-fit text-nowrap '>{subtitle}</p>
      <h1 className='text-3xl md:text-5xl text-white font-semibold '>{title}</h1>
    </div>
  )
}

export default TitleHeader
