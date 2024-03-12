import React from 'react'

function Footer() {
  return (
    <>
        <div className='flex white'>
            <div className='Social center'>
                <h1 className='underline'>
                    Socials
                </h1>
                
                    <ul>
                       <a href='' target='_blank'>Telegram </a> 
                    </ul>
                    <ul>
                       <a href='' target='_blank'>Twitter - X </a> 
                    </ul>
                    <ul>
                       <a href='' target='_blank'>LinkedIn </a> 
                    </ul>
                

                </div>
              <div className='about center'>
                <h1 className='underline center'>About</h1>
            
                  <ul>Interests</ul>
                  <ul>Sports</ul>
                  <ul>Achievements</ul>
                  <ul>Music</ul>
                  <ul>Family</ul>
                

              </div>
              <div className='profession '>
                  <h1 className='underline'>Professional Experiences</h1>
                  <li> CIEE LEGON </li>
                  <li> Techten Planet </li>
                  <li> Guitar Tutor</li>
              </div>

        </div>
        <div className='bold white center flex'>
          <i>© 2024 Samuel Johnson </i> 
        </div>
    
    </>
  )
}

export default Footer