const github = "https://github.com/mialarkin14";
const linkedin = "https://www.linkedin.com/in/mia-larkin-4885b0250/";
const insta = "https://www.instagram.com/shadowillusion14/";



const NavBarH = () =>{
    return(
    <>
        <div className="navBar">
            <div className="internalLinks">
                <a className="iconH" href="#" target="_blank"><img src="src/assets/navbar/logo.svg" width="60px" height="auto"></img></a>
                <a className="linkH" href="#">home</a>
                <a className="linkH" href="#">about</a>
                <a className="linkH" href="#">portfolio</a>
            </div>
            <div className="externalLinks">
                <a className="icon" href={github} target="_blank"><img src="src/assets/navbar/git.png" width="40px" height="auto"></img></a>
                <a className="icon" href={linkedin} target="_blank"><img src="src/assets/navbar/linked.png" width="40px" height="auto"></img></a>
                <a className="icon" href={insta} target="_blank"><img src="src/assets/navbar/insta.png" width="40px" height="auto"></img></a>
            </div>
        </div>
    </>
    )
}

export default NavBarH