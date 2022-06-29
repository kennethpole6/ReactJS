import React from 'react'
import './about.css'
const About = () => {
  return (
    <div className='about' id='about-section'>
       <h1 className='gradient__text'>About Me</h1> 
        <div className='about-desc'>
          <h3>I'm a Front-End Developer all the way from designing to development and available for full-time roles or freelance projects.</h3>
          <p>My name is Kenneth Pole and I lived in Quezon City, Philippines. My interest lies in designing and developing responsive front-end websites that could impact both users and company. My mind thirst for continuous learning and improvement and constanty looking to learn new things everyday. Here are some web technologies that I used for designing and developing.</p>
        </div>
       <div className='about-skills'>
          <ul>
            <li>HTML 5</li>
            <li>CSS3/SCSS</li>
            <li>BOOTSTRAP 5</li>
            <li>ReactJS</li>
            <li>Figma</li>
          </ul>
       </div>
    </div>
  )
}

export default About