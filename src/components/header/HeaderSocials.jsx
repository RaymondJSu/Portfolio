import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const headerSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/raymond-su0" ><BsLinkedin/></a>
        <a href="https://github.com/axa000" ><BsGithub/></a>
    </div>
  )
}

export default headerSocials