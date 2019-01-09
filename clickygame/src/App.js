import React, { Component } from 'react';
// import { BrowserRouter as Router, Route ,Link } from "react-router-dom";
// import logo from './img/lights.gif';
import './App.css';
import Navbar from './components/pages/Navbar/Navbar.js';
import Modal from './components/pages/Modal/Modal.js';
import ClickCard from './components/pages/GameCard/GameCard.js';
import Footer from './components/pages/Footer/Footer.js';
import cards from './hardGameCard.json';
import './index.css';

//the below code is for levels
// import Easy from "./components/pages/GameCardLevels/Easy";
// import Medium from "./components/pages/GameCard/GameCardLevels/Medium";
// import Hard from "./components/pages/GameCard/GameCardLevels/Hard";

class App extends Component {
  state = {
    cards: cards,
    score: 0,
    topScore: 0,
    clickedCards: [],
    footerText: ""
  }

  clickedCharacter = (id) => {
    const [pageBody] = document.getElementsByTagName('body');
    if (this.state.clickedCards.includes(id)) {
      this.setState({score: 0, clickedCards: []});
      pageBody.classList.add('shakeWrapper');
      this.setState({footerText: 'You picked that already! Start Over.'});
      setTimeout(() => {
        pageBody.classList.remove('shakeWrapper')
      }, 500);
      setTimeout(() => {
        this.setState({footerText: ""})
      }, 1800);
    } else {
      //Read the below link to add the state at the beginning of an array.We could have used concat but I tried to be fancy
      // https://www.robinwieruch.de/react-state-array-add-update-remove/
      this.setState(
        {
          clickedCards: [...this.state.clickedCards, id]
        });
      this.setState({score: this.state.score + 1});
      if (this.state.score >= this.state.topScore) {
        this.setState({topScore: this.state.score + 1});
      } 
      if (this.state.score === 12) {
        this.setState({footerText: "You Won! Start Over?"});
        this.setState({score: 0, clickedCards: [], cards: cards});
        setTimeout(() => {
          this.setState({footerText: ''})
        }, 1800)
      } 
    }
  }

  // copied below from some net solutions
  shuffleCards = (array) => {
    let currentIndex = array.length;
    while (0 !== currentIndex) {
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      let temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    this.setState({cards:cards});
  }
  renderCards = (array) => {
    return this.state.cards.map(card => (
      <section className='col s4 m3 l3' key={card.id} id={card.id}>
        <ClickCard
          name={card.name} 
          image={card.image} 
          shuffleCards={() => {this.shuffleCards(this.state.cards)}}
          clickedCharacter={() => {this.clickedCharacter(card.id)}}/>
      </section>
      )
    )
  }
  render() {
    return (
      <div className="container-fluid">
        <Navbar score={this.state.score} topScore={this.state.topScore}/>
        <Modal />
        <br />
        <div className="container row cardWrapper">
          {this.renderCards(this.state.cards)}
        </div>
        <Footer text={this.state.footerText}/>
      </div>
    );
    }
}
export default App;
