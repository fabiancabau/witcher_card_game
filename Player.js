'use strict'

export default class Player {
    constructor(name, hp, socket_id, deck) {
        this.name = name;
        this.hp = hp;
        this.socket_id = socket_id;
        this.deck = deck;
        this.hand = [];
        this.onStart();
    }

    onStart() {
        this.deck.shuffle();

        console.log('DECK:');
        console.log(this.deck);

        this.drawCards(6);

        console.log('DECK AFTER DRAW:');
        console.log(this.deck);


    }

    onSet() {

    }

    drawCards(qty) {
      for (let x = 0; x < qty; x++) {
        this.hand.push(this.deck.cards[0]);
        this.deck.cards.splice(0, 1);
      }
    }

    placeCard(board, card, row) {
      if (card.canPlaceOnRow(row)) {
        board.rows['p1'][row].push(card);
        return true;
      }
      else {
        return false;
      }
    }
}

module.exports = Player;
