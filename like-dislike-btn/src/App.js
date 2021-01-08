import React, { Component } from "react";
import { render } from "react-dom";
import "./index.css";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      likeCounter: 100,
      dislikeCounter: 25,
      isLiked: false,
      isDisLiked: false
    };
  }

  liked = (btn) => {
    if (!this.state.isLiked) {
      if (
        this.state.isDisLiked ||
        (this.state.isDisLiked === false && this.state.isLiked === false)
      ) {
        this.setState({
          likeCounter: this.state.likeCounter + 1,
          dislikeCounter: 25
        });
      }
      this.setState({
        isLiked: true,
        isDisLiked: false
      });
    } else if (this.state.isLiked) {
      this.setState({
        isLiked: false,
        isDisLiked: false,
        likeCounter: 100,
        dislikeCounter: 25
      });
    }
  };
  disliked = (btn) => {
    if (!this.state.isDisLiked) {
      if (
        this.state.isLiked ||
        (this.state.isDisLiked === false && this.state.isLiked === false)
      ) {
        this.setState({
          likeCounter: 100,
          dislikeCounter: this.state.dislikeCounter + 1
        });
      }
      this.setState({
        isLiked: false,
        isDisLiked: true
      });
    } else if (this.state.isDisLiked) {
      this.setState({
        isLiked: false,
        isDisLiked: false,
        likeCounter: 100,
        dislikeCounter: 25
      });
    }
  };

  render() {
    return (
      <div className="App">
        <button
          style={{ color: this.state.isLiked ? "blue" : "black" }}
          onClick={() => this.liked("like")}
        >
          {" "}
          Like {this.state.likeCounter}{" "}
        </button>
        <button
          style={{ color: this.state.isDisLiked ? "blue" : "black" }}
          onClick={() => this.disliked("disLike")}
        >
          {" "}
          Dislike {this.state.dislikeCounter}{" "}
        </button>
      </div>
    );
  }
}

export default App;
