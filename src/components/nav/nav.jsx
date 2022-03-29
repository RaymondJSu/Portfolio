import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineBook} from 'react-icons/ai'
import {AiOutlineContacts} from 'react-icons/ai'
import {useState} from 'react'

const nav = () => {
  const [activeNav, setActiveNav] = useState('')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className = {activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className = {activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className = {activeNav === '#experience' ? 'active' : ''}><AiOutlineBook /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className = {activeNav === '#contact' ? 'active' : ''}><AiOutlineContacts /></a>
    </nav>
  )
}

export default nav