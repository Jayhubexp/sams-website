import React from 'react'
import Navbar from './Nav'
import MidScreen from './MidScreen'
import Footer from './Footer'


function Home() {
  return (
    <div className='home'>
        <Navbar/>
        <MidScreen/>
        <Footer/>
    </div>
  )
}

export default Home 