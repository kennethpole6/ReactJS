import React from 'react'
import './project.css'
import {RiArrowRightLine} from 'react-icons/ri'
const Cards = ({img, badge, heading, desc}) => {
  return (
    <div className='project-card-container'>
        <div className='project-card'>
            <img src={img} alt="Project Illustrations" />
            <p className='project-badge'>{badge}</p>
            <h1 className='gradient__text'>{heading}</h1>
            <p>{desc}</p>
            <a href="#" className='project-cta'>Learn More <RiArrowRightLine className='rightArrow'/></a>
        </div>
    </div>
  )
} 

export default Cards