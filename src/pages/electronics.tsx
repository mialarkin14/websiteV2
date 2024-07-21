import NavBarH from "../components/navBarH"
import NavBarF from "../components/navBarF"
import ProjectsE from "../components/projectE"
import '../pages/electronics.css'

const Electronics = () =>{
    return(
        <>
        <header>
            <NavBarH></NavBarH>
        </header>
            <ProjectsE></ProjectsE>
        <footer>
            <NavBarF></NavBarF>
        </footer>
        </>
    )
}

export default Electronics