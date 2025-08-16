import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
const hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>We ensure a better education for a better world</h1>
        <p>Education is more than just memorizing facts and figures; it's about igniting curiosity and fostering a lifelong love for learning. It's the process of equipping individuals with the tools to think critically, solve problems creatively, and understand the world around them. </p>
        <button className='btn'>Explore More<img src={dark_arrow} alt=''/></button>
      </div>
    </div>
  )
}

export default hero
