import NavBarH from "../components/navBarH"
import NavBarF from "../components/navBarF"
import GalleryDig from "../components/drawingsDigital"
import GalleryGray from "../components/drawingsGray"
import GalleryColor from "../components/drawingsColor"
import '../pages/drawings.css'

const Drawings = () =>{
    return(
        <>
        <header>
            <NavBarH></NavBarH>
        </header>
        <GalleryDig></GalleryDig>
        <GalleryGray></GalleryGray>
        <GalleryColor></GalleryColor>
        <footer>
            <NavBarF></NavBarF>
        </footer>
        </>
    )
}

export default Drawings