import NavBarH from "../components/navBarH"
import NavBarF from "../components/navBarF"
import AboutIntro from "../components/aboutStart"
import MiniGallery from "../components/miniGallery"
import Facts from "../components/randomFacts"
import '../pages/about.css'

const About = () =>{
    return(
        <>
        <header>
            <NavBarH></NavBarH>
        </header>
        <AboutIntro></AboutIntro>
        <MiniGallery></MiniGallery>
        <Facts></Facts>
        <footer>
            <NavBarF></NavBarF>
        </footer>
        </>
    )
}

export default About