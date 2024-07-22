import { Link } from "react-router-dom";
import logo from '../assets/navbar/logo.svg';

const github = "https://github.com/mialarkin14";
const linkedin = "https://www.linkedin.com/in/mia-larkin-4885b0250/";
const insta = "https://www.instagram.com/shadowillusion14/";



const NavBarF = () =>{
    return(
    <>
        <div className="navBarF">
            <div className="iconF"> 
                <Link to="/home" className="icon" onClick={() => {window.scroll(0, 0)}}><img src={logo} width="200px" height="auto"></img></Link>
            </div>
            <div className="navLinks">
                <Link to="/home" className="linkF" onClick={() => {window.scroll(0, 0)}}>home</Link>
                <Link to="/about" className="linkF" onClick={() => {window.scroll(0, 0)}}>about</Link>
                <Link to="/portfolio" className="linkF" onClick={() => {window.scroll(0, 0)}}>portfolio</Link>
                <a className="linkF" href={github} target="_blank"> github </a>
                <a className="linkF" href={linkedin} target="_blank"> linkedin </a>
                <a className="linkF" href={insta} target="_blank"> instagram </a>
                <Link to="/code" className="linkF" onClick={() => {window.scroll(0, 0)}}>code</Link>
                <Link to="/electronics" className="linkF" onClick={() => {window.scroll(0, 0)}}>electronics</Link>
                <Link to="/drawings" className="linkF" onClick={() => {window.scroll(0, 0)}}>drawings</Link>
            </div>
        </div>
        
        
    </>
    )
}

export default NavBarF