import React from 'react';

import { Home } from './components/Home';
import { TicketWriter } from './components/TicketWriter'

import './App.css';

const App = () => {
  return (
    <main>

      <div className="main">
        <div className="solid" />
      </div>

      <div className="app">
        <Home />
        <TicketWriter />
      </div>

    </main>
  )
}

export default App