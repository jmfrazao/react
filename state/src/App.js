import React, { Component} from "react"

class App extends Component {
    constructor(){
        super()
        this.state = {
            name: "João Frazão",
            age:22
        }
    }
    render(){
        return(
            <div>
                <h1>{this.state.name}</h1>
                <h3>{this.state.age} years old</h3>
            </div>
        )
    }
}

export default App