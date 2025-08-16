import React, { useState } from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
const Contact = () => {
    const [result, setResult] = useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "ba7d6ab7-6490-4dfc-8819-72d76b1e8a16");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();

        if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        } else {
        console.log("Error", data);
        setResult(data.message);
        }
  };





  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>Whether you're thinking of joining our community or are already a student here, your questions are important to us. From inquiries about the admission process and your application to ideas about campus life or academic concerns, we are ready to listen. Open communication helps us support your journey from start to finish.</p>
        <ul>
            <li><img src={mail_icon} alt="" />helpdesk@edusity.edu</li>
            <li><img src={phone_icon} alt="" />+1 (617) 555-0125</li>
            <li><img src={location_icon} alt="" />Innovatech Solutions Inc.<br/>
                1250 Discovery Way, Suite 210<br/>
                Palo Alto, CA 94304<br/>
                USA.
            </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type='text' name='name' placeholder='Enter your name' required/>
            <label>Phone Number</label>
            <input type='tel' name='phone' placeholder='Enter your mobile number' required/>
            <label>Write your messages here</label>
            <textarea name='message' rows="6" placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
