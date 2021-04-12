import React, {Component} from "react"
import TodoItem from "./ToDoItem"
import todoData from "./todoData"
class App extends Component {

    constructor(){
        super()
        this.state = {
           todo: todoData
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(id){
        this.setState(prevState => {
            const updatedTodo = prevState.todo.map(todo => {
                if(todo.id === id){
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todo: updatedTodo
            }
        })
    }
    render(){
        const  itemComponents =  this.state.todo.map(
            (item) => {
                return(
                    <TodoItem key = {item.id} item = {item} handleChange = {this.handleChange}/>
                )
            }
        )

        return (
            <div className = "todo-list">
                {itemComponents}
            </div>
        )
    }
    
}


export default App