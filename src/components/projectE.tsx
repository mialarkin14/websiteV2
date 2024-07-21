const ProjectsE = () =>{
    return(
        <>
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', paddingTop:'100px', paddingBottom:'50px', 
            flexDirection:'column', rowGap:'80px'}}>
            <p className="TextTitle">
                electronics:
            </p>
            <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap', justifyContent:'center', alignItems:'center', 
                columnGap:'200px', rowGap:'80px', boxShadow: '10px 15px 20px #0951ff', width:'100%', paddingBottom:'100px'}}>
                <div style={{display:'flex', flexDirection:'column', flexWrap:'wrap', justifyContent:'center', alignItems:'center', 
                rowGap:'30px', width:'400px'}}>
                    <p className="SubHeading1">
                        audio equalizer:
                    </p>
                    <p className="SubHeading2">
                    an audio equalizer with three different bandpass filters. each band has an adjustable gain that creates a 
                    noticable output difference when changed. indiviual bands range from treble, midrange, and bass, of the music. 
                    </p>
                    <img src="src/assets/electronics/filters.jpg" alt="filters" className="filters"/>
                </div>
                <div style={{display:'flex', flexDirection:'column', flexWrap:'wrap', justifyContent:'center', alignItems:'center', 
                rowGap:'40px', width:'400px'}}>
                    <img src="src/assets/electronics/audioEq.jpg" alt="audioEq" className="audio"/>
                    <p className="SubHeading2">
                    a full design paper for the project can be downloaded below. it includes multiple sections: an abstract, 
                    introduction, theory, design, procedures, results and discussion, and conclusion.
                    </p>
                    <a href="src/assets/electronics/design-paper.pdf" download="">
                        <button className="designpaper">
                            design paper 
                        </button>
                    </a>
                </div>
            </div>


            <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap', justifyContent:'center', alignItems:'center', 
                columnGap:'200px', rowGap:'80px', width:'100%', boxShadow: '10px 15px 20px #09c6ff', paddingBottom:'100px', paddingTop:'50px'}}>
                <div style={{display:'flex', flexDirection:'column', flexWrap:'wrap', justifyContent:'center', alignItems:'center', 
                rowGap:'30px', width:'400px'}}>
                    <p className="SubHeading1">
                        sequence detector:
                    </p>
                    <p className="SubHeading2">
                    an sequence detector that uses sequential logic to detect the binary sequence 0001 or 1110. 
                    </p>
                    <img src="src/assets/electronics/stateDia.png" alt="state" className="state"/>
                </div>
                <div style={{display:'flex', flexDirection:'column', flexWrap:'wrap', justifyContent:'center', alignItems:'center', 
                rowGap:'40px', width:'400px'}}>
                    <img src="src/assets/electronics/kmap.png" alt="kmap" className="kmap"/>
                    <p className="SubHeading2">
                    logicworks was used to test minimized equations before hardware implmentation. the Logicworks file can be downloaded 
                    below. it includes clear and colored wiring as well as text labels for ease of design comprehension.
                    </p>
                    <a href="src/assets/electronics/sequenceDetector.cct" download="">
                        <button className="logicworks">
                            logic works 
                        </button>
                    </a>
                </div>
            </div>
        </div>
        </>
    )

}

export default ProjectsE