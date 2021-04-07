import React from "react"

function Joke(props){
    
        return(
            <div className = "joke">
                <h3 style = {{display: props.question ? "block" : "none"}}className = "question">Question: {props.question}</h3>
                <h3 className = "punchline" >Punchline: {props.punchline}</h3>
                <hr/>
            </div>
            
        )
}

export default Joke