import { InstagramEmbed } from 'react-social-media-embed';
import ScrollAnimation from 'react-animate-on-scroll'
import "animate.css/animate.compat.css"

import hang from '../assets/hang.png'

const Facts = () =>{
    return(
        <>
        <div className="Facts" style={{paddingBottom:'150px', boxShadow: '10px 15px 20px #09c6ff'}}>
            <ScrollAnimation animateIn='fadeInUp' duration={3} animateOnce={true}>
                <div className="RandomFacts" style={{display:'flex', flexDirection:'row', flexWrap:'wrap', 
                    justifyContent:'center', alignItems:'center', padding:'150px', columnGap:'200px', rowGap:'50px'}}>
                        <div>
                            <img src={hang} alt="hang" className="hang"/>
                        </div>
                        <div>
                            <p className="TextTitle" style={{paddingBottom:'50px'}}>random facts:</p>
                            <ul >
                                <li style={{color:'white', width:'400px'}}><p className="SubHeading2">i'm a big foodie and love spicy food</p></li>
                                <li style={{color:'white', width:'400px'}}><p className="SubHeading2">i've played violin since i was 7 years old</p></li>
                                <li style={{color:'white', width:'400px'}}><p className="SubHeading2">my favorite chips are monster munch from my childhood in ireland</p></li>
                                <li style={{color:'white', width:'400px'}}><p className="SubHeading2">i've never broken a bone</p></li>
                            </ul>
                        </div>
                </div>
            </ScrollAnimation>
            
           <ScrollAnimation animateIn='fadeInLeft' duration={2} animateOnce={true}>
            <div className="instagram">
                    <p className="SubHeading1" style={{marginRight:'150px', marginLeft:'150px'}}>
                        i love taking pictures of nature and the food i eat! you can find my canvas of drawings, landscapes, food and more 
                        on my instagram 
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <InstagramEmbed url="https://www.instagram.com/shadowillusion14/" className="instagramE" width={500}/>
                    </div>
                </div>
           </ScrollAnimation>
            
        </div>
        
        </>
    )
}

export default Facts