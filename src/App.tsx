import NavBarH from './components/navBarH.tsx'
import NavBarF from './components/navBarF.tsx'
import TypeWriter from './components/typeWritter.tsx'
import MiniAbout from './components/miniAbout.tsx'
import Skills from './components/skills.tsx'
import Resume from './components/resume.tsx'

function App() {

  return (
    <>
      <header>
          <NavBarH></NavBarH>
      </header>
      
      <div className="computer">
        <div className="typeWriteDiv">
          <TypeWriter className={"beginning"} text={"hi i'm mia\n welcome to my website!"} repeatT={Infinity}></TypeWriter>
        </div>
      </div>
      
      <MiniAbout></MiniAbout>

      <Skills></Skills>

      <Resume></Resume>

      <footer>
        <NavBarF></NavBarF>
      </footer>
      
    </>
  )
}

export default App
