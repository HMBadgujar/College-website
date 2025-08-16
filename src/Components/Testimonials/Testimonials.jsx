import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'
const Testimonials = () => {
    const slider  = useRef(null);
    const tx = useRef(0);
    const slideForward=()=>{
        if(tx.current>-50){
            tx.current-=25;
        }
        if (slider.current) {
            slider.current.style.transform = `translateX(${tx.current}%)`;
        }
    }
    const slideBackward=()=>{
        if (tx.current < 0) {
            tx.current += 25; 
        }
        if (slider.current) {
            slider.current.style.transform = `translateX(${tx.current}%)`;
        }
    }
  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>Emma Watson</h3>
                            <span>Edusity, Spain</span>
                        </div>
                    </div>
                    <p>Choosing this college was one of the best decisions of my life. It has provided me with a top-notch education, lifelong friends, and the confidence to step into my professional career.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>William Jackson</h3>
                            <span>Edusity, Portugal</span>
                        </div>
                    </div>
                    <p>If you're looking for a place that will challenge you, support you, and prepare you for the future, you've found it. Highly recommended!</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>Sophie Devine</h3>
                            <span>Edusity, France</span>
                        </div>
                    </div>
                    <p>The best part for me has been the quality of teaching in the humanities department. Our professors are brilliant; they don't just teach from the textbook, but give moral lessons from life.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>Charles Mathew</h3>
                            <span>Edusity, Italy</span>
                        </div>
                    </div>
                    <p> It’s an environment that truly fosters intellectual curiosity—perfect for anyone aiming for competitive exams or further studies. The library is also a fantastic resource, filled with both classic texts and modern digital archives.</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
