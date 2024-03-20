import React from 'react'
import './Nav.css'
import avatar from "../Images/pow.jpg"
import { Link, Outlet } from 'react-router-dom'



function Navbar() {
  return (
    <>
    <div className='static'>
       <div className='container'>
    
              <div className='name'>
               <img src={avatar} alt="" className='image'/>
               Samuel Johnson
              </div>
            <div className='mid'>
            <a href='' target='_blank'>Education</a>
            <a href='' target='_blank'>Startup</a>
            <a href='' target='_blank'>Blog</a>
            </div>
            <div className='SignUp'> 
            <Link to='/education'><button >SignUp to my NewsLetter!</button></Link>  
            </div>
          </div>
    </div>
       
    </>
    
  )
}

export default Navbar