import React from 'react'
import './nav.css'

class Nav extends React.Component {
  render () {
    return (
      <nav className='nav'>
        <a className='nav-link active' href='_'>
          Active
        </a>
        <a className='nav-link' href='_'>
          Songs
        </a>
        <a className='nav-link' href='_'>
          Books
        </a>
        <a className='nav-link' href='_'>
          Resources
        </a>
      </nav>
    )
  }
}

export default Nav
