import React from 'react'
import './MidScreen.css'
import Skill from './Skill/Skill'
import Screen from './Screen'
import Search from './Search'
import background from '../Images/Ai.jpg'





function MidScreen() {

  
  return (
    <>
      <div className='m'>
        <div className='bg'>
          <img src={background} alt='bg' width='100%' height='550vh' />
        </div>
          <div className='left'>
            <Skill/>
          </div>
          <div className='mid'>
            <Screen/>
          </div>
          <div className='right'>
            <Search/>
          </div>

      </div>
    
    </>
  )
}

export default MidScreen