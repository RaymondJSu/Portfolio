import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsTelegram} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'


const contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_r8cznlm', 'template_qh8n5gw', form.current, 'woQNS-Xgp-Lly5IaA')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <small>raysu@uw.edu</small>
            <br />
            <a href="mailto:raysu@uw.edu">Send a Message</a>
          </article>

          <article className='contact__option'>
            <BsTelegram className='contact__option-icon'/>
            <h4>Telegram</h4>
            <small>+9087238580</small>
            <br />
            <a href="https://t.me/MDFK8877">Send a Message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name = 'email' placeholder='Your Email' required/>
          <textarea name="message" rows = "7" placeholder='Your Message' required ></textarea>
          <button type = 'submit' className='btn btn-primary'>Send Message</button>
        </form>

      </div>
    </section>
  )
}

export default contact