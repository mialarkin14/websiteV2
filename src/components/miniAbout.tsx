import { Link } from "react-router-dom"
import ScrollAnimation from 'react-animate-on-scroll'
import "animate.css/animate.compat.css"

const MiniAbout = () => {
    return (
        <>
        
        <div className="miniAbout">
            <ScrollAnimation animateIn="fadeIn" duration={3}>
                <div className="about">
                    <p className="about-text">
                        about:
                    </p>
                </div>
                <div className="intro">
                    <div className="meDiv">
                    
                        <img className="me" src="src/assets/me.jpg"></img>
                    
                    </div>
                    <div className="blurbDiv">
                        <p className="blurb">
                            i'm a computer engineer undergraduate from easton, ct studying at uconn.
                        </p>
                    </div>
                </div>
            </ScrollAnimation>
                
            <ScrollAnimation animateIn="flipInY" duration={3}>
                <div className="hobbies">
                    <p className="hobbies-text">
                        i enjoy:
                    </p>
                </div>
                <div className="hobbiesIcon">
                    <img className="hobby" src="src/assets/hobbies/drawing.svg"></img>
                    <img className="hobby" src="src/assets/hobbies/gaming.svg"></img>
                    <img className="hobby" src="src/assets/hobbies/ice-skating.svg"></img>
                    <img className="hobby" src="src/assets/hobbies/music.svg"></img>
                    <img className="hobby" src="src/assets/hobbies/skateboarding.svg"></img>
                </div>
            </ScrollAnimation>
            

            <ScrollAnimation animateIn="fadeIn" duration={3}>
                <div className="tech">
                    <div className="blurbDivT">
                        <p className="blurbT">
                        in high school, i found my passion for STEM! 
                        i have exposure with multiple languages and have designed multiple circuits.
                        </p>
                    </div>
                    <div className="circuitDiv">
                        <img className="circuit" src="src/assets/circuit.jpg"></img>
                    </div>
                </div>

                <div style={{display:'flex', justifyContent:'center', alignItems:'center', paddingBottom:'60px'}}>
                    <Link to='/about' onClick={() => {window.scroll(0, 0)}}>
                        <button className="aboutB">
                            learn more 
                        </button>
                    </Link>
                </div>
            </ScrollAnimation>
            
        </div>
        </>
    )

}

export default MiniAbout