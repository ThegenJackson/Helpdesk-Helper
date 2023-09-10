import React from 'react'

import { logo } from '../assets'



const Navbar = () => {



const refreshPage = () => {
  window.location.reload(false);
}



  return (

    <div className="navbar bg-base-100">

        <div className="flex-1">

        <a className="btn btn-ghost normal-case text-3xl" onClick={refreshPage}>
        <img src={ logo } className="object-contain h-3/4" />
        Helpdesk Helper
        </a>
        
        </div>

        <div className="flex-none mx-5">

        <div className="dropdown dropdown-end  ">

        <label tabIndex={0} className="btn btn-ghost m-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z">
        </path>

        </svg>
        </label>
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Ticket Writer</a></li>
        </ul>

        </div>

        </div>

    </div>

  )
}

export default Navbar