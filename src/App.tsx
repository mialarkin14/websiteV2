import NavBarH from './components/navBarH.tsx'
import NavBarF from './components/navBarF.tsx'
import bg from './assets/bg.svg'
import TypeWriter from './components/typeWritter.tsx'

function App() {

  return (
    <>
      
      <header>
          <NavBarH></NavBarH>
        </header>
      <div>
        <img src={bg} alt="Background" width="100%"/>
      </div>
      <div className="computer">
        <div className="typeWriteDiv">
          <TypeWriter></TypeWriter>
        </div>
      </div>
    
      <footer>
        <NavBarF></NavBarF>
      </footer>
      
    </>
  )
}

export default App
