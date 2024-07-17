import CodeFunction from "./codeFunction";

const Projects = () =>{
    return(
        <>
            <div style={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', 
                boxShadow: '10px 15px 20px #0951ff', paddingBottom:'150px'}}>
                <div style={{display:'flex', alignContent:'center', justifyContent:'center', flexDirection:'column', padding:'100px'}}>
                    <p className="TextTitle">
                        code:
                    </p>
                    <p className="SubHeading1">
                        coded projects ranging in language and functionality  
                    </p>
                </div>  
                <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap', justifyContent:'center', alignItems:'center', 
                    columnGap:'80px', rowGap:'80px', paddingLeft:'70px', paddingRight:'70px'}}>
                    <a href="https://github.com/mialarkin14/Hangman" target="_blank" style={{textDecoration:'none'}}>
                        <CodeFunction image="src/assets/portfolio/code/hangman.png" title="hangman game" 
                        description="a simple implementation of the hangman game using python 🐍. has simple and easy to read code with 
                        function docstrings. 100% original code"></CodeFunction>
                    </a>
                    <a href="https://github.com/mialarkin14/Processing-IDE-Creative-Projects/blob/main/Movie_Animation.pde" target="_blank" style={{textDecoration:'none'}}>
                        <CodeFunction image="src/assets/portfolio/code/minion.png" title="despicable me animation" 
                        description="a small animation based on the movie despicable me using processing ☕. includes user-input 
                        based hotkeys and clearly labeled and commented code"></CodeFunction>
                    </a>
                    <a href="https://github.com/mialarkin14/Data-Structures-and-Object-Oriented-Design/tree/main/Graph" target="_blank" style={{textDecoration:'none'}}>
                        <CodeFunction image="src/assets/portfolio/code/graph.png" title="graph simulation" 
                        description="an implementation of graphs using python 🐍. includes various graph traversal algorithms. 
                        uses queues, stacks, and heap. code is tested with multiple cases"></CodeFunction>
                    </a>
                    <a href="https://github.com/mialarkin14/Systems-Programming/blob/main/linkedlist.c" target="_blank" style={{textDecoration:'none'}}>
                        <CodeFunction image="src/assets/portfolio/code/list.png" title="linked list" 
                        description="an implementation of linkedlists in c 🌊. uses pointers to create node funtionality such as deleting or 
                        adding a node. includes a method to reverse a linkedlist."></CodeFunction>
                    </a>
                    <a href="https://github.com/mialarkin14/Systems-Programming/blob/main/guess-mt.c" target="_blank" style={{textDecoration:'none'}}>
                        <CodeFunction image="src/assets/portfolio/code/guess.png" title="guess my number" 
                        description="a fun implementation of a guess my number game in c 🌊. uses threads to imitate the producer-consumer model 
                        and includes mutex and wait conditions."></CodeFunction>
                    </a>
                    <a href="https://github.com/mialarkin14/Computer_Architecture/blob/main/binary_search.s" target="_blank" style={{textDecoration:'none'}}>
                        <CodeFunction image="src/assets/portfolio/code/binary.png" title="binary search" 
                        description="an implementation of a binary search in risc-v 5️⃣. uses a stack to save and restore 
                        variables that change with each recursive pass."></CodeFunction>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Projects