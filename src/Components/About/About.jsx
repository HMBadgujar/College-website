import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
const About = ({setPlayState}) => {
  return (
    <div>
      <div className="about">
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
        </div>
        <div className="about-right">
            <h3>About University</h3>
            <h2>Inspiring minds, empowering futures.</h2>
            <p>The future isn't something you wait for; it's something you build. At Edusity, we provide the blueprint, the tools, and the inspiration. We are more than just a college; we are a launchpad for the next generation of leaders, innovators, and changemakers.</p>
            <p>Our rigorous curriculum, taught by world-renowned faculty, challenges you to think critically and push the boundaries of knowledge. In our state-of-the-art labs and collaborative classrooms, you won’t just learn about the future—you'll invent it.</p>
            <p>It’s found in late-night study sessions that become lifelong friendships, in the cheer of the crowd at a home game, and in the shared passion of over 100 student clubs and organizations. Our supportive faculty are not just teachers; they are mentors dedicated to helping you find your path and achieve your dreams.</p>
        
        </div>
      </div>
    </div>
  )
}

export default About
