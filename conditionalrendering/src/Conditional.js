import React from "react"

function Conditional(props) {
    // condition ? iftrue : isfalse
    return(
        <div>
            {props.isLoading === true ? <h1>Loading...</h1> : 
            <h1>Some cool stuff about conditional rendering</h1>}
        </div>
    )
    
}

export default Conditional