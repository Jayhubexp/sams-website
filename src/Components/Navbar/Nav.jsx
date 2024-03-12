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
              {/* <Link to="/"></Link> */}
               <img src={avatar} alt="" className='image'/>
               Samuel Johnson
               
              </div>
            <div className='mid'>
            <a href='' target='_blank'>Education</a>
            <a href='' target='_blank'>Startup</a>
            <a href='' target='_blank'>Blog</a>
            </div>
            <div className='SignUp'> 
             <a href='/Newsletter' target='_blank'><button >SignUp to my NewsLetter!</button></a> 
            </div>
          </div>
    </div>
       
     {/* <Outlet/> */}
    </>
    
  )
}

export default Navbar