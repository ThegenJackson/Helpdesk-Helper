import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import Navbar from './components/Navbar'
import TicketWriter from './components/TicketWriter'
import Footer from './components/Footer'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <TicketWriter />
    <Footer />
  </React.StrictMode>,
)
