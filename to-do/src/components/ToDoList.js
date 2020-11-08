import React, { Component } from 'react';
import './../App.css'

function ToDoList(props) {
    return(<h1> { props.data[0] } </h1>)
}
 
export default ToDoList;