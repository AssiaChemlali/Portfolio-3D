import React from 'react'


const Button = ({text,id,className,icon}) => {
  return (
    <a
    id={id} 
    className={`${className ?? ''} cta-wrapper`}>

    <div className="cta-button group">
      <div className="bg-circle"></div>
      <p className='text'> {text}</p>
      <span className='arrow-wrapper'>{icon}</span>
    </div>
     


    </a>
  )
}

export default Button
