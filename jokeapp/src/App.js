import React from "react"
import Joke from "./Joke"
import jokesData from "./jokesData"
function App(){
    const jokeComponents = jokesData.map ((joke) => {
        // arrow function has implicit return
        return(
            <Joke question = {joke.question} punchline = {joke.punchline}/>
        )       
    })

    return(
        <div>
            {jokeComponents}
        </div>
    )
}



export default App