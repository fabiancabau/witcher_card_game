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
        this.drawCards(3);

        console.log('DECK:');
        console.log(this.deck);
        console.log('HAND:');
        console.log(this.hand);
    }

    onSet() {

    }

    drawCards(qty) {
      for (let x = 0; x < qty; x++) {
        this.hand.push(this.deck.cards[0]);
        this.deck.cards.splice(x, 1);
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
