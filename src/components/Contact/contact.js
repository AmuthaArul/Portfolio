import React,{useRef} from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';

const Contact =() =>{
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_u9rojzs', 'template_v72okfi', form.current, {
            publicKey: 'J_dKUyrDMSj5G8npl',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              e.target.reset();
              alert('Email Sent!');
              
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
    return(
        <section id='contact'>
            
                <h2 className='contactPagetitle'>Contact <span className="part">me</span></h2>
                <span className='contactDesc'>Please fill out the form below to discuss any work opportunities</span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type="text" className='name' placeholder="Your Name" name="from_name"/>
                    <input type="email" className='email' placeholder="Your Email" name="from_email"/>
                    <textarea className="msg" name="message" rows="5" placeholder="Your Message"></textarea>
                    <button type="submit" value="Send" className='submitBtn'>Submit</button>
                   
                </form>
        
        </section>
    )
};
export default Contact;