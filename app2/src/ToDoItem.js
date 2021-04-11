import React from "react"

function ToDoItem(props) {
    const styles ={
        color: "black",
        backgroundColor: "lightgrey",
        fontSize: 35,
        display:"block"
    }
    return (
        <div style= {styles} className = "todo-item">
            <input type = "checkbox" checked = {props.item.completed} />
            <t >{props.item.text}</t>
            <hr/>
        </div>
    )
}


export default ToDoItem