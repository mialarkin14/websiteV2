import ScrollAnimation from 'react-animate-on-scroll'
import "animate.css/animate.compat.css"

import canoeLogo from '../assets/canoeLogo.png'
import shell from '../assets/shell.jpg'
import cover from '../assets/cover.jpeg'
import demo from '../assets/demolding.jpg'
import canoe from '../assets/canoe.jpg'

const Canoe = () =>{
    return(
        <>
        <div className="concreteCanoe" style={{paddingTop: '150px', paddingBottom:'150px', boxShadow: '10px 15px 20px #09c6ff'}}>
            <ScrollAnimation animateIn='fadeIn' duration={3} animateOnce={true}>
                <p className="TextTitle" style={{margin:'10px', paddingBottom:'100px'}}>
                    a project i'm proud of - concrete canoe:
                </p>
                <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap', 
                    justifyContent:'center', alignItems:'center', columnGap:'100px', rowGap:'50px'}}>
                        <p className="SubHeading1" style={{width:'400px'}}>
                        concrete canoe is a club where we build a canoe out of concrete!
                        the challenge is to deliver an appropriate concrete design mix in accordance with the rules, choose the best 
                        type and amount of reinforcement, build the canoe, write an in-depth design paper, 
                        give a panel presentation to judges, and race against other teams in the canoe we make!
                        </p>
                        <img src={canoeLogo} alt="logo" style={{width:'400px'}}/>
                </div>
            </ScrollAnimation>
            
            <ScrollAnimation animateIn='fadeInLeft' duration={3} animateOnce={true}>
                <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap', 
                    justifyContent:'center', alignItems:'center', columnGap:'50px', rowGap:'50px', marginTop:'80px'}}>
                        <img src={shell} alt="shell" className="CC"/>
                        <img src={cover} alt="cover" className="CC"/>
                        <img src={demo} alt="demold" className="CC"/>
                </div>
                <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop:'60px'}}>
                    <p className="SubHeading1" style={{maxWidth:'1000px', margin:'10px'}}>
                        when i joined, the club was recovering from covid-19 so we spent most of the first year trying to promote
                        and recover the team. the effort paid off and the team almost tripled from the previous year
                    </p>
                </div>
                <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap', 
                    justifyContent:'center', alignItems:'center', columnGap:'150px', rowGap:'50px', marginTop:'80px'}}>
                        <img src={canoe} alt="canoe" className="canoe"/>
                        <p className="SubHeading1" style={{width:'480px', margin:'10px'}}>
                            having held multiple positions, including president of the club, i am very involved and 
                            passionate about the club! i lead and mentor the junior members and promote an overall fun and productive environment.
                        </p>
                </div>
                <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop:'60px'}}>
                    <p className="SubHeading1" style={{width:'1000px'}}>
                        you can learn more about concrete canoe <a href="https://uconntact.uconn.edu/organization/concretecanoeassociationuconn" target="_blank"> here </a>
                    </p>
                </div>

            </ScrollAnimation>
            
        </div>
        </>
    )
}

export default Canoe