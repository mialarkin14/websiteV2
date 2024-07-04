import NavBar from './components/navBarH.tsx'

import bg from './assets/bg.svg'


function App() {

  return (
    <>
      
      <header>
          <NavBar></NavBar>
        </header>
      <div>
        <img src={bg} alt="Background" width="100%"/>
      </div>
    </>
  )
}

export default App
