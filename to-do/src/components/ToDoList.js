import React from 'react'
import EachToDo from './EachToDo'


function ToDoList(props) {
    return (
        <div>{
            props.l.map((item, index) => {
                return (<EachToDo key={index} name={item} order = {index} />) 
            })
        }</div>
    )
}
export default ToDoList
