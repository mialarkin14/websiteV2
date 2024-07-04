import { useState } from 'react'
import NavBar from './components/navBarH.tsx'

import bg from './assets/bg.png'


function App() {

  return (
    <>
      <header>
          <NavBar></NavBar>
        </header>
      <div>
        <img src={bg} alt="Background" />
      </div>
    </>
  )
}

export default App
