import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import ME from '../../assets/profile_pic.png'


const header = () => {
  return (
       <section>
        <div className="container header__container">
          <h5>Hello I am</h5>
          <h1>Raymond Su</h1>
          <h5 className="text-light">Software Developer</h5>
          <CTA />
          <HeaderSocials />

          <div className="me">
            <img src={ME} alt="me" />
          </div>

          <a href="#contact" className="scroll__down" >Scroll Down</a>
        </div>
       </section>
  )
}

export default header