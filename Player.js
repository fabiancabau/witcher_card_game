'use strict'

export default class Player {
    constructor(name, socket_id, deck, description) {
        this.game = null;
        this.name = name;
        this.description = description;
        this.socket_id = socket_id;
        this.deck = deck;
        this.hand = [];
        this.onStart();
    }

    onStart() {
        this.deck.shuffle();
        this.drawCards(5);
    }

    onSet() {

    }

    drawCards(qty) {
      for (let x = 0; x < qty; x++) {
        if (this.deck.cards.length > 0) {
          this.hand.push(this.deck.cards[0]);
          this.deck.cards.splice(0, 1);
        }
        else {
          break;
        }
      }
    }

    placeCard(board, card, row) {
      if (card.canPlaceOnRow(row)) {
        board.rows[this.description][row].push(card);
        return true;
      }
      else {
        return false;
      }

      this.finishTurn();
    }


    finishTurn() {
      this.game.nextTurn();
    }


}

module.exports = Player;
