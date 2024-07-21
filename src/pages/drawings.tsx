import NavBarH from "../components/navBarH"
import NavBarF from "../components/navBarF"
import GalleryI from "../components/drawingsGall"
import '../pages/drawings.css'

const Drawings = () =>{
    return(
        <>
        <header>
            <NavBarH></NavBarH>
        </header>
        <GalleryI></GalleryI>
        <footer>
            <NavBarF></NavBarF>
        </footer>
        </>
    )
}

export default Drawings