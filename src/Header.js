import React from 'react'
import { ReactComponent as ReactLogo } from './activity.svg'

const Header = () => {

  return (
    <div className='container-md'>
      <nav className='navbar navbar-expand-sm navbar-light'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='/'>
            <ReactLogo className='text-white bg-primary m-2 p-1 rounded' />
            <strong>Medical</strong>
          </a>
          <div className='d-flex flex-row-reverse' id='navbarNav'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <a className='nav-link active' aria-current='page' href='/'>New Schedule</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link active' href='/schedules'>Schedule</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header