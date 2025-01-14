import CodeFunction from "./codeFunction";
import hangman from '../assets/portfolio/code/hangman.png'
import minion from '../assets/portfolio/code/minion.png'
import graph from '../assets/portfolio/code/graph.png'
import list from '../assets/portfolio/code/list.png'
import guess from '../assets/portfolio/code/guess.png'
import binary from '../assets/portfolio/code/binary.png'
import elevator from '../assets/portfolio/code/elevator.png'


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
                    columnGap:'100px', rowGap:'80px', margin:'20px'}}>
                    <a href="https://github.com/mialarkin14/Hangman" target="_blank" style={{textDecoration:'none'}}>
                        <CodeFunction image={hangman} title="hangman game" 
                        description="a simple implementation of the hangman game using python 🐍. has simple and easy to read code with 
                        function docstrings. 100% original code"></CodeFunction>
                    </a>
                    <a href="https://github.com/mialarkin14/Processing-IDE-Creative-Projects/blob/main/Movie_Animation.pde" target="_blank" style={{textDecoration:'none'}}>
                        <CodeFunction image={minion} title="despicable me animation" 
                        description="a small animation based on the movie despicable me using processing ☕. includes user-input 
                        based hotkeys and clearly labeled and commented code"></CodeFunction>
                    </a>
                    <a href="https://github.com/mialarkin14/Data-Structures-and-Object-Oriented-Design/tree/main/Graph" target="_blank" style={{textDecoration:'none'}}>
                        <CodeFunction image={graph} title="graph simulation" 
                        description="an implementation of graphs using python 🐍. includes various graph traversal algorithms. 
                        uses queues, stacks, and heap. code is tested with multiple cases"></CodeFunction>
                    </a>
                    <a href="https://github.com/mialarkin14/Systems-Programming/blob/main/linkedlist.c" target="_blank" style={{textDecoration:'none'}}>
                        <CodeFunction image={list} title="linked list" 
                        description="an implementation of linkedlists in c 🌊. uses pointers to create node funtionality such as deleting or 
                        adding a node. includes a method to reverse a linkedlist."></CodeFunction>
                    </a>
                    <a href="https://github.com/mialarkin14/Systems-Programming/blob/main/guess-mt.c" target="_blank" style={{textDecoration:'none'}}>
                        <CodeFunction image={guess} title="guess my number" 
                        description="a fun implementation of a guess my number game in c 🌊. uses threads to imitate the producer-consumer model 
                        and includes mutex and wait conditions."></CodeFunction>
                    </a>
                    <a href="https://github.com/mialarkin14/Computer_Architecture/blob/main/binary_search.s" target="_blank" style={{textDecoration:'none'}}>
                        <CodeFunction image={binary} title="binary search" 
                        description="an implementation of a binary search in risc-v 5️⃣. uses a stack to save and restore 
                        variables that change with each recursive pass."></CodeFunction>
                    </a>
                    <a href="https://github.com/mialarkin14/Elevator-Simulation/tree/main" target="_blank" style={{textDecoration:'none'}}>
                        <CodeFunction image={elevator} title="elevator simulation" 
                        description="an elevator simulation in c++ 🌊++. uses object orientation principles to implement
                        backend logic and frontend graphical interface."></CodeFunction>
                    </a>
                </div>

               
            </div>
        </>
    )
}

export default Projects