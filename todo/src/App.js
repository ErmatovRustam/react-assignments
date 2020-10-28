import React, {Component} from 'react';
import './App.css';

function Todo(props) {
  return ( 
    <ul>
      {
        props.data.map(each => {
          return (
            <li>{each}</li>
          )
        })
  }
   </ul>
  )
}
 
function App(){
      const data = [
        { name: "Azamat", logged: true, tasks: ["read", "sleep", "study"] },
        { name: "Talgat", logged: true, tasks: ["read", "sleep", "study"] },
        { name: "Aikel", logged: true, tasks: ["read", "sleep", "study"] },
        { name: "Atai", logged: true, tasks: ["read", "sleep", "study"] },
      ]
  
  return (
    <div>
      {
        data.map(each => {
          return (
            <div>
            <h1>{each.name}</h1>
              <Todo data={each.tasks} />
              </div>
          )
        })
      }
    </div>)
      
}
 export default App;
