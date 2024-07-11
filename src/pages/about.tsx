import NavBarH from "../components/navBarH"
import NavBarF from "../components/navBarF"
import AboutIntro from "../components/aboutStart"
import MiniGallery from "../components/miniGallery"
import '../pages/about.css'

const About = () =>{
    return(
        <>
        <header>
            <NavBarH></NavBarH>
        </header>
        <AboutIntro></AboutIntro>
        <MiniGallery></MiniGallery>
        <footer>
            <NavBarF></NavBarF>
        </footer>
        </>
    )
}

export default About