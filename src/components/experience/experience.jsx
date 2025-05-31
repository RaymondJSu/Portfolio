import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'


const experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Programming Language</h3>
          <div className="experience__content">
             <article className="experience__details">
               <BsFillPatchCheckFill className="experience__details-icon"/>
               <div>
                <h4>TypeScript</h4>
                {/* <small className='text-light'>Experienced</small> */}
               </div>
             </article>
             <article className="experience__details">
               <BsFillPatchCheckFill className="experience__details-icon"/>
               <div>
                <h4>Python</h4>
                {/* <small className='text-light'>Experienced</small> */}
               </div>
             </article>
             <article className="experience__details">
               <BsFillPatchCheckFill className="experience__details-icon"/>
               <div>
                <h4>Java</h4>
                {/* <small className='text-light'>Experienced</small> */}
               </div>
             </article>
             <article className="experience__details">
               <BsFillPatchCheckFill className="experience__details-icon"/>
               <div>
                <h4>C#</h4>
                {/* <small className='text-light'>Experienced</small> */}
               </div>
             </article>

          </div>
        </div>

        <div className="experience__backend">
          <h3>Web, Database, & Tech</h3>
          <div className="experience__content">
             <article className="experience__details">
               <BsFillPatchCheckFill className="experience__details-icon"/>
               <div>
                <h4>AWS Services</h4>
                {/* <small className='text-light'>Experienced</small> */}
               </div>
             </article>
             <article className="experience__details">
               <BsFillPatchCheckFill className="experience__details-icon"/>
               <div>
                <h4>Restful API</h4>
                {/* <small className='text-light'>Experienced</small> */}
               </div>
             </article>
             <article className="experience__details">
               <BsFillPatchCheckFill className="experience__details-icon"/>
               <div>
                <h4>Docker</h4>
                {/* <small className='text-light'>Experienced</small> */}
               </div>
             </article>
             <article className="experience__details">
               <BsFillPatchCheckFill className="experience__details-icon"/>
               <div>
                <h4>Git</h4>
                {/* <small className='text-light'>Experienced</small> */}
               </div>
             </article>
             <article className="experience__details">
               <BsFillPatchCheckFill className="experience__details-icon"/>
               <div>
                <h4>MySQL</h4>
                {/* <small className='text-light'>Experienced</small> */}
               </div>
             </article>
             <article className="experience__details">
               <BsFillPatchCheckFill className="experience__details-icon"/>
               <div>
                <h4>Node.js</h4>
                {/* <small className='text-light'>Experienced</small> */}
               </div>
             </article>

          </div>
        </div>
      </div>
    </section>
  )
}

export default experience