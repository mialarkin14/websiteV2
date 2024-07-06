import NavBarH from './components/navBarH.tsx'
import NavBarF from './components/navBarF.tsx'
import TypeWriter from './components/typeWritter.tsx'
import MiniAbout from './components/miniAbout.tsx'
import Skills from './components/skillsSlider.tsx'

function App() {

  return (
    <>
      
      {/* Header is the Navigation Bar */}
      <header>
          <NavBarH></NavBarH>
      </header>
      
      {/* Typewriter Animation for Title*/}
      <div className="computer">
        <div className="typeWriteDiv">
          <TypeWriter className={"beginning"} text={"hi i'm mia\n welcome to my website!"} repeatT={Infinity}></TypeWriter>
        </div>
      </div>
      

      {/* MiniAbout */}
      <MiniAbout></MiniAbout>

      {/* SkillsSlider */}
      <Skills></Skills>


      {/* Footer is the Navigation Bar*/}
      <footer>
        <NavBarF></NavBarF>
      </footer>
      
    </>
  )
}

export default App
