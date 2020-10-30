import React, { Component } from 'react'
import './App.css';

class App extends Component {
  constructor(){
  super();
  this.state = {
    title: '',
    error: '',
    rawData: [],
    movies: [],
  };
}
  
  handleInput = (e) => {
    const { value } = e.target;
    this.setState({ title: value });  
  }

  handleBtn = (e) => {
    e.preventDefault();
    const { title } = this.state;

    fetch(`https://www.omdbapi.com/?s=${title}&page=1&apikey=cb289192`)
      .then((res) => res.json())
      .then((movies) => {
        console.log(movies)
        if (movies.Response === 'False') {
          this.setState({ error: movies.Error })
        }
        this.setState({movies: movies.Search,rawData: movies,})
      })
      .catch((err) => {
        this.setState({
          error: err.messege})
      });
    };

  render() {
    const { rawData, movies } = this.state;
    console.log(rawData, movies)
    return (
      <div className="App">
        <h1>Movie Names: {this.state.title}</h1>
        <input id='input' placeholder= 'Movie name' onChange={this.handleInput} />
        <button id='searchBtn' onClick={this.handleBtn} >Search</button>

        <div className = 'movie-card'>
          { movies.map(movi => {
              return (
                <div>
                  <h1>{movi.Title}</h1>
                  <img src={movi.Poster} />
                  <p>Year: {movi.Year}</p>
                </div>
              );
              })}
          </div>
      </div>
    );
  }
}
export default App;
