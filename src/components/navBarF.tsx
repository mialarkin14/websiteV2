const github = "https://github.com/mialarkin14";
const linkedin = "https://www.linkedin.com/in/mia-larkin-4885b0250/";
const insta = "https://www.instagram.com/shadowillusion14/";



const NavBarF = () =>{
    return(
    <>
        <a className="iconF" href="#" target="_blank"><img src="src/assets/navbar/logo.svg" width="80px" height="auto"></img></a>
        <a className="linkF" href={github} target="_blank"> github </a>
        <a className="linkF" href={linkedin} target="_blank"> linkedin </a>
        <a className="linkF" href={insta} target="_blank"> instagram </a>
    </>
    )
}

export default NavBarF