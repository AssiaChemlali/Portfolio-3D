import React from 'react'
import { useRef } from 'react';

const GlowCard = ({ card, index }) => {

  const cardRefs = useRef([]);

  const handleMouseMove = (index) => (e) => {
    const card = cardRefs.current[index];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2

    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;
    card.style.setProperty('--start', angle + 60)
  }
  return (
    <div
      ref={(el) => (cardRefs.current[index] = el)}
      onMouseMove={handleMouseMove(index)}
      className='card card-border  rounded-xl p-10 mb-5 ' key={card.title}>
      <div className="glow" />

      <div className="flex items-center gap-1 mb-5">
        {Array.from({ length: 5 }, (_, i) => (
          <img src="./images/star.png" alt="" key={i} />
        ))}
      </div>


      <p className='text-white-50 text-lg mb-5'>{card.review}</p>
      <img src={card.imgPath} alt="" className='w-40' />
    </div>
  )
}

export default GlowCard
