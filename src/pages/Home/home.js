import React from 'react'
import './home.css'

function Home () {
  return (
    <div className='App'>
      <header className='App-header'>
        <div className='site_title'>Learn With Us!</div>
        <div className='site_sub_title'>Bringing the classroom to you</div>
        <div className='nav'>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Songs
          </a>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Books
          </a>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Resources
          </a>
        </div>
      </header>
    </div>
  )
}

export default Home
