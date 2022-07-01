import React from 'react'
import './footer.css'
import {RiFacebookCircleFill, RiInstagramFill, RiLinkedinFill, RiTwitterFill, RiCopyrightLine} from 'react-icons/ri'
const Footer = () => {
  return (
    <div className='footer'>
      <h1 className='gradient__text'>Interested In Work?</h1>
      <p>You can contact me with these social/links</p>
      <div className='footer-social'>
        <a href='https://www.facebook.com/kennethpole6/'><RiFacebookCircleFill /></a>
        <a href='https://www.instagram.com/kennethpole6/'><RiInstagramFill /></a>
        <a href='https://twitter.com/kp110101'><RiTwitterFill /> </a>
        <a href='https://www.linkedin.com/in/kenneth-pole/'><RiLinkedinFill /></a>
      </div>
      <p>All Rights Reserved 2022</p>
    </div>
  )
}

export default Footer