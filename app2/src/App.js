import React from "react"
import TodoItem from "./ToDoItem"
import todoData from "./todoData"
function App() {
    const itemComponents = todoData.map(
        (item) => {
            return(
                <TodoItem item = {item}/>
            )
        }
    )
    return (
        <div className = "todo-list">
            {itemComponents}
        </div>
    )
}


export default App