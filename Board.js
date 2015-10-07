'use strict'

export default class Board {
    constructor() {

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

        this.onStart();
    }

    onStart() {

    }


    onSet() {

    }
}

module.exports = Board;
