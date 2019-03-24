import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Intro from "../Intro";
import Main from "../Main";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="app-header">
          <div className="jumbotron jumbotron-fluid">
            <h2>Tv Series List</h2>
            <Intro message="Here you will find most loved TV Series!" />
          </div>
        </div>
        <Main />
      </div>
    );
  }
}

export default App;
