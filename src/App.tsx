import NavBarH from './components/navBarH.tsx'
import NavBarF from './components/navBarF.tsx'
import TypeWriter from './components/typeWritter.tsx'
import MiniAbout from './components/miniAbout.tsx'
import SkillsSwiper from './components/skillsSlider.tsx'

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
          <TypeWriter></TypeWriter>
        </div>
      </div>
      

      {/* MiniAbout */}
      <MiniAbout></MiniAbout>

      {/* SkillsSlider */}
      <SkillsSwiper></SkillsSwiper>


      {/* Footer is the Navigation Bar*/}
      <footer>
        <NavBarF></NavBarF>
      </footer>
      
    </>
  )
}

export default App
