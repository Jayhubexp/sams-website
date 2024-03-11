import React from 'react'

function Footer() {
  return (
    <>
        <div className='flex white'>
            <div className='Social'>
                <h1 className='underline'>
                    Socials
                </h1>
                <li>
                    <ul>
                       <a href='' target='_blank'>Telegram </a> 
                    </ul>
                    <ul>
                       <a href='' target='_blank'>Twitter - X </a> 
                    </ul>
                    <ul>
                       <a href='' target='_blank'>LinkedIn </a> 
                    </ul>
                </li>

            </div>
            <div className='about center'>
                <h1 className='underline'>About</h1>
                Profession 

            </div>

        </div>
        <div className='bold white center flex'>
          <i>© 2024 Samuel Johnson </i> 
        </div>
    
    </>
  )
}

export default Footer