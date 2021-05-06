import React from "react"



function ToDoItem(props) {
    const completedStyle = {
        fontStyle:"italic",
        color:"lightgrey",
        textDecoration:"line-through"
    }
    const styles ={
        color: "black",
        backgroundColor: "white",
        fontSize: 35,
        display:"flex",
        alignItems: "center",
    
        marginTop:"5%"
        
    }
    return (
        <div style = {{marginLeft:"30%", marginRight:"30%"}}>
            <div style= {styles} className = "todo-item">
                <input 
                    onChange = {()=> props.handleChange(props.item.id)} 
                    type = "checkbox" 
                    checked = {props.item.completed}
                    
                />
                <b style = {props.item.completed ? completedStyle : null}>{props.item.text}</b>
            </div>
            <hr/>
        </div>
        
    )
}


export default ToDoItem