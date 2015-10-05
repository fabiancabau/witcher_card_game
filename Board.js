'use strict'

export default class Board {
    constructor(p1, p2, p1TopRow, p2TopRow, p1MidRow, p2MidRow, p1BotRow, p2BotRow) {
        this.p1TopRow = p1TopRow;
        this.p2TopRow = p2TopRow;
        this.p1MidRow = p1MidRow;
        this.p2MidRow = p2MidRow;
        this.p1BotRow = p1BotRow;
        this.p2BotRow = p2BotRow;

        this.p1 = p1;
        this.p2 = p2;

        this.onStart();
    }

    onStart() {
        console.log(this.p1, this.p2);
    }

    onSet() {
      
    }
}

module.exports = Board;
