import ScrollAnimation from 'react-animate-on-scroll'
import "animate.css/animate.compat.css"

import me3 from '../assets/me3.png'
import logic from '../assets/logicworks.jpeg'

const Passion = () =>{
    return (
        <>
            <div className="passion" style={{padding: '150px', boxShadow: '10px 15px 20px #0951ff'}}>
                <ScrollAnimation animateIn='fadeInRight' duration={3} animateOnce={true}>
                    <div className="my-career" style={{display:'flex', flexDirection:'row', justifyContent:'center', 
                        alignItems:'center', flexWrap:'wrap', columnGap:'200px', rowGap:'50px', paddingBottom:'100px'}}>
                        <div className="text">
                            <p className="TextTitle" style={{width:'400px'}}>
                                my engineering career thus far:
                            </p>
                            <p className="SubHeading1" style={{width:'380px', margin:'10px'}}>
                            i found my passion for STEM through the sikorsky STEM challenge in high school. i worked my way up to 
                            co-president in my senior year. throughout my time, i learned arduino which mixed code and circuits together.  
                            </p>
                        </div>
                        <img src={me3} alt="claw-machine" className="clawMachine"/>
                    </div>
                    <p className="SubHeading1" style={{marginBottom:'100px'}}>
                            through college, i developed many skills and learned a lot ranging from object oriented programming
                            to computer architecture.
                    </p>
                </ScrollAnimation>
                
                <ScrollAnimation animateIn='fadeInLeft' duration={3} animateOnce={true}>
                    <div style={{display:'flex', flexDirection:'row', justifyContent:'center', 
                        alignItems:'center', flexWrap:'wrap', columnGap:'150px', rowGap:'50px'}}>
                        <img src={logic} alt="logicWorks" className="logicWorks"/>
                        <p className="SubHeading1" style={{width:'400px'}}>
                            i have a particular passion for digital logic and design and would be interested in pursuing it 
                            in the future!
                        </p>
                    </div>
                </ScrollAnimation>
                
            </div>
        </>
    )
}

export default Passion