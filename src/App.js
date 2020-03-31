import React from 'react'
import logo from './logo.svg'
import './App.css'

function App () {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Learn With Me</h1>
        <img src={logo} className='App-logo' alt='logo' />

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
      </header>
    </div>
  )
}

export default App
