import React from "react"
import Joke from "./Joke"

function App(){
    return(
        <div>
            <Joke 
                question = "What’s the best thing about Switzerland?"
                punchline = "I don’t know, but the flag is a big plus."  
            />
            <Joke 
                question = "Did you hear about the mathematician who’s afraid of negative numbers?"
                punchline = "He’ll stop at nothing to avoid them."  
            />
            <Joke 
                question = "Why do we tell actors to “break a leg?”"
                punchline = "Because every play has a cast."  
            />
            <Joke 
                punchline = "Don't interrupt someone working intently on a puzzle. Chances are, you'll hear some crosswords."  
            />
            <Joke 
                question = "Which country's capital has the fastest-growing population?"
                punchline = "Ireland. Every day it's Dublin."  
            />
        </div>
    )
}



export default App