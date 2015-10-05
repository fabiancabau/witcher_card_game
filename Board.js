'use strict'

export default class Board {
    constructor(p1, p2) {

        this.rows = {
          p1: {
            TOP: [],
            MID: [],
            BOT: []
          },
          p2: {
            TOP: [],
            MID: [],
            BOT: []
          }
        }

        this.p1 = p1;
        this.p2 = p2;

        this.onStart();
    }

    onStart() {

    }


    onSet() {

    }
}

module.exports = Board;
