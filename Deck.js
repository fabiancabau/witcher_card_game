'use strict'

export default class Deck {
  constructor(cards) {
    this.cards = cards;

    this.onStart();
  }

  onStart() {

  }

  onSet() {

  }

  shuffle() {
    let m = this.cards.length, t, i;

    // While there remain elements to shuffle…
    while (m) {

      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = this.cards[m];
      this.cards[m] = this.cards[i];
      this.cards[i] = t;
    }

  }

}

module.exports = Deck;
