const MiniAbout = () => {
    return (
        <>
        <div className="miniAbout">
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


            <div className="tech">
                <div className="blurbDivT">
                    <p className="blurbT">
                    born in china and raised by two irish parents, i found a passion for STEM in high school! 
                    i have exposure with multiple languages and have designed circuits.
                    </p>
                </div>
                <div className="circuitDiv">
                    <img className="circuit" src="src/assets/circuit.jpg"></img>
                </div>
            </div>
        </div>
        </>
    )

}

export default MiniAbout