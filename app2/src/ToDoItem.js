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
            <input 
                onChange = {()=> props.handleChange(props.item.id)} 
                type = "checkbox" 
                checked = {props.item.completed} 
            />
            <b>{props.item.text}</b>
            <hr/>
        </div>
    )
}


export default ToDoItem