import React from 'react'
import './project.css'
import Cards from './Cards'
import swab from '../../assets/swab.svg'
import richworld from '../../assets/richworld.svg'
import rg from '../../assets/RG.svg'
import bdpc from '../../assets/bdpc.svg'



const Project = () => {
  return (
    <div className='project' id='project-section'>
        <h1 className='gradient__text'>Recent Projects</h1>
        <div className='project-cards'>
            <Cards 
            img = {swab}
            badge ="UI/UX Design & Front-End Development"
            heading = "Swab Testing System"
            desc = "Swab Testing System is a user-friendly that allows user to appoint and schedule swab testing via online so that the user will never be waiting in long queue."
            />
            <Cards 
            img = {richworld}
            badge ="UI/UX Design & Front-End Development"
            heading = "HRIS for Richworld Giftshop"
            desc = "HRIS for Richworld Giftshop is designed to help the business to store and organize employee information at ease. It comes also with job hiring if the company needs to recruit employee."
            />
            <Cards 
            img = {rg}
            badge ="UI/UX Design"
            heading = "Richworld Giftshop App"
            desc = "Richworld Giftshop Mobile App is a job listing recruitment to hire employees specifically for the company to hire employees."
            />
            <Cards 
            img = {bdpc}
            badge ="UI/UX Design & .NET Development"
            heading = "Payroll System for BDPC"
            desc = "Payroll System for BDPC comes with automated calculating complicated local taxes for employee payroll to manage contractors and employees."
            />
        </div>
    </div>
  )
}

export default Project