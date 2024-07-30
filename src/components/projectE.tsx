import filters from '../assets/electronics/filters.jpg'
import audio from '../assets/electronics/audioEq.jpg'
import state from '../assets/electronics/stateDia.png'
import kmap from '../assets/electronics/kmap.png'
import designpaper from '../assets/electronics/design-paper.pdf'


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
                    <img src={filters} alt="filters" className="filters"/>
                </div>
                <div style={{display:'flex', flexDirection:'column', flexWrap:'wrap', justifyContent:'center', alignItems:'center', 
                rowGap:'40px', width:'400px'}}>
                    <img src={audio} alt="audioEq" className="audio"/>
                    <p className="SubHeading2">
                    a full design paper for the project can be downloaded below. it includes multiple sections: an abstract, 
                    introduction, theory, design, procedures, results and discussion, and conclusion.
                    </p>
                    <a href={designpaper} download="designPaper" target='_blank'>
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
                    <img src={state} alt="state" className="state"/>
                </div>
                <div style={{display:'flex', flexDirection:'column', flexWrap:'wrap', justifyContent:'center', alignItems:'center', 
                rowGap:'40px', width:'400px'}}>
                    <img src={kmap} alt="kmap" className="kmap"/>
                    <p className="SubHeading2">
                    logicworks was used to test minimized equations before hardware implmentation. the Logicworks file can be downloaded 
                    below. it includes clear and colored wiring as well as text labels for ease of design comprehension.
                    </p>
                    <a href="https://github.com/mialarkin14/websiteV2/blob/main/src/assets/electronics/sequenceDetector.cct" target="_blank">
                        <button className="logicworks">
                            download logic works on github
                        </button>
                    </a>
                </div>
            </div>
        </div>
        </>
    )

}

export default ProjectsE