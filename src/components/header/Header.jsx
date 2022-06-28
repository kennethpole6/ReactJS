import React from 'react'
import './header.css'
import illustration from '../../assets/illustration.svg'
const Header = () => {
  return (
    <div className='header' id='home'>
      <div className='header-content'>
        <p className='header-desc'>Hello I'm</p>
        <h1 className='gradient__text'>Kenneth Pole</h1>
        <p>Front-End Developer based in Quezon City, Philippines creating and delivering end-to-end user interface and experience design and development for software products.</p>
      </div>
      <div className='header-illustration'>
      <img src={illustration} alt="Illustration" />
      </div>
    </div>
  )
}

export default Header