import React from "react"

function ToDoItem() {
    const styles ={
        color: "black",
        backgroundColor: "lightgrey",
        fontSize: 35
    }
    return (
        <div className = "todo-item">
            <input type = "checkbox" />
            <p style= {styles}>PlaceHolder text</p>
        </div>
    )
}


export default ToDoItem