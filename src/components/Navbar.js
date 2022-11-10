import React from 'react'
import { NavLink } from 'react-router-dom'
import "../index.css";


const NavBar = () => {
  return (
    <div className='navbar'>
        <nav>
            <ul>
              <a className='classjobs'>JobsFinder</a>
                <li><NavLink style={{textDecoration: 'none' , color:'black'}} end to='/'>Home</NavLink></li>
                <li><NavLink style={{textDecoration: 'none' , color:'black'}} end to='/about'>About</NavLink></li>
                <button className='navbuttn' style={{textDecoration: 'none' , color:'white'}} ><NavLink style={{textDecoration: 'none' , color:'white'}} to='/form'>Post a Job</NavLink></button>
            </ul>
        </nav>

    </div>
  )
}

export default NavBar
