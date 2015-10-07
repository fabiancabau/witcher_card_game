import Board from './Board'

export default class Game {
  constructor(p1, p2) {

    this.board = new Board();
    this.p1 = p1;
    this.p2 = p2;
    this.p1.game = this;
    this.p2.game = this;
    this.status = 'WAITING'

    this.onStart();
  }

  onStart() {

  }


  onSet() {

  }
}

module.exports = Game;
