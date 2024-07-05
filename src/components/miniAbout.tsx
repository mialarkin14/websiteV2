const MiniAbout = () => {
    return (
        <>
            <div className="miniAbout">
                <div className="meDiv">
                    <img className="me" src="src/assets/me.jpg"></img>
                </div>
                <div className="blurbDiv">
                    <p className="blurb">
                        I'm a Computer Engineer undergraduate from Easton, CT studying at UConn.
                    </p>
                </div>
            </div>
            <div className="hobbies">
                <p className="hobbies-text">
                    I enjoy:
                </p>
            </div>
            <div className="hobbiesIcon">
                <img className="hobby" src="src/assets/hobbies/drawing.svg"></img>
                <img className="hobby" src="src/assets/hobbies/gaming.svg"></img>
                <img className="hobby" src="src/assets/hobbies/ice-skating.svg"></img>
                <img className="hobby" src="src/assets/hobbies/music.svg"></img>
                <img className="hobby" src="src/assets/hobbies/skateboarding.svg"></img>
            </div>
        </>
    )

}

export default MiniAbout