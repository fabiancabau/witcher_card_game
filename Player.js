'use strict'

export default class Player {
    constructor(name, hp, socket_id, deck) {
        this.name = name;
        this.hp = hp;
        this.socket_id = socket_id
        this.deck = deck

        this.onStart();
    }

    onStart() {
        console.log('Created ' + this.name + ', ' + this.hp + ', ' + this.socket_id);

        this.deck.shuffle();
    }

    onSet() {

    }
}

module.exports = Player;
