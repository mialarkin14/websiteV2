import NavBarH from "../components/navBarH"
import NavBarF from "../components/navBarF"
import AboutIntro from "../components/aboutStart"
import MiniGallery from "../components/miniGallery"
import Facts from "../components/facts"
import Passion from "../components/passion"
import Canoe from "../components/canoe"
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
        <Passion></Passion>
        <Canoe></Canoe>
        <footer>
            <NavBarF></NavBarF>
        </footer>
        </>
    )
}

export default About