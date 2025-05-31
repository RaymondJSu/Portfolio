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
        My name is Raymond, and I’m currently working as a Software Developer at a FAANG company. I hold a Master’s degree in Information Management from the University of Washington, where I developed a strong foundation in both technical and management disciplines.
      </p>
      <br />
      <p>
        My academic background taught me more than just how to code or build complex systems—it trained me to approach problems from multiple perspectives, including those of developers, managers, and end users. This well-rounded mindset continues to shape how I design and deliver scalable, user-centric solutions in my professional work.
      </p>

      <a href="#contact" className="btn btn-primary"> Let us Talk!</a>

      </div>
      </div>


    </section>
  )
}

export default About