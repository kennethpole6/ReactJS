import React, {useState} from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine, RiBubbleChartFill} from 'react-icons/ri'
const Navbar = () => {
  const [ToggleMenu, SetToggleMenu] = useState(false)
  return (
    <div className='navbar'>
      <div className='navbar-links'>
        <div className='navbar-logo'>
         <a href="#"><RiBubbleChartFill /></a>
        </div>
        <div className='navbar-links-container'>
          <a href="#">Home</a>
          <a href="#">Projects</a>
          <a href="#">About</a>
        </div>
      </div>
      <div className='navbar-cta'>
        <a href="#">Let's work</a>
      </div>
      <div className='navbar-menu'>
        {ToggleMenu  
          ? <RiCloseLine  color='#fff' size={27} onClick={()=> SetToggleMenu(false)}/>
          : <RiMenu3Line  color='#fff' size={27} onClick={()=> SetToggleMenu(true)}/>
        }
        {ToggleMenu && (
          <div className='navbar-menu-container scale-up-center'>
            <div className='navbar-menu-links'>
              <a href="#">Home</a>
              <a href="#">Projects</a>
              <a href="#">About</a>

              <div className='navbar-menu-cta'>
                <a href="#">Let's work</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar