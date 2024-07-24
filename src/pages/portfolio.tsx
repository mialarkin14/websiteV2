import NavBarH from "../components/navBarH"
import NavBarF from "../components/navBarF"
import { Link } from "react-router-dom"
import '../pages/portfolio.css'

import code from '../assets/portfolio/code.png'
import electronics from '../assets/portfolio/electronics.png'
import drawings from '../assets/portfolio/draw.png'

const Portfolio = () =>{
    return(
        <>
        <header>
            <NavBarH></NavBarH>
        </header>
        <div className="portfolio" style={{display:'flex', justifyContent:'center', alignItems:'center', flexWrap:'wrap', 
            padding: '100px', boxShadow: '10px 15px 20px #0951ff'}}>
            <p className="TextTitle" style={{width:'100%'}}>
                my portfolio:
            </p>
            <p className="SubHeading1" style={{width:'100%', paddingBottom:'100px'}}>
                a collection of coding projects, circuit designs, and drawings
            </p>
            
            
            <div  style={{display:'flex', justifyContent:'center', alignItems:'center', flexWrap:'wrap', flexDirection:'row', columnGap:'100px', rowGap:'100px'}}>
                <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexWrap:'wrap', flexDirection:'column', rowGap:'10px', 
                     boxShadow: '0 0 30px 10px #0951ff', borderRadius:'20px', padding: '30px'}}>
                    <Link to='/code'><img src={code} alt="code" onClick={() => {window.scroll(0, 0)}} style={{width:'35vw'}}/></Link>
                    <p className="SubHeading1">
                        code
                    </p>
                </div>
                <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexWrap:'wrap', flexDirection:'column', rowGap:'10px',
                     boxShadow: '0 0 30px 10px #0951ff', borderRadius:'20px', padding: '30px'}}>
                    <Link to='/electronics'><img src={electronics} alt="electronics"  onClick={() => {window.scroll(0, 0)}} style={{width:'35vw'}}/></Link>
                    <p className="SubHeading1">
                        electronics
                    </p>
                </div>
                <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexWrap:'wrap', flexDirection:'column', rowGap:'10px',  
                    boxShadow: '0 0 30px 10px #0951ff', borderRadius:'20px', padding: '30px'}}>
                    <Link to='/drawings'><img src={drawings} alt="draw"  onClick={() => {window.scroll(0, 0)}} style={{width:'35vw'}}/></Link>
                    <p className="SubHeading1">
                        drawings
                    </p>
                </div>
            </div>
        </div>
        <footer>
            <NavBarF></NavBarF>
        </footer>
        </>
    )
}

export default Portfolio