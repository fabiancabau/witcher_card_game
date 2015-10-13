'use strict'

import Board from './Board'

export default class Game {
  constructor(p1, p2) {

    this.board         = new Board();
    this.p1            = null;
    this.p2            = null;
    this.status        = 'WAITING';
    this.current_turn  = null;
    this.next_turn     = null;

    this.onStart();
  }

  nextTurn(player) {
    let aux = this.current_turn;
    this.current_turn = this.next_turn;
    this.next_turn = aux;
    return this.current_turn;
  }

  addPlayer(player) {
    if (this.p1 == null) {
      this.p1 = player;
      this.p1.game = this;
      return true;
    }
    else if (this.p2 == null) {
      this.p2 = player;
      this.p2.game = this;
      return true;
    }
    else {
      console.log('Game is full;');
      return false;
    }
  }

  onStart() {

  }

  onSet() {

  }
}

module.exports = Game;
