import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
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
            <small>3+ Years Working</small>
          </article>

          <article className="about__card">
            <FiUser className="about__icon" />
            <h5>Experience</h5>
            <small>3+ Years Working</small>
          </article>

          <article className="about__card">
            <VscFolderLibrary className="about__icon" />
            <h5>Projects</h5>
            <small>80+ completed projects</small>
          </article>
        </div>

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere ipsa laborum suscipit ex officia quis veniam fuga voluptas itaque provident aspernatur odit iusto quam eveniet, ad nulla accusamus quae numquam.
      </p>

      <a href="#contact" className="btn btn-primary"> Let us Talk!</a>

      </div>
      </div>


    </section>
  )
}

export default About