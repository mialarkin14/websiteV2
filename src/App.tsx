import NavBarH from './components/navBarH.tsx'
import NavBarF from './components/navBarF.tsx'
import TypeWriter from './components/typeWritter.tsx'

function App() {

  return (
    <>
      
      <header>
          <NavBarH></NavBarH>
        </header>
      
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
