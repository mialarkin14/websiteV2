import NavBarH from './components/navBarH.tsx'
import NavBarF from './components/navBarF.tsx'
import TypeWriter from './components/typeWritter.tsx'
import MiniAbout from './components/miniAbout.tsx'

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
      
      <MiniAbout></MiniAbout>

      <footer>
        <NavBarF></NavBarF>
      </footer>
      
    </>
  )
}

export default App
