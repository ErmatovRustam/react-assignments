import React, { Component } from 'react'
import './App.css';

class App extends Component {
  constructor(){
  super();
  this.state = {
    counter: 1,
    title:  '',
  };
}
  fetch(URL) {
    
  }

  handleInput = (e) => {
     this.setState({ title: e.target.value})
  }

  handleInput = (e) => {
    const { title } = this.state;

    fetch(`https://api.footystats.org/league-players?key=example&season_id=2012`)
      .then((res) => res.json())
      .then((players) => {
        console.log(players);
      })
        .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <h1>Soccer Players: {this.state.title}</h1>
        <input id='input' placeholder= 'Players name' onChange={this.handleInput} />
        <button id='searchBtn' onClick= {this.handleBtn} >Search</button>
        
      </div>
    );
  }
}
export default App;
