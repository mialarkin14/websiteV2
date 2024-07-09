import { Link } from "react-router-dom";

const github = "https://github.com/mialarkin14";
const linkedin = "https://www.linkedin.com/in/mia-larkin-4885b0250/";
const insta = "https://www.instagram.com/shadowillusion14/";



const NavBarF = () =>{
    return(
    <>
        <div className="navBarF">
            <div className="iconF"> 
                <Link to="/home" className="icon"><img src="src/assets/navbar/logo.svg" width="200px" height="auto"></img></Link>
            </div>
            <div className="navLinks">
                <Link to="/home" className="linkF">home</Link>
                <Link to="/about" className="linkF">about</Link>
                <Link to="/portfolio" className="linkF">portfolio</Link>
                <a className="linkF" href={github} target="_blank"> github </a>
                <a className="linkF" href={linkedin} target="_blank"> linkedin </a>
                <a className="linkF" href={insta} target="_blank"> instagram </a>
                <Link to="/code" className="linkF">code</Link>
                <Link to="/electronics" className="linkF">electronics</Link>
                <Link to="/drawings" className="linkF">drawings</Link>
            </div>
        </div>
        
        
    </>
    )
}

export default NavBarF