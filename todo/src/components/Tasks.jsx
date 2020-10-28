import React from 'react';

function Tasks(props) {
   // const tasks = props.tasks;
    const { tasks } = props;
  return (
    <ol>
      {
         tasks.map(task =>{
         return <li>{task}</li>
        })
      }
    </ol>
  )
  
}