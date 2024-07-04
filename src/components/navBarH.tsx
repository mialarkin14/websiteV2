const github = "https://github.com/mialarkin14";
const linkedin = "https://www.linkedin.com/in/mia-larkin-4885b0250/";
const insta = "https://www.instagram.com/shadowillusion14/";



const NavBarH = () =>{
    return(
    <>
        <a className="icon" href="#" target="_blank"><img src="src/assets/navbar/logo.svg" width="50px" height="auto"></img></a>
            <nav>
            <ul>
                <li className="link"><a className="linkA" href="#">home</a></li>
                <li className="link"><a className="linkA" href="#">about</a></li>
                <li className="link"><a className="linkA" href="#">portfolio</a></li>
            </ul>
            </nav>

        <div>
            <a className="icon" href={github} target="_blank"><img src="src/assets/navbar/git.png" width="40px" height="auto"></img></a>
            <a className="icon" href={linkedin} target="_blank"><img src="src/assets/navbar/linked.png" width="40px" height="auto"></img></a>
            <a className="icon" href={insta} target="_blank"><img src="src/assets/navbar/insta.png" width="40px" height="auto"></img></a>
        </div>
    </>
    )
}

export default NavBarH