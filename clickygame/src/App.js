import React, { Component } from 'react';
// import { Link } from 'react-router';
import logo from './img/lights.gif';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="mindGame">
            Let's play some mind game.
          </p>
          <a href="./components/GameCard">EASY</a>
          <a href="./components/GameCard">MEDIUM</a>
          <a href="./components/GameCard">HARD</a>
        </header>
      </div>
    );
  }
}

export default App;
