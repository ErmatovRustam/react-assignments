import React, { Component } from 'react'
import EachToDo from './EachToDo';
import ToDoList from './ToDoList';

class UserInput extends Component {
    constructor() {
        super();

        this.state = {
            userIn: '',
            list: []
        }
    }
     add = (e) => {
         this.setState({ userIn: e.target.value });
     }
    addL = () => {
        this.setState(state => {
            const list = [...state.list, state.userIn];
            return{
                list,
                userIn: '',
            }
        });
        }

    render() {
        return (
            <div>
                <input id='user-input' placeholder='Please enter your To-Do' onChange={this.add} />
                <button id='addBtn' onClick={this.addL} >Add ToDo</button>
                {<ToDoList l={this.state.list} />}
                {/* {this.state.list.map((name, index) => (
                    <EachToDo name={ name}/> */}
        {/* // <div key = {index}>{s}</div> */}
            </div>
        )
    }
}
export default UserInput





//   delete = (e) => {
//     console.log("Hello" + this.e.target.value)
//   }