'use strict'

export default class Board {
    constructor(name) {

        this.rows = {

        }

        this.onStart();
    }

    onStart() {

    }


    getPlayerPoints(socket_id) {

      var points = 0,
          roles  = ["TOP", "MID", "BOT"];

      roles.forEach(r => {
        let aux = this.rows[socket_id][r].map(p => p.points)[0];
        points += aux != undefined ? aux : 0;
      });
      
      return points;
    }

    addRows(socket_id) {
        this.rows[socket_id] = {
            TOP: [],
            MID: [],
            BOT: []
        }
    }
}

module.exports = Board;
