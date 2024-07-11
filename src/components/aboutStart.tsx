const AboutIntro = () =>{
    return(
        <>
        <div className="start" style={{padding:'80px', display:'flex', flexDirection:'row', justifyContent:'center',
            alignItems:'center', flexWrap:'wrap', columnGap:'200px', rowGap:'50px'}}>
            <div className="text-column" style={{display:'flex', flexDirection:'column', justifyContent:'center',
            alignItems:'center', flexWrap:'wrap', maxWidth:'400px'}}>
                <p className="TextTitle">
                    about:
                </p>
                <p className="SubHeading1">
                    i'm a computer engineer undergraduate from easton, ct studying at uconn
                </p>
                <p className="SubHeading2">
                    since high school, i've enjoyed building circuits and figuring out coding problems and projects!
                    in my free time, you'll find me drawing, listening to music, playing video games, ice skating, or skateboarding
                </p>
            </div>
            <div>
                <img src="src/assets/me2.jpg" alt="me" className="me2"/>
            </div>
        </div>
        </>
    )
} 

export default AboutIntro