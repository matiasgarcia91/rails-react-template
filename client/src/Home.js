import React, { Component } from "react";
import logo from "./logo.svg";
import "./Home.css";

class Home extends Component {
  componentDidMount() {
    window
      .fetch("/api/products")
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.log(error));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            GABINETE EXQUISITO
          </a>
        </header>
      </div>
    );
  }
}

export default Home;
