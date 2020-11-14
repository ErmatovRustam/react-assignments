import React, { Component } from 'react';
import './App.css';
import UserInput from './components/UserInput'
 
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      st: '',

    }
  }

  
  render() {
  
    return (
      <div className="App">
        <UserInput />
      </div>
    )
  }
} 
export default App;


