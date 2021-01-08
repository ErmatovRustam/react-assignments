import React from 'react'
import EachToDo from './EachToDo'
import '../App.css';


function ToDoList(props) {
    
    const edit = () => {
        return <EachToDo />
    }

    const done = () => {
        console.log("Edit clicked")
    }

    const deleteToDo = (e) => {
        console.log("Edit clicked")

    }
    return (
        <div>{
            props.l.map((item, index) => {
                return (
                    <div className = 'to-do-list'>
                        <h3 key = {index}># {index+1 }</h3>           
                        <h3 key = {index}>{item }</h3>     
                        <button className='functionalBtn' onClick = {edit}  >Edit</button>
                        <button className='functionalBtn' onClick = {done} >Done</button>
                        <button className='functionalBtn' onClick = {deleteToDo}>Delete</button>
                    </div>
                    
                    ) 
            })
        }
        </div>
              
    )
}
export default ToDoList
