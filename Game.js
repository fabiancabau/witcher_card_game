'use strict'

import Board from './Board'

export default class Game {
  constructor(p1, p2) {

    this.board         = new Board();
    this.players       = {};
    this.players_qty   = 0;
    this.status        = 'WAITING';
    this.current_turn  = null;
    this.next_turn     = null;
  }

  nextTurn(player) {
    let aux = this.current_turn;
    this.current_turn = this.next_turn;
    this.next_turn = aux;
    return this.current_turn;
  }

  addPlayer(player) {

    if (this.players_qty < 2) {
      player.game = this;
      this.players[player.socket_id] = player;
      this.board.addRows(player.socket_id);
      this.players_qty++;
      return true;
    }
    else {
      console.log('Game is full;');
      return false;
    }

  }

}

module.exports = Game;
