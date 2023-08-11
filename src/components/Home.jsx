import React from 'react'

import { logo } from '../assets'

export const Home = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">

    {/* Logo */}
    <nav className="w-full">

      <img 
      src={logo} alt="Helpdesk_Helper" className="w-3/5 object-contain"
      />

    </nav>

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
