import React from 'react'
import './about.css'
import ME from '../../assets/profile_about.jpg'
import {BsAward} from 'react-icons/bs'
import {FiUser} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container"> 
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="About__content">
        <div className="about__cards">

          <article className="about__card">
            <BsAward className="about__icon" />
            <h5>Experience</h5>
            <small>3+ Years coding</small>
          </article>

          <article className="about__card">
            <FiUser className="about__icon" />
            <h5>Leadership</h5>
            <small>Past President of Toastmasters Club</small>
          </article>

          <article className="about__card">
            <VscFolderLibrary className="about__icon" />
            <h5>Knowledge</h5>
            <small>Data Structure & Algorithm</small>
          </article>
        </div>

      <p>
      My name is Raymond. I am now a proud holder of a master's degree in IM from UW. Besides technical courses taught me how to code or design a complex system, management courses also taught me not only to design a product from a developer’s viewpoint, but also manager and customer’s viewpoint.
      </p>
      <br />
      <p>I am also enthusiastic to learn new technologies and incorporate with what I have learned from school. Keep learning and being curious always refreshes my mind with better solutions.</p>

      <a href="#contact" className="btn btn-primary"> Let us Talk!</a>

      </div>
      </div>


    </section>
  )
}

export default About