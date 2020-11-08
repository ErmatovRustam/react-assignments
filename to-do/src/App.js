import React, { Component } from 'react';
import './App.css';
import ToDoList from './components/ToDoList'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      list: [],
      st: '',

     }
  }

  add =(e) => {
    this.setState({ st: e.target.value });
  }
  addL = (e) => {
    this.state.list.unshift(
      {
        name: this.state.st,
       
      });
    this.state.st = '';
    // e.preventDefault();
  }
  delete = (e) => {
    console.log("Hello" + this.e.target.value)
  }
render() { 
  
  return (  
       <div className="App">
      <input id='user-input' placeholder='Please enter your To-Do' onChange = {this.add} />
        <button id='addBtn' onClick = {this.addL} >Add ToDo</button>
      <ul>
        {
          this.state.list.map((item, index) => {
            return (<li>#{ index + 1} {item.name}
              <button className='functionalBtn' onclick={ this.edit}>Edit</button>
              <button className='functionalBtn' onclick={this.done }>Done</button>
              <button className='functionalBtn' onclick={this.delete }>Delete</button> </li>)
          })
          }  
      </ul>
    </div>
    );
  }
}
 
export default App;


