import React from "react"

function handleClick(){
    console.log("I was clicked")
}

function handleImgHover(){
    console.log("Hovered!")
}

function App(){
    return(
        <div>
            <img onMouseOver = {handleImgHover} src = "https://www.fillmurray.com/500/500" alt = "error"/>
            <br/>
            <br/>
            <button onClick ={handleClick}>Click me</button>
        </div>
    )
}


export default App