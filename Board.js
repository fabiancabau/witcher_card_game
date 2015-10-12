'use strict'

export default class Board {
    constructor() {

        this.rows = {
          p1: {
            TOP: [],
            MID: [],
            BOT: [],
          },
          p2: {
            TOP: [],
            MID: [],
            BOT: [],
          }
        }

        this.onStart();
    }

    onStart() {

    }


    getPlayerPoints(player) {

      var points = 0,
          roles  = ["TOP", "MID", "BOT"];

      roles.forEach(r => {
        let aux = this.rows[player][r].map(p => p.points)[0];
        points += aux != undefined ? aux : 0;
      });

      // for (let card of this.rows[player].TOP) {
      //   points = points + card.points;
      // }
      //
      // for (let card of this.rows[player].MID) {
      //   points = points + card.points;
      // }
      //
      // for (let card of this.rows[player].BOT) {
      //   points = points + card.points;
      // }

      return points;
    }
}

module.exports = Board;
