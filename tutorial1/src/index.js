import React from "react"
import ReactDOM from "react-dom"


function MyApp(){
    return  (
        <ul>
            <li>Cena 1</li>
            <li>Cena 2</li>
            <li>Cena 4</li>
        </ul>
    )
}


//JSX
ReactDOM.render(
    <MyApp />, 
    document.getElementById("root")
)