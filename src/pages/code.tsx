import NavBarH from "../components/navBarH"
import NavBarF from "../components/navBarF"
import Projects from "../components/projects"
import MoreProjects from "../components/moreProjects"
import '../pages/code.css'

const Code = () =>{
    return(
        <>
        <header>
            <NavBarH></NavBarH>
        </header>
        <Projects></Projects>
        <MoreProjects></MoreProjects>
        <footer>
            <NavBarF></NavBarF>
        </footer>
        </>
    )
}

export default Code