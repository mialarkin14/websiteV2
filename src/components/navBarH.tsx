import { Link } from "react-router-dom";

const github = "https://github.com/mialarkin14";
const linkedin = "https://www.linkedin.com/in/mia-larkin-4885b0250/";
const insta = "https://www.instagram.com/shadowillusion14/";

import logo from '../assets/navbar/logo.svg';
import git from '../assets/navbar/git.png';
import linkedinI from '../assets/navbar/linked.png';
import instaI from '../assets/navbar/insta.png';

const NavBarH = () =>{
    return(
    <>
        <div className="navBar">
            <div className="internalLinks">
                <Link to="/home" className="iconH" onClick={() => {window.scroll(0, 0)}}><img src={logo} width="60px" height="auto"></img></Link>
                <Link to="/home" className="linkH" onClick={() => {window.scroll(0, 0)}}>home</Link>
                <Link to="/about" className="linkH" onClick={() => {window.scroll(0, 0)}}>about</Link>
                <Link to="/portfolio" className="linkH" onClick={() => {window.scroll(0, 0)}}>portfolio</Link>
            </div>
            <div className="externalLinks">
                <a className="icon" href={github} target="_blank"><img src={git} width="40px" height="auto"></img></a>
                <a className="icon" href={linkedin} target="_blank"><img src={linkedinI} width="40px" height="auto"></img></a>
                <a className="icon" href={insta} target="_blank"><img src={instaI} width="40px" height="auto"></img></a>
            </div>
        </div>
    </>
    )
}

export default NavBarH