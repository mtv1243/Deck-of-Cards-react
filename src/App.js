import React from 'react';

import './App.scss';

import CardComp from './components/cardcomp/CardComp.js';
import Hand from './components/hand/Hand.js';
import MainPlay from './components/mainplay/MainPlay.js';
import Marquis from './components/marquis/Marquis.js'

function App() {

  class Card {
    constructor(suit, value){
      this.suit = suit;
      this.value = value;
    }
  }
  
  //create deck out of Card class
  class Deck {
    constructor() {
      this.deck = [];
      // deckRef.set(this.deck)
    }
  
    createDeck(suits, values) {
      for(let suit of suits) {
        for(let value of values){
          this.deck.push(new Card(suit, value));
        }
      }
      // deckRef.set(this.deck);
      return this.deck;
    }
  
    shuffle() {
      let counter = this.deck.length, temp, i;
  
      while(counter) {
        i = Math.floor(Math.random() * counter--);
        temp = this.deck[counter];
        this.deck[counter] = this.deck[i];
        this.deck[i] = temp;
      }
      return this.deck;
    }
  
    deal(cards) {
      let hand = [];
      while(hand.length < cards) {
        hand.push(this.deck.pop());
      }
      // deckRef.set(this.deck);
      return hand;
    }
  }
  
  //hold the suits and values
  let suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
  let values = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
  
  let cardDeck = new Deck();

  cardDeck.createDeck(suits, values);
  cardDeck.shuffle();

  let cardDeckComps = [];
  cardDeck.deck.forEach( (card, index) => {
    cardDeckComps.push( <CardComp suit={card.suit} value={card.value} key={ index.toString() } /> )
  })

  const dealCards = (array, num) => {
    let hand = [];
    for(let i=0; i<num; i++) {
      hand.push(array.pop());
    }
    return hand;
  }

  // const [cardDeckState, setCardDeckState] = React.useState(cardDeck.deck);

  const scores = { score1: 120, score2: 20 };
  const gameNum = "12e53";

  return (
    <div className="App">
      <main className="App--main">
        <Marquis 
          score1={ scores.score1 } 
          score2={ scores.score2 } 
          gameNum={ gameNum } 
        />
        <Hand 
          cards={ dealCards(cardDeckComps, 6) } 
          hidden={ true } 
          player="Player 1" 
        />
        <MainPlay 
          starterCard={ dealCards(cardDeckComps, 1) } 
          countNum={ 15 } 
          pot1Cards={ dealCards(cardDeckComps, 4) } 
          pot2Cards={ dealCards(cardDeckComps, 4) } 
          crib1Cards={ dealCards(cardDeckComps, 2) } 
          crib2Cards={ dealCards(cardDeckComps, 2) } 
        />
        <Hand cards={ dealCards(cardDeckComps, 6) } 
          hidden={ true } 
          player="Player 2" 
        />
      </main>
    </div>
  );
}

export default App;
