const Facts = () =>{
    return(
        <>
        <div className="Facts" style={{display:'flex', flexDirection:'row', flexWrap:'wrap', 
            justifyContent:'center', alignItems:'center', padding:'150px', columnGap:'200px', rowGap:'50px'}}>
                <div>
                    <img src="src/assets/hang.png" alt="hang" className="hang"/>
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
        </>
    )
}

export default Facts