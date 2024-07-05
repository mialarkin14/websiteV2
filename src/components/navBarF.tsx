const github = "https://github.com/mialarkin14";
const linkedin = "https://www.linkedin.com/in/mia-larkin-4885b0250/";
const insta = "https://www.instagram.com/shadowillusion14/";



const NavBarF = () =>{
    return(
    <>
        <div className="navBarF">
            <div className="iconF"> 
                <a className="icon" href="#" target="_blank"><img src="src/assets/navbar/logo.svg" width="200px" height="auto"></img></a>
            </div>
            <div className="navLinks">
                <a className="linkF" href="#" target="_blank"> home </a>
                <a className="linkF" href="#" target="_blank"> about </a>
                <a className="linkF" href="#" target="_blank"> portfolio </a>
                <a className="linkF" href={github} target="_blank"> github </a>
                <a className="linkF" href={linkedin} target="_blank"> linkedin </a>
                <a className="linkF" href={insta} target="_blank"> instagram </a>
                <a className="linkF" href="#" target="_blank"> code </a>
                <a className="linkF" href="#" target="_blank"> electronics </a>
                <a className="linkF" href="#" target="_blank"> drawings </a>
            </div>
        </div>
        
        
    </>
    )
}

export default NavBarF