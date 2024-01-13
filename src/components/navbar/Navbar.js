import React from 'react'
import './navbar.scss'

const Navbar = () => {
  return (
      <div className='navbar'>
          <div className='logo'>
              <img src='logo.svg' alt='' />
              <span>Dashboard</span>
          </div>
          <div className='icons'>
              <img src='./assets/home.svg' alt='' className='icon' />
              <img src='/assets/search.svg' alt='' className='icon' />
              <img src='/assets/expand.svg' alt='' className='icon' />
              <div className='notification'>
                  <img src='/assets/notifications.svg' alt='' /> 
                  <span>1</span>
              </div>
              <div className='user'>
                  <img src='https://avatars.githubusercontent.com/u/46893308?v=4' alt=''/>
              </div>
              <img src='/assets/settings.svg' alt='' className='icon' />
              
          </div>
          
    </div>
  )
}

export default Navbar