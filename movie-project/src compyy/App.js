import React, { Component } from 'react';
import Pagination from "react-js-pagination";
import './App.css';
const api_key = 'df8b08ecb436696fee41a00f8d87a540';
const main_api = `https://api.themoviedb.org/3/person/popular?api_key=${api_key}&language=en-US&page=1`;
const base_url = 'http://image.tmdb.org/t/p/'; // here i need append my image
const profile_sizes = ['w45', 'w185', 'h632', 'original'];

// import Pagination from "react-js-pagination";
// require("bootstrap/less/bootstrap.less");
const fetchJson = () => {
  return fetch(main_api)
    .then((res) => res.json())
    .then((celebsData) => celebsData)
    .catch((err) => console.log(err));
};
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      celebsData: [],
      page: 1,
      total_pages: 0,
      total_results: 0,
    };
  }
  componentDidMount() {
    fetchJson().then((result) => {
      this.setState({
        celebsData: result.results,
        page: result.page,
        total_pages: result.total_pages,
        total_results: result.total_results,
      });
    });
  }
  render() {
    const { celebsData } = this.state;
    console.log(celebsData);
    return (
      <div className="App">
        <table>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Popularity</th>
              <th>Profile</th>
              <th>Known For</th>
            </tr>
          </thead>
          <tbody>
            {
              // loop data and show data
              celebsData.map((celebrity) => {
                return (
                  <tr key={celebrity.id}>
                    <td>{celebrity.name}</td>
                    <td>{celebrity.popularity}</td>
                    <td>
                      <img
                        src={`${base_url}${profile_sizes[0]}${celebrity.profile_path}`}
                        alt="celebrity avatar"
                      />
                    </td>
                    <td>
                      {celebrity.known_for.map((movie) => {
                        return <p key={movie.id}>{movie.title}</p>;
                      })}
                    </td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}
export default App;