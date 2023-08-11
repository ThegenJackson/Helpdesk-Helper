import React from 'react'

import { logo } from '../assets'

export const Home = () => {
  return (
    <header className="flex justify-start">

      <img 
      src={logo} alt="Helpdesk_Helper" className="w-3/5 object-contain"
      />

    {/*
    <nav className="w-3/5 flex justify-between items-center flex-row mb-3">

      <a href="">
        <button
        className="_btn"
        >
        Ticket Writer</button>
      </a>

      <a href="">
        <button
        className="_btn"
        >
        Query Builder</button>
      </a>

      <a href="">
        <button
        className="_btn"
        >
        Feedback</button>
      </a>
    </nav>
      */}

    </header>
  )
}
