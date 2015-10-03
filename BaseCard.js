'use strict'

export default class BaseCard {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    doSomething() {
        console.log("Card: " + this.name);
    }

    onSet() {
      console.log("You should implement this method");
    }
}
