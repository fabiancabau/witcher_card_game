'use strict'

import BaseCard from './BaseCard'

export default class BaseCreature extends BaseCard {
  constructor(name, color, points, creature_type) {
    super(name, color);
    this.points = points;
    this.creature_type = creature_type;

    console.log('created new base creature');
  }

  onSet() {

  }

  onDestroy() {

  }

  onReturnToHand() {

  }

}
