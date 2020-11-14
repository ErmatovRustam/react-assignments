import React from 'react'
import '../App.css';

function EachToDo(props) {
     
    return (
      
        <div className = 'to-do-list'>
              <h3># {props.order }</h3>           
              <h3>{props.name }</h3>           
              <button className='functionalBtn'  >Edit</button>
              <button className='functionalBtn' >Done</button>
              <button className='functionalBtn' >Delete</button>
        </div>
    )
}

export default EachToDo

       
