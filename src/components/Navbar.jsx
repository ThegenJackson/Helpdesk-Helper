import React from 'react'

import { logo } from '../assets'



const Navbar = () => {
  return (

    <nav className="flex p-3">
        
        <img src={ logo } className="object-contain w-32" />
        
        <h1 className="header p-3">
          HELPDESK HELPER
        
        <h2 className="subheader">
          BY EVILSOFTWARE
        </h2>
        
        </h1>
    
    </nav>

  )
}

export default Navbar