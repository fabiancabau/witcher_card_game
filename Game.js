'use strict'

import Board from './Board'

export default class Game {
  constructor(p1, p2) {

    this.board         = new Board();
    this.p1            = p1;
    this.p2            = p2;
    this.p1.game       = this;
    this.p2.game       = this;
    this.status        = 'WAITING';
    this.current_turn  = null;
    this.next_turn     = null;

    this.onStart();
  }

  nextTurn(player) {
    let aux = this.current_turn;
    this.current_turn = this.next_turn;
    this.next_turn = aux;
    return current_turn;
  }

  onStart() {

  }

  onSet() {

  }
}

module.exports = Game;
